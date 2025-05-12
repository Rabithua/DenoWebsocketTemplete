import { Profile } from "../profile.ts";

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
      profile: Profile;
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
        profile: Profile;
      }
    : Type extends "groupUpdate" ? {
        operatorId: string;
        operatorProfile: Profile;
        groupId: string;
        area: string[];
      }
    : Type extends "inviteJoinGroup" ? {
        operatorId: string;
        operatorProfile: Profile;
        groupId: string;
      }
    : Type extends "wsCallback" ? {
        success: boolean;
        message: string;
      }
    : never);
