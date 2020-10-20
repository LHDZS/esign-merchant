<style lang="less" scoped>
.enterprise {
  width: 1200px;
  padding: 12px 24px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 0 auto;
  height: 435px;
  margin-top: 30px;
  .header {
    width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
    .left {
      position: absolute;
      left: 0;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(208, 208, 208, 1);
      cursor: pointer;
    }
    .text {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      font-weight: 600;
    }
  }
  .dialog-form {
    width: 100%;
    padding-top: 50px;
    .list {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 32px;
      .label {
        width: 100px;
        text-align: right;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(75, 75, 75, 1);
      }
      .input {
        width: 400px;
        margin-left: 10px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        .left_input {
          width: 306px;
        }
        span {
          cursor: pointer;
          width: 94px;
          height: 30px;
          line-height: 30px;
          background: rgba(224, 224, 224, 0.6);
          border-radius: 2px;
          border: 1px solid rgba(224, 224, 224, 0.6);
          border-left: none;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.65);
          text-align: center;
        }
      }
      .baoinput {
        margin-left: 10px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        width: 397px;
        height: 64px;
        border-radius: 2px;
        border: 1px solid #e0e0e0;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #4b4b4b;
      }
    }
    .button {
      line-height: 40px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
      cursor: pointer;
      margin: 0 auto;
      width: 200px;
      height: 40px;
      background: #3083FF;
      border-radius: 2px;
    }
       .buttonNo {
      line-height: 40px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
      cursor: pointer;
      margin: 0 auto;
      width: 200px;
      height: 40px;
      background: #6EA8FF;
      border-radius: 2px;
    }
  }
}
</style>

<template>
  <div class="enterprise">
    <div class="header">
      <div class="text">意愿认证</div>
    </div>
    <div class="dialog-form">
      <div class="list">
        <span class="label">意愿认证方式：</span>
        <div class="baoinput">
          &nbsp;&nbsp;
          <span>
            <i class="iconfont icon-yiyuanrenzheng" style="font-size: 34px;color:#B3B3B3"></i>
          </span>
          <span>
            短信认证
            <br />(需持有大陆手机号）
          </span>
        </div>
      </div>
      <div class="list">
        <span class="label">手机号码:</span>
        <div class="input">
          <el-input v-model="phone" placeholder="请输入手机号" disabled></el-input>
        </div>
      </div>
      <div class="list">
        <span class="label">验证码:</span>
        <div class="input">
          <div class="left_input">
            <el-input v-model="glycms" placeholder="请输入验证码"></el-input>
          </div>
          <span @click="validationSms()">{{countdownHtml}}</span>
        </div>
      </div>
      <div :class="this.glycms !='' ? 'button' : 'buttonNo'" @click="homeSkip">下一步</div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
export default {
  data() {
    return {
      phone: "", //手机号
      glycms: "", //验证码
      countdownHtml: "获取验证码",
      times: 60
    };
  },
  mounted() {
    this.infoPost();
  },
  methods: {
    infoPost() {
      post(api.info).then(
        d => {
          //console.log(d, 1);
          if (d.status == 0) {
            this.phone = d.data.mobile;
          } else {
            this.$message.error(d.msg);
          }
          //console.log(d);

          //success callback
        },
        err => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
    validationSms() {
      //console.log("33333");
      if (this.times != 60) {
        return;
      }
      if (this.phone == "") {
        this.$message.error("请输入手机号");
        return;
      }
      //   短信验证码
      var regMoblie = /^1[345678]\d{9}$/;
      if (!regMoblie.test(this.phone)) {
        this.$message.error("该手机号格式错误");
        return;
      }

      this.countdown();
      post(api.sendMobileCode, {
        mobile: this.phone
      }).then(
        d => {
          if (d.status == 0) {
              this.$message.success("发送成功");
          
          } else {
            this.$message.error(d.msg);
          }
          //success callback
        },
        err => {
          //error callback
        }
      );
    },
    //60秒倒计时
    countdown() {
      var that = this;
      if (that.times == 0) {
        that.countdownHtml = "获取验证码";
        that.times = 60;
        return false;
      } else {
        that.countdownHtml = "" + that.times + "s";
        that.times--;
      }
      setTimeout(function() {
        that.countdown();
      }, 1000);
    },

    homeSkip() {
      if (this.phone == "") {
        this.$message.error("请输入手机号");
        return;
      }
        if (this.glycms == "") {
        this.$message.error("请输入验证码");
        return;
      }
      post(api.verificationOfPersonalIntention, {
        mobile: this.phone,
        msgCode: this.glycms
      }).then(
        d => {
          //console.log(d, 1);
          if (d.status == 0) {
            
            if (localStorage.getItem("orgYype") == "企业") {
              this.$router.push({ path: "/authentication", query:{type:'2'}});
            }
            if (localStorage.getItem("orgYype") == "个人") {
              this.$router.push({
                path: "/personal2",
                query: { user_name: d.data.user_name, user_id: d.data.user_id }
              });
            }
          } else {
            this.$message.error(d.msg);
          }
          //console.log(d);

          //success callback
        },
        err => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    }
  },
  components: {}
};
</script>
