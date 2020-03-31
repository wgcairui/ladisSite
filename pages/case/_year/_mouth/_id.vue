<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <div class="my-4 border-bottom">
          <h5 class="text-center">
            {{ title }}
          </h5>
        </div>
        <div v-if="list.content">
          <div id="newsText" class="px-5 ctlimg content-img ql-editor" v-html="list.content" />
        </div>
        <div v-else>
          <div id="newsText" class="px-5 ctlimg">
            <p v-for="val in list.text || []" :key="val">
              {{ val }}
            </p>
          </div>
          <div id="pic" class="px-5 d-flex flex-column justify-content-center">
            <b-img-lazy
              v-for="val in list.pic || []"
              :key="val"
              :src="val"
              :alt="title"
              class="m-0 p-0 imgW my-2"
            />
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row no-gutters class="py-4">
      <b-col class="d-flex justify-content-between">
        <b-link
          v-if="Content.pre"
          :to="Content.pre.link"
          class="text-dark"
        >
          上一页:{{ Content.pre.text }}
        </b-link>
        <div />
        <b-link
          v-if="Content.next"
          :to="Content.next.link"
          class="text-dark"
        >
          下一页:{{ Content.next.text }}
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { caseList, casesContext } from '../../../../types/typing'
export default Vue.extend({
  async asyncData ({ app, params }) {
    const MainUrl = '/case/' + Object.values(params).join('/')

    const [list]: caseList[] = await app.$Api.GeneralGetInfo({
      table: 'Case_list',
      queryKeys: ['MainUrl'],
      MainUrl
    })
    const Content: casesContext = await app.$Api.GetContent(list.link as string)
    return { title: list.title, list, Content }
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
  head () {
    const Page = this.$data.list as caseList
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
@media (min-width: 768px) {
  .imgW {
    width: 100%;
  }
}
.imgW {
  width: 50%;
}
</style>
