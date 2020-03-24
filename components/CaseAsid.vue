<template>
  <b-list-group class=" my-4 text-light">
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"
      :to="hrefs['成功案例']"
    >
      {{ $t("index.tqie7y") }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"

      :to="hrefs['UPS电源']"
    >
      {{ $t("index.a89hfi") }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"

      :to="hrefs['一体化机柜']"
    >
      {{ $t("index.1gcuye") }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"

      :to="hrefs['数据中心']"
    >
      {{ $t("index.6vnevq") }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"

      :to="hrefs['机房空调']"
    >
      {{ $t("index.uns46v") }}
    </b-list-group-item>
  </b-list-group>
</template>
<script lang="ts">
import Vue from 'vue'
import { cases } from './hrefs'
export default Vue.extend({
  data () {
    return {
      hrefs: cases
    }
  }
})
</script>
