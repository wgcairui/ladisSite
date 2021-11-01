<template>
  <div class="fixeds">
    <b-button pill variant="danger" class="asid-toggle" @click="showOp">选项</b-button>

    <b-list-group class="my-4 text-light options" :class="{aa:opacity}">
      <b-list-group-item
        :to="about['公司简介']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("index.b8tcvn") }}</b-list-group-item>
      <b-list-group-item
        :to="about['服务承诺']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("index.9rjbx5") }}</b-list-group-item>
      <b-list-group-item
        :to="about['经营理念']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("index.uqcwsg") }}</b-list-group-item>
      <b-list-group-item
        v-if="showBuy"
        :to="about['经销商列表']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("index.974lfm") }}</b-list-group-item>
      <b-list-group-item
        v-if="showBuy"
        :to="about['销售服务中心']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("index.n747ex") }}</b-list-group-item>
      <b-list-group-item
        :to="news['全部新闻']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("index.lbgpnd") }}</b-list-group-item>
      <b-list-group-item
        :to="about['加入我们']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("index.al7aii") }}</b-list-group-item>
      <b-list-group-item
        :to="about['联系我们']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("index.cld4co") }}</b-list-group-item>
      <b-list-group-item
        :to="about['使用声明']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("footer.amhzvr") }}</b-list-group-item>
      <b-list-group-item
        :to="about['隐私政策']"
        class="bg-dark my-1 text-light"
       
      >{{ $t("footer.5d7lkm") }}</b-list-group-item>
    </b-list-group>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import { about, news } from '../static/hrefs'
  export default Vue.extend({
    data() {
      return {
        about,
        news,
        opacity: false
      }
    },
    computed: {
      ...mapState(['name', 'showProduct', 'showBuy', 'showCase', 'showNews', 'showLaungua'])
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
