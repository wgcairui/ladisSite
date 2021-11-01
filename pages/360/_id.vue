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
import { vr as Vr, getKey } from '../../static/hrefs'
export default Vue.extend({
  async asyncData ({ $Api, params, error }) {
    const listArrays = await $Api.getVrs()
    const key = getKey(Vr, '/360/' + params.id)
    const listArray = listArrays.filter((el) => {
      return el.name.trim() === `［${key}］`
    })
    if (listArray?.length === 0) { return error({ statusCode: 500, message: '页面走丢了' }) }
    return { listArray }
  },
  head () {
    return {
      title: `产品全景展示 - 雷迪司 - ${this.$store.state.name}`
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
