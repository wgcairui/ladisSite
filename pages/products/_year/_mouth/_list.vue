<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12">
        <b-breadcrumb :items="items" class=" bg-light" />
      </b-col>
      <b-col cols="12" class="border-bottom">
        <h4 class="text-capitalize">
          {{ all.title }}
        </h4>
      </b-col>
      <b-col cols="12">
        <b-row no-gutters class="p-4">
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
          <b-col cols="12" md="6" class="t1 px-2">
            <div v-if="all.t1" class="ql-editor" v-html="all.t1.content" />
            <div v-else class="ql-editor" v-html="all.content_head" />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="p-5 border-top">
        <b-row>
          <b-col cols="12" class="mb-3">
            <strong>产品特点</strong>
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
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable vue/no-v-html */
import MyImg from '../../../../components/MyImg.vue'
export default {
  components: {
    MyImg
  },
  async asyncData ({ app, params }) {
    const link = '/products/' + Object.values(params).join('/')

    const result = await app.$Api.GeneralGetInfo({
      table: 'Product_list',
      queryKeys: ['link'],
      link
    })
    const [all] = result
    return { title: all.title, all }
  },
  computed: {
    items () {
      return [
        { text: '主页', href: '/' },
        { text: '产品分类', href: '/product' },
        { text: this.all.MainParent, href: `/product/${this.all.MainParent}` },
        { text: this.all.title }
      ]
    },
    t1 () {
      return this.$data.all.type === 'html'
    },
    t2 () {
      return typeof this.$data.all.html.t2 === 'string'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'keywords', content: this.title },
        { name: 'description', content: this.title }
      ]
    }
  }
}
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
