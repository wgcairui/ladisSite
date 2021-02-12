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
import { mapState } from 'vuex'
import ladisHead from '../components/head.vue'
import ladisFooter from '../components/footer.vue'
export default Vue.extend({
  components: {
    ladisHead,
    ladisFooter
  },
  computed: {
    ...mapState(['agentConfig'])
  },
  head () {
    const self = this as any
    return {
      title: self.agentConfig.title,
      meta: [
        { name: 'keywords', content: self.agentConfig.metaKeywords },
        { name: 'description', content: self.agentConfig.metaDescription }
      ]
    }
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
