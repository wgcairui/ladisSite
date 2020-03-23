<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12" md="4">
        <b-list-group class="asid">
          <b-list-group-item variant="info">
            {{
              $t("常见问题.w5qbf8")
            }}
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
            <b-button variant="link" @click="slic(val.title)">
              {{
                val.title
              }}
            </b-button>
            <b-collapse
              :id="'asid' + key"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <ul>
                <li v-for="v1 in val.child" :key="v1.title">
                  <b-button variant="link" @click="slic(v1.title)">
                    {{
                      v1.title
                    }}
                  </b-button>
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
            v-for="val in support_list.slice(
              currentPage * 10 - 10,
              currentPage * 10
            )"
            :key="val.title"
          >
            <b-link :to="{ path: val.href }">
              {{ val.title }}
            </b-link>
          </b-list-group-item>
        </b-list-group>

        <b-pagination
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="support_list.length"
          aria-controls="support_list"
          class="d-flex justify-content-center"
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
    const supportAsid = await app.$Api.GeneralGetInfo({ table: 'Page', title: 'support_problem_asid' }).then(el => el.data)
    const list = await app.$Api.GeneralGetInfo({ table: 'Support_list' })

    return { supportAsid, list }
  },
  data () {
    return {
      perPage: 10,
      currentPage: 1,
      support_list: []
    }
  },

  created () {
    this.slic()
  },
  methods: {
    slic (title:string = '') {
      if (title) {
        this.support_list = this.$data.list.filter((val:buyArea) => {
          return val.parentsUntil === title || val.parent === title
        })
      } else {
        this.support_list = this.$data.list
      }
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
