<template>
  <div class="articlelist" >
      <div v-for="(stories,index) in articleList" :key="stories.id">
          <div v-show="index !== 0" class="date">{{getToday(index)}}</div>
          <ul>
              <li v-for="item in stories" :key="item.id" @click="changeId(item.id)" class="news">
                  <span class="title">{{item.title}}</span>
                  <span class="title-img"><img :src="item.images[0]"></span>
              </li>
          </ul>
      </div>
      <div @click="fetchMoreData" class="tips">{{tips}}</div>
      
  </div>
</template>
<script>
export default {
    data() {
        return{
            articleList: [],
            todayDate: '',
            date: [],
            tips: '加载更多'
        }
    },
    //获取最新消息
    created() {
        this.$axios.get('/api/4/news/latest').then((res) => {
            this.articleList.push(res.data['stories'])
            this.todayDate = res.data['date']
            this.date.push(res.data['date'])
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
        },
        //获取过往消息
        fetchMoreData() {  
            this.tips = '加载中...'
            this.$axios.get('/api/4/news/before/' + this.todayDate).then((res) => {
                    this.articleList.push(res.data['stories'])
                    this.todayDate = res.data['date']
                    this.date.push(res.data['date'])
            this.$nextTick(() => {
                this.tips = '加载更多'
            })
            })                        
        },
        //获取新闻数组的日期
        getToday(index) {
            let year = this.date[index].slice(0,4)
            let month = this.date[index].slice(4,6)
            let day= this.date[index].slice(6)
            let today = new Date(year,month,day)
            let week = ['日','一','二','三','四','五','六']
            return month + '月' + day + '日' + ' 星期' + week[today.getDay()]
        }
        }
    }  
</script>
<style >
.articlelist {
    position: relative;
    top: 40px;
}
.news {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    color: #333;
    border-bottom: 1px solid rgba(7,17,27,0.1);
}
.title-img {
    width: 70px;
    height: 55px;
    margin-right: 15px;
}
.news img {
    width: 70px;
    height: 55px;
    
}
.title {
    padding: 0 20px 0 10px;
    margin-left: -15px;
}
.date {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px; 
    text-align: center;
    color: #fff;
    background: #028FD6;
}
.tips {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #f6f6f6;
}
</style>

