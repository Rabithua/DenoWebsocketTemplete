import type { CreationType } from '../modelTypes/profile'

export const inflationRetryOptions = {
  retryDelay: 2000,
  retryCount: 10,
}

export const socialMediasPlaceholder = [
  {
    icon: 'https://cdn.bonjour.bio/static/social/jike.svg',
    text: '+ 关联即刻',
  },
  {
    icon: 'https://cdn.bonjour.bio/static/social/xiaohongshu.svg',
    text: '+ 关联小红书',
  },
  {
    icon: 'https://cdn.bonjour.bio/static/social/x.svg',
    text: '+ Connect X',
  },
  {
    icon: 'https://cdn.bonjour.bio/static/common/otherReferral.svg',
    text: '+ 关联其他社交媒体',
  },
]

export const creationTypeList: CreationType[] = [
  {
    key: 'github.com',
    value: 'github',
    color: '#000000',
    btnTitle: 'Star',
  },
  {
    key: 'apps.apple.com',
    value: 'appstore',
    color: '#2072F3',
    btnTitle: '获取',
  },
  {
    key: 'www.xiaoyuzhoufm.com',
    value: 'xiaoyuzhou',
    color: '#2DA9CF',
    btnTitle: '收听',
  },
  {
    key: 'xiaobaotong.xyz',
    value: 'xiaobaotong',
    color: '#B14B43',
    btnTitle: '订阅',
  },
  {
    key: 'feishu.cn',
    value: 'feishu',
    color: '#336df4',
    btnTitle: '阅读',
  },
]
