import { THEMES_AREA } from '@hermes/plugin-sdk'

export const theme = {
  name: 'porcelain-aurora',
  label: 'Porcelain Aurora · 瓷白极光',
  description: '瓷白 × 极光蓝：纯白画布、浅蓝选中态、深石墨文字与轻盈玻璃质感。',
  typography: {
    fontSans: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", sans-serif',
    fontMono: '"SF Mono", Menlo, Monaco, monospace'
  },
  colors: {
    background: '#FFFFFF', foreground: '#18181B',
    card: '#ffffff', cardForeground: '#18181B',
    muted: '#FAFAFB', mutedForeground: '#52525B',
    popover: '#ffffff', popoverForeground: '#18181B',
    primary: '#1458D4', primaryForeground: '#ffffff',
    secondary: '#F4F4F5', secondaryForeground: '#18181B',
    accent: '#EAF2FF', accentForeground: '#1458D4',
    border: '#E1E3E8', input: '#C4C8D0', ring: '#1458D4',
    midground: '#1458D4', midgroundForeground: '#ffffff', composerRing: '#1458D4',
    destructive: '#b42332', destructiveForeground: '#ffffff',
    sidebarBackground: '#FAFAFB', sidebarBorder: '#E1E3E8',
    userBubble: '#F4F4F5', userBubbleBorder: '#DFE1E6'
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
  id: 'porcelain-aurora',
  name: 'Porcelain Aurora · 瓷白极光',
  description: theme.description,
  register(ctx) {
    ctx.register({ id: 'theme', area: THEMES_AREA, data: theme })
    const style = document.createElement('style')
    style.dataset.porcelainAurora = 'theme'
    // The roster's New button also exists in empty/error states with its tab strip hidden.
    const botsToolbar = 'button[aria-haspopup="menu"]:is([aria-label="New bot or group chat"], [aria-label="新しいボットまたはグループチャット"], [aria-label="新建机器人或群聊"], [aria-label="新增機器人或群組聊天"])'
    const sidebar = ':root[data-hermes-theme="porcelain-aurora"] [data-tree-group]:is(:has([data-tree-tab="sessions"]), :has([data-tree-tab="hermes-bots:pane"]), :has([data-tour="sessions-sidebar"]), :has([data-slot="bots-roster"]), :has(' + botsToolbar + '))'
    style.textContent = `
      :root[data-hermes-theme="porcelain-aurora"] {
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
        --ui-row-active-background: var(--dt-accent);
        --ui-selection-background: var(--theme-accent-soft);
        --composer-fill: var(--dt-card);
      }
      :root[data-hermes-theme="porcelain-aurora"][data-hermes-mode="dark"] {
        --silver-glass-highlight: rgb(255 255 255 / .10);
        --silver-glass-shadow: rgb(0 0 0 / .25);
        --ui-text-secondary: ${theme.darkColors.mutedForeground};
        --ui-text-tertiary: ${theme.darkColors.mutedForeground};
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="composer-root"]:not([data-hud-shell] *) {
        --composer-fill: color-mix(in srgb, var(--dt-card) var(--silver-glass-keep), transparent);
        border-radius: 20px;
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="composer-fade"]:not([data-hud-shell] *) {
        opacity: 1;
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="composer-root"]:not([data-hud-shell] *):focus-within {
        --composer-fill: var(--dt-card);
      }
      :root[data-hermes-theme="porcelain-aurora"][data-hermes-glass] {
        --silver-sidebar-keep: 82%;
      }
      ${sidebar} {
        background: linear-gradient(145deg, color-mix(in srgb, var(--silver-glass-highlight) 65%, transparent), transparent 48%),
          linear-gradient(180deg, color-mix(in srgb, var(--ui-bg-sidebar) var(--silver-sidebar-keep), transparent),
            color-mix(in srgb, var(--ui-bg-sidebar) var(--silver-sidebar-keep), transparent));
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
        --tab-bg: var(--dt-accent);
        color: var(--dt-accent-foreground);
        box-shadow: inset 0 1px 0 var(--silver-glass-highlight),
          inset 0 0 0 1px color-mix(in srgb, var(--theme-primary) 16%, transparent),
          0 2px 5px var(--silver-glass-shadow);
      }
      ${sidebar} [class~="bg-(--ui-row-active-background)"] {
        --ui-text-primary: var(--dt-accent-foreground);
        color: var(--dt-accent-foreground);
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--theme-primary) 14%, transparent);
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="aui_user-message-root"]:not([data-hud-shell] *) {
        position: relative;
        top: auto;
        z-index: auto;
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="aui_user-message-root"]:not([data-hud-shell] *)::before {
        content: none;
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="aui_user-bubble-actions"]:not([data-hud-shell] *) {
        width: fit-content;
        max-width: 85%;
        margin-left: auto;
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="aui_user-message-root"]:not([data-hud-shell] *) .sticky-human-clamp {
        max-height: none;
        overflow: visible;
        mask-image: none;
        -webkit-mask-image: none;
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="aui_assistant-message-content"] .aui-md {
        --dt-line-height: 1.65;
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="aui_assistant-message-content"] .aui-md :where(p, ul, ol, blockquote) {
        max-width: 72ch;
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="composer-surface"]:not([data-hud-shell] *),
      :root[data-hermes-theme="porcelain-aurora"] .composer-fallback-surface:not([data-hud-shell] *) {
        border-radius: 20px;
        border-color: color-mix(in srgb, var(--dt-border) 82%, var(--theme-primary)) !important;
        box-shadow: inset 0 1px 0 var(--silver-glass-highlight),
          0 0 0 1px color-mix(in srgb, var(--silver-glass-highlight) 55%, transparent),
          0 8px 28px var(--silver-glass-shadow),
          0 2px 5px var(--silver-glass-shadow);
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="composer-surface"]:not([data-hud-shell] *) > [aria-hidden],
      :root[data-hermes-theme="porcelain-aurora"] .composer-fallback-surface:not([data-hud-shell] *) > [aria-hidden] {
        background-image: linear-gradient(135deg, var(--silver-glass-highlight), transparent 48%);
        backdrop-filter: blur(12px) saturate(1.08);
        -webkit-backdrop-filter: blur(12px) saturate(1.08);
      }
      :root[data-hermes-theme="porcelain-aurora"] [data-slot="composer-surface"]:not([data-hud-shell] *):focus-within,
      :root[data-hermes-theme="porcelain-aurora"] .composer-fallback-surface:not([data-hud-shell] *):focus-within {
        border-color: var(--dt-ring) !important;
      }
      @media (prefers-reduced-transparency: reduce) {
        :root[data-hermes-theme="porcelain-aurora"] {
          --silver-glass-keep: 100%;
          --silver-sidebar-keep: 100% !important;
          --silver-glass-highlight: transparent;
        }
        ${sidebar},
        :root[data-hermes-theme="porcelain-aurora"] [data-slot="composer-surface"]:not([data-hud-shell] *) > [aria-hidden],
        :root[data-hermes-theme="porcelain-aurora"] .composer-fallback-surface:not([data-hud-shell] *) > [aria-hidden] {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
      }
    `
    document.head.append(style)
    ctx.onDispose(() => style.remove())
  }
}
