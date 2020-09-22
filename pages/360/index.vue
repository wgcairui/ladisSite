<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <vr-asid />
      </b-col>
      <b-col cols="12" md="9" class=" mt-3 mb-5">
        <b-list-group>
          <b-list-group-item v-for="val in listArraylink" :key="val.text">
            <card-copy
              :img="val.img"
              :text="val.text"
              :title="val.name"
              :time="val.time"
              :href="val.link"
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
export default Vue.extend({
  components: {
    CardCopy,
    VrAsid
  },
  async asyncData ({ app, error }) {
    const listArray:vr[] = await app.$Api.GeneralGetInfo({ table: 'VR' })
    if (listArray?.length === 0) { error({ statusCode: 500, message: 'content null' }) }
    const listArraylink = listArray.map((el) => {
      if (!/http:\/\/www.ladis.com.cn/.test(el.link)) {
        el.link = 'https://www.ladis.com.cn' + el.link
      }
      if (el.link.startsWith('http:')) {
        el.link = el.link.replace(/^http/, 'https')
      }
      return el
    })
    return { listArraylink }
  },
  head () {
    return {
      title: `产品全景展示 - 雷迪司 - ${this.$defaults.name}`
      /* meta: [
        {
          name: 'keywords',
          content: Page.Pagekeywords
        },
        {
          name: 'description',
          content: Page.Pagedescription
        }
      ] */
    }
  }
})
</script>

<style lang="scss" scoped>
.list-group-item {
  border: 0ch;
}
</style>
