<style lang="less" scoped>
.personal2 {
    width: 1200px;
    padding: 40px;
    box-sizing: border-box;
    background-color: #fff;
    margin: 0 auto;
     height:587px;
    margin-top: 30px;
    text-align: center;
    .title {
        font-size:20px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin-bottom: 49px;
    }
    .text {
        margin-top: 56px;
        font-size:24px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
    }
    .button {
        margin: 0 auto;
        margin-top: 24px;
        width:200px;
        height:40px;
        line-height: 40px;
        background:rgba(48,131,255,1);
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        letter-spacing:1px;
        cursor: pointer;
    }
}
</style>

<template>
  <div class="personal2">
      <div class="title">{{user_name}}，认证信息：{{user_id}}</div>
      <img src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_846159593268479820202818384798认证完成.png" alt="">
      <div class="text">您本次的个人认证已完成</div>
      <div class="button" @click="complete">完成 ({{countdownHtml}})</div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
export default {
  data() {
    return {
     times: 5,
     countdownHtml: "5s",
     user_id:"",
     user_name:"",
     timer: null
    }
  },
  created() {
    this.infoPost();
  },
  mounted() {
    this.user_id = this.$route.query.user_id
    this.user_name = this.$route.query.user_name
    this.countdown();
    this.timer = setInterval(this.countdown, 1000);
  },
  methods: {
    infoPost() {
      post(api.info).then(
        d => {
          //console.log(d, 1);
          if (d.status == 0) {
            if (d.data.account_id) {
              sessionStorage.setItem("agent_id", d.data.account_id);
            }
          } else {
            // this.$message.error(d.msg);
          }
        },
        err => {
          //console.log(err.data.msg);
        }
      );
    },
    complete() {
      clearInterval(this.timer);
      this.$router.push({ path: '/authentication'});
    },
    //60秒倒计时
    countdown() {
      var that = this;
      if (that.times == 0) {
        clearInterval(this.timer);
        this.$router.push({ path: '/authentication' });
        return false;
      } else {
        that.countdownHtml = "" + that.times + "s";
        that.times--;
      }
    },
  },
  components: {

  }
}
</script>
