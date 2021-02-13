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
              <b-link>
                <div class="d-flex">
                  <b-img src="/pic/q1.png" />
                  <div>
                    <h2>新闻资讯</h2>
                    <p>第一时间了解最新资讯</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link>
                <div class="d-flex">
                  <b-img src="/pic/q2.png" />
                  <div>
                    <h2>产品中心</h2>
                    <p>实时掌控产品动态</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link>
                <div class="d-flex">
                  <b-img src="/pic/q3.png" />
                  <div>
                    <h2>服务中心</h2>
                    <p>满足需求 想客户之所想</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link>
                <div class="d-flex">
                  <b-img src="/pic/q4.png" />
                  <div>
                    <h2>关于我们</h2>
                    <p>以人为本 服务领先</p>
                  </div>
                </div>
              </b-link>
            </span>
            <span class="opt-li">
              <b-link>
                <div class="d-flex">
                  <b-img src="/pic/q5.png" />
                  <div>
                    <h2>成功案例</h2>
                    <p>了解客户对我们的评价</p>
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
        <h3 class="text-center py-4">
          致力于提供高效节能的电源、制冷、配电等数据中心机房一体化解决方案
        </h3>
      </b-col>
    </b-row>
    <b-row no-gutters class="mb-4">
      <b-col>
        <b-container class="d-flex">
          <div class="opt-2 flex-fill">
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
          </div>
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
import MySection from "../components/MySection.vue";
// import { caseList } from '../types/typing'
export default Vue.extend({
  components: { MySection },
  async asyncData({ app }) {
    const GetNews: any[] = await app.$Api.GetHomeNews().catch(() => {
      return [];
    });
    return { GetNews };
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
    };
  },
  computed: {
    ...mapState(["agentConfig"]),
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
      if (this.$data.problemNum === this.newsNum) {
        this.$data.problemNum = 1;
      } else {
        this.$data.problemNum++;
      }
      if (this.$data.GetNews.length > 0) {
        this.$data.problemTitle = this.$data.GetNews[this.$data.problemNum - 1];
      }
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
  img {
    max-width: 30px;
  }
}
</style>
