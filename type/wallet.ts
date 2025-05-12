export type walletResponseType = {
  _id: string
  user_id: string
  number: number
  wallet: WalletType
  create_time: string
}

export type WalletType = WalletItemType[]

export type WalletItemType = {
  profile_link: string
  create_time?: string
  profile: {
    name: string
    avatar?: string
    description?: string
    profile_link: string
  }
}
