<template>
  <div>
    <div class="pt-5 border-bottom text-center">
      <h5>{{ title }}</h5>
    </div>
    <div>
      <b class=" px-5 ctlimg content-img ql-editor" v-html="result || ''" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import aboutInfo from './about'
interface aboutBody{
  title:string
  content:{
    body:string
    webSite:string
  }[]
}
export default Vue.extend({
  async asyncData (ctx) {
    let result
    const localUrl = ctx.store.state.localUrl
    const title = ctx.params.id
    const argument = { table: 'About', title }
    const backInfo = (aboutInfo as any)[title].content.body
    const results:aboutBody = await ctx.app.$Api.GeneralGetInfo(argument)
    if (results) {
      const body = results.content.filter(el => el.webSite === localUrl)
      if (body.length < 1) { result = backInfo } else { result = body[0].body }
    } else {
      result = backInfo
    }
    return { title, result }
  }
})
</script>
<style lang="scss">
.content-img img {
  max-width: 100%;
  margin: 10px;
}
#newsText img {
  max-width: 100% !important;
  height: auto;
}
</style>
