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
    <!-- <b-row no-gutters>
      <b-col cols="12" class="bg-dark p-1">
        <div class="d-flex justify-content-center">
          <b-link
            :href="problemTitle.href"
            target="_blank"
            class="text-light stretched-link m-1 text-decoration-none text-nowrap"
          >
            <svg
              t="1593997878559"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5807"
              height="24"
              style="max-width: 20px"
            >
              <path
                d="M849.170732 0c97.404878 0 174.829268 77.42439 174.829268 174.829268v674.341464c0 97.404878-77.42439 174.829268-174.829268 174.829268H174.829268c-97.404878 0-174.829268-77.42439-174.829268-174.829268V174.829268c0-97.404878 77.42439-174.829268 174.829268-174.829268h674.341464z m-224.780488 252.253659H257.24878c-17.482927 2.497561-32.468293 22.478049-32.468292 42.458536v444.565854c2.497561 22.478049 17.482927 39.960976 34.965853 39.960975H724.292683c17.482927-2.497561 32.468293-19.980488 32.468293-42.458536V382.126829c-2.497561-22.478049-17.482927-39.960976-34.965854-39.960975h-34.965854v392.117073h-27.47317V294.712195c-4.995122-24.97561-19.980488-42.458537-34.965854-42.458536z m-64.936585 374.634146v42.458536H294.712195v-42.458536h264.741464z m0-87.414634v42.458536H294.712195v-42.458536h264.741464z m-132.370732-174.829269v132.370732h-132.370732v-132.370732h132.370732z m127.37561 87.414635l4.995122 42.458536h-99.902439v-42.458536h94.907317z m0-87.414635l4.995122 42.458537h-99.902439v-42.458537h94.907317z"
                fill="#38B781"
                p-id="5808"
              />
            </svg>
            {{ problemTitle.title }}
          </b-link>
        </div>
      </b-col>
    </b-row> -->
    <b-row no-gutters>
      <b-col class="bg-dark">
        <b-container>
          <div class="d-flex justify-content-center">
            <span class="opt-li">
              <b-link :to="hrefs.news['全部新闻']">
                <div class="d-flex">
                  <b-img src="/pic/q1.png" class="d-none d-lg-block" />
                  <div>
                    <h2>新闻资讯</h2>
                    <p class="d-none d-lg-block">第一时间了解最新资讯</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link :to="hrefs.product['所有产品']">
                <div class="d-flex">
                  <b-img src="/pic/q2.png" class="d-none d-lg-block" />
                  <div>
                    <h2>产品中心</h2>
                    <p class="d-none d-lg-block">实时掌控产品动态</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link :to="hrefs.support['服务支持']">
                <div class="d-flex">
                  <b-img src="/pic/q3.png" class="d-none d-lg-block" />
                  <div>
                    <h2>服务中心</h2>
                    <p class="d-none d-lg-block">满足需求 想客户之所想</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link :to="hrefs.about['公司简介']">
                <div class="d-flex">
                  <b-img src="/pic/q4.png" class="d-none d-lg-block" />
                  <div>
                    <h2>关于我们</h2>
                    <p class="d-none d-lg-block">以人为本 服务领先</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link :to="hrefs.cases['成功案例']">
                <div class="d-flex">
                  <b-img src="/pic/q5.png" class="d-none d-lg-block" />
                  <div>
                    <h2>成功案例</h2>
                    <p class="d-none d-lg-block">了解客户对我们的评价</p>
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
        <h3 class="text-center py-4 d-none d-lg-block">
          致力于提供高效节能的电源、制冷、配电等数据中心机房一体化解决方案
        </h3>
      </b-col>
    </b-row>
    <b-row no-gutters class="mb-4 d-none d-lg-block">
      <b-col>
        <b-container class="d-flex">
          <b-row no-gutters>
            <b-col cols="3" class="opt-2">
              <b-img fluid src="/pic/n1.jpg" />
              <div class="content">
                <span class="bg"></span>
                <div class="d-flex flex-column align-content-center content-child">
                  <b-img src="/pic/n1_2.png" />
                  <span class="br">_</span>
                  <h3>关于我们</h3>
                  <p class="p-0" v-html="info.gsjj"></p>
                  <b-link
                    :to="hrefs.about['公司简介']"
                    class="py-2 px-4 border button stretched-link"
                    >查看详情</b-link
                  >
                </div>
              </div>
            </b-col>
            <b-col cols="3" class="opt-2">
              <b-img fluid src="/pic/n2.jpg" />
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
                  <b-link
                    :to="hrefs.news['全部新闻']"
                    class="py-2 px-4 border stretched-link button"
                    >查看详情</b-link
                  >
                </div>
              </div>
            </b-col>
            <b-col cols="3" class="opt-2">
              <b-img fluid src="/pic/n3.jpg" />
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
                  <b-link
                    :to="hrefs.product['所有产品']"
                    class="py-2 px-4 border button stretched-link"
                    >查看详情</b-link
                  >
                </div>
              </div>
            </b-col>
            <b-col cols="3" class="opt-2">
              <b-img fluid src="/pic/n4.jpg" />
              <div class="content">
                <span class="bg"></span>
                <div class="d-flex flex-column align-content-center content-child">
                  <b-img src="/pic/n4_2.png" />
                  <span class="br">_</span>
                  <h3>联系我们</h3>
                  <p class="p-0" v-html="info.lxwm"></p>
                  <b-link
                    :to="hrefs.about['联系我们']"
                    class="py-2 px-4 border stretched-link button"
                    >查看详情</b-link
                  >
                </div>
              </div>
            </b-col>
          </b-row>
          <!-- <div class="opt-2 flex-fill">
            <b-img fluid src="/pic/n1.jpg" />
          </div>
          <div class="opt-2 flex-fill">
            <b-img src="/pic/n2.jpg" />
          </div>
          <div class="opt-2 flex-fill">
            <b-img src="/pic/n3.jpg" />
          </div>
          <div class="opt-2 flex-fill">
            <b-img src="/pic/n4.jpg" />
          </div> -->
        </b-container>
      </b-col>
    </b-row>
    <!-- <b-row no-gutters class="p-4">
      <b-col>
        <h2 class="text-center text-primary">
          {{ $t("shou-hou-zhi-chi") }}
        </h2>
        <my-section />
      </b-col>
    </b-row> -->
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
      const gsjj = body.find((el) => el.type === "公司简介")?.content;
      const lxwm = body.find((el) => el.type === "联系我们")?.content;

      /* const t1 = document.createElement("div");
      t1.innerHTML = gsjj!;

      console.log({ gsjj, lxwm, t1t: t1.innerText }); */
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
      .br {
        transition: all 0.3s;
        margin-top: 1rem;
        color: #fff;
      }
      .button {
        transition: all 0.5s;
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
</style>
