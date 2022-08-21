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
    <component
      :is="card.link ? 'a' : 'div'"
      :href="card.link"
      class="big-text"
      target="_blank"
    >
        {{card.value}}
    </component>
</template>

<style scoped>
.big-text{
    width: 100%;
    height: 100%;
    font-size: 3em;
    font-family: YouSheBiaoTiHei;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}
.big-text:hover{
  background: var(--color0);
}
</style>