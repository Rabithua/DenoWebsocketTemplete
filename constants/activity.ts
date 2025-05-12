import { ActivityType } from "../type/activity.ts";

export const activityTypeMap: Record<ActivityType["type"], { title: string }> =
  {
    follow: {
      title: "添加了朋友",
    },
    comment: {
      title: "夸夸了",
    },
    post_comment: {
      title: "评论了",
    },
    post_like: {
      title: "点赞了动态",
    },
    comment_like: {
      title: "点赞了回复",
    },
  };
