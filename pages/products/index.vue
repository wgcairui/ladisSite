<template>
  <b-row no-gutters>
    <b-col v-for="val in all" :key="val.title" cols="12" md="4" class="p-4">
      <b-card class=" h-100">
        <my-img :src="val.img" :alt="val.title" />
        <!-- <b-card-img :src="val.img" :alt="val.title"></b-card-img> -->
        <b-link
          :to="{ path: `/productsList/${val.title}` }"
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
export default Vue.extend({
  components: { MyImg },
  async asyncData ({ app }) {
    const All = await app.$Api.GeneralGetInfo({ table: 'product', title: 'All' })
    return { all: All.data || [] }
  }
})
</script>
