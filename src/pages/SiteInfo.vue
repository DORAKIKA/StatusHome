<script>
import { 
  defineComponent, 
} from 'vue';
import IconLink from '../components/IconLink/IconLink.vue';

export default defineComponent({
  name: 'SiteInfo',
  props: ['page'],
  components: {IconLink},
  setup(){

  },
  
});
</script>

<template>
    <div class="site-info">
        <div class="avatar animate"><img :src="page.data.avatar" alt=""></div>
        <div class="info-container animate card">
            <div class="title">
                <div class="name">{{page.data.site}}</div>
                <div class="desc">{{page.data.desc}}</div>
            </div>
            <div class="buttons">
                <icon-link v-for="link in page.data.links" :key="link.url" :link="link" mode="all"></icon-link>
            </div>
        </div>
    </div>
</template>

<style  scoped>
.site-info{
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1em;
    position: relative;
}

.avatar img{
    width: 4em;
    height: 4em;
    border-radius: 2em;
}
.info-container{
    width: 40em ;
    /* height: 10em; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: width 0.3s;
}
.title{
    width: 100%;
    padding: 1em;
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.title .desc{
    color: #666;
    font-size: 0.8em;
}
.buttons{
    padding: 1em;
    gap: 1em;
    display: flex;
    flex-wrap: wrap;
}
.button{
    padding: 0.5em 1em;
    color: inherit;
    border-radius: 0.5em;
    transition: 0.3s;
    color: var(--color);
    display: flex;
    align-items: center;
    gap: 0.2em;
}
.button:hover{
    background: var(--color);
    color: #fff;
}
.button img{
    width: 1em;
    height: 1em;
}
.is-active .animate{
    animation: pop 0.5s ease-in-out;
}
@keyframes pop {
    0%{
        transform: scale(0);
    }100%{
        transform: scale(1);
    }
}
@media (max-width: 1000px) {
    .site-info .info-container{
        width: 25em;
    }
}
@media (max-width: 768px) {
    .site-info .info-container{
        width: calc(100% - 2em);
    }
}
</style>