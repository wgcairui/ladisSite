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
export default Vue.extend({
  components: {
    CardCopy,
    VrAsid
  },
  async asyncData ({ app }) {
    const listArray:vr[] = await app.$Api.GeneralGetInfo({ table: 'VR' })
    return { listArray }
  },
  head () {
    return {
      title: '全景展示-雷迪司',
      meta: [
        { name: 'keywords', content: '全景展示-雷迪司' },
        { name: 'description', content: '全景展示-雷迪司' }
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
