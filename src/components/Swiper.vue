<template>
  <div class="swiper">
      <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in top_stories" :key="item.id">
              <img :src="item.image" @click='changeId(item.id)'>
              <span @click='changeId(item.id)' class="top-title">{{item.title}}</span>
          </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
export default {
    data() {
      return{
          top_stories: []
      }
    },
    //获取幻灯片内容
    created() {
      this.$axios.get('/api/4/news/latest').then((res) => {
            this.top_stories = res.data['top_stories']
        }).catch((error) => {
            console.log(error)
        })
    },
    methods: {
        //前往新闻详情
        changeId(id) {
            this.$router.push({
					path:'article',
					query:{
						id
					}
				})
            this.$store.commit('setId',id)
        }
    }
}
</script>
<style scoped>
.swiper{
    position: relative;
    top: 40px;
    width: 100%;
    height: 200px;
}
img {
    width: 100%;
    height: 200px;
}
.top-title {
    position: absolute;
    bottom: 20px;
    padding: 0 10px;
    z-index: 2;
    font-size: 20px;
    color: #fff;
}
</style>
