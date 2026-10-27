import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const sample = fs.readFileSync(new URL('../sample-leads.csv', import.meta.url), 'utf8');

test('inline JavaScript parses without syntax errors', () => {
  const match = html.match(/<script>([\s\S]*?)<\/script>/i);
  assert.ok(match, 'inline script exists');
  assert.doesNotThrow(() => new vm.Script(match[1]));
});

test('core UI elements referenced by the app exist', () => {
  const required = ['leadForm', 'leadRows', 'fileInput', 'importBtn', 'exportBtn', 'demoBtn', 'dateReceived', 'owner', 'lastContactDate', 'nextDate'];
  for (const id of required) assert.match(html, new RegExp('id="' + id + '"'), 'missing element: ' + id);
});

test('CSV parser handles commas, escaped quotes, CRLF, and blank cells', () => {
  const source = html.slice(html.indexOf('function parseCSV'), html.indexOf("$('fileInput').addEventListener('change'"));
  assert.ok(source.includes('function parseCSV'));
  const context = {};
  vm.runInNewContext(source + '\nglobalThis.__test = { parseCSV, validDate };', context);
  const rows = context.__test.parseCSV('name,notes,date\r\n"Acme, Inc.","Said ""hello""",2026-10-28\r\nBlank,,\r\n');
  assert.deepEqual(JSON.parse(JSON.stringify(rows)), [
    ['name', 'notes', 'date'],
    ['Acme, Inc.', 'Said "hello"', '2026-10-28'],
    ['Blank', '', '']
  ]);
  assert.equal(context.__test.validDate('2026-10-28'), true);
  assert.equal(context.__test.validDate('2026-02-31'), false);
  assert.equal(context.__test.validDate('not-a-date'), false);
});

test('sample CSV has the aliases expected by the importer', () => {
  const headers = sample.replace(/^\uFEFF/, '').split(/\r?\n/, 1)[0].split(',').map(h => h.trim().toLowerCase());
  assert.ok(headers.includes('customer_name'));
  assert.ok(headers.includes('contact_channel'));
  assert.ok(headers.includes('service_requested'));
  assert.ok(headers.includes('next_follow_up_date'));
  assert.ok(headers.includes('outcome_notes'));
  assert.ok(html.includes('customer_name'));
  assert.ok(html.includes('contact_channel'));
  assert.ok(html.includes('service_requested'));
  assert.ok(html.includes('next_follow_up_date'));
  assert.ok(html.includes('outcome_notes'));
});

test('CSV parser rejects an unclosed quote', () => {
  const source = html.slice(html.indexOf('function parseCSV'), html.indexOf("$('fileInput').addEventListener('change'"));
  const context = {};
  vm.runInNewContext(source + '\nglobalThis.__test = { parseCSV };', context);
  assert.throws(() => context.__test.parseCSV('name,notes\nAlice,"unfinished'), /never closed/);
});


function createBrowserHarness({ failStorage = false } = {}) {
  const elements = new Map();
  const records = new Map();
  const alerts = [];
  const blobs = [];
  function getElementById(id) {
    if (!elements.has(id)) {
      elements.set(id, {
        id, value: '', textContent: '', innerHTML: '', hidden: false, files: [],
        listeners: {}, dataset: {},
        addEventListener(type, fn) { this.listeners[type] = fn; },
        reset() {},
        click() {},
        focus() {}
      });
    }
    return elements.get(id);
  }
  const document = {
    getElementById,
    createElement: tag => ({ tag, click() { this.clicked = true; } })
  };
  const localStorage = {
    getItem: key => records.get(key) || null,
    setItem: (key, value) => {
      if (failStorage) throw new Error('storage quota');
      records.set(key, value);
    }
  };
  class MockBlob {
    constructor(parts, options) { this.parts = parts; this.type = options?.type; blobs.push(this); }
  }
  const URLMock = { createObjectURL: () => 'blob:test', revokeObjectURL() {} };
  const script = html.match(/<script>([\s\S]*?)<\/script>/i)[1];
  vm.runInNewContext(script, {
    document, localStorage, Blob: MockBlob, URL: URLMock,
    confirm: () => true, alert: message => alerts.push(message),
    setTimeout: callback => callback(), Date, Math
  });
  return { elements, getElementById, records, alerts, blobs };
}

test('sample CSV imports once, duplicate IDs are skipped, and export preserves metadata', async () => {
  const app = createBrowserHarness();
  const input = app.getElementById('fileInput');
  const importSample = async () => {
    const target = { files: [{ text: async () => sample }], value: '' };
    await input.listeners.change({ target });
  };
  await importSample();
  assert.equal((app.getElementById('leadRows').innerHTML.match(/<tr>/g) || []).length, 5);
  await importSample();
  assert.equal((app.getElementById('leadRows').innerHTML.match(/<tr>/g) || []).length, 5);
  assert.match(app.alerts.at(-1), /Skipped 5 duplicate/);
  app.getElementById('exportBtn').listeners.click();
  const exported = app.blobs.at(-1).parts.join('');
  for (const value of ['DEMO-001', 'DEMO-005', 'Demo Owner', '2026-10-02', 'dateReceived', 'lastContactDate']) {
    assert.ok(exported.includes(value), 'export missing ' + value);
  }
});

test('browser storage failures are reported instead of crashing the app', () => {
  const app = createBrowserHarness({ failStorage: true });
  app.getElementById('name').value = 'Fictional Test Lead';
  assert.doesNotThrow(() => app.getElementById('leadForm').listeners.submit({ preventDefault() {} }));
  assert.ok(app.alerts.some(message => /storage is unavailable or full/i.test(message)));
});
