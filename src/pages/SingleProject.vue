<script>
import { 
  defineComponent, 
} from 'vue';


export default defineComponent({
  name: 'SingleProject',
  props: ['page'],
  setup(){

  },
  
});
</script>

<template>
    <div class="single-project">
      <section class="left">
        <img :src="page.data.img" :alt="page.data.name">
      </section>
      <section class="right">
        <div class="name">{{page.data.name}}</div>
        <div class="tags"><span class="tag" v-for="tag in page.data.tags" :key="tag.name" :style="{background:tag.color,color: tag.color||'white'}">{{tag.name}}</span></div>
        <div class="desc">{{page.data.desc}}</div>
      </section>
      <section class="bottom">
        <a v-for="link in page.data.links" :key="link.name" :href="link.url" :title="link.name" class="link">
          <i v-if="link.icon.type === 'class'" :class="link.icon.value"></i>
          <img v-else :src="link.icon.value" alt="">
        </a>
      </section>
    </div>
</template>

<style scoped>
.single-project{
  display: flex;
  flex-wrap: wrap;
  color: white;
}
.left, .right{
  width: 50%;
  height: calc(100% - 20em);
  padding: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
}
.bottom{
  width: 100%;
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left img{
  width: 100%;
  border-radius: 1em;
}
.right .name{
  font-size: 4em;
  font-weight: bold;
}
.right .tags .tag{
  padding: 0.2em 0.4em;
  border-radius: 0.3em;
  margin: 0.2em;
}
.bottom .link{
  display: inline-block;
  width: 2em;
  height: 2em;
  border-radius: 1em;
  background: #333;
  line-height: 2em;
  text-align: center;
  color: #fff;
  transition: 0.2s;
}
.bottom .link:hover{
  background: #386ade;
}
</style>