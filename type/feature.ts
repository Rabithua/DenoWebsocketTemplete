export type Feature = {
  icon: string
  name: string
  description: string
  destination: string | ((self: Feature) => void)
  actionName: string
  params?: Map<string, any>
  check?: (self: Feature) => boolean | Promise<boolean>
  priority?: number
}
