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
          <my-section />
        </h3>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import MySection from '../components/MySection.vue'
export default Vue.extend({
  components: { MySection },
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
  }
})
</script>
