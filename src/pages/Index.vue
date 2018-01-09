<template>
  <div class="index">
      <ZHeader  v-on:showSlideBar='showSlideBar'></ZHeader>
      <SlideBar v-on:showSlideBar='showSlideBar'></SlideBar>
      <Swiper></Swiper>
      <keep-alive>
      <ArticleList></ArticleList>
      </keep-alive>
  </div>
</template>
<script>
import ZHeader from '../components/ZHeader.vue'
import SlideBar from '../components/SlideBar.vue'
import ArticleList from '../components/ArticleList.vue'
import Swiper from '../components/Swiper.vue'
export default {
    data() {
        return {
            scrollTop: ''
        }
    },
    methods: {
        showSlideBar() {
           if(this.showSlide) {// 禁止滑动
               this.scrollTop = document.scrollingElement.scrollTop;
               document.body.style.position = 'fixed';
               document.body.style.top = -this.scrollTop + 'px';
          } else { // 取消滑动限制
              document.body.style.position = '';
              document.scrollingElement.scrollTop = this.scrollTop;
         }
    }},
    computed: {
        showSlide() {
            return this.$store.state.showSlide
        }
    },
    components: {
        ArticleList,
        Swiper,
        SlideBar,
        ZHeader
    }
}
</script>

