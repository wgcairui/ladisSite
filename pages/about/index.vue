<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <about-asid />
      </b-col>
      <b-col cols="12" md="9" class="p-5">
        <div class="pt-5 border-bottom text-center">
          <h5>{{ key }}</h5>
        </div>
        <div class="py-3 ctlimg content-img ql-editor" v-html="body" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
  import Vue from "vue";
  import { about as aboutHrefs, getKey } from "../../components/hrefs";
  import aboutData from "./about";
  export default Vue.extend({
    async asyncData({ $Api, app }) {
      // 获取页面主题 公司简介
      const url = "/about/";
      const key = getKey(aboutHrefs, url);
      // 获取body
      const body = await $Api.getAboutType(key).then(el => el.content || ((aboutData as any)[key].content.body as any)[app.i18n.locale]);
      return { body, key };
    },
    head() {
      return {
        title: `${this.$data.key} - ${this.$store.state.name}`,
      };
    },
  });
</script>
<style lang="scss">
  .content-img img {
    max-width: 100%;
    margin: 10px;
  }
  #newsText img {
    max-width: 100% !important;
    height: auto;
  }
</style>
