import { Group } from "../group.ts";

export type GroupOptionMessageData<
  Type extends "create" | "delete" | "join" | "config",
> =
  & {
    type: Type;
  }
  & (
    Type extends "create" ? Group
      : Type extends "delete" ? {
          id: string;
        }
      : Type extends "join" ? {
          id: string;
        }
      : Type extends "config" ? {
          id: string;
          // TODO: 需要根据实际情况定义 config 的类型
          config: Group;
        }
      : never
  );
