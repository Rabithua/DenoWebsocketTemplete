export enum SocialEntryType {
  URL = 'url',
  Username = 'username',
  Image = 'image',
}

type SocialEntry = {
  title: string
  type: SocialEntryType
  button: string
  color: string
  content: string
  placeholder: string
  namePlaceholder?: string
  lead?: string
  urlTemplate?: string
}

type Social = {
  [Key: string]: SocialEntry
}

export const SocialMap: Social = {
  // https://afdian.net/a/fzf404
  aifadian: {
    title: '爱发电',
    type: SocialEntryType.Username,
    button: '订阅',
    color: '#8F66DF',
    content: 'afdian.com',
    urlTemplate: 'https://afdian.net/a/${content}',
    lead: '示例：https://afdian.net/a/[username]',
    placeholder: 'username',
  },
  // https://podcasts.apple.com/cn/podcast/microsoft/id1050462261
  apple_podcast: {
    title: 'Apple 播客',
    type: SocialEntryType.Username,
    button: '关注',
    color: '#B150E2',
    content: 'podcasts.apple.com',
    lead: '示例：https://podcasts.apple.com/cn/podcast/[username]',
    urlTemplate: 'https://podcasts.apple.com/cn/podcast/${content}',
    placeholder: 'username',
  },
  // https://b23.tv/rYgtpJH
  // https://space.bilibili.com/66628023
  bilibili: {
    title: 'Bilibili',
    type: SocialEntryType.URL,
    button: '关注',
    color: '#FF6699',
    content: 'bilibili.com',
    lead: '示例：https://space.bilibili.com/xxx',
    placeholder: '主页链接',
  },
  // https://buymeacoffee.com/fzf404
  buy_me_a_coffee: {
    title: 'Buy Me A Coffee',
    type: SocialEntryType.Username,
    button: 'Thanks!',
    color: '#FFDD00',
    content: 'buymeacoffee.com',
    lead: '示例：https://buymeacoffee.com/[username]',
    urlTemplate: 'https://buymeacoffee.com/${content}',
    placeholder: 'username',
  },
  // https://m.douban.com/people/fzf404
  douban: {
    title: '豆瓣',
    type: SocialEntryType.Username,
    button: '关注',
    color: '#05AF11',
    content: 'douban.com',
    lead: '示例：https://m.douban.com/people/[username]',
    urlTemplate: 'https://m.douban.com/people/${content}',
    placeholder: 'username',
  },
  // https://v.douyin.com/i2vrBnUc
  douyin: {
    title: '抖音',
    type: SocialEntryType.URL,
    button: '关注',
    color: '#000000',
    content: 'douyin.com',
    lead: '示例：https://v.douyin.com/xxx',
    placeholder: '主页链接',
  },
  // https://dribbble.com/fzf404
  dribbble: {
    title: 'Dribbble',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#EA4C89',
    content: 'dribbble.com',
    lead: '示例：https://dribbble.com/[username]',
    urlTemplate: 'https://dribbble.com/${content}',
    placeholder: 'username',
  },
  // https://www.facebook.com/nmdfzf404
  facebook: {
    title: 'Facebook',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#0866FF',
    content: 'facebook.com',
    lead: '示例：https://www.facebook.com/[username]',
    urlTemplate: 'https://www.facebook.com/${content}',
    placeholder: 'username',
  },
  // https://www.figma.com/@fzf404
  figma: {
    title: 'Figma',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#242938',
    content: 'figma.com',
    lead: '示例：https://www.figma.com/@[username]',
    urlTemplate: 'https://www.figma.com/@${content}',
    placeholder: 'username',
  },
  // https://github.com/fzf404
  github: {
    title: 'GitHub',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#000000',
    content: 'github.com',
    lead: '示例：https://github.com/[username]',
    urlTemplate: 'https://github.com/${content}',
    placeholder: 'username',
  },
  gongzhonghao: {
    title: '微信公众号',
    type: SocialEntryType.Image,
    button: '关注',
    color: '#01CC7A',
    content: '公众号',
    lead: '* 公众号后台 - 设置与开发 - 账号设置 - 二维码 *',
    placeholder: '点击上传公众号二维码',
  },
  // https://www.instagram.com/isfzf404
  instagram: {
    title: 'Instagram',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#E1306C',
    content: 'instagram.com',
    lead: '示例：https://www.instagram.com/[username]',
    urlTemplate: 'https://www.instagram.com/${content}',
    placeholder: 'username',
  },
  // https://okjk.co/ictQ8S
  jike: {
    title: '即刻',
    type: SocialEntryType.URL,
    button: '关注',
    color: '#FED001',
    content: 'okjk.co',
    lead: '* 即刻 App - 我 - 右上角分享 - 复制链接 *',
    placeholder: '主页链接',
  },
  // https://juejin.cn/user/1847636498321853
  juejin: {
    title: '掘金',
    type: SocialEntryType.URL,
    button: '关注',
    color: '#1F80FF',
    content: 'juejin.cn',
    lead: '示例：https://juejin.cn/user/xxx',
    placeholder: '主页链接',
  },
  // https://www.linkedin.com/in/fzf404
  linkedin: {
    title: 'LinkedIn',
    type: SocialEntryType.Username,
    button: 'View',
    color: '#006699',
    content: 'linkedin.com',
    lead: '示例：https://www.linkedin.com/in/[username]',
    urlTemplate: 'https://www.linkedin.com/in/${content}',
    placeholder: 'username',
  },
  // https://linktr.ee/fzf404
  linktree: {
    title: 'Linktree',
    type: SocialEntryType.Username,
    button: 'View',
    color: '#43E660',
    content: 'linktr.ee',
    lead: '示例：https://linktr.ee/[username]',
    urlTemplate: 'https://linktr.ee/${content}',
    placeholder: 'username',
  },
  // https://fzf404.lofter.com
  lofter: {
    title: 'Lofter',
    type: SocialEntryType.Username,
    button: '关注',
    color: '#019C93',
    content: 'lofter.com',
    lead: '示例：https://[username].lofter.com',
    urlTemplate: 'https://${content}.lofter.com',
    placeholder: 'username',
  },
  // https://medium.com/@nmdfzf404
  medium: {
    title: 'Medium',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#000000',
    content: 'medium.com',
    lead: '示例：https://medium.com/@[username]',
    urlTemplate: 'https://medium.com/@${content}',
    placeholder: 'username',
  },
  // https://www.patreon.com/fzf404
  patreon: {
    title: 'Patreon',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#000000',
    content: 'patreon.com',
    lead: '示例：https://www.patreon.com/[username]',
    urlTemplate: 'https://www.patreon.com/${content}',
    placeholder: 'username',
  },
  // https://www.pinterest.com/fzf404
  pinterest: {
    title: 'Pinterest',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#E60019',
    content: 'pinterest.com',
    lead: '示例：https://www.pinterest.com/[username]',
    urlTemplate: 'https://www.pinterest.com/${content}',
    placeholder: 'username',
  },
  // https://www.reddit.com/user/nmdfzf404
  reddit: {
    title: 'Reddit',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#FF4500',
    content: 'reddit.com',
    lead: '示例：https://www.reddit.com/user/[username]',
    urlTemplate: 'https://www.reddit.com/user/${content}',
    placeholder: 'username',
  },
  // https://sspai.com/u/fpf494
  shaoshupai: {
    title: '少数派',
    type: SocialEntryType.Username,
    button: '关注',
    color: '#D7191A',
    content: 'sspai.com',
    lead: '示例：https://sspai.com/u/[username]',
    urlTemplate: 'https://sspai.com/u/${content}',
    placeholder: 'username',
  },
  shipinhao: {
    title: '微信视频号',
    type: SocialEntryType.Image,
    button: '关注',
    color: '#FF9908',
    content: '视频号',
    placeholder: '点击上传视频号二维码',
  },
  // https://open.spotify.com/user/31keusivkw66r6zmlgjw7fox34pe
  spotify: {
    title: 'Spotify',
    type: SocialEntryType.URL,
    button: 'Follow',
    color: '#2EBD59',
    content: 'spotify.com',
    lead: '示例：https://open.spotify.com/user/xxx',
    placeholder: '主页链接',
  },
  // https://steamcommunity.com/id/fzf404
  steam: {
    title: 'Steam',
    type: SocialEntryType.Username,
    button: 'Add',
    color: '#132E62',
    content: 'steam.com',
    lead: '示例：https://steamcommunity.com/id/[username]',
    urlTemplate: 'https://steamcommunity.com/id/${content}',
    placeholder: 'username',
  },
  // https://www.threads.net/@isfzf404
  threads: {
    title: 'Threads',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#000000',
    content: 'threads.net',
    lead: '示例：https://www.threads.net/@[username]',
    urlTemplate: 'https://www.threads.net/@${content}',
    placeholder: 'username',
  },
  // https://www.tiktok.com/@nmdfzf404
  tiktok: {
    title: 'Tiktok',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#000000',
    content: 'tiktok.com',
    lead: '示例：https://www.tiktok.com/@[username]',
    urlTemplate: 'https://www.tiktok.com/@${content}',
    placeholder: 'username',
  },
  // https://twitter.com/nmdfzf404
  twitter: {
    title: 'Twitter',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#1D9BF0',
    content: 'twitter.com',
    lead: '示例：https://x.com/[username]',
    urlTemplate: 'https://x.com/${content}',
    placeholder: 'username',
  },
  // https://bsky.app/profile/cco00oo.bsky.social
  bluesky: {
    title: 'BlueSky',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#0085FF',
    content: 'bsky.app',
    lead: '示例：https://bsky.app/profile/[username.url]',
    urlTemplate: 'https://bsky.app/profile/${content}',
    placeholder: 'username.url',
  },
  // https://163cn.tv/rZKyb0c
  // https://music.163.com/user?id=350390124
  wangyiyun: {
    title: '网易云',
    type: SocialEntryType.URL,
    button: '关注',
    color: '#E20000',
    content: 'music.163.com',
    lead: '示例：https://music.163.com/user?id=xxx',
    placeholder: '主页链接',
  },
  // https://weibo.com/u/5993051794
  weibo: {
    title: '微博',
    type: SocialEntryType.URL,
    button: '关注',
    color: '#ff8200',
    content: 'weibo.com',
    lead: '示例：https://weibo.com/u/xxx',
    placeholder: '主页链接',
  },
  // x: {
  //   title: 'X',
  //   type: SocialEntryType.Username,
  //   button: 'Follow',
  //   color: '#000000',
  //   content: 'x.com',
  //   lead: '示例：https://x.com/[username]',
  //   urlTemplate: 'https://x.com/${content}',
  //   placeholder: 'username',
  // },
  // https://xiaobot.net/p/pmdogs6
  xiaobaotong: {
    title: '小报童',
    type: SocialEntryType.Username,
    button: '订阅',
    color: '#B14B43',
    content: 'xiaobot.net',
    lead: '示例：https://xiaobot.net/p/[username]',
    urlTemplate: 'https://xiaobot.net/p/${content}',
    placeholder: 'username',
  },
  // https://www.xiaohongshu.com/user/profile/62516955000000001000ec25
  xiaohongshu: {
    title: '小红书',
    type: SocialEntryType.URL,
    button: '关注',
    color: '#FF2442',
    content: 'xiaohongshu.com',
    lead: '* 小红书 App - 我 - 右上角分享 - 复制链接 *',
    placeholder: '主页链接',
  },
  // https://www.xyzfm.url/clrgg
  // https://www.xiaoyuzhoufm.com/podcast/65cd6bb6b6c9256aeed9fcf8
  xiaoyuzhou: {
    title: '小宇宙',
    type: SocialEntryType.URL,
    button: '收听',
    color: '#2DA9CF',
    content: 'xyzfm.url',
    lead: '* 小宇宙 App - 某播客 - 右上角分享 - 复制链接 *',
    placeholder: '播客链接',
  },
  // https://www.youtube.com/@nmdfzf404
  // https://www.youtube.com/channel/UChYxrEdyIoAn5-LbSdw044g
  youtube: {
    title: 'Youtube',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#CD201F',
    content: 'youtube.com',
    lead: '示例：https://www.youtube.com/@[username]',
    urlTemplate: 'https://www.youtube.com/@${content}',
    placeholder: 'username',
  },
  // https://www.zhihu.com/people/fzf404
  zhihu: {
    title: '知乎',
    type: SocialEntryType.Username,
    button: '关注',
    color: '#0F88EB',
    content: 'zhihu.com',
    lead: '示例：https://www.zhihu.com/people/[username]',
    urlTemplate: 'https://www.zhihu.com/people/${content}',
    placeholder: 'username',
  },
  // https://t.zsxq.com/xCqnv
  zhishixingqiu: {
    title: '知识星球',
    type: SocialEntryType.URL,
    button: '关注',
    color: '#1ABA99',
    content: 'zsxq.com',
    lead: '* 知识星球 App - 某星球 - 右上角分享 - 复制链接 *',
    placeholder: '星球链接',
  },
  // https://www.v2ex.com/member/yuchangye
  v2ex: {
    title: 'V2EX',
    type: SocialEntryType.Username,
    button: '关注',
    color: '#000000',
    content: 'v2ex.com',
    lead: '示例：https://www.v2ex.com/member/[username]',
    urlTemplate: 'https://www.v2ex.com/member/${content}',
    placeholder: 'username',
  },
  // https://www.zcool.com.cn/u/639884
  zcool: {
    title: '站酷',
    type: SocialEntryType.URL,
    button: '关注',
    color: '#000000',
    content: 'zcool.com.cn',
    lead: '示例：https://www.zcool.com.cn/u/xxx',
    placeholder: '主页链接',
  },
  // https://www.producthunt.com/@kevin
  producthunt: {
    title: 'Producthunt',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#FF6154',
    content: 'producthunt.com',
    lead: '示例：https://www.producthunt.com/@[username]',
    urlTemplate: 'https://www.producthunt.com/@${content}',
    placeholder: 'username',
  },
  // https://huggingface.co/timudk
  huggingface: {
    title: 'Hugging Face',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#FF9D00',
    content: 'huggingface.co',
    lead: '示例：https://huggingface.co/[username]',
    urlTemplate: 'https://huggingface.co/${content}',
    placeholder: 'username',
  },
  // https://stackoverflow.com/users/21963465/rabithua
  stackoverflow: {
    title: 'stack overflow',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#F48024',
    content: 'stackoverflow.com',
    lead: '示例：https://stackoverflow.com/users/[username]',
    urlTemplate: 'https://stackoverflow.com/users/${content}',
    placeholder: 'username',
  },
  // https://www.pixiv.net/users/1244089
  pixiv: {
    title: 'Pixiv',
    type: SocialEntryType.URL,
    button: '加关注',
    color: '#009CFF',
    content: 'pixiv.net',
    lead: '示例：https://www.pixiv.net/users/xxx',
    placeholder: '主页链接',
  },
  // https://ko-fi.com/rabithua
  kofi: {
    title: 'Ko-fi',
    type: SocialEntryType.Username,
    button: 'Follow',
    color: '#13C3FF',
    content: 'ko-fi.com',
    lead: '示例：https://ko-fi.com/[username]',
    urlTemplate: 'https://ko-fi.com/${content}',
    placeholder: 'username',
  },
}
