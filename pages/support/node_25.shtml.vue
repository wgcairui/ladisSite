<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="4">
        <b-list-group class="asid">
          <b-list-group-item variant="info">
            {{ $t('chang-jian-wen-ti') }}
          </b-list-group-item>
          <b-list-group-item v-for="(val,key) in supportAsid" :key="'asid' + key">
            <b-button
              v-b-toggle="'asid' + key"
              pill
              size="sm"
              variant="link"
            >
              +
            </b-button>
            <nuxt-link :to="val.link">
              {{
                val.title
              }}
            </nuxt-link>
            <b-collapse
              :id="'asid' + key"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <ul>
                <li v-for="v1 in val.child" :key="v1.title">
                  <nuxt-link :to="v1.link">
                    {{
                      v1.title
                    }}
                  </nuxt-link>
                </li>
              </ul>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="12" md="8">
        <b-list-group id="support_list" class="list-group1 pt-3">
          <b-list-group-item variant="dark" />
          <b-list-group-item
            v-for="val in list.slice(
              currentPage * 10 - 10,
              currentPage * 10
            )"
            :key="val.title"
          >
            <nuxt-link :to="val.link">
              {{
                val.title
              }}
            </nuxt-link>
          </b-list-group-item>
        </b-list-group>

        <b-pagination
          v-if="list.length > 10"
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="list.length"
          aria-controls="support_list"
          class="d-flex justify-content-center mt-2"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
interface buyArea {
  parentsUntil: string
  link: string
  parent: string
}
export default Vue.extend({

  async asyncData ({ app }) {
    const supportAsid = await app.$Api.GeneralGetInfo({ table: 'Page', queryKeys: ['MainTitle'], MainTitle: 'support_problem_asid' })
    const list = await app.$Api.GeneralGetInfo({ table: 'Support_list' })

    return { supportAsid, list }
  },
  data () {
    return {
      perPage: 10,
      currentPage: 1
    }
  },

  head: {
    title: '常见问题-雷迪司',
    meta: [
      { name: 'keywords', content: '常见问题-雷迪司' },
      { name: 'description', content: '常见问题-雷迪司' }
    ]
  }
})
</script>

<style lang="scss" scoped>
.asid {
  padding: 1rem;
  a {
    color: black;
  }
}
</style>
