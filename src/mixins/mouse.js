import { getCurrentInstance, onBeforeUnmount, onMounted } from "vue"



// 鼠标中键唤起
export function useMiddleMouse(callback, dom){
    const app = dom || window
    function handleMouseDown(e){
        if(e.button === 1){
            e.stopPropagation();
            e.preventDefault();
            callback()
            console.log('window middleMouse')
            return false
        }
    }

   onMounted(() => {
    app.addEventListener('mousedown', handleMouseDown, true)
   })
   onBeforeUnmount(() => {
    app.removeEventListener('mousedown', handleMouseDown)
   })
}