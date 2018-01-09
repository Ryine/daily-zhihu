<template>
  <div class="header">
      <div class="icon">
          <i class="iconfont icon-menu" @click="showSlideBar"></i>
       </div>
      <span>{{title}}</span>
  </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    //接受父组件传值
    props: {
        title: {
            type: String,
            default: '今日热闻'
        }
    },
    //开闭侧边栏
    methods:{
        showSlideBar() {
            this.$store.commit('setShowSlide')
            this.$emit('showSlideBar')
        }
    }

}
</script>
<style>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    z-index: 10;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    background: #028FD6;
}
.icon {
    position: absolute;
    left: 10px;

}
.iconfont {
    font-size: 20px;
}
</style>


