<template>
  <b-container fluid class=" h-100 d-flex flex-column">
    <b-row no-gutters class=" flex-grow-1">
      <b-col cols="12">
        <b-carousel
          id="carousel-1"
          :interval="3000"
          fade
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-end="swithProblem"
        >
          <b-carousel-slide v-for="src in carousel" :key="String(src)">
            <template v-slot:img>
              <b-img
                class=" w-100"
                :src="src"
                :srcset="generateImgsString(src)"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col cols="12" class="bg-dark p-1">
        <div class="d-flex justify-content-center ">
          <b-link
            :href="`/news/${problemTitle}`"
            class="text-light stretched-link m-1 text-decoration-none"
          >
            {{ problemTitle }}
          </b-link>
        </div>
      </b-col>
    </b-row>
    <b-row no-gutters class=" p-4">
      <b-col>
        <h3 class="my-3 text-center text-primary">
          售后支持
        </h3>
        <b-container>
          <b-row>
            <b-col
              v-for="val in [down, problem]"
              :key="val.title"
              cols="6"
              sm="4"
            >
              <b-link :href="val.href" class="text-decoration-none">
                <div class="d-flex flex-row">
                  <div class="d-none d-lg-block">
                    <b-img
                      :src="val.src"
                      :alt="val.title"
                      class="d-inline shimgw "
                    />
                  </div>
                  <span class="d-flex flex-column py-3 px-2">
                    <h5 class="text-primary">{{ val.title }}</h5>
                    <span class="flex-grow-1 text-dark">
                      <p
                        v-for="text in val.content"
                        :key="text[0]"
                        class="m-0 p-0 show-p"
                      >
                        {{ text.join('/') }}
                      </p>
                    </span>
                    <span class="d-none d-md-block">
                      <i
                        class="px-2 rounded-pill bg-secondary text-light"
                      >点击进入>></i>
                    </span>
                  </span>
                </div>
              </b-link>
            </b-col>
            <!-- <b-col cols="6" sm="4">
              <div class="d-flex flex-row">
                <div class=" d-none d-lg-block">
                  <b-img
                    :src="serve[localUrl].src"
                    class="d-inline shimgw"
                  />
                </div>

                <span class="d-flex flex-column p-4">
                  <h5 class="text-primary">
                    {{ serve[localUrl].title }}
                  </h5>
                  <span class="flex-grow-1 ">
                    <b-link
                      v-for="sl in serve[localUrl]['content']"
                      :key="sl.text"
                      class="text-decoration-none d-block text-dark mb-1 show-p"
                      :href="sl.src"
                      target="_blank"
                    >{{ sl.text }}</b-link>
                  </span>
                  <span class="d-none d-lg-block">
                    <b-link
                      class="px-2 rounded-pill bg-secondary text-light"
                      :href="serve[localUrl].href"
                      target="_blank"
                    >点击进入>></b-link>
                  </span>
                </span>
              </div>
            </b-col> -->
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import picSourec from '../assets/picSourec'
export default Vue.extend({
  async asyncData ({ app }) {
    const GetNews: string[] = await app.$Api
      .GetHomeNews()
      .then((el: { title: string }[]) => {
        if (el.length === 0) {
          return []
        }
        return el.map(em => em.title)
      })
    const carousel = [
      'banner/banner01-mobile.jpg',
      'banner/banner02-mobile.jpg',
      'banner/banner03-mobile.jpg',
      'banner/banner04-mobile.jpg'
    ]
    return { GetNews, carousel }
  },
  data () {
    return {
      mainProps: {
        center: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 100
      },
      problemNum: 0,
      problemTitle: '室外一体化机柜的组成'
    }
  },
  computed: {
    newsNum () {
      return this.$data.GetNews.length || 0
    },
    ...mapState(['localSite', 'localUrl']),
    // 资料下载
    down () {
      return {
        src: picSourec.ziliaoxizao,
        href: '/support/监控软件下载',
        title: '资料下载',
        content: [
          ['软件下载', '资质下载'],
          ['彩页下载', '产品维修']
        ]
      }
    },
    // 常见问题
    problem () {
      return {
        src: picSourec.changjianwenti,
        href: '/support/常见问题',
        title: '常见问题',
        content: [
          ['软件设置', '电池连接'],
          ['硬件安装', '错误代码'],
          ['技术文档']
        ]
      }
    },
    // 服务
    serve () {
      return {
        localhost: {
          src: picSourec.fuwuwangdian,

          href: '/buy/',
          title: '服务网点',
          content: [
            {
              text: '全国服务网点',
              src: '/buy/'
            }
          ]
        },
        'www.ladis.com.cn': {
          src: picSourec.fuwuwangdian,

          href: '/buy/',
          title: '服务网点',
          content: [
            {
              text: '全国服务网点',
              src: '/buy/'
            }
          ]
        },
        'www.ladishb.com': {
          src: picSourec.fuwuwangdian,
          title: '客户咨询',
          href: 'tencent://message/?Site=baidu.com&uin=15713024&Menu=yes',
          content: [
            {
              text: 'QQ:15713024',
              src: 'tencent://message/?Site=baidu.com&uin=15713024&Menu=yes'
            },
            { text: '张先生:18271826065', src: '#' }
          ]
        }
      }
    }
  },
  methods: {
    // 生成图像集
    generateImgsString (Img: string) {
      const Mobile = Img
      const Pad = Img.replace('mobile', 'pad')
      const Pc = Img.replace('mobile', 'pc')
      return [`${Mobile} 760w`, `${Pad} 1200w`, `${Pc}`]
    },
    swithProblem () {
      if (this.$data.problemNum === this.newsNum) {
        this.$data.problemNum = 1
      } else {
        this.$data.problemNum++
      }
      this.$data.problemTitle = this.$data.GetNews[this.$data.problemNum - 1]
    }
  },

  head: {
    title: 'UPS电源_不间断电源_精密空调_机房一体化机柜_数据中心建设-雷迪司',
    meta: [
      {
        name: 'keywords',
        content: `雷迪司,UPS,机房专用空调,UPS电源,不间断电源,机房空调,精密空调,微模块,模块化机房,
          数据中心,精密配电柜,UPS蓄电池,一体化机柜`
      },
      {
        name: 'description',
        content: `雷迪司(LADS厂家官网)-提供UPS电源、不间断电源蓄电池、专用机房空调、恒温恒湿精密空调、
          机房精密配电柜、智能一体化机柜、动力环境监控、微模块化机房冷通道机柜等数据中心工程建设解决方案。
          研发、生产、维修：UPS不间断电源、UPS蓄电池、机房专用空调、恒温恒湿精密空调、柜式机房、动环监控系统、
          微模块化数据中心等机房一体化产品。销售服务中心遍及：
          北京市、上海、杭州、石家庄、合肥、成都、武汉、长沙、福州、厦门、南京、郑州、南昌、南宁、长沙、天津、
          济南、太原、西安、重庆、贵阳、昆明、兰州、宁夏、西宁、呼和浩特、乌鲁木齐、拉萨、沈阳等城市，
          机房装修建设就找深圳雷迪司科技股份有限公司`
      }
    ]
  }
})
</script>

<style lang="scss">
#carousel-1 {
  min-height: 100%;
}
.show-p {
  font-size: small;
}
.shimgw {
  width: 155px;
}
</style>
