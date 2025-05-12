import type { SocialType } from '../modelTypes/profile'

export const SocialGroup = [
  {
    title: '🦄 社交媒体',
    socials: [
      'jike',
      'xiaohongshu',
      'twitter',
      'bluesky',
      'instagram',
      'linkedin',
      'weibo',
      'steam',
    ] as SocialType[],
  },
  {
    title: '🛠️ 开发者',
    socials: [
      'github',
      'producthunt',
      'juejin',
      'huggingface',
      'stackoverflow',
      'v2ex',
    ] as SocialType[],
  },
  {
    title: '🎨 设计师',
    socials: ['figma', 'dribbble', 'pinterest', 'zcool'] as SocialType[],
  },
  {
    title: '📝 文字 / 图文创作',
    socials: [
      'shaoshupai',
      'gongzhonghao',
      'xiaobaotong',
      'medium',
      'zhihu',
      'zhishixingqiu',
    ] as SocialType[],
  },
  {
    title: '🎥 音视频创作',
    socials: [
      'xiaoyuzhou',
      'shipinhao',
      'bilibili',
      'douyin',
      'youtube',
      'apple_podcast',
      'wangyiyun',
      'spotify',
      'tiktok',
    ] as SocialType[],
  },
  {
    title: '☕️ 捐赠 & 出售',
    socials: ['aifadian', 'buy_me_a_coffee', 'kofi', 'patreon'] as SocialType[],
  },
]
