<script>
import { 
  defineComponent, 
} from 'vue';
import IconItem from '/src/components/IconItem/IconItem.vue'


export default defineComponent({
  name: 'LinkCard',
  props: ['card'],
  components: {IconItem},
  setup(props){
    let url = 'https://api.iowen.cn/favicon/'+(props.card.link||'').replace(/^https?\:\/\//i,'') + '.png'
    let icon = {
        type: 'image'
    }
    if(props.card.value.icon && props.card.value.icon.type === 'image'){
        icon.value = props.card.value.icon.value || url
    }else{
        icon = props.card.value.icon
    }
    return {
        icon
    }
  },
  
});
</script>

<template>
    <a class="link-card" :href="card.link">
        <icon-item :icon="icon"></icon-item>
        <span>{{card.value && card.value.name}}</span>
    </a>
</template>

<style scoped>
.link-card{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6em;
    gap: 0.5em;
    padding: 0 0.5em 0 1em;
}
.link-card .icon-item{
    border-radius: 0.2em;
}
.link-card span{
    flex: 1;
    text-align: center;
}

</style>