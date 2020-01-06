<template>
  <div class="goodsdesc-comment">
    <h3>{{info.title}}</h3>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDesc',
  data () {
    return {
      info: {}
    }
  },
  created () {
    this.geiGoodsDesc()
  },
  methods: {
    geiGoodsDesc () {
      this.axios.get('http://www.liulongbin.top:3005/api/goods/getdesc/' + this.$route.params.id).then(result => {
        if (result.data.status === 0) {
          this.info = result.data.message[0]
        }
      })
    }
  }
}
</script>

<style scoped>
  .goodsdesc-comment{
    padding: 4px;
  }
  .goodsdesc-comment h3{
    font-size: 16px;
    color:#226aff;
    text-align: center;
    margin: 10px 0;
  }
 .content img{
    width: 100%;
  }
</style>
