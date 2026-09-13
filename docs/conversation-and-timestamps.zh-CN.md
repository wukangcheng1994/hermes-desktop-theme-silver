[English](conversation-and-timestamps.md) | 简体中文

# 会话气泡与时间戳方案

本指南记录本机 Hermes Desktop v0.21.2 使用的组合：本仓库桌面皮肤提供会话布局，Hermes 原生功能提供时间戳。不是新的聊天引擎，也不需要修改 Hermes 应用包。

## 1. 安装会话皮肤

按[首页安装说明](../README.zh-CN.md)安装并选择「银境」或「瓷白极光」。两套完整插件均已包含：

- 用户消息气泡靠右，最大宽度为容器的 85%。
- 普通聊天中取消用户消息吸顶，移除 Hermes 原有的长消息高度裁切。
- 助手回复沿用正文布局，1.65 倍行距、普通段落最大 72ch；不是双方都带气泡的微信式布局。
- 输入框与侧栏保留玻璃 CSS；HUD 保留独立布局。

实现代码：[银境](../plugin.js)、[瓷白极光](../porcelain-aurora/plugin.js)。可搜索 `aui_user-message-root`、`aui_user-bubble-actions`、`sticky-human-clamp` 和 `aui_assistant-message-content`。这些规则不改历史消息、模型上下文或发送逻辑；不包含删除失败消息、重试或 Bot 切换滚动位置修复。

## 2. 开启时间戳

在安装 Hermes 的机器上运行。先确认命令操作的配置文件属于目标 Profile：

```sh
hermes config path
hermes config get display.timestamps
hermes config set display.timestamps true
hermes config get display.timestamps
```

最后应显示 `true`。关闭时：

```sh
hermes config set display.timestamps false
```

使用命令自带的安全配置写入，不要覆盖整份 config.yaml。配置按 Hermes 当前命令环境的 Profile 生效，并非自动对所有 Profile 生效。其他 Profile 可显式指定其实际目录，例如 macOS/Linux：

```sh
HERMES_HOME="$HOME/.hermes/profiles/pr-bot" hermes config set display.timestamps true
```

将 `pr-bot` 换成自己的 Profile 名；自定义 Hermes 目录或远端 Bot 应在实际对应的机器和目录设置。Windows PowerShell 的默认 Profile 可直接使用上面的 `hermes config` 命令，但本项目尚未实测 Windows。

返回目标会话查看。如果配置已是 `true` 但界面未刷新，可重新打开桌面端，使其重新读取配置。普通 Hermes 默认关闭此项；我们本机此次核对为 `true`。

## 3. 时间从哪里来

时间戳是 Hermes 已有的显示功能，不是皮肤生成的内容：

- 使用消息和工具记录中的真实时间；缺少有效时间的数据不会凭空补时间。
- 当前版本使用本地时间格式，时间线显示可精确到毫秒；部分活动显示开始 → 结束区间。
- 是否显示由 `display.timestamps` 控制。仅影响呈现，不往发送给模型的正文中插入时间。
- 本仓库没有新增时间格式切换、时间戳开关或历史数据迁移代码。

对应 Hermes 版本的上游源码：

- [Display flag](https://github.com/NousResearch/hermes-agent/blob/205645ee424163c7b6cfc032c331c3557797497b/apps/desktop/src/store/display-timestamps.ts)
- [Timestamp rendering](https://github.com/NousResearch/hermes-agent/blob/205645ee424163c7b6cfc032c331c3557797497b/apps/desktop/src/components/assistant-ui/thread/timeline-timestamp.tsx)
- [Time formatting](https://github.com/NousResearch/hermes-agent/blob/205645ee424163c7b6cfc032c331c3557797497b/apps/desktop/src/components/assistant-ui/thread/timestamp.ts)

## 验证与范围

运行 `node check.mjs` 检查两套插件。安装后分别查看 Sessions 和 Bots：用户气泡靠右，滚动时不吸顶；开启时间戳后，有有效时间的消息应显示时间。完整插件才包含布局 CSS；主题市场包只有配色，不会开启时间戳。切换回其他主题可撤销皮肤布局；关闭 `display.timestamps` 可隐藏时间。两项设置相互独立。
