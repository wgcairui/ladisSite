<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <news-asid />
      </b-col>
      <b-col cols="12" md="9" class=" mt-3 mb-5">
        <b-list-group
          id="my-table"
          :per-page="perPage"
          :current-page="currentPage"
        >
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
          v-show="rows > 10"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          class=" d-flex justify-content-center"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import CardCopy from '../../components/CardCopy.vue'
import NewsAsid from '../../components/NewsAsid.vue'
import { news, getKey } from '../../components/hrefs'
export default Vue.extend({
  components: {
    CardCopy,
    NewsAsid
  },
  async asyncData ({ app, params }) {
    const url = '/news/' + params.id
    const key = getKey(news, url)
    const listArray = await app.$Api.GeneralGetInfo({ table: 'News', queryKeys: ['MainTitle'], MainTitle: key })
    return { listArray, key }
  },
  data () {
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
    rows () {
      return this.$data.listArray.length
    }
  },
  head () {
    return {
      title: `${(this as any).key} - ${this.$defaults.name}`
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
