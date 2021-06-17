<template>
  <b-container fluid>
    <div v-for="(group, key) in Rout" :key="key">
      <b-card :sub-title="key" class="list-2 overflow-auto w-100">
        <b-card-body>
          <b-list-group>
            <b-list-group-item v-for="val in group" :key="val.rout" :href="val.rout">{{ val.title }}</b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-card>
    </div>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    layout: 'map',
    async asyncData({ $Api }) {
      const routers = await $Api.getRout()
      return { routers }
    },
    computed: {
      Rout() {
        const group = ['products', 'support', 'buy', '360', 'case', 'news']
        const Rout = {
          products: [],
          support: [],
          buy: [],
          "360": [],
          case: [],
          news: [],
          other: []
        }
        for (const { rout, title } of this.$data.routers) {
          let type = rout.split('/')[1] || 'other'
          if (!group.includes(type)) { type = 'other' }
          (Rout as any)[type].push({ rout, title })
        }
        return Rout
      }
    }
  })
</script>
<style lang="scss" scoped>
  .list-2 {
    max-height: 300px;
  }
</style>
