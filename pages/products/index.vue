<template>
  <b-container>
    <b-row no-gutters class="h-100">
      <product-asid />
      <b-col>
        <b-row no-gutters>
          <b-col
            v-for="val in all.slice(
              currentPage * 9 - 9,
              currentPage * 9
            )"
            :key="
              val.link"
            cols="12"
            md="4"
            class="p-4"
          >
            <b-card class=" h-100">
              <my-img :src="val.img" :alt="val.title" />
              <!-- <b-card-img :src="val.img" :alt="val.title"></b-card-img> -->
              <b-link
                :to="{ path: val.link }"
                class="text-dark  stretched-link text-decoration-none"
              >
                {{ val.title }}
              </b-link>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-pagination
              v-if="rows > perPage"
              v-model="currentPage"
              class=" d-flex justify-content-center"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import ProductAsid from '../../components/ProductAsid.vue'
import MyImg from '../../components/MyImg.vue'
import { product } from '../../types/typing'
export default Vue.extend({
  components: { ProductAsid, MyImg },
  async asyncData ({ app, error }) {
    const all:product[] = await app.$Api.GeneralGetInfo({ table: 'Product' })
    if (all?.length === 0) { return error({ statusCode: 500, message: '页面走丢了' }) }
    return { all }
  },
  data () {
    return {
      perPage: 9,
      currentPage: 1
    }
  },
  computed: {
    rows () {
      return this.$data.all.length
    }
  },

  head () {
    return {
      title: `UPS电源_UPS不间断电源厂家【价格 型号 参数 图片】- ${this.$store.state.name}`,
      meta: [
        {
          name: 'keywords',
          content: 'UPS电源,不间断电源,UPS不间断电源,UPS电源厂家,不间断电源厂家,UPS厂家'
        },
        {
          name: 'description',
          content: '雷迪司厂家生产商提供UPS电源，不间断电源，UPS不间断电源，包含UPS电源，不间断电源，UPS不间断电源品牌、参数、报价、价格、规格、大图片等，同时提供维修、维护、售后服务-深圳雷迪司科技股份有限公司'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .container {
    margin: 0;
    padding: 0;
    width: 100%;
    .row {
      flex-direction: column;
    }
  }
  .main1 {
    .mw {
      max-width: 9rem;
    }
  }
}
.list {
  #list-collapse {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    align-items: flex-start;
    margin: 1rem;
    h3 {
      color: white;
      padding: 0.5rem;
      font-style: oblique;
      text-align: center;
    }
    a {
      color: aliceblue;
    }
  }
}

.main1 {
  display: flex;
  flex-flow: row wrap;
  div {
    margin: 1rem;
  }
  .mw {
    max-width: 17rem;
  }
}
</style>
