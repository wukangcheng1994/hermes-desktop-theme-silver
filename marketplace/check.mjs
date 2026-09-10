import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
const read = path => JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'))
const pkg = read('./package.json')
const luminance = hex => {
  const [r, g, b] = hex.slice(1).match(/../g).map(x => parseInt(x, 16) / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4)
  return .2126 * r + .7152 * g + .0722 * b
}
assert(!pkg.main && !pkg.activationEvents)
assert.equal(pkg.contributes.themes.length, 2)
for (const entry of pkg.contributes.themes) {
  const theme = read(entry.path)
  assert.equal(theme.type, entry.uiTheme === 'vs' ? 'light' : 'dark')
  for (const value of Object.values(theme.colors)) assert.match(value, /^#[\da-f]{6}$/i)
  const bg = luminance(theme.colors['editor.background'])
  for (const color of [theme.colors['editor.foreground'], ...theme.tokenColors.map(t => t.settings.foreground)]) {
    const fg = luminance(color)
    assert((Math.max(bg, fg) + .05) / (Math.min(bg, fg) + .05) >= 4.5, `${entry.label}: ${color} contrast`)
  }
}
console.log('Both themes: valid manifest paths, hex colors, syntax contrast ≥ 4.5:1; no extension code.')
