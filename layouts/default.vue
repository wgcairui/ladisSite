<template>
  <b-container id="ladis-body" fluid class="p-0 m-0 flex-column">
    <b-row class="main-default" no-gutters>
      <b-col cols="12" class=" bg-dark">
        <!-- head头 -->
        <ladis-head />
      </b-col>
    </b-row>
    <b-row class="flex-grow-1" no-gutters>
      <b-col>
        <nuxt class=" p-0" />
      </b-col>
    </b-row>
    <b-row no-gutters class=" ">
      <b-col>
        <ladis-footer />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import ladisHead from '../components/head.vue'
import ladisFooter from '../components/footer.vue'
import { defaults } from '../store/user'
export default Vue.extend({
  components: {
    ladisHead,
    ladisFooter
  },
  mounted () {
    if (defaults.hm) {
      (function () {
        const hm = document.createElement('script')
        hm.src = defaults.hm
        const s = document.getElementsByTagName('script')[0]
        const parent = s.parentNode as (Node & ParentNode)
        parent.insertBefore(hm, s)
      })()
    }
  },
  head: {
    link: [
      {
        href: '//at.alicdn.com/t/font_1290509_iyq1zhprcvc.css',
        type: 'text/css',
        rel: 'stylesheet'
      }
    ]
  }
})
</script>

<style scss>
html,
body,
#__nuxt,
#__layout,
#ladis-body {
  min-height: 100vh;
  display: flex;
  width: 100%;
}
</style>
