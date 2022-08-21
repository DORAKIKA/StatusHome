<template>
  <div class="post-carousel card" @mouseenter="isHover = true" @mouseleave="isHover=false">
    <div class="slide-show-container">
      <div class="slide-show-items" :style="`width:${(posts.length)*100}%;transform:translateX(${100/(posts.length) * (-index)}%)`">
          <div class="slide-show-item" v-for="post in posts" :key="post.id">
            <div class="project">
              <div class="cover"><img :src="post.cover" :alt="post.name"></div>
              <div class="info">
                <div class="line">
                    <div class="name">{{post.name}}</div>
                    <div class="links">
                    <icon-link v-for="link in post.links" :key="link.url" :link="link"></icon-link>
                    </div>
                </div>
                <div class="tags" v-show="post.tags">
                  <span v-for="tag in post.tags" :key="tag.name">{{tag.name}}</span>
                </div>
                <div class="desc" v-show="post.desc">{{post.desc}}</div>
              </div>
            </div>
          </div>
      </div>
    </div>
          <div class="slide-show-arrow-left" @click="indexBack" style="left:4px;"><i class="fas fa-angle-left"></i></div>
          <div class="slide-show-arrow-right" @click="indexForward" style="right:4px;"><i class="fas fa-angle-right"></i></div>
      
      <div class="slide-show-buttons">
          <div class="slide-show-button" :class="index === i ? 'is-active':''" @click="index = i" v-for="(post,i) in posts" :key="i"></div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core';
export default {
    props: {
        posts: {
            type: Array,
            default: ()=>{
                return []
            }
        }
    },
    setup(props){
        let index = ref(0);
        let isHover = ref(false);
        let timer = null;
        let posts = props.posts
        let changeIndex = ()=>{
            if(!isHover.value){
                index.value++;
                index.value %= posts.length
            }
        }
        let indexBack = () => {
            index.value --;
            index.value += posts.length;
            index.value %= posts.length;
        }
        let indexForward = () => {
            index.value ++;
            index.value %= posts.length;
        }

        onMounted(()=>{
            timer || (timer = setInterval(changeIndex,6000));
        })
        onUnmounted(()=>{
            if(timer){
                clearInterval(timer)
                timer = null;
            }
        })
        return {
            index,
            isHover,
            indexBack,
            indexForward
        }
    },
    mounted(){
        
    },
    beforeDestroy(){
    },
}
</script>


<style scoped>
.post-carousel{
    overflow: hidden;
    position: relative;
    border-radius: 8px;
    height: 100%;
    width: 100%;
    padding: 0;
}
.slide-show-container{
    border-radius: 8px;
    overflow: hidden;
    height: 100%;
}
.slide-show-items{
    display: flex;
    transition: 0.5s;
    height:100%;
}
.slide-show-items .slide-show-item{
    flex: 1;
    height: 100%;
    overflow: hidden;
    position: relative;
}
.slide-show-buttons{
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    height: 20px;
    display: flex;
    transform: scale(0.5);
    justify-content: center;
    transition: 0.3s;
}
.post-carousel:hover .slide-show-buttons{
    transform: scale(1);
}
.slide-show-button{
    width: 22px;
    height: 12px;
    border-radius: 6px;
    background: rgba(133,133,133,0.4);
    margin: 4px;
    transition: 0.3s;
    cursor: pointer;
}
.slide-show-button:hover{
    background: rgba(133, 133, 133, 0.5);
}
.slide-show-button.is-active{
    background: #386ade;
    width: 60px;
}

.slide-show-arrow-left,
.slide-show-arrow-right{
    display: none;
    position: absolute;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    bottom: 50%;
}
.slide-show-arrow-left:hover,
.slide-show-arrow-right:hover{
    background: rgba(0, 0, 0, 0.6);
}
.post-carousel:hover .slide-show-arrow-left,
.post-carousel:hover .slide-show-arrow-right{
    display: block;
}

.project{
  /* width: calc((100% - 4em) / 5); */
  /* height: fit-content; */
  /* width: 100%; */
  height: 100%;
  transition: 0.3s;
  position: relative;
}
.project .cover{
    width: 100%;
    height: 100%;
    position: absolute;
}
.project .cover img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}
.project .info{
    position: absolute;
    bottom: 0;
    padding: 5em 1em 1em;
    width: 100%;
    color: #fff;
    background: linear-gradient(to top, rgba(12, 12,12,0.4), transparent);
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.project .info .line{
    display: flex;
    gap: 1em;
    align-items: center;
}
.project .info .name{
    font-size: 2em;
}
.project .info .links{
    display: flex;
    gap: 0.5em;
}
</style>