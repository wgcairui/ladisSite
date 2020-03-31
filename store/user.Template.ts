import { userSetup } from '../types/myTypes'
const name = '湖北雷迪司'
export const defaults: userSetup = {
  name,
  home: {
    ico: '/favicon.ico',
    logo: '/a_images/public/logo.png',
    serve: {
      show: false,
      src: 'https://cschat-ccs.aliyun.com/index.htm?tntInstId=_1DER4Qq&scene=SCE00003943#/'
    },
    beian: '鄂ICP备19029626号-1',
    key: {
      title: `UPS电源_不间断电源_精密空调_机房一体化机柜_数据中心建设-${name}`,
      meta: [
        {
          name: 'keywords', content: `雷迪司,UPS,机房专用空调,UPS电源,不间断电源,机房空调,精密空调,微模块,模块化机房,
            数据中心,精密配电柜,UPS蓄电池,一体化机柜`
        },
        {
          name: 'description', content: `雷迪司(LADS厂家官网)-提供UPS电源、不间断电源蓄电池、专用机房空调、恒温恒湿精密空调、
            机房精密配电柜、智能一体化机柜、动力环境监控、微模块化机房冷通道机柜等数据中心工程建设解决方案。
            研发、生产、维修：UPS不间断电源、UPS蓄电池、机房专用空调、恒温恒湿精密空调、柜式机房、动环监控系统、
            微模块化数据中心等机房一体化产品。销售服务中心遍及：
            北京市、上海、杭州、石家庄、合肥、成都、武汉、长沙、福州、厦门、南京、郑州、南昌、南宁、长沙、天津、
            济南、太原、西安、重庆、贵阳、昆明、兰州、宁夏、西宁、呼和浩特、乌鲁木齐、拉萨、沈阳等城市，
            机房装修建设就找深圳雷迪司科技股份有限公司`
        }
      ]
    },
    contact: {
      qq: '',
      tel: ['雷先生:13705817726']
    }
  },
  product: {
    showAir: true,
    showDataCenter: true,
    showUps: true
  },
  support: {

  },
  buy: {
    serverCenter: true,
    Tmall: false,
    jd: false,
    blue: false
    // userMall: [{ title: 'test', src: 'ssss' }]
  },
  vr: true,
  case: true,
  news: true,
  laungua: false
}
