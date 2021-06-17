import { Api } from '~/plugins/api';
declare module 'vue/types/vue' {
    interface Vue {
        $Api: Api,
    }

    interface VueConstructor {
        $Api: Api
    }
}

declare module '@nuxt/vue-app' {
    interface Context {
        $Api: Api
    }
}

declare module '@nuxt/types' {
    interface Context {
        $Api: Api
    }
    interface NuxtAppOptions {
        $Api: Api
    }
}

declare module 'vue/types/index' {
    interface Store<S> {
    }
}
