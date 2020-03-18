<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" class=" text-center">
        <h4>{{ arg.title }}</h4>
        <hr>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col cols="12" class=" px-2">
        <div v-if="!arg.movie" v-html="arg.html" />
        <div v-else>
          <iframe
            id="frame"
            frameborder="0"
            width="100%"
            height="480"
            allowfullscreen
            :src="arg.movie"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData ({ app, params }) {
    const title = params.id
    const arg = await app.$Api.GeneralGetInfo({ table: 'Support_list', title })
    return { arg, title }
  },
  head () {
    return {
      title: this.$data.arg.title
    }
  }
})
</script>

<style lang="scss" scoped>
h4 {
  margin: 1rem 0;
}
</style>
