<template>
  <transition name="fade">
  <div class="slidebar" v-show="showSlide">
      <div class="user">
          <img class="avatar" src="../assets/avatar.jpg">
          <span class="username">LYINEE</span>
      </div>
      <div class="topnav">
          <ul>
              <li><i class="iconfont icon-collect" ></i><div class="icontitle">收藏</div></li>
              <li><i class="iconfont icon-message"></i><div class="icontitle">消息</div></li>
              <li><i class="iconfont icon-set"></i><div class="icontitle">设置</div></li>
          </ul>
      </div>
      <div class="themelist">
          <ul>
              <li v-for="item in themeList" :key="item.id" @click="changeThemeId(item.id)"
              :class="{'current': themeId === item.id}" >
                  <div>
                      <div v-if="item.id == -1" class="icons"><i class="iconfont icon-home"></i></div>
                      {{item.name}}
                  </div>
                  <div class="icons"><i class="iconfont icon-more"></i></div>
              </li>
          </ul>
      </div>
      <div class="bottomnav">
          <ul>
              <li><i class="iconfont icon-download"></i><span class="icon-title">下载</span></li>
              <li><i class="iconfont icon-night"></i><span class="icon-title">夜间</span></li>
          </ul>
      </div>
      <div class="mask" @click="hide"></div>
  </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return{
            themeList: []
        }
    },
    //获取主题列表
    created() {
        this.$axios.get('/api/4/themes').then((res) => {
            this.themeList = res.data['others']
            this.themeList.unshift({
                color: 0,
                thumbnail: '',
                description: '',
                id: -1,
                name: '首页'
            })
        })
    },
    methods: {
        //前往主题新闻
        changeThemeId(id) {
            //首页
            if(id === -1) {
                this.hide()
                this.$router.push('/')
                this.$store.commit('setThemeId',id)
            } else if (id === this.themeId) {
                this.hide()    
            } else {
                this.hide()
                this.$store.commit('setThemeId',id)
                this.$router.push({
                    path: 'theme',
                    query:{
						id
					}
            })
            }
        },
        //关闭侧边栏
        hide() {
            this.$store.commit('setShowSlide')
            this.$emit('showSlideBar')
            
        }
    },
    computed: {
        ...mapGetters([
            'showSlide',
            'themeId'
        ])
        
    }

}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    border: 0;
}
.slidebar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 60;
    width: 60%;
    height: 100%;
    color: #94999d;
    background: #232A30;
}

.fade-enter-active,.fade-leave-active {
    transition: all 0.4s;
}
.fade-enter,.fade-leave-to {
    transform: translate3d(-100%,0,0)
}
::-webkit-scrollbar {
    display: none;
}
.user {
    padding: 10px;
}
.avatar {
    width: 30px;
    height: 30px;
    border-radius: 500%;
}
.username {
    padding-left: 8px;
}
ul {
    list-style-type: none;
}
.iconfont {
    font-size: 20px;
}
.topnav ul {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;  
}
.icontitle {
    position: relative;
    right: 5px;
}
.icons {
    display: inline-block;
}
.icon-more {
    position: absolute;
    right: 20px;
}
.bottomnav ul { 
    position: absolute;
    bottom: 0;
    display: flex;
    padding: 15px;
}
.icon-title {
    padding: 10px;
    margin-right: 25px;
}
.themelist {
    width: 100%;
    position: absolute;
    top: 100px;
    bottom: 60px;
    overflow: auto;

}
.themelist li {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    padding: 5px 15px;
}
.current {
    background: #1b2329;
}
.mask {
    position: fixed;
    top: 0;
    right: 0;
    width: 39%;
    height: 100%;
    background: transparent;
}

</style>


