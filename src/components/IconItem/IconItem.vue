<script>
import { 
  defineComponent, 
} from 'vue';


export default defineComponent({
  name: 'IconItem',
  props: ['icon'],
  setup(){

  },
  
});
</script>

<template>
    <i class="icon-item" v-if="icon && icon.type === 'class'" :class="icon && icon.value"></i>
    <img class="icon-item" v-else :src="icon && icon.value">
</template>

<style scoped>
.icon-item{
    width: 1em;
    height: 1em;
    text-align: center;
}
</style>