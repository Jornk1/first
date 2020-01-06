<template>
    <div>
      <!-- 顶部滑动条区域 -->
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a :class = "['mui-control-item',item.id == 0 ? 'mui-active' :'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
              {{item.title}}
            </a>

          </div>
        </div>

      </div>
      <!-- 图片列表区域 -->
      <ul class="Photo-list">
        <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
          <img v-lazy="item.img_url">
          <div class="info">
            <h1 class="info-title">{{item.title}}</h1>
            <div class="info-body">{{item.zhaiyao}}</div>
          </div>
        </router-link>
      </ul>
      <ul>
        <li v-for="item in xs" :key="item.id">{{item.stuName}}</li>
      </ul>
    </div>
</template>
<script>
import { Toast } from "mint-ui"
import mui from '../../dist/js/mui.js'
export default {
  data(){
    return {
      cates:[], //所有分类的列表数据
      list:[],//图片列表api
      xs:[]
    }
  },
  created(){
    this.getAllCategory();
    this.getPhotoListByCateId(0);//默认进入页面就主动请求 所有图片的数据
    this.getxs();
  },
  mounted(){
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods:{
    getAllCategory(){
      //获取所有图片分类
      this.axios.get('http://www.liulongbin.top:3005/api/getimgcategory').then(result=>{
        if(result.data.status === 0){
          //手动拼接出最完整的分类列表
          result.data.message.unshift({title:'全部',id:0})
          this.cates = result.data.message
        }
      })
    },
    getPhotoListByCateId(cateId){
      //根据分类id 获取图片列表
      this.axios.get('http://www.liulongbin.top:3005/api/getimages/' + cateId).then(result=>{
        if(result.data.status === 0){
          this.list = result.data.message
          if(this.list.length === 0){
            Toast({
              message: '没有数据',

              duration: 1000
            });
          }
        }
      })
    },
    getxs(){
      this.axios.get( 'http://qiuqf.top:8080/student/list?pageNum=1&pageSize=10')
      .then(result=>{
        if(result.data.code===0){
          console.log(result.data.data)
          this.xs=result.data.data
        }
      })
    }
  }
}
</script>

<style scoped>
  *{
    touch-action: pan-y
  }

  .Photo-list{
    list-style: none;
    margin: 0;
    padding:10px;
    padding-bottom: 0;
  }
  .Photo-list li{
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow:0 0 10px #999;
    position: relative;
  }
  .Photo-list img{
    width:100%;
    vertical-align: middle;
  }
  .Photo-list img[lazy=loading]{
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .Photo-list .info{
    color:white;
    text-align: left;
    position: absolute;
    bottom: 0px;

    background-color:rgba(0,0,0,0.4);
    max-height: 85px;
  }
  .Photo-list .info-title{
    font-size: 14px;
  }
  .Photo-list .info-body{
    font-size: 13px;
  }
</style>
