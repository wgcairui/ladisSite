import { AxiosInstance } from 'axios'
interface params {
    table: string
    title?: string
    parent?: string
    isNews?: boolean
}
interface Api {
    axios: AxiosInstance
    GeneralGetInfo: <T = any>(params: params) => Promise<T>
    GetHomeNews: <T = any>() => Promise<T>
    GetBuyList: <T = any>(city: string) => Promise<T>
}

declare module 'vue/types/vue' {
    interface Vue {
        $Api: Api
    }
}

declare module '@nuxt/types' {
    interface Context {

    }
    interface NuxtAppOptions {
        $Api: Api
    }
}

declare module 'vue/types/index' {
    interface Store<S> {
    }
}
