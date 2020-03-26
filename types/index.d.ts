import { AxiosInstance } from 'axios'
import { DbTables } from './typing'
interface params {
    table: DbTables
    isNews?: boolean
    queryKeys?:string[]
    [t:string]:any
}
interface Api {
    axios: AxiosInstance
    GeneralGetInfo: <T = any>(params: params) => Promise<T>
    GetHomeNews: <T = any>() => Promise<T>
    GetBuyList: <T = any>(city: string) => Promise<T>
    Down: (fileName: string) => Promise<any>
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
