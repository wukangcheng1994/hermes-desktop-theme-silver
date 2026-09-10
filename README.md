# Silver Studio · 银境

A macOS-inspired light and dark theme for **official Hermes Desktop**. Warm white canvas, silver sidebar, graphite text and restrained blue accents, with system fonts and subtle composer shadows.

为 **官方 Hermes Desktop** 设计的明暗主题：暖白画布、银灰侧栏、石墨文字与蓝色点缀，配合系统字体和轻阴影输入框。

![Illustrative theme preview / 主题配色示意图](docs/preview.svg)

*Illustration, not an application screenshot. / 上图是主题示意图，并非应用截图。*

## Install / 安装

Tested on macOS with Hermes Desktop **v0.21.1**. Hermes One and other operating systems have not been verified. Hermes must support desktop plugins; its runtime provides `@hermes/plugin-sdk`.

已在 macOS 的 Hermes Desktop **v0.21.1** 验证。Hermes One 与其他操作系统尚未验证。需要支持桌面插件的 Hermes 版本；插件 SDK 由应用提供。

1. Download this repository using **Code → Download ZIP** and extract it, or clone it:

   ```sh
   git clone https://github.com/wukangcheng1994/hermes-silver-studio.git
   cd hermes-silver-studio
   ```

2. From the extracted repository folder, copy `plugin.js` into your Hermes plugin directory:

   ```sh
   mkdir -p "${HERMES_HOME:-$HOME/.hermes}/desktop-plugins/silver-studio"
   cp plugin.js "${HERMES_HOME:-$HOME/.hermes}/desktop-plugins/silver-studio/plugin.js"
   ```

   下载并解压后，在仓库目录运行以上命令。目标为 `$HERMES_HOME/desktop-plugins/silver-studio/plugin.js`；未设置 `HERMES_HOME` 时默认为 `~/.hermes/desktop-plugins/silver-studio/plugin.js`。重复安装会覆盖该位置的旧版主题文件。

3. Open **Settings → Appearance** and select **Silver Studio · 银境**. If it is missing, press **⌘K**, run **Reload desktop plugins**, then open Appearance again; restart Hermes if necessary.

   打开「设置 → 外观」，选择 **Silver Studio · 银境**。未出现时按 **⌘K**，执行 **Reload desktop plugins** 后重新打开外观设置；必要时重启 Hermes。

The palette follows the app's light/dark mode. The plugin changes colors, fonts, corner radius and composer styling; it does not add Bot features or fix sidebar behavior.

配色跟随应用的明暗模式。插件调整颜色、字体、圆角与输入框样式，不提供 Bot 功能或侧栏修复。

## Remove / 卸载

Select another theme, remove only the `silver-studio` folder from your Hermes `desktop-plugins` directory, then reload desktop plugins or restart Hermes.

先切换到其他主题，再删除 Hermes `desktop-plugins` 目录下的 `silver-studio` 文件夹，重新加载插件或重启应用。

## Check / 检查

With Node.js installed, run `node check.mjs` (or `npm test`). No dependencies to install. The check covers selected light/dark text contrast pairs, theme registration and style cleanup using a mocked host; it is not a full application UI test.

安装 Node.js 后运行 `node check.mjs`（或 `npm test`），无需安装依赖。检查明暗主题的主要文字对比度、主题注册及样式清理；使用模拟宿主，不代表完整应用界面测试。

## License / 许可

[MIT](LICENSE) © 2026 wukangcheng1994. Independent community theme, inspired by macOS; not affiliated with or endorsed by Apple or Nous Research. No Apple fonts or other proprietary assets are bundled.

独立社区主题，受 macOS 风格启发，非 Apple 或 Nous Research 官方作品，亦未获得其背书。未附带 Apple 字体或其他专有素材。
