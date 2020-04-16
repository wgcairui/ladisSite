<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" class=" py-2 border-bottom text-center">
        <h3>{{ $t("_id.ctksck") }}</h3>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col v-for="val in list" :key="val.title" cols="12" md="4">
        <b-card :title="val.title" class="m-2">
          <b-card-body>
            <!-- <div v-if="typeof val.content !== 'string'">
              <p>{{ $t("_id.sjrt39") }}：{{ val.content.tel }}</p>
              <p>{{ $t("_id.jqsbos") }}:{{ val.content.linkman }}</p>
              <p>{{ $t("_id.hssglh") }}：{{ val.content.phone }}</p>
              <p>{{ $t("_id.dprtu7") }}：{{ val.content.address }}</p>
              <p>{{ $t("_id.x7u8c6") }}：{{ val.content.remark }}</p>
            </div>
            <pre v-else>{{ val.content }}</pre> -->
            <pre>{{ val.content }}</pre>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { buyList } from '../../../../types/typing'
export default Vue.extend({
  async asyncData ({ app, params }) {
    const MainUrl = '/about/' + Object.values(params).join('/')
    console.log(MainUrl)
    const list:buyList[] = await app.$Api.GeneralGetInfo({
      table: 'Buy_list',
      queryKeys: ['MainUrl'],
      MainUrl
    })
    return { list }
  },
  head () {
    return {
      title: `UPS不间断电源_机房精密空调安装维修售后维护服务 - ${this.$defaults.name}`,
      meta: [
        {
          name: 'keywords',
          content: 'UPS不间断电源, 机房精密空调'
        },
        {
          name: 'description',
          content: '雷迪司LADS生产厂家销售服务中心提供UPS电源、不间断电源、UPS蓄电池、机房空调、机房专用空调、精密空调，一体化机柜、数据中心模块化机房、动力环境监控、精密智能配电、消防、机柜等机房一体化产品的销售、安装、维修、维护、售后服务等，'
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
