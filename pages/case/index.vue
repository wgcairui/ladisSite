<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <b-list-group class=" my-4 text-light">
          <b-list-group-item
            class=" bg-dark rounded-0  my-1 text-light"
            button
          >
            {{ $t("index.tqie7y") }}
          </b-list-group-item>
          <b-list-group-item
            class=" bg-dark rounded-0  my-1 text-light"
            button
            @click="vrFilter('UPS电源')"
          >
            {{ $t("index.a89hfi") }}
          </b-list-group-item>
          <b-list-group-item
            class=" bg-dark rounded-0  my-1 text-light"
            button
            @click="vrFilter('一体化机柜')"
          >
            {{ $t("index.1gcuye") }}
          </b-list-group-item>
          <b-list-group-item
            class=" bg-dark rounded-0  my-1 text-light"
            button
            @click="vrFilter('数据中心')"
          >
            {{ $t("index.6vnevq") }}
          </b-list-group-item>
          <b-list-group-item
            class=" bg-dark rounded-0  my-1 text-light"
            button
            @click="vrFilter('机房空调')"
          >
            {{ $t("index.uns46v") }}
          </b-list-group-item>
        </b-list-group>
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
            :key="val.data.text"
          >
            <card-copy
              :img="val.data.img"
              :text="val.data.text"
              :title="val.data.name"
              :time="val.data.time"
              :href="val.data.href"
            />
          </b-list-group-item>
        </b-list-group>
        <b-pagination
          v-show="rows > 10"
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
    CardCopy
  },
  async asyncData ({ app }) {
    let listArray = await app.$Api.GeneralGetInfo({ table: 'Case', isNews: true })
    listArray = Object.values(listArray)
    const backListArray = Array.from(new Set(listArray))

    return { listArray, backListArray }
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
  mounted () {
    this.vrFilter()
  },
  methods: {
    vrFilter (type:string = '') {
      this.$data.listArray = this.$data.backListArray.filter((el:caseBody) => {
        return el.data.name.includes(type) || !type
      })
    }
  },
  head () {
    return {
      title: '成功案例-雷迪司',
      meta: [
        { name: 'keywords', content: '成功案例-雷迪司' },
        { name: 'description', content: '成功案例-雷迪司' }
      ]
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
