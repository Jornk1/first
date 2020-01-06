<template>
  <div class="app-content">
    <header>
      <mt-header title="##商城">
        <router-link v-show="isBack" to slot="left">
          <mt-button icon="back" @click="prevWeb">返回</mt-button>
        </router-link>
      </mt-header>
    </header>
    <div>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <div class="footer">
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-my" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-my" to="/Xx">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">{{$store.getters.getAllCount}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-my" to="/Search">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
      <router-link class="mui-tab-item-my" to="/Sz">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    prevWeb () {
      this.$router.go(-1)
    }
  },
  computed: {
    // 顶部的浏览器是否返回
    isBack () {
      // 如果路由地址不是 /home 就出现返回按钮
      return this.$route.path !== '/Home'
    }
  }
}
</script>

<style>
  .app-content{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow:hidden;
  }
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
  .v-enter-active,.v-leave-active{
    transition:all .5s ease ;
  }
  .app-content{
    overflow: hidden;
  }
  /*更改类名解决TabBar不能跳转的问题*/
  .mui-bar-tab .mui-tab-item-my.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-my {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item-my .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-my .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
