<template>
  <b-list-group class="my-4 text-light">
    <b-list-group-item
      :to="about['公司简介']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("index.b8tcvn") }}
    </b-list-group-item>
    <b-list-group-item
      :to="about['服务承诺']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("index.9rjbx5") }}
    </b-list-group-item>
    <b-list-group-item
      :to="about['经营理念']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("index.uqcwsg") }}
    </b-list-group-item>
    <b-list-group-item
      :to="about['销售服务中心']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("index.974lfm") }}
    </b-list-group-item>
    <b-list-group-item
      :to="about['经销商列表']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("index.n747ex") }}
    </b-list-group-item>
    <b-list-group-item
      :to="news['全部新闻']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("index.lbgpnd") }}
    </b-list-group-item>
    <b-list-group-item
      :to="about['加入我们']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("index.al7aii") }}
    </b-list-group-item>
    <b-list-group-item
      :to="about['联系我们']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("index.cld4co") }}
    </b-list-group-item>
    <b-list-group-item
      :to="about['使用声明']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("footer.amhzvr") }}
    </b-list-group-item>
    <b-list-group-item
      :to="about['隐私政策']"
      class="bg-dark rounded-0 my-1 text-light"
    >
      {{ $t("footer.5d7lkm") }}
    </b-list-group-item>
  </b-list-group>
</template>
<script lang="ts">
import Vue from 'vue'
import { about, news } from './hrefs'
export default Vue.extend({
  data () {
    return {
      about,
      news
    }
  },
  computed: {
    localSite () {
      return this.$store.state.localSite
    }
  }
})
</script>
