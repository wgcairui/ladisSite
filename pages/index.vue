<template>
  <b-container fluid class="h-100 d-flex flex-column">
    <b-row no-gutters class="flex-grow-1">
      <b-col cols="12">
        <b-carousel
          id="carousel-1"
          :interval="3000"
          fade
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-end="swithProblem"
        >
          <b-carousel-slide v-for="src in carousel" :key="String(src)">
            <template v-slot:img>
              <b-img
                class="w-100"
                :src="src"
                :srcset="generateImgsString(src)"
                @click="linkvr(src)"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col class="bg-dark">
        <b-container>
          <div class="d-flex justify-content-center">
            <span class="opt-li">
              <b-link :to="hrefs.news['全部新闻']">
                <div class="d-flex">
                  <b-img src="/pic/q1.png" class=" sm-hide" />
                  <div>
                    <h2>新闻资讯</h2>
                    <p class=" sm-hide">第一时间了解最新资讯</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link :to="hrefs.product['所有产品']">
                <div class="d-flex">
                  <b-img src="/pic/q2.png" class=" sm-hide" />
                  <div>
                    <h2>产品中心</h2>
                    <p class=" sm-hide">实时掌控产品动态</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link :to="hrefs.support['服务支持']">
                <div class="d-flex">
                  <b-img src="/pic/q3.png" class=" sm-hide" />
                  <div>
                    <h2>服务中心</h2>
                    <p class=" sm-hide">满足需求 想客户之所想</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link :to="hrefs.about['公司简介']">
                <div class="d-flex">
                  <b-img src="/pic/q4.png" class=" sm-hide" />
                  <div>
                    <h2>关于我们</h2>
                    <p class=" sm-hide">以人为本 服务领先</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link :to="hrefs.cases['成功案例']">
                <div class="d-flex">
                  <b-img src="/pic/q5.png" class=" sm-hide" />
                  <div>
                    <h2>成功案例</h2>
                    <p class=" sm-hide">了解客户对我们的评价</p>
                  </div>
                </div>
              </b-link>
            </span>
          </div>
        </b-container>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col>
        <h3 class="text-center py-4  sm-hide">
          致力于提供高效节能的电源、制冷、配电等数据中心机房一体化解决方案
        </h3>
      </b-col>
    </b-row>
    <b-row
      no-gutters
      class="mb-4 sm-hide"
      style=" overflow: hidden; max-height: 400px"
    >
      <b-col cols="3" class="position-relative opt-2">
        <b-img src="/pic/n1.jpg" fluid-grow />
        <div class="content">
          <span class="bg"></span>
          <div class="d-flex flex-column align-content-center content-child">
            <b-img src="/pic/n1_2.png" />
            <span class="br">_</span>
            <h3>关于我们</h3>
            <p class="p-0 p-warp">{{ info.gsjj }}</p>

            <b-button
              variant="outline-success"
              :to="hrefs.about['公司简介']"
              class="button"
              >查看详情</b-button
            >
          </div>
        </div>
      </b-col>
      <b-col cols="3" class="position-relative opt-2">
        <img src="/pic/n2.jpg" class="w-100" />
        <div class="content">
          <span class="bg"></span>
          <div class="d-flex flex-column align-content-center content-child">
            <b-img src="/pic/n2_2.png" />
            <span class="br">_</span>
            <h3>新闻</h3>
            <p class="p-0">
              企业新闻
              <br />
              产品新闻
              <br />
              行业新闻
              <br />
            </p>
            <b-button
              variant="outline-success"
              :to="hrefs.news['全部新闻']"
              class="button"
              >查看详情</b-button
            >
          </div>
        </div>
      </b-col>
      <b-col cols="3" class="position-relative opt-2">
        <img src="/pic/n3.jpg" class="w-100" />
        <div class="content">
          <span class="bg"></span>
          <div class="d-flex flex-column align-content-center content-child">
            <b-img src="/pic/n3_2.png" />
            <span class="br">_</span>
            <h3>产品线</h3>
            <p class="p-0">
              UPS电源
              <br />
              数据中心
              <br />
              机房空调
              <br />
            </p>
            <b-button
              variant="outline-success"
              :to="hrefs.product['所有产品']"
              class="button"
              >查看详情</b-button
            >
          </div>
        </div>
      </b-col>
      <b-col cols="3" class="position-relative opt-2">
        <img src="/pic/n4.jpg" class="w-100" />
        <div class="content">
          <span class="bg"></span>
          <div class="d-flex flex-column align-content-center content-child">
            <b-img src="/pic/n4_2.png" />
            <span class="br">_</span>
            <h3>联系我们</h3>
            <p class="p-0 p-warp">{{ info.lxwm }}</p>

            <b-button
              variant="outline-success"
              :to="hrefs.about['联系我们']"
              class="button"
              >查看详情</b-button
            >
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { about } from "~/types/typing";
import MySection from "../components/MySection.vue";
import * as hrefs from "../components/hrefs.js";
// import { caseList } from '../types/typing'
export default Vue.extend({
  components: { MySection },
  async asyncData({ app }) {
    /* const GetNews: any[] = await app.$Api.GetHomeNews().catch(() => {
      return [];
    }); */
    // 获取body
    const body: about[] = await app.$Api.GeneralGetInfo({
      table: "About",
      queryKeys: ["type"],
      type: "公司简介",
    });

    return { body };
  },
  data() {
    return {
      mainProps: {
        center: true,
        blank: true,
        blankColor: "#bbb",
        width: 600,
        height: 100,
      },
      problemNum: 0,
      problemTitle: {
        title: "新闻资讯",
        href: "/news",
      },
      hrefs,
    };
  },
  computed: {
    ...mapState(["agentConfig"]),
    info() {
      const body = (<any>this).body as about[];
      const gsjj =
        body
          .find((el) => el.type === "公司简介")
          ?.content.replace(/<\/?.+?\/?>/g, "")
          .slice(0, 100) + "..." || "";
      const lxwm =
        body
          .find((el) => el.type === "联系我们")
          ?.content.replace(/<\/?.+?\/?>/g, "")
          .replace(/&nbsp;/g, "")
          .slice(0, 100) + "..." || "";
      // console.log({ body, gsjj, lxwm });

      return { gsjj, lxwm };
    },
    carousel() {
      const local = this.$i18n.locale;
      if (local === "zh") {
        return [
          "/banner/banner05-pc.jpg",
          "/banner/banner01-pc.jpg",
          "/banner/banner02-pc.jpg",
          "/banner/banner03-pc.jpg",
          "/banner/banner04-pc.jpg",
        ];
      } else {
        return ["/banner/EN-1-pc.jpg", "/banner/EN-2-pc.jpg", "/banner/EN-3-pc.jpg"];
      }
    },
    newsNum() {
      return this.$data.GetNews.length || 0;
    },
  },
  methods: {
    // 生成图像集
    generateImgsString(Img: string) {
      const Mobile = Img.replace("pc", "mobile");
      const Pad = Img.replace("pc", "pad");
      const Pc = Img;
      return [`${Mobile} 760w`, `${Pad} 1200w`, `${Pc}`];
    },
    swithProblem() {
      /* if (this.$data.problemNum === this.newsNum) {
        this.$data.problemNum = 1;
      } else {
        this.$data.problemNum++;
      }
      if (this.$data.GetNews.length > 0) {
        this.$data.problemTitle = this.$data.GetNews[this.$data.problemNum - 1];
      } */
    },
    linkvr(src: string) {
      if (/banner05-/.test(src)) {
        window.open("https://www.ladis.com.cn/pic/quanjingjifang/");
      }
    },
  },
  head() {
    const self = this as any;
    return {
      title: self.agentConfig.title,
      meta: [
        { name: "keywords", content: self.agentConfig.metaKeywords },
        { name: "description", content: self.agentConfig.metaDescription },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.opt-li {
  padding: 1.5rem 1rem;
  transition: all 0.3s;
  * {
    text-decoration: none;
  }
  h2 {
    color: #fff;
    font-size: 1.2rem;
  }
  p {
    font-size: 0.8rem;
    color: #fff;
    opacity: 0.8;
  }
  img {
    height: 32px;
    padding-top: 8px;
    padding-right: 10px;
  }
}
.opt-li:hover {
  background-color: #0066ca;
  p {
    opacity: 1;
  }
}

.opt-2 {
  position: relative;
  height: 100%;
  div {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .content {
    .bg {
      background: #161a1d;
      opacity: 0.6;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .content-child {
      align-items: center;
      padding: 2rem;
      img {
        transition: margin-top 0.6s;
        width: 66px;
        margin-top: 2rem;
      }
      h3,
      p,
      a {
        transition: margin-top 0.3s, display 0.3s;
        color: #fff;
        margin-top: 2rem;
      }
      .p-warp{
        white-space: pre-wrap;
        word-wrap: break-word;
        width: 100%;
      }
      .br {
        transition: all 0.3s;
        margin-top: 1rem;
        color: #fff;
      }
      .button {
        transition: all 0.5s;
        margin-top: auto;
      }
      .button:hover {
        background: #fff;
        color: #00c1de;
      }
      p,
      .button {
        display: none;
        padding: 0.7rem 1.2rem;
        color: #fff;
        font-size: 0.9rem;
        overflow: hidden;
      }
    }
    .content-child:hover {
      img {
        margin-top: 0rem;
      }
      .br {
        margin-top: 0;
        line-height: 0;
        color: #161a1d;
      }
      h3,
      p {
        margin-top: 0.6rem;
      }
      p,
      .button {
        display: block;
      }
    }
  }
  .content:hover {
    .bg {
      background: #0066ca;
      opacity: 0.9;
    }
  }
}

.list-block {
  padding: 0 20%;
}

.sm-hide{
padding: 0px 15%;
}
@media screen and (max-width: 480px) {
  .sm-hide{
    display: none;
    padding: 0 5%;
  }
}
</style>
