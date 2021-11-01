<template>
  <div class="fixeds">
    <b-button pill variant="danger" class="asid-toggle" @click="showOp">选项</b-button>

    <b-list-group class="my-4 text-light options" :class="{aa:opacity}">
      <b-list-group-item
        class="bg-dark rounded-0 my-1 text-light"
       
        :to="vr['全景展示']"
      >{{ $t('index.0twzes') }}</b-list-group-item>
      <b-list-group-item
        class="bg-dark my-1 text-light"
       
        :to="vr['机房全景展示']"
      >{{ $t('index.sn1yip') }}</b-list-group-item>
      <b-list-group-item
        class="bg-dark my-1 text-light"
       
        :to="vr['产品全景展示']"
      >{{ $t('index.0ibgd6') }}</b-list-group-item>
    </b-list-group>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { vr } from '../static/hrefs'
  export default Vue.extend({
    data() {
      return {
        vr,
        opacity: false
      }
    },
    methods: {
      showOp() {
        this.opacity = !this.opacity
      }
    }
  })
</script>
<style lang="scss" scoped>
  .list-group-item {
    border-radius: 0;
  }

  .asid-toggle {
    display: none;
    margin: .5rem 0 0 .51rem;
  }

  .aa{
    left: 0 !important;
  }

  @media screen and (max-width: 576px) {
    .fixeds {
      position: fixed;
      z-index: 9999;

      .asid-toggle {
        display: block;
      }

      .options {
        position: absolute;
        left: -20rem;
        word-break: keep-all;
        transition: all .4s;
      }

      .list-group-item {
        transition: all 0.3s;
        padding: 0.3rem 0.2rem;
        border-radius: 45px;
        margin-left: 0.3rem;
        text-align: center;
      }
    }
  }
</style>
