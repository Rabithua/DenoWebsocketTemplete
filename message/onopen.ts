import { Message } from "../type/message.ts";

export function onOpenHandler(
  connections: Map<string, { user: string; socket: WebSocket }>,
  socket: WebSocket,
  id: string,
  token: string,
) {
  console.info(`Connection opened from ${id} (User: ${token})`);

  // 将新连接添加到连接池
  connections.set(id, { user: token, socket });

  // 向所有用户发送连接通知
  // 给所有 token 为当前 token 的用户发送 systemMessage
  for (
    const [connectionId, { user, socket: clientSocket }] of connections
      .entries()
  ) {
    if (user === token && clientSocket !== socket) {
      const message: Message = {
        sender: "system",
        type: "systemMessage",
        data: {
          type: "deviceOnline",
          device: "need device info type here",
        },
      };
      clientSocket.send(JSON.stringify(message));
      console.log(`Message sent to ${connectionId} (User: ${user})`);
    }
  }
}
