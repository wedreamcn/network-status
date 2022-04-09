// 配置
window.Config = {

  // 站点名
  SiteName: '追梦云短链服务状态监控',

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
    'm790859528-844753145b89eee607cbffd2',
    'm790861253-94bd5b343e8c23ce0018bb9e',
    'm790861248-d3bcddf8e05fc99cf09d3293',
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
      text: '返回主站',
      url: 'https://network.wedreamcn.com'
    },
    {
      text: '免费短链',
      url: 'https://ymtz.ml'
    }
  ]
};
