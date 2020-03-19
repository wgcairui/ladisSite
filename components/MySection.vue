<template>
  <b-container>
    <b-row>
      <!-- 资料下载，常见问题 -->
      <b-col v-for="val in [down, problem]" :key="val.title" cols="6" sm="4">
        <b-link :href="val.href" class="text-decoration-none">
          <div class="d-flex flex-row">
            <div class="d-none d-lg-block">
              <b-img
                :src="val.src"
                :alt="val.title"
                class="d-inline"
                width="155"
              />
            </div>
            <span class="d-flex flex-column py-3 px-2">
              <h5 class="text-primary">{{ val.title }}</h5>
              <span class="flex-grow-1 text-dark">
                <p
                  v-for="text in val.content"
                  :key="text[0]"
                  class="m-0 p-0 show-p"
                >
                  {{ text.join('/') }}
                </p>
              </span>
              <span class="d-none d-md-block small">
                <i
                  class="px-2 rounded-pill bg-secondary text-light"
                >点击进入>></i>
              </span>
            </span>
          </div>
        </b-link>
      </b-col>
      <!-- 联系 -->
      <b-col cols="6" sm="4">
        <div class="d-flex flex-row">
          <div class=" d-none d-lg-block">
            <b-img src="~/assets/down3.png" class="d-inline shimgw" />
          </div>

          <span
            v-if="defaults.home.contact"
            class="d-flex flex-column  py-3 px-2"
          >
            <h5 class="text-primary">
              联系方式
            </h5>
            <span class="flex-grow-1 ">
              <b-link
                class="text-decoration-none d-block text-dark mb-1 show-p"
                :href="
                  `tencent://message/?Site=baidu.com&uin=${defaults.home.contact.qq}&Menu=yes`
                "
                target="_blank"
              >QQ:{{ defaults.home.contact.qq }}</b-link>
              <b-link
                v-for="tel in defaults.home.contact.tel"
                :key="tel"
                class="text-decoration-none d-block text-dark mb-1 show-p"
              >{{ tel }}</b-link>
            </span>
          </span>
          <span v-else class="d-flex flex-column  py-3 px-2">
            <h5 class="text-primary">
              服务网点
            </h5>
            <span class="flex-grow-1 ">
              <b-link
                class="text-decoration-none d-block text-dark mb-1 show-p"
                href="/buy"
              >全国服务网点</b-link>
            </span>
            <span class="d-none d-lg-block small">
              <b-link
                class="px-2 rounded-pill bg-secondary text-light"
                href="/buy"
                target="_blank"
              >点击进入>></b-link>
            </span>
          </span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      defaults: this.$store.state.defaults
    }
  },
  computed: {
    // 资料下载
    down () {
      return {
        src: require('~/assets/down1.png'),
        href: '/support/监控软件下载',
        title: '资料下载',
        content: [
          ['软件下载', '资质下载'],
          ['彩页下载', '产品维修']
        ]
      }
    },
    // 常见问题
    problem () {
      return {
        src: require('~/assets/down2.png'),
        href: '/support/常见问题',
        title: '常见问题',
        content: [
          ['软件设置', '电池连接'],
          ['硬件安装', '错误代码'],
          ['技术文档']
        ]
      }
    }
    // 服务
    /* serve () {
      return {
        localhost: {
          src: picSourec.fuwuwangdian,

          href: '/buy/',
          title: '服务网点',
          content: [
            {
              text: '全国服务网点',
              src: '/buy/'
            }
          ]
        },
        'www.ladis.com.cn': {
          src: picSourec.fuwuwangdian,

          href: '/buy/',
          title: '服务网点',
          content: [
            {
              text: '全国服务网点',
              src: '/buy/'
            }
          ]
        },
        'www.ladishb.com': {
          src: picSourec.fuwuwangdian,
          title: '客户咨询',
          href: 'tencent://message/?Site=baidu.com&uin=15713024&Menu=yes',
          content: [
            {
              text: 'QQ:15713024',
              src: 'tencent://message/?Site=baidu.com&uin=15713024&Menu=yes'
            },
            { text: '张先生:18271826065', src: '#' }
          ]
        }
      }
    } */
  }
})
</script>
<style lang="scss" scoped>
.show-p {
  font-size: small;
}
.shimgw {
  width: 155px;
}
</style>
