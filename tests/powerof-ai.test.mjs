import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync(new URL('../powerof-ai/index.html', import.meta.url), 'utf8');

test('PowerOfAI inline JavaScript parses', () => {
  const match = html.match(/<script>([\s\S]*?)<\/script>/i);
  assert.ok(match, 'inline script exists');
  assert.doesNotThrow(() => new vm.Script(match[1]));
});

test('PowerOfAI contains required inputs and an output region', () => {
  for (const id of ['builder', 'problem', 'user', 'outcome', 'tools', 'constraints', 'proof', 'output', 'copy', 'sample', 'clear', 'status']) {
    assert.match(html, new RegExp('id="' + id + '"'), 'missing element: ' + id);
  }
});

test('PowerOfAI creates a structured brief locally from user input', () => {
  const elements = new Map();
  const getElementById = id => {
    if (!elements.has(id)) {
      elements.set(id, {
        id, value: '', textContent: '', listeners: {},
        addEventListener(type, callback) { this.listeners[type] = callback; },
        reset() {
          for (const el of elements.values()) {
            if ('value' in el) el.value = '';
          }
        }
      });
    }
    return elements.get(id);
  };
  const document = { getElementById };
  const script = html.match(/<script>([\s\S]*?)<\/script>/i)[1];
  vm.runInNewContext(script, { document });

  getElementById('problem').value = 'Follow-up tasks are missed';
  getElementById('user').value = 'Small agency';
  getElementById('outcome').value = 'Every lead has a next action';
  let prevented = false;
  getElementById('builder').listeners.submit({ preventDefault() { prevented = true; } });

  const output = getElementById('output').textContent;
  assert.equal(prevented, true);
  assert.match(output, /AI IMPLEMENTATION BRIEF/);
  assert.match(output, /Follow-up tasks are missed/);
  assert.match(output, /Small agency/);
  assert.match(output, /Proof plan/);
  assert.match(output, /not a verified technical design/i);
  assert.match(getElementById('status').textContent, /built locally/i);
});

test('PowerOfAI does not include remote model or network calls', () => {
  const script = html.match(/<script>([\s\S]*?)<\/script>/i)[1];
  assert.doesNotMatch(script, /\bfetch\s*\(|XMLHttpRequest|WebSocket|\bhttps?:\/\//i);
  assert.match(html, /does not itself generate AI output/i);
});
