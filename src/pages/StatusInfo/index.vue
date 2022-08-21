<script>
import { 
  defineComponent, 
} from 'vue';
import BigText from './BigText.vue'
import Hitokoto from './Hitokoto.vue'
import ImageCard from './ImageCard.vue';
import LinkCard from './LinkCard.vue'
import Divider from './Divider.vue'


export default defineComponent({
  name: 'StatusInfo',
  props: ['hide', 'cards'],
  components: {
    BigText,
    Hitokoto,
    ImageCard,
    LinkCard,
    Divider
  },
  setup(){
    function getCssVar(key, theme){
        if(!Array.isArray(theme))return{}
        let ans = {}
        theme.forEach((item, index) => {
            if(item)ans[key+index] = item
        })
        return ans;
    }
    return {
        getCssVar
    }
  },
  
});
</script>

<template>
    <div id="status-info" class="status-info" :class="hide ? 'hide' : 'show'">
        <template v-for="card,index in cards" :key="index">
            <component
                class="status-item"
                :class="{'callout': card.callout}"
                :is="card.type"
                :card="card"
                :style="{
                '--row': card.rowSize,
                ...getCssVar('--col',card.colSize),
                ...getCssVar('--theme',card.theme)
            }"
            ></component>
        </template>
    </div>
</template>

<style scoped>
#status-info{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(12px);
    padding: 4em 2em 2em;
    transition: 0.3s;
    overflow-y: scroll;

    --base: 300px;
    --col0: 6;
    --col1: 3;
    --col2: 2;
    --row: 1;
    --theme0: rgba(0,0,0,0.5);
    --theme1: rgba(255,255,255);
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(auto-fill, 8em);
    grid-auto-rows: 10em;
    /* grid-auto-flow: dense; */
}
#status-info::-webkit-scrollbar{
    width: 0;
}
#status-info.show{
    z-index: 100;
    opacity: 1;
    animation: opacityIn 0.2s;
}
#status-info.hide{
    z-index: -1;
    opacity: 0;
    animation: opacityOut 0.2s;
}
@keyframes opacityIn {
    0%{
        z-index: -1;
        opacity: 0;
    }1%{
        z-index: 100;
        opacity: 0;
    }100%{
        z-index: 100;
        opacity: 1;
    }
}
@keyframes opacityOut {
    0%{
        z-index: 100;
        opacity: 1;
    }99%{
        z-index: 100;
        opacity: 0;
    }100%{
        z-index: -1;
        opacity: 0;
    }
}
.status-item{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 16px;
    transition: 0.3s;
    grid-column: span var(--col2);
    grid-row: span var(--row);
    transform-origin: 0 0!important;
    overflow: hidden;
    position: relative;
}
.status-item::before{
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 8px;
    left: 8px;
    border-radius: 50%;
    background: var(--theme0);
    opacity: 0.7;
}
.status-item.callout,
.status-item:hover{
    background: var(--theme0);
}
.show .status-item{
    transform: scale(1);
    animation: scaleIn 0.3s;
}
.status-item:hover{
    transform: translateY(-4px);
    transform-origin: center center!important;
}
.hide .status-item {
    transform: scale(0.5);
    animation: scaleOut 0.3s;
}
@keyframes scaleIn {
    0%{
        transform: scale(0.8);
    }100%{
        transform: scale(1);
    }
}
@keyframes scaleOut {
    0%{
        transform: scale(1);
    }100%{
        transform: scale(0.5);
    }
}

@media (max-width: 1200px) {
    #status-info .status-item{
        grid-column: span var(--col1);
    }
}
@media (max-width: 768px) {
    #status-info .status-item{
        grid-column: span var(--col0);
    }
}
</style>