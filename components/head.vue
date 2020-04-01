<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <b-img src="/logo.png" />
        <!-- <img src="" height="40"> -->
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="defaults.product" right>
            <template slot="button-content">
              <em>{{ $t('head.pneaqh') }}</em>
            </template>
            <b-dropdown-item :to="product['所有产品']">
              {{ $t('head.spa5wv') }}
            </b-dropdown-item>
            <b-dropdown-item
              v-if="defaults.product.showUps"
              :to="product['UPS电源']"
            >
              {{ $t('head.oa0e4r') }}
            </b-dropdown-item>
            <b-dropdown-item
              v-if="defaults.product.showDataCenter"
              :to="product['数据中心']"
            >
              {{ $t('head.1t6jqi') }}
            </b-dropdown-item>
            <b-dropdown-item
              v-if="defaults.product.showAir"
              :to="product['机房空调']"
            >
              {{ $t('head.odglin') }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown v-if="defaults.support" right>
            <template slot="button-content">
              <em>{{ $t('head.lcnmgn') }}</em>
            </template>
            <b-dropdown-item :to="support['服务支持']">
              {{ $t('head.g4jhzj') }}
            </b-dropdown-item>
            <b-dropdown-item :to="support['监控软件下载']">
              {{ $t('head.98cjrs') }}
            </b-dropdown-item>
            <b-dropdown-item :to="support['产品彩页说明']">
              {{ $t('head.7d0ctl') }}
            </b-dropdown-item>
            <b-dropdown-item :to="support['证书资质']">
              {{ $t('head.dqsax9') }}
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="support['常见问题']">
              {{ $t('head.zqdzou') }}
            </b-dropdown-item>
            <b-dropdown-item :to="support['视频教程']">
              {{ $t('head.vq1hew') }}
            </b-dropdown-item>
            <b-dropdown-item :to="support['维修服务']">
              {{ $t('head.z3w3pi') }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown v-if="defaults.buy" right>
            <template slot="button-content">
              <em>{{ $t('head.pku7s6') }}</em>
            </template>
            <b-dropdown-item v-if="defaults.buy.serverCenter" :to="about['销售服务中心']">
              {{ $t('head.azg9np') }}
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item
              v-if="defaults.buy.Tmall"
              href="https://leidisi.tmall.com/"
              target="_blank"
            >
              {{ $t('head.1cufnl') }}
            </b-dropdown-item>
            <b-dropdown-item
              v-if="defaults.buy.jd"
              href="https://mall.jd.com/index-131620.html"
              target="_blank"
            >
              {{ $t('head.kj9sli') }}
            </b-dropdown-item>
            <b-dropdown-item
              v-if="defaults.buy.blue"
              href="https://lgsm.tmall.com/"
              target="_blank"
            >
              {{ $t('head.4ggyxs') }}
            </b-dropdown-item>
            <b-dropdown-item
              v-for="(val,key) in defaults.buy.userMall"
              :key="key+100"
              :href="val.src "
              target="_blank"
            >
              {{ val.title }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item v-if="defaults.vr" :to="vr['全景展示']">
            {{ $t('head.yiyt7o') }}
          </b-nav-item>
          <b-nav-item v-if="defaults.case" :to="cases['成功案例']">
            {{ $t('head.ekilla') }}
          </b-nav-item>
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>{{ $t('head.n5tjum') }}</em>
            </template>

            <b-dropdown-item v-if="defaults.buy" :to="about['经销商列表']">
              {{ $t('head.028ccn') }}
            </b-dropdown-item>
            <b-dropdown-item v-if="defaults.buy" :to="about['销售服务中心']">
              {{ $t('head.vy3lqf') }}
            </b-dropdown-item>
            <b-dropdown-item v-if="defaults.news" :to="news['全部新闻']">
              {{ $t('head.t1vwuq') }}
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item :to="about['公司简介']">
              {{ $t('head.2mff1f') }}
            </b-dropdown-item>
            <b-dropdown-item :to="about['服务承诺']">
              {{ $t('head.n4jshj') }}
            </b-dropdown-item>
            <b-dropdown-item :to="about['经营理念']">
              {{ $t('head.aabk1p') }}
            </b-dropdown-item>

            <b-dropdown-item :to="about['联系我们']">
              {{ $t('head.i05srl') }}
            </b-dropdown-item>
            <b-dropdown-item :to="about['加入我们']">
              {{ $t('head.yvtl7f') }}
            </b-dropdown-item>
            <b-dropdown-item :to="about['使用声明']">
              {{ $t('footer.amhzvr') }}
            </b-dropdown-item>
            <b-dropdown-item :to="about['隐私政策']">
              {{ $t('footer.5d7lkm') }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown v-if="defaults.laungua" right>
            <template slot="button-content">
              <em>{{ $t('head.vix4n3') }}</em>
            </template>
            <b-dropdown-item
              v-for="locale in availableLocales"
              :key="locale.code"
              @click="Setlang(locale.code)"
            >
              {{ locale.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item
            v-if="defaults.home.serve.show"
            :href="defaults.home.serve.src"
            target="_blank"
          >
            {{ $t('head.vnvsqr') }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { NuxtVueI18n } from 'nuxt-i18n/types/nuxt-i18n'
import { news, cases, vr, product, about, support } from './hrefs'
export default Vue.extend({
  name: 'LadisHead',
  data () {
    return {
      news,
      cases,
      vr,
      product,
      about,
      support,
      defaults: this.$store.state.defaults
    }
  },
  computed: {
    localSite () {
      return this.$store.state.localSite
    },
    availableLocales () {
      const locales: NuxtVueI18n.Options.LocaleObject[] = this.$i18n
        .locales as any
      return locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    Setlang (lang: string) {
      this.$i18n.setLocaleCookie(lang)
      this.$router.push(this.switchLocalePath(lang))
      this.$router.push('/#')
    }
  }
})
</script>

<style scoped>
.nav-h {
  height: 56px;
  z-index: 100;
}
.head-h {
  height: 56px;
}
</style>
