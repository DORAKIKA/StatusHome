<script>
import { 
  defineComponent, 
} from 'vue';


export default defineComponent({
  name: 'StatusBar',
  props: ['handleToggleStatus','statusHide'],
  setup(){
  },
  
});
</script>

<template>
    <nav class="status-bar">
        <section class="left"></section>
        <section class="center">
            <div class="item open-status" @click="handleToggleStatus">
                <el-tooltip
                    :content="statusHide ? '打开状态栏' : '关闭状态栏'"
                >
                    <i class="fa-solid fa-ellipsis"></i>
                </el-tooltip>
            </div>
        </section>
        <section class="right">
            <div class="item"><online></online></div>
            <div class="item"><battery></battery></div>
        </section>
    </nav>
</template>

<style scoped>
.status-bar{
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    gap: 0.5em;
    padding: 1em;
    font-size: 12px;
    z-index: 200;
    color: var(--font-color);
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.status-bar:hover{
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
}
.center{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.right{
    display: flex;
    gap: 1em;
    align-items: center;
}

.open-status{
    cursor: pointer;
}
</style>