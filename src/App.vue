<template>
  <div id="app">
    <div class="test">
      <span>scss</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" type="text/scss">
  .test{
    span{
      color: #f00;
    }
  }
</style>
