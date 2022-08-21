<script>
import { 
  defineComponent, 
} from 'vue';


export default defineComponent({
  name: 'Divider',
  setup(){

  },
  
});
</script>

<template>
    <div class="divider">
        <hr>
    </div>
</template>

<style scoped>
.divider{
    background: transparent;
    grid-column: span 3;
    display: flex;
    align-items: center;
}
hr{
    width: 100%;
    
}
</style>