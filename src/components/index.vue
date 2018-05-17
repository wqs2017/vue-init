<template>
    <div class="">
      主页
      <drag>
        <p>哈哈 我是drag</p>
      </drag>
    </div>
</template>
<style>

</style>
<script>
    import drag from './drag.vue'
    export default{
        data(){
            return {}
        },
        components: {
            drag
        },
        mounted: function () {

        },
        methods: {}
    }
</script>
