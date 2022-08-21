<template>
  <div
    class="drag-resize"
    :class="['drag-resize-'+pos]"
    @mousedown="onButtonDown"
    @touchstart="onButtonDown"
  />
</template>

<script lang="ts">
export default {
  name: 'DragResize',
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 160,
    },
    max: {
      type: Number,
      default: 500,
    },
    // 数值增加的方向：如设置为top，则向上drag时数值增加 | 默认为位置同方向为增加
    direction: {
      type: String,
      default: () => {
        return this.pos
      },
    },
    // dragResize 显示位置 => top&bottom为上下drag，left和right为左右drag
    pos: {
      type: String,
      default: 'right'
    }
  },
  setup(props, { emit }){
    let dragging = false
    let startX = 0, startY = 0
    let currentX = 0, currentY = 0
    let startPosition = props.modelValue
    let newPosition = null
    let oldValue = props.modelValue

    function onButtonDown(e){
      e.preventDefault()
      onDragStart(e)
      window.addEventListener('mousemove', onDragging)
      window.addEventListener('touchmove', onDragging)
      window.addEventListener('mouseup', onDragEnd)
      window.addEventListener('touchend', onDragEnd)
    }

    function onDragStart(e){
      dragging = true
      if(e.type === 'touchstart'){
        e.clientY = e.touches[0].clientY
        e.clientX = e.touches[0].clientX
      }
      // if(props.vertical){
      if(props.pos === 'top' || props.pos === 'bottom'){
        startY = e.clientY
      }else{
        startX = e.clientX
      }
      startPosition = props.modelValue
      newPosition = startPosition
      emit('change', dragging)
    }
    function onDragging(e){
      if(dragging){
        let diff = 0
        if(e.type === 'touchmove'){
          e.clientX = e.touches[0].clientX
          e.clientY = e.touches[0].clientY
        }
        // if(props.vertical){
        if(props.pos === 'bottom'){
          currentY = e.clientY
          diff = currentY - startY
        } else if(props.pos === 'top') {
          currentY = e.clientY
          diff = startY - currentY
        } else if(props.pos === 'right') {
          currentX = e.clientX
          diff = currentX - startX
        } else {
          currentX = e.clientX
          diff = startX - currentX
        }
        if(props.direction !== props.pos) diff = -diff
        newPosition = startPosition + diff
        setPosition(newPosition)
      }
    }
    function onDragEnd(){
      if(dragging){
        setTimeout(() => {
          dragging = false
          emit('change',dragging)
        },0)
        window.removeEventListener('mousemove',onDragging)
        window.removeEventListener('touchmove',onDragging)
        window.removeEventListener('mouseup',onDragEnd)
        window.removeEventListener('touchend',onDragEnd)
      }
    }
    function setPosition(pos){
      if(pos === null || isNaN(pos)) return
      if(pos > props.max || pos < props.min){
        pos = pos < props.min ? props.min : props.max
      }
      emit('update:modelValue', pos)
      if(!dragging && props.modelValue !== oldValue) {
        oldValue = props.modelValue
      }
    }

    return {
      onButtonDown
    }
  }
}
</script>

<style scoped lang="scss">
.drag-resize {
  position: absolute;
  width: 4px;
  height: 44px;
  z-index: 201;
  @include background_color('drag_line');
  cursor: col-resize;
  //
  //&-vertical{
  //  width: 100%;
  //  height: 2px;
  //  left: 0;
  //  top: 0;
  //  cursor: row-resize;
  //}
  &-left{
    width: 4px;
    height: 44px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: col-resize;
  }
  &-right{
    width: 4px;
    height: 44px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: col-resize;
  }
  &-top{
    width: 100%;
    height: 3px;
    left: 0;
    top: 0;
    cursor: row-resize;
  }
  &-bottom{
    width: 100%;
    height: 3px;
    left: 0;
    bottom: 0;
    cursor: row-resize;
  }
}
</style>