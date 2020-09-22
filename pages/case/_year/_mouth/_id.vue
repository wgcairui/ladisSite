<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <div class="my-4 border-bottom">
          <h5 class="text-center px2">
            {{ title }}
          </h5>
        </div>
        <div id="content" class="px-5 ctlimg content-img ql-editor" v-html="list.content" />
        <!-- <div v-if="list.content" id="content">
          <div id="content" class="px-5 ctlimg content-img ql-editor" v-html="list.content" />
        </div>
        <div v-else>
          <div id="text" class="px-5 ctlimg">
            <p v-for="val in list.text || []" :key="val">
              {{ val }}
            </p>
          </div>
          <div id="pic" class="px-5 d-flex flex-column">
            <div
              v-for="val in formPic(list.pic)"
              :key="val"
              class="m-0 p-0 my-2"
            >
              <b-img
                :src="val"
                center
                class=" fluid thumbnail"
              />
            </div>
          </div>
        </div> -->
      </b-col>
    </b-row>
    <b-row no-gutters class="py-4">
      <b-col class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <b-link v-if="Content.pre" :to="Content.pre.link" class=" text-dark p-2">
          上一页:{{ Content.pre.text }}
        </b-link>
        <div />
        <b-link v-if="Content.next" :to="Content.next.link" class=" text-dark p-2">
          下一页:{{ Content.next.text }}
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { caseList } from '../../../../types/typing'
export default Vue.extend({
  async asyncData ({ app, params, error }) {
    const link = '/case/' + Object.values(params).join('/')
    const lists: caseList[] = await app.$Api.GeneralGetInfo({
      table: 'Case_list',
      queryKeys: ['link'],
      link
    })
    if (lists?.length === 0) { error({ statusCode: 500, message: 'content null' }) }
    const list = lists[0]
    const Content = await app.$Api.GetContent(list.link as string)
    return { title: list.title || '', list, Content }
  },
  data () {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb'
      }
    }
  },
  methods: {
    // 图片源去重，抓取的图片可能重复
    formPic (pic:string[]) {
      if (pic) {
        return Array.from(new Set(pic))
      } else {
        return []
      }
    }
  },
  head () {
    const Page = this.$data.list as caseList
    return {
      title: `${Page.PageTitle} - ${this.$defaults.name}`,
      meta: [
        {
          name: 'keywords',
          content: Page.Pagekeywords as string
        },
        {
          name: 'description',
          content: Page.Pagedescription as string
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
.page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #343a40;
    border-color: #fdfdfe;
}
.page-link{
  color: #343a40;
}
</style>
