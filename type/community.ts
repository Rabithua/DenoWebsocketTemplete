export interface CommunityItem {
  _id: string
  title?: string
  content: string
  attachments: any[]
  images: string[]
  link: string
  linkDetail?: {
    title: string
    description: string
    iconUrl: string
  }
  category: string | null
  comments: string[]
  profile_link: string
  profile: {
    _id: string
    profile_link: string
    name: string
    avatar: string
    description: string
  }
  like: string[]
  report?: string[]
  user_state: 'public' | 'deleted' | 'friends_can_see' | 'self_can_see'
  admin_state?: 'spam' | 'ban' | 'hidden' | 'deleted'
  create_time: string
  update_time: string
}

export type NewPostType = {
  _id?: string
  title: string
  content: string
  attachments: any[]
  images: string[]
  link: string
  linkDetail: {
    title: string
    description: string
    iconUrl: string
  }
  category: string | null
  user_state?: 'public' | 'deleted' | 'friends_can_see' | 'self_can_see'
  admin_state?: 'spam' | 'ban' | 'hidden' | 'deleted'
}

export type PostCommentType = {
  _id: string
  post_id: string
  to_comment_id: string | undefined
  profile_link: string
  profile: {
    _id: string
    profile_link: string
    name: string
    description: string
    avatar: string
  }
  content: string
  user_state: 'public' | 'deleted' | 'friends_can_see' | 'self_can_see'
  admin_state: 'spam' | 'ban' | 'hidden' | 'deleted'
  create_time: string
  update_time: string
  replies?: PostCommentType[]
}
