<script setup>
import { reactive } from "@vue/reactivity";
import SiteInfo from '/src/pages/SiteInfo.vue'
import StatusInfo from '/src/pages/StatusInfo/index.vue'
import StatusBar from './layout/StatusBar.vue'
import { onBeforeUnmount, onMounted } from "@vue/runtime-core";

const state = reactive({
  statusHide: true,
  statusLoad: false
})

const config = reactive(window.CONFIG)
onMounted(() => {
})

onBeforeUnmount(() => {
})
function handleToggleStatus(){
  state.statusLoad = true
  state.statusHide = !state.statusHide;
}


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
