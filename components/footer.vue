<template>
  <b-col cols="12">
    <b-row class="dark">
      <b-col>
        <b-container class="footer-1">
          <ul>
            <li>
              <h5>{{ $t("section.gk11oe") }}</h5>
            </li>
            <li>
              <nuxt-link :to="product['UPS电源']">{{ $t("section.4t9bzs") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="product['数据中心']">{{ $t("section.4r35dn") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="product['机房空调']">{{ $t("section.f7h57b") }}</nuxt-link>
            </li>
          </ul>
          <ul>
            <li>
              <h5>{{ $t("section.q5vjss") }}</h5>
            </li>
            <li v-if="showBuy">
              <nuxt-link :to="about['销售服务中心']">{{
                $t("section.ps0tuh")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="support['服务支持']">{{ $t("section.y2a257") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="support['常见问题']">{{ $t("section.o5n0th") }}</nuxt-link>
            </li>
            <li>
              <a v-for="tm in tmls" :key="tm.title" :href="tm.src" target="_blank">
                {{ tm.title }}
              </a>
            </li>
          </ul>
          <ul v-if="showBuy">
            <li>
              <h5>{{ $t("section.21ws8d") }}</h5>
            </li>
            <li>
              <nuxt-link :to="about['经销商列表']">{{ $t("section.u7wjbw") }}</nuxt-link>
            </li>
            <li>
              <a href="https://lgsm.tmall.com/">{{ $t("section.6v39gj") }}</a>
            </li>
            <li>
              <a href="https://leidisi.tmall.com/" target="_bank">
                {{ $t("section.k9mydj") }}
              </a>
            </li>
            <li>
              <a href="https://mall.jd.com/index-131620.html" target="_bank">
                {{ $t("section.pfuunc") }}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <h5>{{ $t("guan-yu-wo-men") }}</h5>
            </li>
            <li>
              <nuxt-link :to="about['公司简介']">{{ $t("section.v0otza") }}</nuxt-link>
            </li>
            <li v-if="showNews">
              <nuxt-link :to="news['全部新闻']">{{ $t("section.qis2vp") }}</nuxt-link>
            </li>
          </ul>
          <ul>
            <li>
              <h5>{{ $t("section.ri1giq") }}</h5>
            </li>
            <li v-if="showPlatform">
              <a href="http://www.pesiv.com" target="_bank">
                {{ $t("section.l7qkwb") }}
              </a>
            </li>
            <!-- <li>
                  <a href="http://116.62.48.175:81" target="_bank">{{
                    $t('section.wkyimq')
                  }}</a>
                </li>-->
          </ul>
        </b-container>
      </b-col>
    </b-row>
    <b-row class="footer-2">
      <b-col cols="12" class="bg-dark">
        <div class="links">
          <nuxt-link to="/sitemap" class="px-1">{{ $t("footer.9c708c") }}</nuxt-link>

          <nuxt-link :to="about['联系我们']" class="px-1">{{
            $t("footer.fp5qvs")
          }}</nuxt-link>

          <nuxt-link :to="about['加入我们']" class="px-1">{{
            $t("footer.ce1e0h")
          }}</nuxt-link>

          <nuxt-link :to="about['使用声明']" class="px-1">{{
            $t("footer.amhzvr")
          }}</nuxt-link>

          <nuxt-link :to="about['隐私政策']" class="px-1">{{
            $t("footer.5d7lkm")
          }}</nuxt-link>
        </div>
        <div class></div>
        <div class="beian">
          <span class="beian-links">
            <span>
              <em>© 2019 All Rights Reserved</em>
            </span>
            <span>{{ name }}</span>
            <b-link target="_blank" href="https://beian.miit.gov.cn">
              {{ agentConfig.beian }}
            </b-link>
            <span>
              <b-link
                v-if="agentConfig.wangan"
                target="_blank"
                href="http://www.beian.gov.cn"
                >{{ agentConfig.wangan }}</b-link
              >
            </span>
          </span>
        </div>
      </b-col>
    </b-row>
    <div class="row foot-nav-pc friendlink" style="display: none">
      <div class="row friendlylist">
        <div class="col-md-12 left">&nbsp;</div>
        <div class="col-md-12 right">
          <a>友情链接：</a>
          <a
            v-for="(share, key) in linkFrend"
            :key="key"
            :href="share.link"
            target="_blank"
            alt="触摸一体机"
            >{{ share.name }}</a
          >
          &nbsp;&nbsp;
        </div>
      </div>
    </div>
  </b-col>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { product, support, about, news } from "../static/hrefs";
export default Vue.extend({
  name: "LadisFooter",
  data() {
    return {
      product,
      support,
      about,
      news,
      md: this.$store.state.showBuy ? 2 : 3,
    };
  },
  computed: {
    ...mapState([
      "agentConfig",
      "name",
      "showProduct",
      "showBuy",
      "showCase",
      "showNews",
      "showPlatform",
      "showLaungua",
      "linkFrend",
    ]),
    tmls() {
      const tmls = this.agentConfig.tml as string[];
      if (tmls && tmls.length > 0) {
        return tmls.map((el) => {
          const [title, src] = el.split("+");
          return { title, src };
        });
      } else {
        return [];
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.dark {
  background-color: #343a40;
}

$dark: #343a40;
.footer-1 {
  padding-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
    li > a,
    li > h5 {
      color: #fff;
      text-decoration: none;
    }
  }
}

.footer-2 {
  .bg-dark {
    padding: 0.2rem 0;
    display: flex;
  }
  div > a,
  .beian * {
    color: #fff;
    text-decoration: none;
  }

  .beian {
    margin-left: auto;
    * {
      margin: 0 0.1rem;
    }
  }
}

@media screen and (max-width: 576px) {
  .dark {
    padding: 0;
    background-color: $dark !important;
  }

  .footer-1 {
    margin-bottom: 3rem;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: unset;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      h5,
      a {
        color: #fff !important;
      }
    }
  }

  .footer-2 {
    .bg-dark {
      display: block !important;
      .links {
        display: flex;
        justify-content: space-evenly;
      }

      a,
      span {
        color: #fff;
        font-size: 0.9rem;
      }
    }
  }
}
/* @media screen and (min-width: 576px) {
      .footer-1 {
        li > a {
          font-size: 0.8rem;
          color: #fff;
        }
      }

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
    } */
</style>
