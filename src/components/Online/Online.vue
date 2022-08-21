<script>
import { 
  defineComponent, onBeforeUnmount, onMounted, reactive, 
} from 'vue';

export default defineComponent({
  name: 'Online',
  setup(){
    const state = reactive({
        value: true,
    })
    function networkChange(obj){
        state.value = obj.value
    }
    function handleOnline(e){
        console.log(e, '在线');
        state.value = true
        ElMessage.success('网络已连接！')
    }
    function handleOffline(e){
        console.log(e, 'lixian')
        state.value = false
        ElMessage.warning('网络未连接')
    }

    onMounted(() => {
        if(window.navigator.onLine){
            networkChange({value: true})
        }else{
            networkChange({value: false})
            ElMessage.warning('网络未连接')
        }
        window.addEventListener('offline', handleOffline)
        window.addEventListener('online', handleOnline)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('offline', handleOffline)
        window.removeEventListener('online', handleOnline)
    })

    return {
        state
    }
  },
  
});
</script>

<template>
    <div class="online" :class="state.value ? 'online' : 'offline'">
        <el-tooltip
            effect="dark"
            :content="state.value ? '网络已连接' : '网络未连接'"
            placement="bottom"
        >
            <i class="fas fa-wifi"></i>
        </el-tooltip>
    </div>
</template>

<style scoped>
.offline{
    color: red;
}
</style>