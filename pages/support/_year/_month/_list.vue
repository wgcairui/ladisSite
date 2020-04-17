<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" class=" text-center">
        <h4>{{ title }}</h4>
        <hr>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <!-- 常见问题 -->
      <b-col v-if="isProblem" cols="12" class=" px-2">
        <div v-if="!body.movie" v-html="body.html" />
        <div v-else>
          <iframe
            id="frame"
            frameborder="0"
            width="100%"
            height="480"
            allowfullscreen
            :src="body.movie.replace(/http:\/\//g, 'https://')"
          />
        </div>
      </b-col>
      <!-- 软件下载 -->
      <b-col v-else class="px-2">
        <b-table-lite :items="[body]" :fields="fields" stacked>
          <template v-slot:cell(down)="row">
            <a :href="row.value">
              DownLoad
            </a>
            <!-- <b-button @click="down(row.value)">
              下载文件
            </b-button> -->
          </template>
        </b-table-lite>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { supportList, support } from '../../../../types/typing'
export default Vue.extend({
  async asyncData ({ app, params, error }) {
    let title = ''
    let isProblem:boolean = true
    let body:supportList | support
    const link = '/support/' + Object.values(params).join('/')
    const result:supportList[] = await app.$Api.GeneralGetInfo({ table: 'Support_list', queryKeys: ['link'], link })
    if (result && result.length > 0) {
      body = result[0]
      title = body.title
    } else {
      isProblem = false
      const down:support[] = await app.$Api.GeneralGetInfo({ table: 'Support', queryKeys: ['link'], link })
      body = down[0]
      title = body.title
    }
    if (!body) { error({ statusCode: 500, message: 'no content' }) }
    return { body, title, isProblem }
  },
  data () {
    return {
      fields: [
        { key: 'title', label: '名称' },
        { key: 'date', label: '发布时间' },
        { key: 'platform', label: '平台' },
        { key: 'language', label: '语言' },
        { key: 'size', label: '文件大小' },
        { key: 'version', label: '版本' },
        { key: 'updateReason', label: '更新缘由' },
        { key: 'down', label: '获取' }
      ]
    }
  },
  head () {
    const Page = this.$data.body
    return {
      title: `${Page.PageTitle} - ${this.$defaults.name}`,
      meta: [
        {
          name: 'keywords',
          content: Page.Pagekeywords
        },
        {
          name: 'description',
          content: Page.Pagedescription
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
h4 {
  margin: 1rem 0;
}
</style>
