<template>
  <b-row no-gutters>
    <b-col v-for="val in all" :key="val.title" cols="12" md="4" class="p-4">
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
</template>
<script lang="ts">
import Vue from 'vue'
import MyImg from '../../components/MyImg.vue'
import { productPack } from '../../types/interface'
export default Vue.extend({
  components: { MyImg },
  async asyncData ({ app }) {
    const result:productPack = await app.$Api.GeneralGetInfo({ table: 'product', title: 'All' })
    const all = result.data || []
    return { all }
  }
})
</script>
