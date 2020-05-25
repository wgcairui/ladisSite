<template>
  <div class="row foot-nav-pc friendlink" style="display:none;">
    <div class="row friendlylist">
      <div class="col-md-12 left">
&nbsp;
      </div>
      <div class="col-md-12 right">
        <a>友情链接：</a>

        <a href="http://www.oboo.cn/" target="_blank" alt="触摸一体机">触摸一体机</a> &nbsp;&nbsp;
        <a href="https://www.mustups.net/" target="_blank" alt="UPS电源">UPS电源</a> &nbsp;&nbsp;
        <a href="http://www.fany-eda.com/" target="_blank" alt="凡亿pcb">凡亿pcb</a> &nbsp;&nbsp;
        <a href="http://www.smt-dip.com/" target="_blank" alt="贴片加工厂">贴片加工厂</a> &nbsp;&nbsp;
        <a href="http://www.cyzm.net/" target="_blank" alt="太阳能路灯">太阳能路灯</a> &nbsp;&nbsp;
        <a href="http://www.tqsafe.com/" target="_blank" alt="家用保险箱">家用保险箱</a> &nbsp;&nbsp;
        <a href="https://www.sgzm.com" target="_blank" alt="照明工程">照明工程</a> &nbsp;&nbsp;
        <a href="http://www.eeio99.com/" target="_blank" alt="环形变压器 ">环形变压器</a> &nbsp;&nbsp;
        <a href="http://www.sanxu88.com/" target="_blank" alt="碳纤维电地暖">碳纤维电地暖</a> &nbsp;&nbsp;
        <a href="http://www.tuo-li.com/" target="_blank" alt="蓄电池">蓄电池</a> &nbsp;&nbsp;
        <a href="http://www.tengshuodz.com/" target="_blank" alt="有机硅导电胶">有机硅导电胶</a> &nbsp;&nbsp;
        <a href="http://www.gzchupai.com/" target="_blank" alt="触控一体机">触控一体机</a> &nbsp;&nbsp;
        <a href="http://www.3doe.com/" target="_blank" alt="三维扫描仪">三维扫描仪</a> &nbsp;&nbsp;
        <a href="http://www.paileshi.com.cn/" target="_blank" alt="干式变压器">干式变压器</a> &nbsp;&nbsp;
        <a href="http://www.shiweisemi.com/" target="_blank" alt="LED芯片">LED芯片</a> &nbsp;&nbsp;
        <a href="http://www.szlwtech.com/" target="_blank" alt="开关电源ic">开关电源ic</a> &nbsp;&nbsp;
        <a href="http://www.jianqiaochina.com" target="_blank" alt="振动试验台">振动试验台</a> &nbsp;&nbsp;
      </div>
    <!--  <div>
        <a
          v-for="val in Agent"
          :key="val.name"
          :href="'http://'+val.url"
          target="_blank"
          rel="noopener noreferrer"
        >{{ val.name }}</a>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Agents } from '../types/typing'
export default Vue.extend({
  name: 'FriendLink',
  data () {
    return {
      Agent: [
        {
          name: 'localhost',
          url: 'www.ladis.com.cn'
        },
        { name: '湖北雷迪司', url: 'www.ladishb.com' },
        { name: '深圳市雷迪司电源有限公司', url: 'www.szladis.com.cn' },
        { name: '雷迪司网络能源(深圳)有限公司', url: 'www.gdladis.cn' },
        { name: '遵义雷迪司', url: 'www.zyups.cn' },
        { name: '贵州毕节雷迪司', url: 'bijie.gzjifang.com' },
        { name: '贵州安顺雷迪司', url: 'anshun.gzjifang.com' },
        { name: '贵州都匀雷迪司', url: 'duyun.gzjifang.com' },
        { name: '贵州六盘水雷迪司', url: 'liupanshui.gzjifang.com' },
        { name: '贵州铜仁雷迪司', url: 'tongren.gzjifang.com' },
        { name: '贵州兴义雷迪司', url: 'xingyi.gzjifang.com' },
        { name: '贵州凯里雷迪司', url: 'kaili.gzjifang.com' },
        { name: '陕西雷迪司', url: 'www.xaladis.com' },
        // { name: '河北雷迪司', url: 'www.hbladis.com' },
        { name: '福建雷迪司', url: 'www.ladups.com' }
      ] as Agents[]
    }
  }
})
</script>
