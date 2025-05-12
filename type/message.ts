import { GroupOptionMessageData } from "./message/group.ts";
import { SystemMessageData, SystemMessageDataType } from "./message/system.ts";

// 消息类型定义
type BaseMessage<Target extends "person" | "group" | "BonjourAI" | "system"> = {
  target?: Target;
  sender?: Target;
  groupId?: string;
  userId?: string;
};

type TextMessage = BaseMessage<"person" | "group" | "BonjourAI" | "system"> & {
  type: "text";
  data: { content: string };
};

type ImageMessage = BaseMessage<"person" | "group" | "BonjourAI" | "system"> & {
  type: "image";
  data: { url: string; alt: string };
};

type FileMessage = BaseMessage<"person" | "group" | "BonjourAI" | "system"> & {
  type: "file";
  data: { url: string; name: string; type: string; size: number };
};

type AudioMessage = BaseMessage<"person" | "group" | "BonjourAI" | "system"> & {
  type: "audio";
  data: { url: string; duration: number };
};

type VideoMessage = BaseMessage<"person" | "group" | "BonjourAI" | "system"> & {
  type: "video";
  data: { url: string; duration: number };
};

type LocationMessage =
  & BaseMessage<"person" | "group" | "BonjourAI" | "system">
  & {
    type: "location";
    data: { latitude: number; longitude: number };
  };

type LinkMessage = BaseMessage<"person" | "group" | "BonjourAI" | "system"> & {
  type: "link";
  data: { url: string; title: string; description: string };
};

// 系统消息类型
type SystemMessage = BaseMessage<"system"> & {
  type: "systemMessage";
  data: SystemMessageData<SystemMessageDataType>;
};

// 群组操作消息类型
type GroupOptionMessage =
  & BaseMessage<"group">
  & {
    type: "option";
    data: GroupOptionMessageData<"create" | "delete" | "join" | "config">;
  };

type Message =
  | TextMessage
  | ImageMessage
  | FileMessage
  | AudioMessage
  | VideoMessage
  | LocationMessage
  | LinkMessage
  | GroupOptionMessage
  | SystemMessage;

export type { Message };
