<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <case-asid />
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
          v-if="rows > perPage"
          v-model="currentPage"
          class=" d-flex justify-content-center"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import CardCopy from '../../components/CardCopy.vue'
import CaseAsid from '../../components/CaseAsid.vue'
import { cases, getKey } from '../../components/hrefs'
interface caseBody{
  data:{
    img:string
    text:string
    name:string
    time:string
    href:string
  }
}
export default Vue.extend({
  components: {
    CardCopy,
    CaseAsid
  },
  async asyncData ({ app, params, error }) {
    const url = '/case/' + params.id
    const key = getKey(cases, url)
    const listArray = await app.$Api.GeneralGetInfo({ table: 'Case', queryKeys: ['MainTitle'], MainTitle: key })
    if (listArray?.length === 0) { error({ statusCode: 500, message: 'content null' }) }
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
