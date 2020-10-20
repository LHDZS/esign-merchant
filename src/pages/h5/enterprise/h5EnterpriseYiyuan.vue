<style lang="less" scoped>
.h5yiyuan {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
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
  .dialog-form {
    width: 90%;
    padding-top: 13vh;
    margin: 0 auto;
    height: auto;
    .list {
      width: 100%;
      margin-bottom: 32px;
      .label {
        width: 100px;
        text-align: right;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #4b4b4b;
      }
      .input {
        width: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        .left_input {
          width: 100%;
        }
        span {
          cursor: pointer;
          width: 94px;
          height: 38px;
          line-height: 38px;
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
      width: 100%;
      height: 40px;
      background: #3083ff;
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
      width: 100%;
      height: 40px;
      background: #6ea8ff;
      border-radius: 2px;
    }
  }
}
</style>

<template>
  <div class="h5yiyuan">
    <div class="header">
      <div class="text">意愿认证</div>
    </div>
    <div class="dialog-form">
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
      times: 60,
    };
  },
  mounted() {
    this.infoPost();
  },
  methods: {
    infoPost() {
      post(api.info).then(
        (d) => {
          //console.log(d, 1);
          if (d.status == 0) {
            this.phone = d.data.mobile;
          } else {
            this.$message.error(d.msg);
          }
          //console.log(d);

          //success callback
        },
        (err) => {
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
        mobile: this.phone,
      }).then(
        (d) => {
          if (d.status == 0) {
            this.$message.success("发送成功");
          } else {
            this.$message.error(d.msg);
          }
          //success callback
        },
        (err) => {
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
      setTimeout(function () {
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
        msgCode: this.glycms,
      }).then(
        (d) => {
          //console.log(d, 1);
          if (d.status == 0) {
              this.$router.push({
                path: "/h5authentication",
                query: { type: "2" },
              });
          } else {
            this.$message.error(d.msg);
          }
          //console.log(d);

          //success callback
        },
        (err) => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
  },
  components: {},
};
</script>
