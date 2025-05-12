import type { ProfileType } from './profile'

export interface ShortLinkData {
  _id: string
  short_id?: number
  create_time: string
  short_link: string
  wx_link: string
  product_id: number
  group_id?: string
  remark?: string
  profile_link?: string
  pre_profile?: ProfileType
  update_time: string
}
