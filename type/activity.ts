import type { commentType } from "./link.ts";

export type ActivityType = {
  from: {
    profile_link: string;
    avatar?: string;
    name?: string;
    description?: string;
  };
  to: {
    profile_link: string;
    avatar?: string;
    name?: string;
    description?: string;
    post_id?: string;
    post_content?: string;
    post_image?: string[];
    _id?: string;
  };
  type: "follow" | "comment" | "post_like" | "post_comment" | "comment_like";
  comment?: commentType;
  create_time: string;
  update_time: string;
  _id: string;
  to_user_read?: boolean;
};
