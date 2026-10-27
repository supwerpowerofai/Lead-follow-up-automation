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
