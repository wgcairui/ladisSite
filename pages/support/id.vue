<template>
  <b-container>
    <b-row no-gutters>
      <b-col md="4" class="d-none d-sm-block">
        <b-button v-b-toggle.collapse-1 block class=" mt-3">
          {{
            $t("_id.tgqqj4")
          }}
        </b-button>
        <b-collapse id="collapse-1" visible>
          <b-list-group class="list-group">
            <b-list-group-item
              v-for="val in supportAsid.data"
              :key="val.title"
              :to="{ path: val.href }"
            >
              {{ val.title }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-col>
      <b-col md="8">
        <b-tabs content-class="mt-3" justified>
          <b-tab v-for="val in downs" :key="val.title" :title="val.title">
            <b-list-group>
              <b-list-group-item
                v-for="v1 in fileTypeFilter(val.data, 'pdf')"
                :key="v1.title"
                :href="v1.href"
              >
                {{ v1.title }}
              </b-list-group-item>
              <b-list-group-item
                v-for="v1 in fileTypeFilter(val.data, 'soft')"
                :key="v1.title"
              >
                <b-button
                  v-b-toggle="`coll${encodeURI(v1.title)}`"
                  variant="link"
                >
                  {{ v1.title }}
                </b-button>
                <b-collapse
                  :id="`coll${encodeURI(v1.title)}`"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <h5>{{ $t("_id.x9qyll") }}: {{ v1.title }}</h5>
                  <p>{{ $t("_id.ef2ovw") }}: {{ v1.date }}</p>
                  <p>{{ $t("_id.puz8nn") }}: {{ v1.platform }}</p>
                  <p>{{ $t("_id.qi5zqr") }}: {{ v1.language }}</p>
                  <p>{{ $t("_id.vysc3s") }}: {{ v1.size }}</p>
                  <p>{{ $t("_id.t03jjv") }}: {{ v1.version }}</p>
                  <p>{{ $t("_id.bwem5c") }}: {{ v1.updateReason }}</p>
                  <b-button :href="v1.down" variant="success">
                    {{
                      $t("_id.e02jgq")
                    }}
                  </b-button>
                </b-collapse>
              </b-list-group-item>
            </b-list-group>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData ({ app, params }) {
    const title = params.id
    const supportAsid = await app.$Api.GeneralGetInfo({ table: 'Page', title: 'support_asid' })
    const downs = await app.$Api.GeneralGetInfo({ table: 'Support', parent: title })
    return { supportAsid, downs, title }
  },
  methods: {
    fileTypeFilter (file:any, type:string) {
      const result = []
      for (const i of file) {
        if (i.type === type) { result.push(i) }
      }

      return result
    }
  },
  head () {
    const [Page] = this.$data.downs
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
.list-group {
  margin: 1rem 0;
}
.tabs {
  margin: 1rem;
}
</style>
