import { createServer } from 'vite';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const mod = await vite.ssrLoadModule('/src/render-entry.js');
  const html = mod.pageHtml();
  const targets = [
    resolve('rendered/4471-problems.html'),
    resolve('rendered/index.html'),
    resolve('../docs/index.html'),
  ];
  for (const target of targets) writeFileSync(target, html);
  console.log(`wrote ${html.length} bytes`);
  for (const target of targets) console.log(target);
} finally {
  await vite.close();
}
