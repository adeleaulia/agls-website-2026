import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../public/integration-responsive.css', import.meta.url), 'utf8');
const html = readFileSync(new URL('../public/index.html', import.meta.url), 'utf8');

test('mobile Gallery constrains image cards to a landscape viewport-sized frame', () => {
  assert.match(css, /#gallery-strip\s*>\s*div[\s\S]*?height:\s*min\(75vw,\s*52vh,\s*420px\)\s*!important/);
  assert.match(css, /#gallery-strip image-slot::part\(image\)[\s\S]*?object-fit:\s*contain\s*!important/);
  assert.match(html, /<image-slot id="\{\{ g\.slotId \}\}" shape="rect" fit="contain"/);
});

test('mobile Gallery controls reserve space above fixed bottom navigation', () => {
  assert.match(css, /#gallery-controls[\s\S]*?margin-bottom:\s*calc\(84px\s*\+\s*env\(safe-area-inset-bottom,\s*0px\)\)\s*!important/);
});
