<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <news-asid />
      </b-col>
      <b-col cols="12" md="9" class="mt-3 mb-5">
        <b-list-group id="my-table" :per-page="perPage" :current-page="currentPage">
          <b-list-group-item
            v-for="val in listArray.slice(
              currentPage * 10 - 10,
              currentPage * 10
            )"
            :key="val.text"
          >
            <card-copy
              :img="val.img"
              :text="val.text"
              :title="val.name"
              :time="val.time"
              :href="val.link"
            />
          </b-list-group-item>
        </b-list-group>
        <b-pagination
          v-if="rows > perPage"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          class="d-flex justify-content-center"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    async asyncData({ $Api, error }) {
      const listArray = await $Api.getNewsLists()
      if (!listArray) { return error({ statusCode: 500, message: '页面走丢了' }) }
      return { listArray }
    },
    data() {
      return {
        mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          class: 'my-5'
        },
        perPage: 10,
        currentPage: 1
      }
    },
    computed: {
      rows() {
        return this.$data.listArray.length
      }
    },
    head() {
      return {
        title: `新闻资讯 - ${this.$store.state.name}`
      }
    }
  })
</script>

<style lang="scss" scoped>
  .list-group-item {
    border: 0ch;
  }
  .lazy-pic {
    width: 30% !important;
    margin: 0 !important;
  }
</style>
