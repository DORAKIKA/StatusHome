<script>
import { 
  defineComponent, 
} from 'vue';


export default defineComponent({
  name: 'StatusName',
  props: ['card'],
  setup(){

  },
  
});
</script>

<template>
    <div
      :href="card.link"
      class="big-text"
    >
        <span class="text">{{card.value}}</span>
    </div>
</template>

<style scoped>
.big-text{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}
.big-text .tip{
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8em;
}
.big-text .text{
    font-size: 3em;
}
.big-text:hover{
  background: var(--color0);
}
</style>