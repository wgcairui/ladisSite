<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <b-list-group class=" my-4 text-light">
          <b-list-group-item class=" bg-dark rounded-0 my-1">
            {{
              $t("index.0twzes")
            }}
          </b-list-group-item>
          <b-list-group-item
            class=" bg-dark rounded-0  my-1 text-light"
            button
            @click="vrFilter('house')"
          >
            {{ $t("index.sn1yip") }}
          </b-list-group-item>
          <b-list-group-item
            class=" bg-dark rounded-0  my-1 text-light"
            button
            @click="vrFilter('dev')"
          >
            {{ $t("index.0ibgd6") }}
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="12" md="9" class=" mt-3 mb-5">
        <b-list-group>
          <b-list-group-item v-for="val in backListArray" :key="val.text">
            <card-copy
              :img="val.img"
              :text="val.text"
              :title="val.name"
              :time="val.time"
              :href="Serize(val.link)"
            />
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import CardCopy from '../../components/CardCopy.vue'
export default Vue.extend({
  components: {
    CardCopy
  },
  async asyncData ({ app }) {
    const list = await app.$Api.GeneralGetInfo({ table: 'VR' })// GeneralGetInfo($axios, { table: 'VR' }) // $axios.$get(`/api/Get_arg?table=VR`);
    let listArray:any[] = []
    list.forEach((element:{data:any}) => {
      listArray = [...listArray, ...element.data]
    })
    return { list, listArray }
  },
  data () {
    return {
      backListArray: this.$data.listArray
    }
  },
  mounted () {
    this.vrFilter()
  },
  methods: {
    vrFilter (type:string = '') {
      if (!type) { this.backListArray = this.$data.listArray } else {
        const list:any[] = []
        switch (type) {
          case 'dev':
            this.$data.listArray.forEach((el:{name:string}) => {
              if (el.name.includes('产品全景展示')) { list.push(el) }
            })
            break
          case 'house':
            this.$data.listArray.forEach((el:{name:string}) => {
              if (el.name.includes('机房全景展示')) { list.push(el) }
            })
            break
        }
        this.backListArray = list
      }
    },
    Serize (href:string) {
      if (href.includes('http://www.ladis.com.cn')) { href = href.replace('http://www.ladis.com.cn', '') }
      return `http://116.62.48.175${href}`
    }
  },
  head () {
    return {
      title: '全景展示-雷迪司',
      meta: [
        { name: 'keywords', content: '全景展示-雷迪司' },
        { name: 'description', content: '全景展示-雷迪司' }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.list-group-item {
  border: 0ch;
}
</style>
