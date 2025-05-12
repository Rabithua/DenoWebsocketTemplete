//TODO: add type check for message
export function ifMessageFomateOk(message: unknown) {
  if (typeof message !== "object" || message === null) {
    throw new Error("Invalid message format");
  }

  const { type, data, target } = message as {
    type: string;
    data: unknown;
    target: string;
  };

  if (typeof type !== "string") {
    throw new Error("Invalid message type");
  }

  if (typeof target !== "string") {
    throw new Error("Invalid message target");
  }
}
