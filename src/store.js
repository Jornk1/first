/*
vuex的核心管理对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
var car = JSON.parse(localStorage.getItem('car') || '[]')
// 状态对象
const state = {
  // 将购物车中的商品的数据用一个数组存储
  car:car
}
// 包含多个更新state函数的对象
const mutations = {
  addToCar (state, goodsinfo) {
    //点击加入购物车 把商品信息 添加到 state 中的 car上
    //分析：
    //1，如果购物车中 之前就有这个对应的商品了 那么 只需要更新数量
    //2.如果没有 则直接把商品数据 push 到car 中即可
    // 假设在购物车中 没有找到对应的商品
    var flag = false
    state.car.some(item => {
      if (item.id === goodsinfo.id) {
        item.count += parseInt(goodsinfo.count)
        flag = true
        return true
      }
    })
    if(!flag){ //如果 最终循环完毕 得到的flag还是false 直接push 进购物车
      state.car.push(goodsinfo)
    }
    //当更新 car之后 把car数组 存储到本地 localstorage 中
    localStorage.setItem('car',JSON.stringify(state.car))
  },
  updateGoodsInfo(state,goodsinfo){
    //修改购物车中 商品的数量值
    //分析：
    state.car.some(item=>{
      if(item.id==goodsinfo.id){
        item.count = parseInt(goodsinfo.count)
        return true
      }
    })
    localStorage.setItem('car',JSON.stringify(state.car))
  },
  removeFormCar(state,id){
    //根据id从 store中的购物车中删除 对应的那条商品数据
    state.car.some((item,i)=>{
      if(item.id == id){
        state.car.splice(i,1)
        return true
      }
    })
    //当更新 car之后 把car数组 存储到本地 localstorage 中
    localStorage.setItem('car',JSON.stringify(state.car))
  },
  updateGoodsSelected(state,info){

    state.car.some(item=>{
      if(item.id == info.id){
        item.selected = info.selected
      }
    })
    //当更新 car之后 把car数组 存储到本地 localstorage 中
    localStorage.setItem('car',JSON.stringify(state.car))
  }

  //注意：如果组件想要调用mutations中的方法 只能使用 this.$store.commite('方法名')
  //这种调用 mutations 方法的格式 和 this.$emit('方法名')
}
// 包含多个对应事件回调函数的对象
const actions = {

}
// 包含多个getter计算属性函数的对象
const getters = {
//注意 这里的getters 只负责 对外提供 数据 不负责 修改数据 如果需要修改 state中的数据，
  //请去 找mutations
  getAllCount:function(state){
    var c = 0;
    state.car.forEach(item=>{
      c += item.count
    })
    return c
  },
  getGoodsCount(state){
    var o = {}
    state.car.forEach(item=>{
      o[item.id] = item.count
    })
    return o
  },
  getGoodsSelected(state){
    var o ={}
    state.car.forEach(item=>{
      o[item.id] = item.selected
    })
    return o
  },
  getGoodsCountAndAmount(state){
    let o = {
      count:0,  //勾选的数量
      amount:0  //勾选的总价
    }
    state.car.forEach(item=>{
      if(item.selected){
        o.count += item.count
        o.amount += item.price * item.count
      }

    })
    return o


  }

  //经过 回顾对比 getters 中的方法 和组件中的过滤器比较类似 因为过滤器和getters都没有修改原数据
  //都是把原数据 做了一层包装 提供给了调用者，
  //其次，getters 也和 computed 比较像 只要state 中的数据发生变化 那么 如果 getters正好也引用了这个数据
  //那么就会立即触发 getters的重新求值

}
Vue.use(Vuex)
export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters// 包含多个getter计算属性函数的对象
})
