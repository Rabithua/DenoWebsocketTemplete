# Deno WebSocket Template

一个基于 Deno 的 WebSocket 服务器模板，简洁高效。

![Deno](https://img.shields.io/badge/Deno-v1.x-blue?logo=deno)
![WebSocket](https://img.shields.io/badge/WebSocket-Enabled-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 特性

- 基于 Deno 的现代化 WebSocket 服务器
- 内置 Token 身份验证插口
- 结构化消息处理系统
- 完整的错误处理和日志记录
- 模块化设计，易于扩展

## 📦 项目结构

```
DenoWebsocketTemplete/
├── main.ts             # 主服务入口
├── message/            # 消息处理模块
│   ├── handlemessage.ts
│   ├── onclose.ts      # 连接关闭处理
│   ├── onmessage.ts    # 消息接收处理
│   └── onopen.ts       # 连接建立处理
├── type/               # 类型定义
└── utils/              # 工具函数
```

## 🛠️ 快速开始

### 前提条件

- [Deno](https://deno.land/) 1.x 或更高版本

### 启动服务器

```bash
# 开发模式（自动重载）
deno run dev

# 或直接运行
deno run --allow-net main.ts
```

服务器将在 `http://localhost:3000` 启动

## 🔌 WebSocket 连接

```javascript
// 客户端连接示例
const token = "your_auth_token";
const ws = new WebSocket(`ws://localhost:3000`);

// 设置请求头中的token
ws.setRequestHeader("token", token);

// 连接事件处理
ws.onopen = () => console.log("Connected!");
ws.onmessage = (event) => console.log("Received:", JSON.parse(event.data));
ws.onclose = () => console.log("Disconnected!");
```

## 📝 消息格式

```typescript
// 消息格式示例
{
  sender: string;      // 发送者标识
  type: string;        // 消息类型
  data: any;           // 消息内容
  target?: string;     // 消息目标（可选）
}
```

## 📄 许可

MIT License
