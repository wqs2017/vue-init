<template>
  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vue-draggable-resizable style="border:1px solid #f00;" :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
        X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vue-draggable-resizable>
    <slot></slot>
  </div>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'

  export default {
    data: function () {
      return {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      }
    },
    methods: {
      onResize: function (x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
      },
      onDrag: function (x, y) {
        this.x = x
        this.y = y
      }
    }
  }
</script>
