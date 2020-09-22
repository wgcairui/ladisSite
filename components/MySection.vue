<template>
  <b-container>
    <b-row>
      <!-- 资料下载，常见问题 -->
      <b-col v-for="val in [down, problem]" :key="val.title" cols="6" sm="4">
        <b-link :href="val.href" class="text-decoration-none">
          <div class="d-flex flex-row">
            <div class="d-none d-lg-block">
              <b-img :src="val.src" :alt="val.title" class="d-inline" width="155" />
            </div>
            <span class="d-flex flex-column py-3 px-2">
              <h4 class="text-primary text-nowrap">{{ val.title }}</h4>
              <span class="flex-grow-1 text-dark">
                <p
                  v-for="text in val.content"
                  :key="text[0]"
                  class="m-0 p-0 show-p"
                >{{ text.join('/') }}</p>
              </span>
              <span class="d-none d-md-block small mt-2">
                <i
                  class="px-2 rounded-pill bg-secondary text-light p-1 small"
                >{{ $t('dian-ji-jin-ru') }}>></i>
              </span>
            </span>
          </div>
        </b-link>
      </b-col>
      <!-- 联系 -->
      <b-col cols="6" sm="4">
        <div class="d-flex flex-row">
          <div class="d-none d-lg-block">
            <b-img src="/a_images/down3.png" class="d-inline shimgw" />
          </div>

          <span v-if="agentConfig.contactTel" class="d-flex flex-column py-3 ">
            <h4 class="text-primary text-nowrap">{{ $t('lian-xi-fang-shi') }}</h4>
            <span class="flex-grow-1">
              <b-link
                v-if="agentConfig.contactQQ"
                class="text-decoration-none d-block text-dark mb-1 tel-p font-weight-bold text-nowrap"
                :href="
                  `tencent://message/?Site=baidu.com&uin=${agentConfig.contactQQ}&Menu=yes`
                "
                target="_blank"
              >
                <svg
                  t="1593997628791"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4893"
                  height="20"
                >
                  <path
                    d="M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z"
                    fill="#FAAD08"
                    p-id="4894"
                  />
                  <path
                    d="M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z"
                    fill="#FAAD08"
                    p-id="4895"
                  />
                  <path
                    d="M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z"
                    fill="#000000"
                    p-id="4896"
                  />
                  <path
                    d="M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698 185.44461 533.595 177.87261 534.063 177.87261 534.063 166.64961 563.276 155.56661 593.696 147.44761 619.782 108.72961 744.168 121.27261 795.644 130.82461 796.798c20.496 2.474 79.78-93.637 79.78-93.637 0 97.66 88.324 247.617 290.576 248.996a718.01 718.01 0 0 1 5.367 0C708.80161 950.778 797.12261 800.822 797.12261 703.162c0 0 59.284 96.111 79.783 93.637 9.55-1.154 22.093-52.63-16.623-177.017"
                    fill="#000000"
                    p-id="4897"
                  />
                  <path
                    d="M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.238-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453"
                    fill="#FFFFFF"
                    p-id="4898"
                  />
                  <path
                    d="M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498"
                    fill="#FAAD08"
                    p-id="4899"
                  />
                  <path
                    d="M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135"
                    fill="#000000"
                    p-id="4900"
                  />
                  <path
                    d="M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927"
                    fill="#FFFFFF"
                    p-id="4901"
                  />
                  <path
                    d="M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574"
                    fill="#EB1C26"
                    p-id="4902"
                  />
                  <path
                    d="M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z"
                    fill="#EB1C26"
                    p-id="4903"
                  />
                </svg>
                {{ agentConfig.contactQQ }}
              </b-link>
              <b-link
                v-for="tel in agentConfig.contactTel"
                :key="tel"
                class="text-decoration-none d-block text-dark mb-1 tel-p font-weight-bold"
              >
                <svg
                  t="1593997278790"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4151"
                  height="20"
                >
                  <path
                    d="M177.39776 202.05056c-27.52 34.28864-88.48896 197.5808 172.83072 464.89088 275.3536 281.77408 452.95616 221.47072 483.52256 189.72672l-184.07424-183.80288c-25.73312 25.65632-58.84928 2.8416-122.42944-48.88064-42.01472-34.24256-90.48576-80.29184-132.45952-132.22912-29.45536-36.37248-55.5008-74.60864-28.61056-101.49376L177.39776 202.05056z"
                    p-id="4152"
                  />
                  <path
                    d="M900.31104 790.87104c11.92448-11.93984 10.73152-30.11072-0.11776-41.00608l0-0.16384c0 0-143.62624-143.10912-143.69792-143.19104-11.37152-11.34592-29.54752-11.12064-40.86272 0.08192l-52.0704 52.0704 184.56576 184.27904c0 0 52.13696-51.93216 52.0704-51.96288L900.31104 790.87104z"
                    p-id="4153"
                  />
                  <path
                    d="M432.53248 323.98848c11.92448-11.96544 10.81344-30.08512 0-40.9088l0-0.18432c0 0-147.77344-147.28704-147.85024-147.31776-11.37152-11.41248-29.58336-11.14112-40.84736 0.03072L191.79008 187.70432l188.63616 188.37504c0 0 52.10624-51.86048 52.10624-51.95264L432.53248 323.98848z"
                    p-id="4154"
                  />
                </svg>
                {{ tel }}
              </b-link>
            </span>
          </span>
          <span v-else class="d-flex flex-column py-3 px-2">
            <h5 class="text-primary">{{ $t('lian-xi-fang-shi') }}</h5>
            <span class="flex-grow-1">
              <b-link class="text-decoration-none d-block text-dark mb-1 show-p" href="/buy">全国服务网点</b-link>
            </span>
            <span class="d-none d-lg-block small">
              <b-link
                class="px-2 rounded-pill bg-secondary text-light"
                href="/buy"
                target="_blank"
              >{{ $t('dian-ji-jin-ru') }}>>>></b-link>
            </span>
          </span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { support } from './hrefs'
export default Vue.extend({
  data () {
    return {
      // defaults: this.$store.state.defaults
    }
  },
  computed: {
    ...mapState(['agentConfig', 'defaults']),
    // 资料下载
    down () {
      const locale = this.$i18n.locale
      return {
        src: '/a_images/down1.png',
        href: support['监控软件下载'],
        title: this.$t('zi-liao-xia-zai'),
        locale,
        content: [
          [this.$t('ruan-jian-xia-zai')],
          [this.$t('zi-zhi-xia-zai')],
          [this.$t('cai-ye-xia-zai')],
          [this.$t('chan-pin-wei-xiu')]
        ]
      }
    },
    // 常见问题
    problem () {
      const locale = this.$i18n.locale
      return {
        src: '/a_images/down2.png',
        href: support['常见问题'],
        title: this.$t('chang-jian-wen-ti'),
        locale,
        content: [
          [this.$t('ruan-jian-she-zhi')],
          [this.$t('dian-chi-lian-jie')],
          [this.$t('ying-jian-an-zhuang')],
          [this.$t('cuo-wu-dai-ma')],
          [this.$t('ji-shu-wen-dang')]
        ]
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.show-p {
  font-size: 16px;
}
.tel-p {
  font-size: 16px;
}
.shimgw {
  width: 155px;
}
svg{
  max-width: 20px;
}
</style>
