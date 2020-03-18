<template>
  <b-container fluid>
    <b-row>
      <b-col
        v-for="(group, key) in Rout"
        :key="key"
        cols="12"
        md="6"
        class=" my-2"
      >
        <b-card :sub-title="key" class=" list-2 overflow-auto">
          <b-card-body>
            <b-list-group>
              <b-list-group-item
                v-for="val in group"
                :key="val.rout"
                :href="val.rout"
              >
                {{ val.title }}
              </b-list-group-item>
            </b-list-group>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'map',
  async asyncData ({ $axios }) {
    const routers = await $axios.$get('/api/Get_arg', {
      params: { table: 'Router' }
    })

    return { routers }
  },
  data () {
    return {
      router: this.$data.routers || []
    }
  },
  computed: {
    Rout () {
      const group = ['products', 'support', 'buy', 'VR', 'Case', 'News']
      const Rout = {
        products: [],
        support: [],
        buy: [],
        VR: [],
        Case: [],
        News: [],
        other: []
      }
      for (const { rout, title, createdAt } of this.$data.routers) {
        let type = rout.split('/')[1] || 'other'
        if (!group.includes(type)) { type = 'other' }
        (Rout as any)[type].push({ rout, createdAt, title })
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
