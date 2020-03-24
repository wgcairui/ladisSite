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

    const list:buyList[] = await app.$Api.GeneralGetInfo({
      table: 'Buy_list',
      queryKeys: ['MainUrl'],
      MainUrl
    })
    return { list }
  }
})
</script>
<style lang="scss" scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
