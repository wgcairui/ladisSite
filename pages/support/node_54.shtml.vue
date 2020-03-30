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
              v-for="val in supportAsid"
              :key="val.title"
              :to="val.link"
            >
              {{ val.title }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-col>
      <b-col md="8">
        <b-tabs content-class="mt-3" justified>
          <b-tab v-for="[key,val] in downs" :key="key" :title="key">
            <b-list-group>
              <b-list-group-item v-for="v1 in val" :key="v1.title" :href="v1.href" class="d-flex justify-content-between align-items-center">
                {{ v1.title }}
                <b-badge>downLoad</b-badge>
              </b-list-group-item>
              <!-- <b-list-group-item
                v-for="v1 in fileTypeFilter(val, 'pdf')"
                :key="v1.title"
                :href="v1.href"
              >
                {{ v1.title }}
              </b-list-group-item>
              <b-list-group-item
                v-for="v1 in fileTypeFilter(val, 'soft')"
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
              </b-list-group-item> -->
            </b-list-group>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { support } from '../../types/typing'
export default Vue.extend({
  async asyncData ({ app }) {
    const title = '产品彩页说明'
    const supportAsid = await app.$Api.GeneralGetInfo({ table: 'Page', queryKeys: ['MainTitle'], MainTitle: 'support_asid' })
    const downs = await app.$Api.GeneralGetInfo({ table: 'Support', queryKeys: ['MainParent'], MainParent: title }).then((el:support[]) => {
      const supportMap:Map<string, support[]> = new Map()
      el.forEach((Element) => {
        const title = Element.MainTitle as string
        if (supportMap.has(title)) {
          const supports = supportMap.get(title) as support[]
          supports.push(Element)
        } else {
          supportMap.set(title, [Element])
        }
      })
      return Array.from(supportMap)
    })
    return { supportAsid, downs, title }
  },
  head () {
    const [Page] = this.$data.supportAsid
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
