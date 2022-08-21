<script>
import { ElMessage } from 'element-plus';
import { 
  defineComponent, onBeforeUnmount, onMounted, reactive, ref, 
} from 'vue';


export default defineComponent({
  name: 'BatteryValue',
  setup(){
    const state = reactive({
        value: 30,
        type: 'normal',
        charging: true,
        chargingTime: 0,
        disChargingTimer: 0,
    });
    function updateBattery(val){
        state.value = val>>0;
        if(state.value === 100){
            if(state.charging)ElMessage.success('电池已充满！')
        }else if(state.value > 20){
            state.type = 'normal'
        }else if(state.value > 10 &&state.type !=='warning'){
            state.type = 'warning'
            if(!state.charging)ElMessage.warning('电量剩余'+state.value+'%');
        }else if(state.value <= 10 && state.type !== 'error'){
            state.type = 'error'
            if(!state.charging)ElMessage.error('电量剩余'+state.value+'%')
        }
    }
    let Battery;
    function handleChargingChange(){
        let battery = Battery;
        state.charging = battery.charging;
        if(battery.charging){
            ElMessage.success('接入电源，你可以放心浏览本网站')
        }else{
            if(battery.level < 0.5){
                ElMessage.warning('电量不多哦，确定不再充一下吗？')
            }else{
                ElMessage.success('哦吼！这么多电，动力满满！')
            }
            
        }
    }
    function handleLevelChange(){
        let battery = Battery
        updateBattery(battery.level * 100)
    }
    function handleChargingTime() {
        let battery = Battery
        console.log("Battery charging time: " + battery.chargingTime + " seconds");
    }
    function handleDischargingTime() {
        console.log("Battery discharging time: " + battery.dischargingTime + " seconds");
    }
    onMounted(() => {
        console.log('get')
        navigator.getBattery().then(battery=>{
            Battery = battery
            state.charging = battery.charging;
            updateBattery(battery.level * 100)

            battery.addEventListener('chargingchange', handleChargingChange);
            battery.addEventListener('levelchange', handleLevelChange);
            battery.addEventListener('chargingtimechange', handleChargingTime);
            battery.addEventListener('dischargingtimechange', handleDischargingTime);
        })
    })
    onBeforeUnmount(() => {
        if(Battery){
            Battery.removeEventListener('levelchange', handleLevelChange);
            Battery.removeEventListener('chargingtimeChange', hanelChargingTime);
            Battery.removeEventListener('dischargingtimechange', handleDischargingTime);
        }
    })

    return {
        state
    }
  },
  
});
</script>

<template>
    <el-tooltip
        effect="dark"
        :content="state.charging ? '充电中:'+state.value+'%' : state.value+'%'"
        placement="bottom"
    >
    <div class="battery">
            <i v-if="state.charging" class="charging fas fa-bolt"></i>
            <span class="num" v-else>{{state.value}}</span>
            <div class="value" :class="state.type" :style="{'--battery': state.value + '%'}"></div>

    </div>
    </el-tooltip>
        
</template>

<style scoped>
.battery{
    border: 2px solid currentColor;
    padding: 1px;
    min-width: 22px;
    position: relative;
    border-radius: 1px;
}
.num{
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: bolder;
    transform: translate(-50%, -50%) scale(0.6);
}
.charging{
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.6);
    animation: op 1.5s ease-in-out infinite;
}
@keyframes op {
    0%{
        opacity: 0.4;
    }50%{opacity: 1;}100%{
        opacity: 0.4;
    }
}
.battery::after{
    content: '';
    position: absolute;
    right: -5px;
    width: 2px;
    height: 8px;
    top: 1px;
    border-radius: 0 1px 1px 0;
    background: currentColor;
}
.value{
    background: currentColor;
    width: var(--battery);
    height: 8px;
}
.normal{
    color: rgb(36, 167, 36);
}
.warning{
    color: orange;
}
.error{
    color: red;
}
</style>