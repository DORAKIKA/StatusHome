<script setup>
import { reactive } from "@vue/reactivity";
import SiteInfo from '/src/pages/SiteInfo.vue'
import StatusInfo from '/src/pages/StatusInfo/index.vue'
import StatusBar from './layout/StatusBar.vue'

import CONFIG from './config'

import {useRedirect} from '/src/plugins/redirect.js'
import {useMiddleMouse} from '/src/plugins/mouse.js'
import { useLinkTag, useMetaInfo } from "./plugins/metaInfo";
import {use51la} from './plugins/51la'


const state = reactive({
  statusHide: true,
  statusLoad: false
})
const config = reactive(CONFIG)

function handleToggleStatus(){
  state.statusLoad = true
  state.statusHide = !state.statusHide;
}
function enabled(key){
  return config.use && config.use[key] && config.use[key].enabled
}


// meta
config.meta && useMetaInfo(config.meta)
// link
config.link && useLinkTag(config.link)
// 重定向
enabled('redirect') && useRedirect(config.use.redirect.to)
// 鼠标中键
enabled('middleMouse') && useMiddleMouse(handleToggleStatus)
// 51la统计
enabled('tongji_51la') && use51la(config.use.tongji_51la)


</script>

<template>
  <div class="background" :style="{'--background':config.background}"></div>
  <status-bar :handleToggleStatus="handleToggleStatus" :statusHide="state.statusHide"></status-bar>
  <div
    id="app-wrapper"
  >
    <site-info :site="config.siteInfo" class="page is-active"></site-info>
  </div>
  <status-info v-if="state.statusLoad" :cards="config.cards" :hide="state.statusHide"></status-info>
</template>

<style>
#app-wrapper{
  transition: 0.3s;
  background-repeat: no-repeat;
}
.background{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: var(--background);
}
.page{
  height: 100vh;
  transition: 0.3s;
  background: rgba(0, 0, 0, 0.05);
}

</style>
