<script>
import { 
  defineComponent, 
} from 'vue';


export default defineComponent({
  name: 'StatusCard',
  props: ['card'],
  setup(){

  },
  
});
</script>

<template>
    <div class="status-card">
        <div class="tip">{{card.tip}}</div>
        <div class="container"></div>
        <div class="footer"></div>
    </div>
</template>

<style scoped>
.status-card{
    background-size: cover!important;
    background-position: center!important;
}
.status-card::after{
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
}
.status-card .tip{
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8em;
}
</style>