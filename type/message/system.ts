import { ProfileType } from "../profile.ts";

export type SystemMessageDataType =
  | "friendOnline"
  | "deviceOnline"
  | "deviceOffline"
  | "friendNewPost"
  | "groupUpdate"
  | "inviteJoinGroup"
  | "wsCallback";

export type SystemMessageData<
  Type extends SystemMessageDataType,
> =
  & {
    type: Type;
  }
  & (Type extends "friendOnline" ? {
      userId: string;
      profile: ProfileType;
    }
    : Type extends "deviceOnline" ? {
        device: "need device info type here";
      }
    : Type extends "deviceOffline" ? {
        device: "need device info type here";
      }
    : Type extends "friendNewPost" ? {
        userId: string;
        postId: string;
        profile: ProfileType;
      }
    : Type extends "groupUpdate" ? {
        operatorId: string;
        operatorProfile: ProfileType;
        groupId: string;
        area: string[];
      }
    : Type extends "inviteJoinGroup" ? {
        operatorId: string;
        operatorProfile: ProfileType;
        groupId: string;
      }
    : Type extends "wsCallback" ? {
        success: boolean;
        message: string;
      }
    : never);
