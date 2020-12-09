import { Plugin } from '@nuxt/types'
const http:Plugin = ({ $http,store }) => {
  $http.onRequest((_config) => {
    $http.setHeader('name', encodeURI(store.state.name))
    /* const url = new URL(_config.url)
    if (/^\/(api|_CMS_NEWS_IMG_|a_images|down|upload|config)/.test(url.pathname)) {
      // const Burl = url.href.replace(url.origin, env.serverUrl).replace('/api/', '/api/v2/')
      // console.log(_config.url,Burl)
      $http.setBaseURL(env.serverUrl)
      console.log(_config.url)
    } */
  })
}

export default http
