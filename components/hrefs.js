export const cases = {
  成功案例: '/case/',
  UPS电源: '/case/node_97.shtml',
  一体化机柜: '/case/node_98.shtml',
  数据中心: '/case/node_99.shtml',
  机房空调: '/case/node_100.shtml'
}

export const news = {
  全部新闻: '/news/',
  企业新闻: '/news/node_49.shtml',
  产品新闻: '/news/node_48.shtml',
  行业新闻: '/news/node_47.shtml',
  服务通告: '/news/node_46.shtml'
}

export const vr = {
  全景展示: '/360/',
  机房全景展示: '/360/node_969.shtml',
  产品全景展示: '/360/node_970.shtml'
}

export const product = {
  所有产品: '/products/',
  UPS电源: '/products/node_13.shtml',
  后备式UPS电源: '/products/node_81.shtml',
  高频单相UPS电源: '/products/node_82.shtml',
  高频三相UPS电源: '/products/node_83.shtml',
  工频UPS电源: '/products/node_85.shtml',
  机架式UPS电源: '/products/node_84.shtml',
  模块化UPS电源: '/products/node_86.shtml',
  UPS蓄电池: '/products/node_87.shtml',
  数据中心: '/products/node_10.shtml',
  户外一体柜ETC: '/products/node_978.shtml',
  微模块机房: '/products/node_143.shtml',
  一体化机柜: '/products/node_135.shtml',
  配电PDU: '/products/node_11.shtml',
  动环监控: '/products/node_136.shtml',
  网络机柜: '/products/node_138.shtml',
  机房空调: '/products/node_145.shtml',
  房间空调: '/products/node_148.shtml',
  列间空调: '/products/node_147.shtml',
  机架空调: '/products/node_146.shtml'
}

export const about = {
  公司简介: '/about/',
  服务承诺: '/about/node_39.shtml',
  经营理念: '/about/node_38.shtml',
  经销商列表: '/about/node_53.shtml',
  销售服务中心: '/about/node_53.shtml',
  加入我们: '/about/node_34.shtml',
  使用声明: '/about/node_43.shtml',
  联系我们: '/about/node_33.shtml',
  隐私政策: '/about/node_42.shtml'
}

export const getKey = (object, value) => {
  const objArray = Object.entries(object)
  let keys = ''
  for (const [key, val] of objArray) {
    if (val === value) {
      keys = key
      break
    }
  }
  return keys
}
