<script>
import { 
  defineComponent, 
} from 'vue';


export default defineComponent({
  name: 'ImageCard',
  props: ['card'],
  setup(){

  },
  
});
</script>

<template>
    <div class="image-card">
        <img :src="card.value" alt="">
    </div>
</template>

<style scoped>
.image-card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>