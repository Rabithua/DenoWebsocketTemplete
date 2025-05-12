import type { LoginCredential } from '../api/adapter'
import type { useApp } from '../pinia/app'
import type { useOnBoarding_tempProfile } from '../pinia/profile'
import type { SocialType } from './profile'

export interface LinkDetail {
  title: string
  description: string
  iconUrl: string
  finalUrl: string
}

export type ContainerWithLoadingComponentExposeHook = {
  reloadData: () => void
  changeLoadState: (state: 'loading' | 'success' | 'error') => void
} | null

export type ProfileRefType = {
  maybeRefreshPostList: (type: 'loadmore' | 'refresh') => void
} | null

export type WebLoginQrcodeTicket = {
  _id: string
  data: LoginCredential
  type: 'web_login' | string
  qrcodeUrl: string
}

export interface WebLoginQrcodeAuthIntentState {
  code: string
  authHook: ReturnType<typeof useApp>
}

export interface SelectSocialIntentState {
  tempDataHook: ReturnType<typeof useOnBoarding_tempProfile>
  activeType: SocialType
}
