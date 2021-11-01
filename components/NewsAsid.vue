<template>
  <div class="fixeds">
    <b-button pill variant="danger" class="asid-toggle" @click="showOp">选项</b-button>

    <b-list-group class="my-4 text-light options" :class="{aa:opacity}">
      <b-list-group-item class="bg-dark my-1 text-light" :to="news['全部新闻']">{{ $t("index.59ij5u") }}</b-list-group-item>
      <b-list-group-item class="bg-dark my-1 text-light" :to="news['企业新闻']">{{ $t("index.maq2tk") }}</b-list-group-item>
      <b-list-group-item class="bg-dark my-1 text-light" :to="news['产品新闻']">{{ $t("index.lvd54v") }}</b-list-group-item>
      <b-list-group-item class="bg-dark my-1 text-light" :to="news['行业新闻']">{{ $t("index.e2cbfj") }}</b-list-group-item>
      <b-list-group-item class="bg-dark my-1 text-light" :to="news['服务通告']">{{ $t("index.jpiy4n") }}</b-list-group-item>
    </b-list-group>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { news } from '../static/hrefs'
  export default Vue.extend({
    data() {
      return {
        news,
        opacity: false
      }
    },
    methods: {
      showOp() {
        this.opacity = !this.opacity
      }
    }
  })
</script>
<style lang="scss" scoped>
  .list-group-item {
    border-radius: 0;
  }

  .asid-toggle {
    display: none;
    margin: .5rem 0 0 .51rem;
  }

  .aa{
    left: 0 !important;
  }

  @media screen and (max-width: 576px) {
    .fixeds {
      position: fixed;
      z-index: 9999;

      .asid-toggle {
        display: block;
      }

      .options {
        position: absolute;
        left: -20rem;
        word-break: keep-all;
        transition: all .4s;
      }

      .list-group-item {
        transition: all 0.3s;
        padding: 0.3rem 0.2rem;
        border-radius: 45px;
        margin-left: 0.3rem;
        text-align: center;
      }
    }
  }
</style>
