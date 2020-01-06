<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in lbtlist" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>

    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/zx">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">3</span></span>
          <div class="mui-media-body">Email</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/a4">
          <span class="mui-icon mui-icon-locked"></span>
          <div class="mui-media-body">购物</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/a5">
          <span class="mui-icon mui-icon-camera"></span>
          <div class="mui-media-body">美图分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/a1">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/a2">
          <span class="mui-icon mui-icon-chatboxes"></span>
          <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <span class="mui-icon mui-icon-info"></span>
          <div class="mui-media-body">about</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <span class="mui-icon mui-icon-more"></span>
          <div class="mui-media-body">more</div></a></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      lbtlist: [

        {'id': 1, 'img': 'http://img2.a0bi.com/upload/ttq/20150509/1431134012326.jpg'},

        {'id': 2, 'img': 'https://desk-fd.zol-img.com.cn/t_s1366x768c5/g2/M00/01/04/ChMlWl01IDqIBVOpAAMrNjO954YAAL-hgEv9cgAAytO394.jpg'},

        {'id': 3, 'img': 'https://desk-fd.zol-img.com.cn/t_s1366x768c5/g5/M00/09/0F/ChMkJ1sD_zyIf0wUAAP3iWjtWAsAAoiWwOhOfoAA_eh287.jpg'},

        {'id': 4, 'img': ' https://desk-fd.zol-img.com.cn/t_s1366x768c5/g5/M00/09/0F/ChMkJlsD_zyIJj1kAAMvTsEzzhUAAoiWwOaeHkAAy9m325.jpg'}

      ]
    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item img{
  width: 100%;
  height: 100%;

}

.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;

}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: 0;
}
</style>
