<template>
  <div class="newsinfo-container">
    <!-- 头标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time |dateFormat}}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>
    <!--
        评论区域：  引入评论子组件
        :id为 详情组件向评论子组件传值
     -->
    <comment :id="this.id"></comment>
  </div>
</template>

<script>
import comment from '../views/comment'
export default {
  data () {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    }
  },
  created () {
    this.getNewsInfo()
    console.log(this.$route)
  },
  methods: {
    getNewsInfo () { // 获取新闻详情
      this.axios
        .get('http://www.liulongbin.top:3005/api/getnew/' + this.id)
        .then((result) => {
          if (result.data.status === 0) {
            console.log(result.data.message[0])
            this.newsinfo = result.data.message[0]
          }
        })
    }
  },
  components: {
    // 2. 子组件能已 html标签 形式 在模板中显示
    'comment': comment
  }
}
</script>

<style scoped>
  .newsinfo-container {
    padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .content {
  img {
    width: 100%;
  }
  }
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
</style>
