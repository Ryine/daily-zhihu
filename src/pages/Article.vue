<template>
  <div class="article">
      <div class="content">
          <div v-show="article.image" class="image-wapper">
              <img :src="article.image">
              <span>{{article.title}}</span>
          </div>
          <div v-html="responseHTML" class="body"></div>
      </div> 
      <BottomMenu></BottomMenu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import BottomMenu from '../components/BottomMenu.vue'
export default {
    data() {
        return {
            article: {} ,
            responseHTML: ''
        }
    },
    //获取新闻详情
    created() {     
        this.$axios.get('/api/4/news/' + this.id).then((response) => {
            this.article = response.data
            this.responseHTML = response.data['body']
        }).catch(response=>{
            console.log('error')
        })
    },
    computed:{
        ...mapGetters([
            'id'
        ])
    },
    components: {
        BottomMenu
    }
  
}
</script>
<style>

.image-wapper {
    position: relative;
    height: 220px;
    width: 100%;
    margin-bottom: -220px;
}
.image-wapper img {
    position: absolute;
    top: -40px;
    width: 100%;
    height: 100%;
}
.image-wapper span {
    position: absolute;
    bottom: 15px;
    padding: 0 10px;
    font-size: 18px;
    color: #fff;
}

</style>
