import type { Ref } from 'vue'

export interface CopyContentStateType {
  icon: string
  type: string
  content: string
  title: string
  color: string
}

export interface PrePostStateType {
  name: string
  description: string
  basicInfo: {
    current_doing: string
    role: string
    region: {
      countryName?: string
      cityName: string
      provinceName: string
    }
    gender: string
  }
  avatar: string
  post: {
    content: string
    category: string
    images: string[]
  }
}

export type ProductBuyStateType = number
export type QrCodeStateType = string

export enum ModalType {
  BindProduct,
  ProductBuy,
  QrCode,
  CopyContent,
  MyCard,
  Copy,
  PrePost,
  OpenApp,
  WebLoginQrcodeAuth,
  SelectSocial,
}

type HookContextBase<T> = {
  stack: Ref<IdentifiableModal<any>[]>
  closeModal: (id: IdentifiableModal<any>['id']) => void
  openModal: (modal: IdentifiableModal<any>) => void
  modal: IdentifiableModal<T>
}

export interface ModalConfig<T> {
  dismissible?: boolean
  isBanner?: boolean
  icon?: string
  title?: string
  content?: string
  color?: string
  action?: {
    text?: string
    callback?: (context: HookContextBase<T>) => void
  }
  dismiss?: {
    text?: string
    callback?: (context: HookContextBase<T>) => void
  }
}

export interface ModelEntry<DataType> {
  type: ModalType
  data?: DataType
}

export interface Modal<T> extends ModelEntry<T>, ModalConfig<T> {}

export type IdentifiableModal<T> = Modal<T> & { id: string }
