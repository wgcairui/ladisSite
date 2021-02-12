<template>
  <b-list-group class=" my-4 text-light">
    <b-list-group-item
      class=" bg-dark rounded-0 my-1 text-light"
      :to="vr['全景展示']"
    >
      {{ $t('index.0twzes') }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"
      :to="vr['机房全景展示']"
    >
      {{ $t('index.sn1yip') }}
    </b-list-group-item>
    <b-list-group-item
      class=" bg-dark rounded-0  my-1 text-light"
      :to="vr['产品全景展示']"
    >
      {{ $t('index.0ibgd6') }}
    </b-list-group-item>
  </b-list-group>
</template>
<script lang="ts">
import Vue from 'vue'
import { vr } from './hrefs'
export default Vue.extend({
  data () {
    return {
      vr
    }
  }
})
</script>
