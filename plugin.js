import { THEMES_AREA } from '@hermes/plugin-sdk'

export const theme = {
  name: 'silver-studio',
  label: 'Silver Studio · 银境',
  description: '原创 macOS 风格：暖白画布、银灰侧栏、石墨文字与克制的蓝色点缀。',
  typography: {
    fontSans: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", sans-serif',
    fontMono: '"SF Mono", Menlo, Monaco, monospace'
  },
  colors: {
    background: '#fbfbfa', foreground: '#202124',
    card: '#ffffff', cardForeground: '#202124',
    muted: '#f0f1f3', mutedForeground: '#60646b',
    popover: '#ffffff', popoverForeground: '#202124',
    primary: '#0066cc', primaryForeground: '#ffffff',
    secondary: '#e8edf4', secondaryForeground: '#202124',
    accent: '#e7f0fb', accentForeground: '#202124',
    border: '#d7d9de', input: '#e0e2e7', ring: '#0066cc',
    midground: '#0066cc', midgroundForeground: '#ffffff', composerRing: '#0066cc',
    destructive: '#b42332', destructiveForeground: '#ffffff',
    sidebarBackground: '#f0f1f3', sidebarBorder: '#d9dce1',
    userBubble: '#eaf2fc', userBubbleBorder: '#d6e4f5'
  },
  darkColors: {
    background: '#1c1d20', foreground: '#f1f2f4',
    card: '#25262a', cardForeground: '#f1f2f4',
    muted: '#292b30', mutedForeground: '#afb3bb',
    popover: '#2c2e33', popoverForeground: '#f1f2f4',
    primary: '#70b2ff', primaryForeground: '#122238',
    secondary: '#29394e', secondaryForeground: '#f1f2f4',
    accent: '#26374d', accentForeground: '#f1f2f4',
    border: '#42454e', input: '#3b3e46', ring: '#70b2ff',
    midground: '#70b2ff', midgroundForeground: '#122238', composerRing: '#70b2ff',
    destructive: '#ff8f98', destructiveForeground: '#331217',
    sidebarBackground: '#24262b', sidebarBorder: '#383b43',
    userBubble: '#253a54', userBubbleBorder: '#38516d'
  }
}

export default {
  id: 'silver-studio',
  name: 'Silver Studio · 银境',
  description: theme.description,
  register(ctx) {
    ctx.register({ id: 'theme', area: THEMES_AREA, data: theme })
    const style = document.createElement('style')
    style.dataset.silverStudio = 'theme'
    style.textContent = `
      :root[data-hermes-theme="silver-studio"] {
        --radius-scalar: .9;
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="composer-surface"],
      :root[data-hermes-theme="silver-studio"] .composer-fallback-surface {
        border-color: var(--dt-border);
        box-shadow: 0 2px 10px color-mix(in srgb, var(--theme-foreground) 4%, transparent);
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="composer-surface"]:focus-within,
      :root[data-hermes-theme="silver-studio"] .composer-fallback-surface:focus-within {
        border-color: color-mix(in srgb, var(--dt-ring) 60%, var(--dt-border));
      }
    `
    document.head.append(style)
    ctx.onDispose(() => style.remove())
  }
}
