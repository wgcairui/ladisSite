<template>
  <b-container>
    <b-row>
      <!-- 资料下载，常见问题 -->
      <b-col v-for="val in [down, problem]" :key="val.title" cols="6" sm="4">
        <b-link :href="val.href" class="text-decoration-none">
          <div class="d-flex flex-row">
            <div class="d-none d-lg-block">
              <b-img
                :src="val.src"
                :alt="val.title"
                class="d-inline"
                width="155"
              />
            </div>
            <span class="d-flex flex-column py-3 px-2">
              <h4 class="text-primary text-nowrap">{{ val.title }}</h4>
              <span class="flex-grow-1 text-dark">
                <p
                  v-for="text in val.content"
                  :key="text[0]"
                  class="m-0 p-0 show-p"
                >
                  {{ text.join('/') }}
                </p>
              </span>
              <span class="d-none d-md-block small mt-2">
                <i
                  class="px-2 rounded-pill bg-secondary text-light p-1 small"
                >{{ $t('dian-ji-jin-ru') }}>></i>
              </span>
            </span>
          </div>
        </b-link>
      </b-col>
      <!-- 联系 -->
      <b-col cols="6" sm="4">
        <div class="d-flex flex-row">
          <div class=" d-none d-lg-block">
            <b-img src="~/assets/down3.png" class="d-inline shimgw" />
          </div>

          <span
            v-if="defaults.home.contact"
            class="d-flex flex-column  py-3 px-2"
          >
            <h4 class="text-primary text-nowrap">
              {{ $t('lian-xi-fang-shi') }}
            </h4>
            <span class="flex-grow-1 ">
              <b-link
                v-if="defaults.home.contact.qq"
                class="text-decoration-none d-block text-dark mb-1 tel-p  font-weight-bold"
                :href="
                  `tencent://message/?Site=baidu.com&uin=${defaults.home.contact.qq}&Menu=yes`
                "
                target="_blank"
              >QQ:{{ defaults.home.contact.qq }}</b-link>
              <b-link
                v-for="tel in defaults.home.contact.tel"
                :key="tel"
                class="text-decoration-none d-block text-dark mb-1 tel-p   font-weight-bold"
              >{{ tel }}</b-link>
            </span>
          </span>
          <span v-else class="d-flex flex-column  py-3 px-2">
            <h5 class="text-primary">
              {{ $t('lian-xi-fang-shi') }}
            </h5>
            <span class="flex-grow-1 ">
              <b-link
                class="text-decoration-none d-block text-dark mb-1 show-p"
                href="/buy"
              >全国服务网点</b-link>
            </span>
            <span class="d-none d-lg-block small">
              <b-link
                class="px-2 rounded-pill bg-secondary text-light"
                href="/buy"
                target="_blank"
              >{{ $t('dian-ji-jin-ru') }}>>>></b-link>
            </span>
          </span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { support } from './hrefs'
export default Vue.extend({
  data () {
    return {
      defaults: this.$store.state.defaults
    }
  },
  computed: {
    // 资料下载
    down () {
      const locale = this.$i18n.locale
      return {
        src: require('~/assets/down1.png'),
        href: support['监控软件下载'],
        title: this.$t('zi-liao-xia-zai'),
        locale,
        content: [
          [this.$t('ruan-jian-xia-zai')], [this.$t('zi-zhi-xia-zai')],
          [this.$t('cai-ye-xia-zai')], [this.$t('chan-pin-wei-xiu')]
        ]
      }
    },
    // 常见问题
    problem () {
      const locale = this.$i18n.locale
      return {
        src: require('~/assets/down2.png'),
        href: support['常见问题'],
        title: this.$t('chang-jian-wen-ti'),
        locale,
        content: [
          [this.$t('ruan-jian-she-zhi')], [this.$t('dian-chi-lian-jie')],
          [this.$t('ying-jian-an-zhuang')], [this.$t('cuo-wu-dai-ma')],
          [this.$t('ji-shu-wen-dang')]
        ]
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.show-p {
  font-size: 16px;
}
.tel-p {
  font-size: 16px;
}
.shimgw {
  width: 155px;
}
</style>
