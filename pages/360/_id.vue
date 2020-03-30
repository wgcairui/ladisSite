<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <vr-asid />
      </b-col>
      <b-col cols="12" md="9" class=" mt-3 mb-5">
        <b-list-group>
          <b-list-group-item v-for="val in listArray" :key="val.text">
            <card-copy
              :img="val.img"
              :text="val.text"
              :title="val.name"
              :time="val.time"
              :href="'http://www.ladis.com.cn'+val.link"
            />
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import CardCopy from '../../components/CardCopy.vue'
import VrAsid from '../../components/VrAsid.vue'
import { vr } from '../../types/typing'
import { vr as Vr, getKey } from '../../components/hrefs'
export default Vue.extend({
  components: {
    CardCopy,
    VrAsid
  },
  async asyncData ({ app, params }) {
    const listArrays:vr[] = await app.$Api.GeneralGetInfo({ table: 'VR' })
    const key = getKey(Vr, '/360/' + params.id)
    const listArray = listArrays.filter((el) => {
      // console.log({ name: el.name.trim(), key: `［${key}］` })
      return el.name.trim() === `［${key}］`
    })
    return { listArray }
  },
  head () {
    const [Page] = this.$data.listArray as vr[]
    return {
      title: `${Page.PageTitle} - ${this.$defaults.name}`,
      meta: [
        {
          name: 'keywords',
          content: Page.Pagekeywords
        },
        {
          name: 'description',
          content: Page.Pagedescription
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.list-group-item {
  border: 0ch;
}
</style>
