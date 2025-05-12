import { messageHandler } from "./message/onmessage.ts";
import { onCloseHandler } from "./message/onclose.ts";
import { onOpenHandler } from "./message/onopen.ts";
import { isTokenOk } from "./utils/main.ts";

const connections = new Map<string, { user: string; socket: WebSocket }>();

Deno.serve({
  port: 3000,
  handler: (request) => {
    if (request.headers.get("upgrade") === "websocket") {
      if (!isTokenOk(request.headers.get("token"))) {
        return new Response("Unauthorized", { status: 401 });
      }

      const { socket, response } = Deno.upgradeWebSocket(request);
      const id = crypto.randomUUID(); // 生成唯一标识符
      const token = request.headers.get("token") as string;

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
          console.warn(
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
        console.warn(`ERROR on ${id} (User: ${token}):`, error);

      return response;
    } else {
      return new Response("Hello WS", {
        headers: { "content-type": "text/plain" },
      });
    }
  },
});
