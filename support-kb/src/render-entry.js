import { render } from 'svelte/server';
import Page from './routes/kb/incidents/4471-problems/+page.svx';

export function pageHtml() {
  const rendered = render(Page);
  const css = rendered.css?.code ? `<style>${rendered.css.code}</style>` : '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${css}
${rendered.head}
</head>
<body>
${rendered.body}
</body>
</html>
`;
}
