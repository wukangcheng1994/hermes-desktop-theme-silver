import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const source = await readFile(new URL('./plugin.js', import.meta.url), 'utf8')
const { theme, default: plugin } = await import('data:text/javascript,' + encodeURIComponent(
  source.replace("import { THEMES_AREA } from '@hermes/plugin-sdk'", "const THEMES_AREA = 'themes'")
))
const luminance = hex => {
  const rgb = hex.slice(1).match(/../g).map(h => parseInt(h, 16) / 255)
    .map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4)
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722
}
const contrast = (a, b) => (Math.max(luminance(a), luminance(b)) + .05) /
  (Math.min(luminance(a), luminance(b)) + .05)
for (const palette of [theme.colors, theme.darkColors]) {
  for (const [ink, surface] of [['foreground', 'background'], ['foreground', 'sidebarBackground'],
    ['mutedForeground', 'sidebarBackground'], ['accentForeground', 'accent'], ['primary', 'sidebarBackground'], ['primaryForeground', 'primary'], ['mutedForeground', 'background'],
    ['destructiveForeground', 'destructive']]) {
    assert(contrast(palette[ink], palette[surface]) >= 4.5, `${ink}/${surface} contrast`)
  }
}
let cleanup, contribution, appended = false, removed = false
const style = { dataset: {}, textContent: '', remove() { removed = true } }
globalThis.document = { createElement: () => style, head: { append() { appended = true } } }
plugin.register({ register(c) { contribution = c }, onDispose(fn) { cleanup = fn } })
assert.equal(contribution.data, theme)
assert.equal(contribution.area, 'themes')
assert(appended)
assert(style.textContent.includes(':root[data-hermes-theme="silver-studio"]'))
cleanup()
assert(removed)
console.log('Silver Studio: light/dark contrast, registration and CSS cleanup passed.')
