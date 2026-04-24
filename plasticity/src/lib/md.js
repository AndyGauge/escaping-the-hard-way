// Minimal inline markdown: *text* → <em>text</em>.
// All input is hardcoded in outline.js / index-data.js (trusted).
const ESCAPE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ESCAPE[c]);

export function md(text) {
  if (!text) return '';
  return escape(text).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
