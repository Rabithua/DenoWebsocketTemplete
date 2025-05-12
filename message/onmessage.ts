import { Message } from "../type/message.ts";
import { ifMessageFomateOk } from "../utils/message.ts";

export function messageHandler(
  connections: Map<string, { user: string; socket: WebSocket }>,
  socket: WebSocket,
  event: MessageEvent,
  id: string,
  token: string,
) {
  const message: Message = JSON.parse(event.data); // 解析 JSON 数据
  ifMessageFomateOk(message);
  console.info(`RECEIVED from ${id} (User: ${token}):`, message);

  switch (message.target) {
    case "person": {
      const response = {
        sender: "person",
        userId: token,
        type: message.type,
        data: message.data,
      } as Message;

      for (
        const [connectionId, { user, socket: clientSocket }] of connections
          .entries()
      ) {
        if (user === message.userId && clientSocket !== socket) {
          clientSocket.send(JSON.stringify(response));
          console.log(`Message sent to ${connectionId} (User: ${user})`);
        }
      }
      break;
    }

    default:
      break;
  }

  const callbackMessage = {
    sender: "system",
    type: "systemMessage",
    data: {
      type: "wsCallback",
      success: true,
      message: "Message sent successfully",
    },
  } as Message;

  socket.send(JSON.stringify(callbackMessage)); // 发送响应给当前连接的客户端
}
