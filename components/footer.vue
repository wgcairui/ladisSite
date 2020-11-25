<template>
  <b-col cols="12">
    <b-row class="bg-dark px-4 pt-3 pb-0">
      <b-col>
        <b-container>
          <b-row class="mb-5">
            <b-col v-if="showProduct" cols="6" sm="4" :md="md">
              <ul>
                <li>
                  <h5 class="text-light text-truncate">{{ $t('section.gk11oe') }}</h5>
                </li>
                <li>
                  <nuxt-link :to="product['UPS电源']">{{ $t('section.4t9bzs') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="product['数据中心']">{{ $t('section.4r35dn') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="product['机房空调']">{{ $t('section.f7h57b') }}</nuxt-link>
                </li>
              </ul>
            </b-col>
            <b-col cols="6" sm="4" :md="md">
              <ul>
                <li>
                  <h5 class="text-light text-truncate">{{ $t('section.q5vjss') }}</h5>
                </li>
                <li v-if="showBuy">
                  <nuxt-link :to="about['销售服务中心']">{{ $t('section.ps0tuh') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="support['服务支持']">{{ $t('section.y2a257') }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="support['常见问题']">{{ $t('section.o5n0th') }}</nuxt-link>
                </li>
              </ul>
            </b-col>
            <b-col v-if="showBuy" cols="6" sm="4" :md="md">
              <ul>
                <li>
                  <h5 class="text-light text-truncate">{{ $t('section.21ws8d') }}</h5>
                </li>
                <li v-if="showBuy">
                  <nuxt-link :to="about['经销商列表']">{{ $t('section.u7wjbw') }}</nuxt-link>
                </li>
                <li v-if="showBuy">
                  <a href="https://lgsm.tmall.com/">
                    {{
                    $t('section.6v39gj')
                    }}
                  </a>
                </li>
                <li v-if="showBuy">
                  <a href="https://leidisi.tmall.com/" target="_bank">
                    {{
                    $t('section.k9mydj')
                    }}
                  </a>
                </li>
                <li v-if="showBuy">
                  <a href="https://mall.jd.com/index-131620.html" target="_bank">
                    {{
                    $t('section.pfuunc')
                    }}
                  </a>
                </li>
                <!-- <li v-for="(val,key) in defaults.buy.userMall || []" :key="key">
                  <a
                    :href="val.src || '#'"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{ val.title || '' }}</a>
                </li>-->
              </ul>
            </b-col>
            <b-col cols="6" sm="4" md="3">
              <ul>
                <li>
                  <h5 class="text-light text-truncate">{{ $t('guan-yu-wo-men') }}</h5>
                </li>
                <li>
                  <nuxt-link :to="about['公司简介']">{{ $t('section.v0otza') }}</nuxt-link>
                </li>
                <li v-if="showNews">
                  <nuxt-link :to="news['全部新闻']">{{ $t('section.qis2vp') }}</nuxt-link>
                </li>
              </ul>
            </b-col>
            <b-col cols="6" sm="4" :md="md">
              <ul>
                <li>
                  <h5 class="text-light text-truncate">{{ $t('section.ri1giq') }}</h5>
                </li>
                <li>
                  <a href="http://www.pesiv.com" target="_bank">
                    {{
                    $t('section.l7qkwb')
                    }}
                  </a>
                </li>
                <!-- <li>
                  <a href="http://116.62.48.175:81" target="_bank">{{
                    $t('section.wkyimq')
                  }}</a>
                </li>-->
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="p-0 bg-dark p-2 d-flex flex-column flex-sm-row flex-wrap">
        <div>
          <nuxt-link to="/sitemap" class="px-1">{{ $t('footer.9c708c') }}</nuxt-link>

          <nuxt-link :to="about['联系我们']" class="px-1">{{ $t('footer.fp5qvs') }}</nuxt-link>

          <nuxt-link :to="about['加入我们']" class="px-1">{{ $t('footer.ce1e0h') }}</nuxt-link>

          <nuxt-link :to="about['使用声明']" class="px-1">{{ $t('footer.amhzvr') }}</nuxt-link>

          <nuxt-link :to="about['隐私政策']" class="px-1">{{ $t('footer.5d7lkm') }}</nuxt-link>
        </div>
        <div class></div>
        <div class="beian">
          <span class="d-flex flex-column flex-sm-row align-items-center">
            <span>
              <em>© 2019 All Rights Reserved</em>
            </span>
            <span>{{ name }}</span>
            <b-link target="_blank" href="https://beian.miit.gov.cn">
              {{
              agentConfig.beian
              }}
            </b-link>
            <span>
              <b-link
                v-if="agentConfig.wangan"
                target="_blank"
                href="http://www.beian.gov.cn"
              >{{ agentConfig.wangan }}</b-link>
            </span>
          </span>
        </div>
      </b-col>
    </b-row>
    <div class="row foot-nav-pc friendlink" style="display:none;">
      <div class="row friendlylist">
        <div class="col-md-12 left">&nbsp;</div>
        <div class="col-md-12 right">
          <a>友情链接：</a>
          <a
            v-for="(share, key ) in linkFrend"
            :key="key"
            :href="share.link"
            target="_blank"
            alt="触摸一体机"
          >{{ share.name }}</a> &nbsp;&nbsp;
        </div>
      </div>
    </div>
  </b-col>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import { product, support, about, news } from './hrefs'
  export default Vue.extend({
    name: 'LadisFooter',
    data() {
      return {
        product,
        support,
        about,
        news,
        md: this.$store.state.showBuy ? 2 : 3
      }
    },
    computed: {
      ...mapState(['agentConfig', 'name', 'showProduct', 'showBuy', 'showCase', 'showNews', 'showLaungua', 'linkFrend'])
    }
  })
</script>

<style lang="scss" scoped>
  @media (min-width: 576px) {
    .colsm-2 {
      flex: 0 0 20%;
      max-width: 20%;
      height: fit-content;
    }
    ul {
      list-style: inside;
      padding-left: 2rem;
    }
    .beian {
      margin-left: auto;
    }
    .beian span {
      margin-left: 0px;
    }
  }

  .beian span {
    margin-left: 8px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  * {
    color: rgba(255, 255, 255, 0.5);
  }
  .section {
    height: min-content;
    width: 100%;
    background-color: #333;
    padding: 10px 25px;
  }
  .main {
    width: 100%;
  }
  .col-20 {
    width: 17%;
    border-right: ridge 1px;
    margin: 5px;
  }
  a:hover {
    color: white;
  }
  em,
  span,
  a,
  strong {
    color: aliceblue;
  }
  strong {
    font-size: 1.2rem;
  }
</style>
