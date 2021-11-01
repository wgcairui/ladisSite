<template>
  <b-col cols="12" md="3" class="list">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      style="padding: 0"
      class="bg-dark"
    >
      <b-navbar-toggle target="list-collapse" />
      <b-collapse id="list-collapse" is-nav>
        <b-navbar-nav vertical>
          <b-nav-item to="/products">
            <h3>{{ $t("index.j8it8b") }}</h3>
          </b-nav-item>
        </b-navbar-nav>
        <b-input-group size="sm">
          <b-form-input
            type="search"
            placeholder="搜索产品"
            v-model="seachStr"
            @keyup.enter="seach"
          ></b-form-input>
          <b-input-group-append>
            <b-button variant="success" @click="seach" :disabled="!seachStr">🔍</b-button>
          </b-input-group-append>
        </b-input-group>

        <div v-for="(val, key) in list" :key="key">
          <b-navbar-nav variant="dark">
            <b-nav-item :href="val.href">
              {{ val.title }}
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-for="val1 in val.args" :key="val1.href">
            <b-nav-item :href="val1.href">
              {{ val1.title }}
            </b-nav-item>
          </b-navbar-nav>
        </div>
        <hr />
      </b-collapse>
    </b-navbar>
  </b-col>
</template>
<script lang="ts">
import Vue from "vue";
import { product } from "../static/hrefs";
export default Vue.extend({
  name: "ProductAsid",
  data() {
    return {
      seachStr: "",
    };
  },
  computed: {
    list() {
      const locale = this.$i18n.locale;
      const list = [
        {
          title: this.$t("ups-dian-yuan"),
          href: product["UPS电源"],
          locale,
          args: [
            {
              title: this.$t("hou-bei-shi-ups-dian-yuan"),
              href: product["后备式UPS电源"],
            },
            {
              title: this.$t("gao-pin-dan-xiang-ups-dian-yuan"),
              href: product["高频单相UPS电源"],
            },
            {
              title: this.$t("gao-pin-san-xiang-ups-dian-yuan"),
              href: product["高频三相UPS电源"],
            },
            {
              title: this.$t("gong-pin-ups-dian-yuan"),
              href: product["工频UPS电源"],
            },
            {
              title: this.$t("ji-jia-shi-ups-dian-yuan"),
              href: product["机架式UPS电源"],
            },
            {
              title: this.$t("mo-kuai-hua-ups-dian-yuan"),
              href: product["模块化UPS电源"],
            },
            {
              title: this.$t("ups-xu-dian-chi"),
              href: product["UPS蓄电池"],
            },
          ],
        },
        {
          title: this.$t("shu-ju-zhong-xin"),
          href: product["数据中心"],
          args: [
            {
              title: "户外一体柜ETC",
              href: product["户外一体柜ETC"],
            },
            {
              title: this.$t("wei-mo-kuai-ji-fang"),
              href: product["微模块机房"],
            },
            {
              title: this.$t("yi-ti-hua-ji-gui"),
              href: product["一体化机柜"],
            },
            {
              title: this.$t("pei-dian-pdu"),
              href: product["配电PDU"],
            },
            {
              title: this.$t("dong-huan-jian-kong"),
              href: product["动环监控"],
            },
            {
              title: this.$t("wang-luo-ji-gui"),
              href: product["网络机柜"],
            },
          ],
        },
        {
          title: this.$t("ji-fang-kong-tiao"),
          href: product["机房空调"],
          args: [
            {
              title: this.$t("fang-jian-kong-tiao"),
              href: product["房间空调"],
            },
            {
              title: this.$t("lie-jian-kong-tiao"),
              href: product["列间空调"],
            },
            {
              title: this.$t("ji-jia-kong-tiao"),
              href: product["机架空调"],
            },
          ],
        },
      ];
      return list;
    },
  },
  methods: {
    seach() {
      if (!this.seachStr) return;
      const url = this.$router.resolve({
        name: "products-seach",
        query: { seach: this.seachStr },
      });
      window.open(url.href, "_blank");
    },
  },
});
</script>
<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .container {
    margin: 0;
    padding: 0;
    width: 100%;
    .row {
      flex-direction: column;
    }
  }
  .main1 {
    .mw {
      max-width: 9rem;
    }
  }
}
.list {
  #list-collapse {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    align-items: flex-start;
    margin: 1rem;
    h3 {
      color: white;
      padding: 0.5rem;
      font-style: oblique;
      text-align: center;
    }
    a {
      color: aliceblue;
    }
  }
}

.main1 {
  display: flex;
  flex-flow: row wrap;
  div {
    margin: 1rem;
  }
  .mw {
    max-width: 17rem;
  }
}
</style>
