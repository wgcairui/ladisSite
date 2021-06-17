<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="3">
        <about-asid />
      </b-col>
      <b-col cols="12" md="9" class="p-5">
        <b-container>
          <b-row no-gutters>
            <b-col cols="12">
              <h4 class="text-center m-2">销售服务中心</h4>
              <hr />
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col>
              <p style="text-align: center">
                <b-img
                  border="0"
                  alt="该区域服务站正在建设中，请致电统一服务电话：400-6655-778，随时为您提供维修或者更换服务"
                  width="605"
                  height="523"
                  usemap="#Map"
                  src="/area.jpg"
                  fluid
                />&nbsp;
                <map name="Map">
                  &nbsp;
                  <area
                    v-for="(val,key) in map"
                    :key="`val.href+${key}`"
                    shape="poly"
                    :alt="val.alt"
                    target="_blank"
                    :coords="val.coords"
                    :href="val.link"
                  />
                </map>
              </p>
            </b-col>
          </b-row>
          <b-row no-gutters class="p-2">
            <b-col v-for="(val, key) in area" :key="key" cols="12" md="6">
              <div class="p-2">
                <b-card :title="key">
                  <b-card-body>
                    <span v-for="i1 in val" :key="i1.title" class="mx-1">
                      <b-link :href="i1.link">{{ i1.title }}</b-link>
                    </span>
                  </b-card-body>
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue'
  import AboutAsid from '../../components/AboutAsid.vue'
  import { buyList, buy } from '../../types/typing'
  export default Vue.extend({
    components: { AboutAsid },
    async asyncData({ app, $Api, error }) {
      const city = new Set()
      const area = {}
      // dealear经销商信息
      const dealers: buyList[] = await $Api.getBuyList().then(el => el.filter(els => els.MainParent === '销售服务中心'))
      // 构建销售服务中心列表
      dealers.forEach((element) => {
        /*
          parentsUntil: "华东地区销售服务中心"
          parent: "上海"
          title: "上海市 （上海市销售服务中心）"
        */
        const { parentsUntil, link, parent } = element
        if (city.has(parent)) {
          return
        } else {
          city.add(parent)
        }
        if (!(area as any)[parentsUntil]) {
          (area as any)[parentsUntil] = []
        }
        (area as any)[parentsUntil].push({ link, href: `/buy/${parent}`, title: parent })
      })
      // 地图停留信息
      const map = await $Api.getBuysAll().then(el => el.map((element) => {
        element.link = element.href.replace('shtml/', 'shtml')
        return element
      }))
      if (area === 0) { return error({ statusCode: 500, message: '页面走丢了' }) }
      return { map, area }
    },

    head() {
      return {
        title: '销售服务中心-雷迪司'
      }
    }
  })
</script>
<style lang="scss">
  .content-img img {
    max-width: 100%;
    margin: 10px;
  }
  #newsText img {
    max-width: 100% !important;
    height: auto;
  }
</style>
