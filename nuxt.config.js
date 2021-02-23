"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var RemoteServerAddress = 'https://www.ladishb.com/admin';
// const RemoteServerAddress = 'http://www.ladishb.com:8006'
//process.env.CODE_HM  = 'https://hm.baidu.com/hm.js?265ab1ae5fe5d0764570151f06dc3263'
//console.log(process.env.CODE_HM);
var config = {
    telemetry: false,
    ssr: true,
    dev: process.env.NODE_ENV !== 'production',
    modern: 'server',
    server: {
        port: process.env.NODE_ENV === 'production' ? 80 : 9005,
        host: '0.0.0.0'
    },
    env: {
        serverUrl: RemoteServerAddress
    },
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                href: '//at.alicdn.com/t/font_1290509_iyq1zhprcvc.css',
                type: 'text/css',
                rel: 'stylesheet'
            }
        ],
        script: [
        //{ src: process.env.CODE_HM || 'https://hm.baidu.com/hm.js?265ab1ae5fe5d0764570151f06dc3263' }
        ]
    },
    // Customize the progress-bar color
    loading: { color: '#fff' },
    // Global CSS
    css: ['~/assets/ladis-old.css'],
    // Plugins to load before mounting the App
    plugins: ['~/plugins/api.ts', '~/plugins/http.ts', '~/plugins/baidu.js'],
    // Nuxt.js dev-modules
    buildModules: [
        // https://typescript.nuxtjs.org/guide/setup.html#installation
        '@nuxt/typescript-build'
        // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        // '@nuxtjs/stylelint-module'
    ],
    // Nuxt.js modules
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // https://nuxt-community.github.io/nuxt-i18n/
        'nuxt-i18n',
        // https://github.com/nuxt-community/sitemap-module
        '@nuxtjs/sitemap',
        //'@nuxtjs/component-cache',
        // https://http.nuxtjs.org/setup
        '@nuxt/http',
        '@nuxtjs/proxy',
        '@nuxtjs/axios'
    ],
    sitemap: {
        gzip: true,
        // exclude: ['/admin/**', '/en/admin/**', '/zh/admin/**'],
        // eslint-disable-next-line require-await
        routes: function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
            var param, router;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = { table: 'Router' };
                        return [4 /*yield*/, axios_1["default"].post(RemoteServerAddress + "/api/Get_arg", { params: param }).then(function (el) {
                                return el.data.map(function (router) { return router.rout; });
                            })["catch"](function (err) {
                                console.log(err);
                                return [];
                            })];
                    case 1:
                        router = _a.sent();
                        return [2 /*return*/, router];
                }
            });
        }); }
    },
    /* optimizedImages: {
      // 优化的图像类型
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'jpg'],
      // 开启优化
      optimizeImages: true
    }, */
    i18n: {
        locales: [
            {
                code: 'en',
                name: 'English',
                iso: 'en-US'
            },
            {
                code: 'zh',
                name: '简体中文',
                iso: 'zh-CN'
            }
        ],
        defaultLocale: 'zh',
        // 翻译文件
        vueI18n: {
            fallbackLocale: 'zh',
            messages: {
                en: require('./locales/en.json'),
                zh: require('./locales/zh.json')
            }
        },
        // 持久化语言
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: true,
            cookieKey: 'Ladis_WebSite_I18n'
        },
        // 路由配置
        strategy: 'no_prefix'
    },
    http: {
        proxy: true,
        retry: 2
    },
    publicRuntimeConfig: {
        http: {
            browserBaseURL: process.env.BROWSER_BASE_URL
        }
    },
    privateRuntimeConfig: {
        http: {
            baseURL: process.env.BASE_URL
        }
    },
    proxy: {
        '/api/': {
            target: RemoteServerAddress,
            pathRewrite: {
                '/api/': '/api/v2/'
            }
        },
        '/_CMS_NEWS_IMG_': RemoteServerAddress,
        '/a_images': RemoteServerAddress,
        '/down': RemoteServerAddress,
        '/upload': RemoteServerAddress,
        '/config': RemoteServerAddress
    },
    // Build configuration
    build: {
        extractCSS: true
    },
    router: {}
};
exports["default"] = config;
