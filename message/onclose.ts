import { Message } from "../type/message.ts";

export function onCloseHandler(
  connections: Map<string, { user: string; socket: WebSocket }>,
  socket: WebSocket,
  id: string,
  token: string,
) {
  console.info(`Connection opened from ${id} (User: ${token})`);

  connections.delete(id);

  for (
    const [, { user, socket: clientSocket }] of connections
      .entries()
  ) {
    if (user === token && clientSocket !== socket) {
      const message: Message = {
        sender: "system",
        type: "systemMessage",
        data: {
          type: "deviceOffline",
          device: "need device info type here",
        },
      };
      clientSocket.send(JSON.stringify(message));
    }
  }
}
