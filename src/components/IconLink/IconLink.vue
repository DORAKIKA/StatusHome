<script>
import { 
  defineComponent, 
} from 'vue';
import IconItem from '../IconItem/IconItem.vue';


export default defineComponent({
  name: 'IconLink',
  props: ['link','mode'],
  components: {IconItem},
  setup(){

  },
  
});
</script>

<template>
    <a class="icon-link" :class="mode==='all'?'all':''" :href="link.url" :style="{'--font-color': link.color || 'black'}">
        <icon-item :icon="link.icon"/>
        <span v-if="mode==='all'">{{link.name}}</span>
    </a>
</template>

<style scoped>
.icon-link{
    color: var(--font-color);
    display: inline-block;
    height: 2em;
    min-width: 2em;
    padding: 0 0.5em;
    text-align: center;
    line-height: 2em;
    background: rgba(255, 255, 255, 0.1);
    transition: 0.3s;
    border-radius: 1em;
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
}
.icon-link.all{
    padding: 0 1em;
    line-height: 3em;
    height: 3em;
    border-radius: 0.5em;

}
.icon-link:hover{
    background: var(--font-color);
    color: #fff;
}
</style>