import type { ProductMapType } from '../modelTypes/product'

export const orderTypes = [
  {
    title: 'Bonjour Card',
  },
]

export const orderStatusTypes = {
  making: {
    mini: '🔨 制作中',
    detail: '⚒️ 正在制作您的 ${product_name}',
  },
  mailing: {
    mini: '📮 邮寄中',
    detail: '📦 您的 ${product_name} 已发出',
  },
  finished: {
    mini: '🎉 已完成',
    detail: '✅ 您的 ${product_name} 已送达',
  },
  refunded: {
    mini: '⚠️ 已取消',
    detail: '❎ 您的 ${product_name} 订单已取消',
  },
}

export type orderStatusKeyType = keyof typeof orderStatusTypes

export const productTypes: ProductMapType = {
  1: {
    name: 'Bonjour Card',
    icon: 'https://cdn.bonjour.bio/static/product/card.svg',
    hdIcon: 'https://cdn.bonjour.bio/static/product/hd/card.svg',
    store_primary_img: 'https://cdn.bonjour.bio/imgs/1_card.png',
    price: 49,
    number: 1,
  },
  2: {
    name: 'Bonjour Sticker',
    icon: 'https://cdn.bonjour.bio/static/product/sticker.svg',
    hdIcon: 'https://cdn.bonjour.bio/static/product/hd/sticker.svg',
    store_primary_img: 'https://cdn.bonjour.bio/static/product/hd/sticker.svg',
    price: 18,
    number: 3,
  },
  3: {
    name: 'Bonjour Card',
    icon: 'https://cdn.bonjour.bio/static/product/card.svg',
    hdIcon: 'https://cdn.bonjour.bio/static/product/hd/card.svg',
    store_primary_img: 'https://cdn.bonjour.bio/imgs/1_card.png',
    price: 49,
    number: 1,
  },
  // ccs
  103: {
    name: 'Bonjour Card',
    icon: 'https://cdn.bonjour.bio/static/product/card.svg',
    hdIcon: 'https://cdn.bonjour.bio/static/product/hd/card.svg',
    store_primary_img: 'https://cdn.bonjour.bio/imgs/1_card.png',
    price: 49,
    number: 1,
  },
  // 少数派
  101: {
    name: 'Bonjour Card',
    icon: 'https://cdn.bonjour.bio/static/product/card.svg',
    hdIcon: 'https://cdn.bonjour.bio/static/product/hd/card.svg',
    store_primary_img: 'https://cdn.bonjour.bio/imgs/1_card.png',
    price: 49,
    number: 1,
  },
}
type GuestType = {
  name: string
  bio: string
  comment: string
  avatar: string
}
export const orderGuest: GuestType[] = [
  {
    name: '園長 · Brian',
    bio: 'Xmind Founder',
    comment: '我是第一個真實用戶！',
    avatar: 'https://cdn.bonjour.bio/others/orderGuests/Brian.JPG',
  },
  {
    name: '陶博士',
    bio: 'Mindverse Founder',
    comment: '已付费，很惊艳的产品，像璞玉一样有想象力。',
    avatar: 'https://cdn.bonjour.bio/others/orderGuests/tao.jpeg',
  },
  {
    name: 'Race',
    bio: 'magipop Founder',
    comment: '设计优雅、顺畅，是你愿意分享的数字名片。',
    avatar: 'https://cdn.bonjour.bio/others/orderGuests/race.jpeg',
  },
  {
    name: '61',
    bio: '谜底科技 Founder',
    comment: '年轻人的第一张名片，有点酷。',
    avatar: 'https://cdn.bonjour.bio/others/orderGuests/61.jpeg',
  },
  {
    name: '思琦 (SwiftSIQI)',
    bio: 'SwiftGG 负责人',
    comment: 'Bonjour 让名片传递变得酷起来了。',
    avatar: 'https://cdn.bonjour.bio/others/orderGuests/47.jpeg',
  },
  {
    name: 'waychane',
    bio: '少数派编辑',
    comment: '连接现实与虚拟，为创造者打造的「未来式」名片。',
    avatar: 'https://cdn.bonjour.bio/others/orderGuests/waychane.jpeg',
  },
  {
    name: '泛函',
    bio: '即刻知名 AI 博主',
    comment: 'Bonjour 是我用过最惊艳的数字名片产品！',
    avatar: 'https://cdn.bonjour.bio/others/orderGuests/fanhan.jpeg',
  },
  {
    name: 'Ryan.eth',
    bio: 'Spark Lab Founder',
    comment: '非常 Cool 的科技时尚单品。',
    avatar: 'https://cdn.bonjour.bio/others/orderGuests/ryan.jpeg',
  },
]
