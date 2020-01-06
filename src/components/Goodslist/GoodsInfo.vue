<template>
  <div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.titel}}</div>
      <div class="mui-card-content">
        <p class="mui-card-content-inner">
          <p class="price">
            市场价:<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp; 销售价 <span class="now_price">￥{{goodsinfo.sell_price}}</span>

          </p>
        <p>购买数量：<numbox1 @getCount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox1>
        </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">
                    <span class="mui-icon-extra mui-icon-extra-cart">
                    </span>
              加入购物车
            </mt-button>
            <!-- 分析：如何实现加入购物车 拿到选择的数量 -->
            <!-- 1.经过分析发现：按钮属于goodsinfo 页面 数字 属于 numberbox 组件 -->
            <!-- 2.由于涉及到了父子组件嵌套了，所以 无法直接在goodsinfo 页面中 获取到选择的商品数量值 -->
            <!-- 3.如何解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4.事件调用的本质：父向子传递方法，子调用这个方法，同时把数据当作参数 传递给这个方法 -->
          </p>
        </div>
      </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <p>商品货号：{{goodsinfo.goods_no}}</p>
        <p>库存情况：{{goodsinfo.stock_quantity}}</p>
        <p>上架时间：{{goodsinfo.add_time|dateFormat}}</p>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDese(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
    </div>

</template>

<script>
import swiper from '../views/swiper'
import numbox1 from '../views/numbox'
export default {
  data () {
    return {
      lunbotu: [],
      id: this.$route.params.id,
      goodsinfo: {}, // 获取到的商品信息
      flag:false,
      SelectedCount:1
    }
  },
  created () {
    this.getLunbotu()
    this.getGoodsInfo()
  },
  methods: {
    getLunbotu () { // 获取轮播图的方法
      this.axios.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.id).then(result => {
        console.log(result.data)
        if (result.data.status === 0) {
          // 但是轮播图组件 遍历 的时候，只认识item.img
          // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为 轮播图 组件中，只认识 item.img， 不认识 item.src
          result.data.message.forEach(item => {
            item.img = item.src
          })
          this.lunbotu = result.data.message
        } else {
          // 失败的
          alert('加载轮播图失败。。。')
        }
      })
    },
    // 获取商品详情
    getGoodsInfo () {
      this.axios.get('http://www.liulongbin.top:3005/api/goods/getinfo/' + this.id).then(result => {
        if (result.data.status === 0) {
          console.log(result.data)
          this.goodsinfo = result.data.message[0]
        }
      })
    },
    goDese (id) {
      // 点击使用编程式导航
      this.$router.push({name: 'goodsdesc', params: {id}})
    },
    goComment (id) {
      // 点击跳转评论
      this.$router.push({name: 'goodscomment', params: {id}})
    },
    addToShopCar () {
      this.flag = !this.flag
      // 实现加入购物车
      var goodsinfo = {
        id:this.id,
        count:this.SelectedCount,
        price:this.goodsinfo.sell_price,
        selected:true
      }
      //调用store 中的  addtoCar push进去
      this.$store.commit("addToCar",goodsinfo);
    },
    getSelectedCount (count){
      this.SelectedCount=count
      console.log('父组件传过来的：'+this.SelectedCount)
    }
  },

  components: {
    swiper,
    numbox1
  }
}
</script>

<style scoped>
  .mui-card-footer{
    display: block;
  }
  .mui-card-footer button{
    margin:15px 0;
  }
  .now_price{
    color:#f40;
    font-size: 14px;
    font-weight: bold;
  }
  .mui-card-content p{
    margin-left:15px;
  }
  .mui-icon-extra{
    font-size: 17px;
  }
  .ball{
    width: 15px;
    height: 15px;
    border-radius:50%;
    background-color: red;
    position: absolute;
    top: 390px;
    left: 163px;
    z-index: 99;

  }
</style>
