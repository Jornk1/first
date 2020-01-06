<template>
  <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media">
        <a class="mui-navigate-right" href="#account">
          <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../assets/147.jpg">
          <div class="mui-media-body">
            Hello MUI
            <p class="mui-ellipsis">账号:hellomui</p>
          </div>
        </a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right" href="#">新消息通知</a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right" href="#">待收货</a>
      </li>
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right" href="#">我的钱包</a>
      </li>
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right" href="#">我的消费记录</a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right" href="#">评价记录</a>
      </li>
    </ul>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell" style="text-align: center;">
        <a>退出登录</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>

</style>
