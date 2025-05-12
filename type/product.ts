export type ProductItemType = {
  name: string
  icon: string
  hdIcon: string
  store_primary_img: string
  price: number
  number: number
}
export type ProductMapType = {
  [Key in number]: ProductItemType
}
