import { THEMES_AREA } from '@hermes/plugin-sdk'

export const theme = {
  name: 'silver-studio',
  label: 'Silver Studio · 银境',
  description: '原创 macOS 风格：纯白画布、清冷浅银侧栏、深石墨文字与轻盈玻璃质感。',
  typography: {
    fontSans: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", sans-serif',
    fontMono: '"SF Mono", Menlo, Monaco, monospace'
  },
  colors: {
    background: '#FFFFFF', foreground: '#1D1D1F',
    card: '#ffffff', cardForeground: '#1D1D1F',
    muted: '#F1F3F6', mutedForeground: '#586170',
    popover: '#ffffff', popoverForeground: '#1D1D1F',
    primary: '#0062CC', primaryForeground: '#ffffff',
    secondary: '#E5E9EF', secondaryForeground: '#1D1D1F',
    accent: '#DFECFF', accentForeground: '#0062CC',
    border: '#D6DCE5', input: '#BCC4CE', ring: '#0062CC',
    midground: '#0062CC', midgroundForeground: '#ffffff', composerRing: '#0062CC',
    destructive: '#b42332', destructiveForeground: '#ffffff',
    sidebarBackground: '#F1F3F6', sidebarBorder: '#D6DCE5',
    userBubble: '#EDF4FF', userBubbleBorder: '#CEDCEB'
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
    // The roster's New button also exists in empty/error states with its tab strip hidden.
    const botsToolbar = 'button[aria-haspopup="menu"]:is([aria-label="New bot or group chat"], [aria-label="新しいボットまたはグループチャット"], [aria-label="新建机器人或群聊"], [aria-label="新增機器人或群組聊天"])'
    const sidebar = ':root[data-hermes-theme="silver-studio"] [data-tree-group]:is(:has([data-tree-tab="sessions"]), :has([data-tree-tab="hermes-bots:pane"]), :has([data-tour="sessions-sidebar"]), :has([data-slot="bots-roster"]), :has(' + botsToolbar + '))'
    style.textContent = `
      :root[data-hermes-theme="silver-studio"] {
        --radius-scalar: .9;
        --theme-mix-chrome: 100% !important;
        --theme-mix-sidebar: 100%;
        --ui-chat-surface-background: var(--ui-bg-chrome);
        --silver-glass-highlight: rgb(255 255 255 / .85);
        --silver-glass-shadow: rgb(26 43 69 / .07);
        --silver-glass-keep: 94%;
        --silver-sidebar-keep: 94%;
        --ui-text-primary: var(--theme-foreground);
        --ui-text-secondary: ${theme.colors.mutedForeground};
        --ui-text-tertiary: ${theme.colors.mutedForeground};
        --ui-row-active-background: var(--theme-accent-soft);
        --ui-selection-background: var(--theme-accent-soft);
        --composer-fill: var(--dt-card);
      }
      :root[data-hermes-theme="silver-studio"][data-hermes-mode="dark"] {
        --silver-glass-highlight: rgb(255 255 255 / .10);
        --silver-glass-shadow: rgb(0 0 0 / .25);
        --ui-text-secondary: ${theme.darkColors.mutedForeground};
        --ui-text-tertiary: ${theme.darkColors.mutedForeground};
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="composer-root"]:not([data-hud-shell] *) {
        --composer-fill: color-mix(in srgb, var(--dt-card) var(--silver-glass-keep), transparent);
        border-radius: 20px;
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="composer-fade"]:not([data-hud-shell] *) {
        opacity: 1;
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="composer-root"]:not([data-hud-shell] *):focus-within {
        --composer-fill: var(--dt-card);
      }
      :root[data-hermes-theme="silver-studio"][data-hermes-glass] {
        --silver-sidebar-keep: 32%;
      }
      ${sidebar} {
        background: linear-gradient(145deg, color-mix(in srgb, var(--silver-glass-highlight) 65%, transparent), transparent 48%),
          linear-gradient(180deg, color-mix(in srgb, var(--ui-bg-sidebar) var(--silver-sidebar-keep), transparent),
            color-mix(in srgb, var(--theme-primary) 5%, color-mix(in srgb, var(--ui-bg-sidebar) var(--silver-sidebar-keep), transparent)));
        backdrop-filter: blur(12px) saturate(1.08);
        -webkit-backdrop-filter: blur(12px) saturate(1.08);
        box-shadow: inset 0 1px 0 var(--silver-glass-highlight),
          inset 1px 0 0 color-mix(in srgb, var(--dt-border) 65%, transparent),
          inset -1px 0 0 color-mix(in srgb, var(--dt-border) 65%, transparent);
      }
      ${sidebar} [data-slot="sidebar"][data-tour="sessions-sidebar"],
      ${sidebar} > [data-panel-header],
      ${sidebar} [data-zone-tabstrip] {
        background: transparent;
      }
      ${sidebar} [data-tree-tab]:not([data-vertical]) {
        border-radius: 8px;
        border-color: transparent;
        --tab-bg: transparent;
      }
      ${sidebar} [data-tree-tab][data-active="true"]:not([data-vertical]) {
        --tab-bg: var(--theme-accent-soft);
        color: var(--dt-accent-foreground);
        box-shadow: inset 0 1px 0 var(--silver-glass-highlight),
          inset 0 0 0 1px color-mix(in srgb, var(--theme-primary) 16%, transparent),
          0 2px 5px var(--silver-glass-shadow);
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="aui_user-message-root"]:not([data-hud-shell] *) {
        position: relative;
        top: auto;
        z-index: auto;
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="aui_user-message-root"]:not([data-hud-shell] *)::before {
        content: none;
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="aui_user-bubble-actions"]:not([data-hud-shell] *) {
        width: fit-content;
        max-width: 85%;
        margin-left: auto;
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="aui_user-message-root"]:not([data-hud-shell] *) .sticky-human-clamp {
        max-height: none;
        overflow: visible;
        mask-image: none;
        -webkit-mask-image: none;
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="aui_assistant-message-content"] .aui-md {
        --dt-line-height: 1.65;
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="aui_assistant-message-content"] .aui-md :where(p, ul, ol, blockquote) {
        max-width: 72ch;
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="composer-surface"]:not([data-hud-shell] *),
      :root[data-hermes-theme="silver-studio"] .composer-fallback-surface:not([data-hud-shell] *) {
        border-radius: 20px;
        border-color: color-mix(in srgb, var(--dt-border) 82%, var(--theme-primary)) !important;
        box-shadow: inset 0 1px 0 var(--silver-glass-highlight),
          0 0 0 1px color-mix(in srgb, var(--silver-glass-highlight) 55%, transparent),
          0 8px 28px var(--silver-glass-shadow),
          0 2px 5px var(--silver-glass-shadow);
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="composer-surface"]:not([data-hud-shell] *) > [aria-hidden],
      :root[data-hermes-theme="silver-studio"] .composer-fallback-surface:not([data-hud-shell] *) > [aria-hidden] {
        background-image: linear-gradient(135deg, var(--silver-glass-highlight), transparent 48%);
        backdrop-filter: blur(12px) saturate(1.08);
        -webkit-backdrop-filter: blur(12px) saturate(1.08);
      }
      :root[data-hermes-theme="silver-studio"] [data-slot="composer-surface"]:not([data-hud-shell] *):focus-within,
      :root[data-hermes-theme="silver-studio"] .composer-fallback-surface:not([data-hud-shell] *):focus-within {
        border-color: var(--dt-ring) !important;
      }
      @media (prefers-reduced-transparency: reduce) {
        :root[data-hermes-theme="silver-studio"] {
          --silver-glass-keep: 100%;
          --silver-sidebar-keep: 100% !important;
          --silver-glass-highlight: transparent;
        }
        ${sidebar},
        :root[data-hermes-theme="silver-studio"] [data-slot="composer-surface"]:not([data-hud-shell] *) > [aria-hidden],
        :root[data-hermes-theme="silver-studio"] .composer-fallback-surface:not([data-hud-shell] *) > [aria-hidden] {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
      }
    `
    document.head.append(style)
    ctx.onDispose(() => style.remove())
  }
}
