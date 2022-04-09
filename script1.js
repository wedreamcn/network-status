// 配置
window.Config = {

  // 站点名
  SiteName: '追梦云网络状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm790851867-873d148741eb0c5fc6383b59',
    'm790846696-55f4140485e878c17e5301e7',
    'm790863053-f2b75efb9ffe852c2016b2d9',
    'm790846703-796dc19b6429ece88c8c7c3c',
    'm790846737-58df120950dec41b41006d53',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 15,

  // 导航栏菜单
  Navi: [
    {
      text: '站长主页',
      url: 'https://xiaozhao.info'
    },
    {
      text: '短链运行状态',
      url: '/shorturl'
    }
  ]
};
