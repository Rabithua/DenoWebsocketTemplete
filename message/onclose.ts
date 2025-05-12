import { Message } from "../type/message.ts";

export function onCloseHandler(
  connections: Map<string, { user: string; socket: WebSocket }>,
  socket: WebSocket,
  id: string,
  token: string,
) {
  console.log(`Connection opened from ${id} (User: ${token})`);

  connections.delete(id);

  // 给所有 token 为当前 token 的用户发送 systemMessage
  for (
    const [connectionId, { user, socket: clientSocket }] of connections
      .entries()
  ) {
    if (user === token && clientSocket !== socket) {
      try {
        const message: Message = {
          sender: "system",
          type: "systemMessage",
          data: {
            type: "deviceOffline",
            device: "need device info type here",
          },
        };
        clientSocket.send(JSON.stringify(message));
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.error(
          `Failed to send message to ${connectionId}: ${errorMessage}`,
        );
      }
    }
  }
}
