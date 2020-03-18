<template>
  <b-img-lazy
    v-bind="mainProps"
    :src="img"
    :alt="alt"
    :onerror="onPic()"
  />
</template>
<script lang="ts">
/* eslint-disable vue/require-default-prop */
import Vue from 'vue'
export default Vue.extend({
  name: 'MyImg',
  props: {
    src: String,
    alt: String
  },
  data () {
    return {
      img: 'http"//www.ladishb.com' + this.src,
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb'
      }
    }
  },
  methods: {
    onPic () {
      this.img = 'http://www.ladishb.com:9006' + this.src
    }
  }
})
</script>
