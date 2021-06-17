<template>
  <b-container id="ladis-body" fluid class="p-0 m-0 flex-column position-relative">
    <b-row class="main-default" no-gutters>
      <b-col cols="12" class="bg-dark">
        <!-- head头 -->
        <ladis-head />
      </b-col>
    </b-row>
    <b-row class="flex-grow-1" no-gutters>
      <b-col>
        <nuxt class="p-0" />
      </b-col>
    </b-row>
    <b-row no-gutters class=" ">
      <b-col>
        <ladis-footer />
      </b-col>
    </b-row>
    <aside class="aside d-flex flex-column position-fixed">
      <ul class="d-none d-lg-block">
        <li class="tels" v-if="agentConfig.contactQQ">
          <div class="telChild">
            <b-link
              :href="`tencent://message/?Site=baidu.com&uin=${agentConfig.contactQQ}&Menu=yes`"
              target="_blank"
              class="text-decoration-none"
            >
              <span class="d-flex text-nowrap">
                <b-img src="/pic/side_icon04.png" />
                {{ agentConfig.contactQQ }}
              </span>
            </b-link>
          </div>
        </li>
        <li class="tels" v-for="tel in agentConfig.contactTel" :key="tel">
          <div class="telChild">
            <span class="d-flex text-decoration-none text-nowrap">
              <b-img src="/pic/side_icon01.png" />
              {{ tel }}
            </span>
          </div>
        </li>
      </ul>
    </aside>
  </b-container>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import ladisHead from "../components/head.vue";
import ladisFooter from "../components/footer.vue";
export default Vue.extend({
  components: {
    ladisHead,
    ladisFooter,
  },
  computed: {
    ...mapState(["agentConfig"]),
  },
  head() {
    const self = this as any;
    return {
      title: self.agentConfig.title,
      meta: [
        { name: "keywords", content: self.agentConfig.metaKeywords },
        { name: "description", content: self.agentConfig.metaDescription },
      ],
      script: this.agentConfig.hm ? [{ src: this.agentConfig.hm }] : [],
    };
  },
});
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout,
#ladis-body {
  min-height: 100vh;
  display: flex;
  width: 100%;
}

/* aside粘性点位 */
.aside {
  right: 0;
  top: 30%;
  width: 54px;
  z-index: 10000;

  ul {
    list-style: none;
  }
  .tels {
    position: relative;
    height: 54px;
    .telChild {
      position: absolute;
      top: 0;
      right: 0;
      width: 54px;
      transition: all 0.3s;
      background-color: #1d2124;
      color: #fff;
      text-decoration-style: none;
      span {
        align-items: center;
      }
      a {
        color: #fff;
      }
    }
  }

  .tels:hover {
    .telChild {
      width: 220px;
      background-color: #17a2b8;
      padding-right: 5px;
      a {
        color: #fff;
        text-decoration-style: none;
      }
    }
  }
}
</style>
