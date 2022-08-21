<script>
import { 
  defineComponent, onMounted, reactive, 
} from 'vue';
import { getHitokoto } from '../../api';

export default defineComponent({
  name: 'Hitokoto',
  props: ['card'],
  setup(props){
    const state = reactive({
        hitokoto: {},
        loading: false
    })
    function setHitokoto(){
        state.loading = true
        getHitokoto(props.card.value).then(res => {
            state.hitokoto = res.data
            state.loading = false
        }).catch(() => {
            state.loading = false
        })
    }
    onMounted(() => {
        setHitokoto()
    })
    return{
        state
    }
  },
  
});
</script>

<template>
    <component :is="card.link ? 'a' : 'div'" class="hitokoto">
        <span>一言</span>
        <span>{{state.hitokoto && state.hitokoto.hitokoto}}</span>
        <span>「{{state.hitokoto && state.hitokoto.from}}」</span>
    </component>
</template>

<style scoped>
.hitokoto{
    padding: 1em;
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'YouSheBiaoTiHei';
}
.hitokoto:hover{
    background: var(--color0);
}
</style>