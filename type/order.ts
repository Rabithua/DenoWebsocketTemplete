export type ProductType = 'bonjour_card' | 'bonjour_sticker'

export type OrderType = {
  product_id: number
  money: number
  count: number
  status: 'making' | 'mailing' | 'finished' | 'refunded'
  trackingNumber?: string
  wx_trade_id?: string
  waybill_token?: string
  address: string
  create_time: string
  order_id: number
  user_id: number
  _id: string
}

export type PayType = {
  nonceStr: string
  package: string
  timeStamp: string
  signType: string
  paySign: string
}
