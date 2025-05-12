export type LinkType = {
  friend: friendType[]
  friended: friendType[]
}

export type commentType = {
  icon: string
  content: string
} | null

export type friendType = {
  profile_link: string
  name: string | undefined
  avatar: string | undefined
  description: string | undefined
  comment: commentType
  commented: commentType
  isFriend: boolean
  isFriended: boolean
  isMutual: boolean
  isShareFriend: boolean
  hasComment: boolean
  hasCommented: boolean
  create_time: string | undefined
  update_time: string | undefined
}

export type previewFriendStoreType = {
  user_link: string
  data: friendType[]
}
