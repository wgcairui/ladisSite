<template>
  <b-container>
    <b-row no-gutters>
      <!-- 导航栏 -->
      <b-col cols="12">
        <b-breadcrumb :items="items" class=" bg-light" />
      </b-col>
      <!-- 标题 -->
      <b-col cols="12" class="border-bottom">
        <h4 class="text-capitalize">
          {{ all.title }}
        </h4>
      </b-col>
      <!-- contont -->
      <b-col cols="12">
        <b-row no-gutters class="p-4">
          <!-- 轮播图 -->
          <b-col cols="12" md="6" class="carousel px-2">
            <b-carousel
              id="carousel-345"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              style="text-shadow: 1px 1px 2px #333;"
            >
              <b-carousel-slide v-for="val in all.img" :key="val">
                <template v-slot:img>
                  <my-img :src="val" alt="Image 1" />
                  <!-- <b-img-lazy v-bind="mainProps" :src="val" alt="Image 1"></b-img-lazy> -->
                </template>
              </b-carousel-slide>
            </b-carousel>
          </b-col>
          <!-- 说明 -->
          <b-col cols="12" md="6" class="t1 px-2">
            <!-- <div v-if="all.t1" class="ql-editor" v-html="all.t1.content" /> -->
            <div class="ql-editor" v-html="all.head" />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="p-5 border-top">
        <b-row>
          <b-col>
            <div v-html="all.body" />
          </b-col>
          <!-- <b-col cols="12" class="mb-3">
            <strong>{{ $t('chan-pin-te-dian') }}</strong>
          </b-col>
          <b-col cols="12" class="t2">
            <div
              v-if="all.t2"
              class="t2-s content-img"
              v-html="all.t2.content"
            />
            <div v-else class="content-img" v-html="all.content_body " />
          </b-col>
          <b-col v-if="all.t2 && all.t2.type != 'html'" cols="12" class="down">
            <h4>{{ $t('list._id.q9xyoe') }}</h4>
            <b-list-group>
              <b-list-group-item v-for="val in all.down" :key="val.title">
                <b-link target="_blank" :href="val.href">
                  {{ val.title }}
                </b-link>
              </b-list-group-item>
            </b-list-group>
          </b-col> -->
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import MyImg from '../../../../components/MyImg.vue'
import { product } from '../../../../components/hrefs'
import { productList } from '../../../../types/typing'
export default Vue.extend({
  components: {
    MyImg
  },
  async asyncData ({ app, params }) {
    const MainUrl = '/products/' + Object.values(params).join('/')

    const result:productList[] = await app.$Api.GeneralGetInfo({
      table: 'Product_list',
      queryKeys: ['MainUrl'],
      MainUrl
    })
    return { all: result[0] }
  },
  computed: {
    items () {
      return [
        { text: this.$t('zhu-ye'), href: '/' },
        { text: this.$t('chan-pin-fen-lei'), href: '/products' },
        { text: this.$data.all.MainParent, href: (product as any)[this.$data.all.MainParent] },
        { text: this.$data.all.title }
      ]
    }
  },
  head () {
    const Page = this.$data.all
    return {
      title: `${Page.PageTitle} - ${this.$defaults.name}`,
      meta: [
        {
          name: 'keywords',
          content: Page.Pagekeywords
        },
        {
          name: 'description',
          content: Page.Pagedescription
        }
      ]
    }
  }
})
</script>

<style lang="scss" scop>
.breadcrumb-item {
  a {
    color: black;
  }
}
img {
  max-width: 100%;
  height: auto;
}
.content-img img {
  max-width: 100%;
  margin: 10px;
}
#products_345 {
  width: 100%;
  margin: 0;
  .text-capitalize {
    border-bottom: inset 1px;
  }
  .breadcrumb_345 {
    margin: 0;
    padding: 0;
    .breadcrumb {
      background-color: white;
      a {
        color: black;
      }
      a:hover {
        color: green;
      }
    }
  }
  .carousel {
    padding: 0;
  }
  .t1 {
    padding: 1rem;
  }
  .t2 {
    margin: 1rem 0;
    border-top: inset 1px;
    border-bottom: inset 1px;
    padding: 1rem;
    .t2-s {
      display: flex;
      flex-flow: column nowrap;
    }
  }
  .down {
    padding-bottom: 2rem;
  }
}
</style>
