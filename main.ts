import { messageHandler } from "./message/onmessage.ts";
import { onCloseHandler } from "./message/onclose.ts";
import { onOpenHandler } from "./message/onopen.ts";

const connections = new Map<string, { user: string; socket: WebSocket }>();

Deno.serve({
  port: 3000,
  handler: (request) => {
    if (request.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);

      const id = crypto.randomUUID(); // 生成唯一标识符
      const token = request.headers.get("token"); // 从请求头中获取 token

      if (!token) {
        return new Response("Unauthorized", { status: 401 });
      }

      socket.onopen = () => {
        onOpenHandler(
          connections,
          socket,
          id,
          token,
        );
      };

      socket.onmessage = (event) => {
        try {
          messageHandler(
            connections,
            socket,
            event,
            id,
            token,
          );
        } catch (error) {
          console.error(
            `Error handling message for ${id} (User: ${token}):`,
            error,
          );
          socket.send(
            JSON.stringify({
              sender: "system",
              type: "systemMessage",
              data: {
                type: "wsCallback",
                success: false,
                message: error instanceof Error ? error.message : String(error),
              },
            }),
          );
        }
      };

      socket.onclose = () => {
        onCloseHandler(
          connections,
          socket,
          id,
          token,
        );
      };

      socket.onerror = (error) =>
        console.error(`ERROR on ${id} (User: ${token}):`, error);

      return response;
    } else {
      return new Response("Hello WS", {
        headers: { "content-type": "text/plain" },
      });
    }
  },
});
