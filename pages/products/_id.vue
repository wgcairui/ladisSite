<template>
  <b-row no-gutters>
    <b-col v-for="val in data" :key="val.title" cols="12" md="4" class="p-4">
      <b-card class=" h-100">
        <my-img :src="val.img" :alt="val.title" />
        <!-- <b-card-img :src="val.img" :alt="val.title"></b-card-img> -->
        <b-link
          :to="{ path: `/productsList/${val.title}` }"
          class="text-dark stretched-link text-decoration-none"
        >
          {{ val.title }}
        </b-link>
      </b-card>
    </b-col>
  </b-row>
</template>
<script lang="ts">
import Vue from 'vue'
import MyImg from '../../components/MyImg.vue'
export default Vue.extend({
  components: { MyImg },
  async asyncData ({ params, app }) {
    const data = await app.$Api.GeneralGetInfo({ table: 'Product', title: params.id })
    return { data: data.data || [], params }
  },

  head () {
    return {
      title: `${this.$data.params.id} 模块化UPS电源_不间断电源厂家【价格 型号 参数 图片】-雷迪司`,
      meta: [
        { name: 'keywords', content: this.$data.params.id },
        {
          name: 'description',
          content:
            '雷迪司厂家生产商提供模块化UPS电源,模块化UPS不间断电源，包含模块化UPS电源,模块化UPS不间断电源品牌、参数、报价、价格、规格、大图片等，同时提供维修、维护、售后服务-深圳雷迪司科技股份有限公司'
        }
      ]
    }
  }
})
</script>
