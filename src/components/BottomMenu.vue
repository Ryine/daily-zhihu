<template>
  <div class="bottom-menu">
      <ul>
          <li>
              <i @click="goBack" class="iconfont icon-back" ></i>
          </li>
          <li>
              <i class="iconfont icon-moreunfold"></i>
          </li>
          <li>
              <i class="iconfont icon-nice" ></i>
          </li>
          <li>
              <i class="iconfont icon-share" ></i>
          </li>
          <li>
              <i class="iconfont icon-comment" ></i>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    methods: {
        //返回
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
ul {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    list-style-type: none;
    background: #f6f6f6;   
}
 li{
    flex-grow: 1;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.iconfont {
    font-size: 22px;
}
</style>


