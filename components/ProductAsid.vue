<template>
  <b-col cols="12" md="2" class="list">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      style="padding:0"
      class=" bg-info"
    >
      <b-navbar-toggle target="list-collapse" />
      <b-collapse id="list-collapse" is-nav>
        <b-navbar-nav vertical>
          <b-nav-item to="/products">
            <h3>{{ $t("index.j8it8b") }}</h3>
          </b-nav-item>
        </b-navbar-nav>
        <div v-for="(val, key) in list" :key="key">
          <b-navbar-nav variant="dark">
            <b-nav-item :href="val.href">
              {{ val.title }}
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-for="(val1, key1) in val.args" :key="key1">
            <b-nav-item :href="val1.href">
              {{ val1.title }}
            </b-nav-item>
          </b-navbar-nav>
        </div>
        <hr>
      </b-collapse>
    </b-navbar>
  </b-col>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProductAsid',
  computed: {
    list () {
      // const locale = this.$i18n.locale
      const list = [
        {
          title: 'UPS电源',
          href: '/products/node_13.shtml',
          args: [
            {
              title: '后备式UPS电源',
              href: '/products/node_81.shtml'
            },
            {
              title: '高频单相UPS电源',
              href: '/products/node_82.shtml'
            },
            {
              title: '高频三相UPS电源',
              href: '/products/node_83.shtml'
            },
            {
              title: '工频UPS电源',
              href: '/products/node_85.shtml'
            },
            {
              title: '机架式UPS电源',
              href: '/products/node_84.shtml'
            },
            {
              title: '模块化UPS电源',
              href: '/products/node_86.shtml'
            },
            {
              title: 'UPS蓄电池',
              href: '/products/node_87.shtml'
            }
          ]
        },
        {
          title: '数据中心',
          href: '/products/node_10.shtml',
          args: [
            {
              title: '户外一体柜ETC',
              href: '/products/node_978.shtml'
            },
            {
              title: '微模块机房',
              href: '/products/node_143.shtml'
            },
            {
              title: '一体化机柜',
              href: '/products/node_135.shtml'
            },
            {
              title: '配电PDU',
              href: '/products/node_11.shtml'
            },
            {
              title: '动环监控',
              href: '/products/node_136.shtml'
            },
            {
              title: '网络机柜',
              href: '/products/node_138.shtml'
            }
          ]
        },
        {
          title: '机房空调',
          href: '/products/node_145.shtml',
          args: [
            {
              title: '房间空调',
              href: '/products/node_148.shtml'
            },
            {
              title: '列间空调',
              href: '/products/node_147.shtml'
            },
            {
              title: '机架空调',
              href: '/products/node_146.shtml'
            }
          ]
        }
      ]
      return list
    }
  }
})
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
