<style lang="less" scoped>
.h5enterpriseWan {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
  background: #fff;
  .header {
    width: 100%;
    height: 57px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
    line-height: 57px;
    position: fixed;
    z-index: 1000;
    .text {
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #181818;
      text-align: center;
    }
  }
  .baowei {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin: 0 auto;
      padding-top: 57px;
    .title {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      height: 40px;
      line-height: 40px;
      background: #f2f2f2;
    }
    .zhongbu {
      width: 100%;
      height: auto;
      margin: 0 auto;
      img {
        margin: 0 auto;
        display: block;
        padding-top: 30px;
        width: 100%;
        height: 100%;
      }
      .text {
        font-size: 3vh;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        text-align: center;
      }
      .button {
        margin: 0 auto;
        margin-top: 24px;
        width: 81%;
        height: 40px;
        line-height: 40px;
        background: #3083ff;
        font-size: 2.1vh;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        letter-spacing: 1px;
        cursor: pointer;
        text-align: center;
      }
    }
  }
}
</style>

<template>
  <div class="h5enterpriseWan">
    <div class="header">
      <div class="text">实名认证服务</div>
    </div>
    <div class="baowei">
      <div class="title">&nbsp;&nbsp;认证信息：{{user_name}}({{user_id}})</div>
      <div class="zhongbu">
        <img
          src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_846159593268479820202818384798认证完成.png"
          alt
        />
        <div class="text">您本次的个人认证已完成</div>
        <div class="button" @click="complete">完成 ({{countdownHtml}})</div>
      </div>
    </div>
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
      user_id: "",
      user_name: "",
      timer: null,
      approvetype: 0
    };
  },
  created() {
    this.infoPost();
  },
  mounted() {
    this.user_id = this.$route.query.user_id;
    this.user_name = this.$route.query.user_name;
    this.countdown();
    this.timer = setInterval(this.countdown, 1000);
  },
  methods: {
    infoPost() {
      post(api.info).then(
        d => {
          if (d.status == 0) {
            if (d.data.account_id) {
              sessionStorage.setItem("agent_id", d.data.account_id);
            }
          }
        },
        err => {
        }
      );
    },
    complete() {
      clearInterval(this.timer);
      // this.$router.push({ path: '/'});
      if (sessionStorage.getItem('taskId')) {
        this.$router.push({ path: '/nestedContract' });
      }else {
        this.$router.push({ path: '/' });
      }
    },
    //60秒倒计时
    countdown() {
      var that = this;
      if (that.times == 0) {
        clearInterval(this.timer);
        console.log(sessionStorage.getItem('taskId'),'taskid111111')
        if (sessionStorage.getItem('taskId')) {
          this.$router.push({ path: '/nestedContract' });
        }else {
          this.$router.push({ path: '/' });
        }
        return false;
      } else {
        that.countdownHtml = "" + that.times + "s";
        that.times--;
      }
    },
  },
  components: {},
};
</script>
