<template>
  <b-list-group class=" my-4 text-light">
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"
      :to="news['全部新闻']"
    >
      {{ $t("index.59ij5u") }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"
      :to="news['企业新闻']"
    >
      {{ $t("index.maq2tk") }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"
      :to="news['产品新闻']"
    >
      {{ $t("index.lvd54v") }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"
      :to="news['行业新闻']"
    >
      {{ $t("index.e2cbfj") }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"
      :to="news['服务通告']"
    >
      {{ $t("index.jpiy4n") }}
    </b-list-group-item>
  </b-list-group>
</template>
<script lang="ts">
import Vue from 'vue'
import { news } from './hrefs'
export default Vue.extend({
  data () {
    return {
      news
    }
  }
})
</script>
