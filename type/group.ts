import { ProfileType } from "./profile.ts";

export type Group = {
  shortName?: string;
  name: string;
  avatar?: string;
  cover?: string;
  description?: string;
  members?: GroupMember[];
};

export type GroupMember = {
  profile_link: string;
  role: "creator" | "manager" | "member";
  profile?: ProfileType;
};
