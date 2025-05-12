export const fromWhere: WhereItem[] = [
  {
    title: '熟人 / 朋友推荐',
    value: 'friendsReferral',
    icon: 'https://cdn.bonjour.bio/static/common/friendsReferral.png',
  },
  {
    title: '微信社群',
    value: 'weixinGroup',
    icon: 'https://cdn.bonjour.bio/static/contact/weixin.svg',
  },
  {
    title: '即刻',
    value: 'jike',
    icon: 'https://cdn.bonjour.bio/static/social/jike.svg',
  },
  {
    title: '小红书',
    value: 'xiaohongshu',
    icon: 'https://cdn.bonjour.bio/static/social/xiaohongshu.svg',
  },
  {
    title: '推特',
    value: 'twitter',
    icon: 'https://cdn.bonjour.bio/static/social/twitter.svg',
  },
]

type WhereItem = {
  icon: string
  title: '即刻' | '推特' | '微信社群' | '小红书' | '熟人 / 朋友推荐' | '其他'

  value:
    | 'jike'
    | 'twitter'
    | 'weixinGroup'
    | 'xiaohongshu'
    | 'friendsReferral'
    | 'otherReferral'
}

export const descriptionPlaceholder = `* 你的简介 *

🉑 分享你的背景信息 & 兴趣

(推荐从小红书 / 即刻 / X 直接复制)`
