export interface userSetup {
    // 公司名称
    name:string
    // 主页配置
    home: {
        logo?:string
        // ico
        ico?:string
        // 关键字
        key?:{
            title:string
            meta:{
                name:string
                content:string
            }[]
        }
        // 客服咨询
        serve?: {
            show: boolean
            src: string
        }
        // 备案信息
        beian?: string,
        // 联系方式
        contact?: {
            qq: string
            tel: string[]
        }
    }
    // 产品
    product?: {
        showUps: boolean
        showDataCenter: boolean
        showAir: boolean
    }
    // 服务
    support?: {

    }
    // 购买指南
    buy?: {
        serverCenter: boolean
        Tmall: boolean
        jd: boolean
        blue: boolean
        userMall?: {
            title: string
            src: string
        }[]
    }
    // vr
    vr?: boolean
    // 案例
    case?: boolean
    //
    news?: boolean
    // laungua
    laungua?:boolean

}