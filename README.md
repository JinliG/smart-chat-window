## Smart-Chat-Window

Smart-chat-window 是一个基于 Web 端的聊天应用，采用了 React 框架、Vite 打包工具、ChatUI 组件库，同时接入了 OpenAI 的 LLM 自动回复功能。

### 安装与使用

1. 依赖安装
   首先，您需要在本地安装 Node.js 环境。然后，在终端中执行以下命令来安装项目所需的依赖项。

`npm install`

2、启动
`npm run dev`
应用程序将在本地的 http://localhost:5173 地址上运行。

### 功能

- 支持实时聊天，发送文本和图片。
- 自动回复：应用接入 OpenAI 的 LLM 模型，可以对用户的输入进行自动回复，提升聊天的交互体验。
- 支持保存聊天记录。

### 技术栈

- React
- Vite
- ChatUI

### 智能自动回复

Smart-chat-window 接入了 OpenAI 的 LLM 模型，可以智能自动回复用户的消息。您需要提供 OpenAI 的 API 密钥才能使用该功能。请在 .env 文件中设置 REACT_APP_OPENAI_API_KEY 变量来提供 API 密钥。

### 贡献指南

如果您发现了任何问题或有任何改进建议，请随时提交 Issue 或 Pull Request。

### 许可证

MIT 许可证.
