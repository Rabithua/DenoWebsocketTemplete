export const ContactMap: Contact = {
  weixin: {
    title: '微信',
    type: 'image',
    color: '#22c55e',
    placeholder: '点击上传微信二维码',
    lead: '* 微信主页 - 我 - 头像栏 - 我的二维码 *',
  },
  whatsApp: {
    title: 'WhatsApp',
    type: 'image',
    color: '#25D366',
    placeholder: '点击上传 WhatsApp 二维码',
  },
  line: {
    title: 'Line',
    type: 'image',
    color: '#00C300',
    placeholder: '点击上传 Line 二维码',
  },
  // me@fzf404.art
  email: {
    title: '邮箱',
    type: 'email',
    color: '#3b82f6',
    placeholder: '请输入邮箱',
  },
  // https://discord.gg/fzf404
  discord: {
    title: 'Discord',
    type: 'url',
    color: '#6366f1',
    placeholder: 'https://discord.gg/xxxxxx',
  },
  // https://t.me/fzf404
  telegram: {
    title: 'Telegram',
    type: 'url',
    color: '#0ea5e9',
    placeholder: 'https://t.me/xxxxxx',
  },
  // 18652798912
  telephone: {
    title: '电话号码',
    type: 'phone',
    color: '#10b981',
    placeholder: '请输入电话号码',
  },
  // 441535134
  qq: {
    title: 'QQ',
    type: 'number',
    color: '#6b7280',
    placeholder: '请输入 QQ 号',
  },
  // dingding: {
  //   title: '钉钉',
  //   type: 'image',
  //   color: '',
  //   placeholder: '点击上传钉钉二维码',
  // },
  feishu: {
    title: '飞书',
    type: 'image',
    color: '#3370FF',
    placeholder: '点击上传飞书二维码',
  },
  // wecom: {
  //   title: '企业微信',
  //   type: 'image',
  //   color: '',
  //   placeholder: '点击上传企业微信二维码',
  // },
}

type ContactEntry = {
  title: string
  type: 'image' | 'email' | 'phone' | 'url' | 'username' | 'number'
  color: string
  placeholder: string
  lead?: string
}

type Contact = {
  [Key: string]: ContactEntry
}
