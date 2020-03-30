<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <div class="my-4 border-bottom">
          <h5 class=" text-center">
            {{ title }}
          </h5>
        </div>
        <div v-if="list.content">
          <div
            id="newsText"
            class="px-5 ctlimg content-img ql-editor"
            v-html="list.content"
          />
        </div>
        <div v-else>
          <div id="newsText" class="px-5 ctlimg">
            <p v-for="val in list.text || []" :key="val">
              {{ val }}
            </p>
          </div>
          <div id="pic" class="px-5">
            <my-img
              v-for="val in list.pic || []"
              :key="val"
              :src="val"
              :alt="title"
              class="m-0 p-0 w-50 my-2"
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import MyImg from '../../../../components/MyImg.vue'
import { caseList } from '../../../../types/typing'
export default Vue.extend({
  components: {
    MyImg
  },
  async asyncData ({ app, params }) {
    const MainUrl = '/case/' + Object.values(params).join('/')

    const [list]:caseList[] = await app.$Api.GeneralGetInfo({
      table: 'Case_list',
      queryKeys: ['MainUrl'],
      MainUrl
    })

    return { title: list.title, list }
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
