<template>
  <div class="theme">
      <ZHeader :title="themeTitle"></ZHeader>
      <SlideBar></SlideBar>
      <div class="articlelist">
          <ul>
          <li class="news" v-for="item in themeStories" :key="item.id" @click="changeId(item.id)">
              <span class="title">{{item.title}}</span>
              <img v-show="item.images" :src="item.images">
          </li>
      </ul>
      </div>
  </div>
</template>

<script>
import ZHeader from '../components/ZHeader.vue'
import SlideBar from '../components/SlideBar.vue'
export default {
    data() {
        return {
            themeStories: [],
            themeTitle: ''
        }
    },
    //观察是否切换主题
    watch: {
        themeId() {
            if( this.themeId !== -1) {
                this.$axios.get('/api/4/theme/' + this.themeId).then((res) => {
                    this.themeTitle = res.data.name
                    this.themeStories = res.data['stories']    
        })
            }
        }
    },
    //获取主题新闻列表
    created() {
        this.$axios.get('/api/4/theme/' + this.themeId).then((res) => {
            this.themeTitle = res.data.name
            this.themeStories = res.data['stories']
        }).catch((error) => {
            console.log(error)
        })
    },
    computed: {
        themeId() {
            return this.$store.state.themeId
        }
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
    },
    components: {
        ZHeader,
        SlideBar
    }
}
</script>
<style>

</style>

