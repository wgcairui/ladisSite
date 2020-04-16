<template>
  <b-container>
    <b-row no-gutters>
      <!-- 导航栏 -->
      <b-col cols="12">
        <b-breadcrumb :items="items" style="background-color: #ffffff" />
      </b-col>
      <!-- 标题 -->
      <b-col cols="12" class="border-bottom">
        <h4 class="text-capitalize px-2">
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
          <b-col cols="12" md="6" class="t1 p-4 printDisplay_para">
            <!-- <div v-if="all.t1" class="ql-editor" v-html="all.t1.content" /> -->
            <div class="ql-editor" v-html="all.head" />
          </b-col>
        </b-row>
      </b-col>
      <b-col class="d-none d-sm-block">
        <ul class=" d-flex flex-row p-2" style="background-color: #9b9c9c">
          <li data-targete="" class=" flex-fill text-center border-right" style="list-style-type: none;">
            <a href="#ladisp1" class=" text-decoration-none text-light ">产品规格</a>
          </li>
          <li data-targete="" class=" flex-fill text-center border-right" style="list-style-type: none;">
            <a href="#ladisp2" class=" text-decoration-none text-light">产品应用</a>
          </li>
          <li data-targete="" class=" flex-fill text-center border-right" style="list-style-type: none;">
            <a href="#ladisp3" class=" text-decoration-none text-light">产品大图</a>
          </li>
          <li data-targete="" class=" flex-fill text-center" style="list-style-type: none;">
            <a href="#ladisp4" class=" text-decoration-none text-light">相关下载</a>
          </li>
        </ul>
      </b-col>
      <b-col cols="12" class="p-5 border-top">
        <b-row>
          <b-col class="productUtil">
            <div v-html="all.body" />
          </b-col>
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
import '../../../../assets/css/product.css'
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
//@at-root
.page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #343a40;
    border-color: #fdfdfe;
}
.page-link{
  color: #343a40;
}
</style>
