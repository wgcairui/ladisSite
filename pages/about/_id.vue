<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <about-asid />
      </b-col>
      <b-col cols="12" md="9" class=" p-5">
        <div class="pt-5 border-bottom text-center">
          <h5>{{ key }}</h5>
        </div>
        <div class=" px-5 py-3 ctlimg content-img ql-editor" v-html="body" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import AboutAsid from '../../components/AboutAsid.vue'
import { about as aboutHrefs, getKey } from '../../components/hrefs'
import { about, AgentName } from '../../types/typing'
import aboutData from './about'
export default Vue.extend({
  components: { AboutAsid },
  async asyncData ({ app, store, params }) {
    // 获取网站名称
    const webSite:AgentName = store.state.defaults.name
    // 获取页面主题 公司简介
    const url = '/about/' + params.id
    const key = getKey(aboutHrefs, url)
    // 获取body
    const result = await app.$Api.GeneralGetInfo({ table: 'About', queryKeys: ['title'], title: key }).then((el:about[]) => {
      if (el?.length > 0) {
        const content = el[0].content?.filter(el => el.webSite === webSite)
        if (!content) { return false }
        return content[0].body
      } else { return false }
    })
    const body = result || ((aboutData as any)[key].content.body as any)[app.i18n.locale]
    return { body, key }
  },
  head () {
    return {
      title: `${this.$data.key} - ${this.$defaults.name}`
    }
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
