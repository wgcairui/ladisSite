<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12">
        <div class="my-4 border-bottom">
          <h5 class=" text-center">
            {{ id }}
          </h5>
        </div>
        <div v-if="typeof list === 'string'">
          <div id="newsText" class="px-5 ctlimg ql-editor" v-html="list" />
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
              :alt="id"
              class="m-0 p-0 w-75 my-2"
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import MyImg from '../../components/MyImg.vue'
export default Vue.extend({
  components: {
    MyImg
  },
  async asyncData ({ app, params }) {
    const title = params.id
    const list = await app.$Api.GeneralGetInfo({ table: 'news_list', title })
    return { id: title, list: list.data, listNew: list.new }
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
    return {
      title: `${this.$data.id}-雷迪司`,
      meta: [
        { name: 'keywords', content: this.$data.id },
        { name: 'description', content: this.$data.id }
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
