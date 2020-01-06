<template>
  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="getCount" ref="count"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../dist/js/mui.js'
export default {
  mounted () {
    mui('.mui-numbox').numbox()
    console.log(this.max)
  },
  methods:{
    getCount () {
      this.$emit('getCount',parseInt(this.$refs.count.value))
    }
  },
  props:['max'],
  watch:{
    max:function (newVal,oldVal) {
      mui('.mui-numbox')
        .numbox()
        .setOption('max',newVal)
    }
  }
}
</script>

<style scoped>

</style>
