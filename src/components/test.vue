<template>
    <div class="page_box">
      <p>test</p>
    </div>
</template>
<style lang="scss" type="text/scss">
  $color: #0f0;
  $hei:20px;
  .page_box{
    p{
      height: $hei;
      color: $color;
    }
  }
  /*代码块
  @mixin border{
    border:1px solid #eee;
  }

  div{
    @include border
  }
  继承
  .test1 {border: 1px solid #eee;}
  .test2 {@extend .test1;color:white;}
  */
</style>
<script>
    export default{
        data(){
            return {}
        },
        components: {},
        mounted: function () {
            this.test()
        },
        methods: {
          sleep:function (ms) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve('sleep for ' + ms + ' ms');
              }, ms);
            });
          },
          async test(){
            let a = await this.$axios({
              url:'https://www.easy-mock.com/mock/5af3eb507098da01bd921f89/example/upload',
              data:{}
            });
            console.log(a);
            let b = await this.sleep(2000);
            console.log('b='+b);

          }
        }
    }
</script>
