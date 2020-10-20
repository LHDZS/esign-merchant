<template>
  <div class="PcLogin">
    <div class="toubu">
      <div class="juzhong">
        <div class="baowei">
          <img
            class="logo"
            src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_255615959064670102020281121710logo.png"
            alt
          />
          <div class="title">签必果</div>
        </div>
        <div class="right" @click="register">
          <div class="zhuce">注册</div>
        </div>
      </div>
    </div>
    <div class="dialog" v-if="loginType">
      <div class="main_right">
        <div class="main">
          <div class="name">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_255615959064670102020281121710logo.png"
              alt
            />
            &nbsp;签必果
          </div>
          <div class="input">
            <el-input
              v-model="phone"
              prefix-icon="el-icon-user"
              placeholder="请输入手机号"
              clearable
              :disabled="inputType"
            ></el-input>
          </div>
          <div class="input">
            <el-input
              placeholder="请输入登录密码"
              prefix-icon="el-icon-lock"
              v-model="password"
              show-password
              @keyup.enter.native="homeSkip"
            ></el-input>
          </div>
          <div
            :class="phone != '' && password != '' ? 'determine' : 'determineNo'"
            @click="homeSkip"
            id="btn"
          >登&nbsp;&nbsp;录</div>
          <div class="wangji" @click="wangjiBtn">忘记密码?</div>
        </div>
      </div>
    </div>
    <div class="dialog2" v-if="!loginType">
      <div class="main_right">
        <div class="xiugai">修改密码</div>
        <div class="toubuindex">
          <el-steps :active="activeIndex" finish-status="success">
            <el-step title="账号校验"></el-step>
            <el-step title="重置密码"></el-step>
            <el-step title="完成设置"></el-step>
          </el-steps>
        </div>

        <div class="main">
          <div class="main_form">
            <el-form ref="form" :model="form" :rules="rules" label-width="0px">
              <el-form-item prop="phone" v-if="activeIndex == 0">
                <span class="name">账号</span>
                <div class="input">
                  <el-input v-model="form.phone" placeholder="请输入手机号" clearable></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="graphics" v-if="activeIndex == 0">
                <span class="name">验证码</span>
                <div class="input2">
                  <div class="left_input">
                    <el-input placeholder="输入动态验证码" v-model="form.graphics"></el-input>
                  </div>
                  <span @click="validationSms()">{{countdownHtml}}</span>
                </div>
              </el-form-item>
              <el-form-item prop="password" v-if="activeIndex == 1">
                <span class="name">重置密码</span>
                <div class="input">
                  <el-tooltip placement="right" popper-class="test">
                    <div slot="content" style="font-size:14px;">
                      密码强度
                      <br />
                      <span style="color:red;">x</span>&nbsp;&nbsp;8-20个字符
                      <br />
                      <span style="color:red;">x</span>&nbsp;&nbsp;只能包含字母、数字及特殊字符
                      <br />
                      <span style="color:red;">x</span>&nbsp;&nbsp;字母、数字及特殊字符任意两种组合
                    </div>
                    <el-input placeholder="重置密码" v-model="form.password" show-password></el-input>
                  </el-tooltip>
                </div>
              </el-form-item>
              <el-form-item prop="newPassword" v-if="activeIndex == 1">
                <span class="name">确认密码</span>
                <div class="input">
                  <el-input placeholder="确认密码" v-model="form.newPassword" show-password></el-input>
                </div>
              </el-form-item>
            </el-form>
            <div v-if="activeIndex == 2" class="tupian">
              <img
                src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_3828159894423035720201151030357chengg.png"
                alt
              />

              <div class="chongzhi">重置密码成功</div>
            </div>
          </div>
          <div class="dibu" v-if="activeIndex == 1 || activeIndex == 0">
            <div class="qiye" @click="homeSkipRegister('form',activeIndex)">下一步</div>
            <div style="width:30px;"></div>
            <div class="geren" @click="quxiaoBtn('form')">取消</div>
          </div>
          <div class="dibu2" v-if="activeIndex == 2">
            <div class="qiye" @click="quxiaoBtn('form')">请重新登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";

export default {
  name: "PcLogin",
  data() {
    var password = (rule, value, callback) => {
      var type = /^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/i;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!type.test(value)) {
        callback(new Error("请按规则输入密码"));
      } else {
        callback();
      }
    };
    var newPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var phone = (rule, value, callback) => {
      var type = /^1[345678]\d{9}$/;
      // var type = value.replace(/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/i);
      if (!type.test(value)) {
        callback(new Error("请输入正确手机号"));
      } else {
        callback();
      }
    };
    return {
      inputType: false,
      loginType: true,
      phone: "",
      password: "",
      approvetype: 0,
      activeIndex: 0,
      form: {
        phone: "",
        graphics: "",
      },
      rules: {
        phone: [{ validator: phone, trigger: "blur" }],
        graphics: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
        password: [{ validator: password, trigger: "blur" }],
        newPassword: [{ validator: newPassword, trigger: "blur" }],
      },
      countdownHtml: "获取验证码",
      times: 60,
      timer: null,
      noID: "",
    };
  },
  methods: {
    isMobile() {
	   	let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
		  if(flag){
				console.log('移动端打开');
		  }else{
		  	console.log("PC端打开")
		  }
	  },
    quxiaoBtn(formName) {
      this.loginType = true;
      clearInterval(this.timer);
      this.countdownHtml = "获取验证码";
      this.times = 60;
      this.$refs[formName].resetFields();
    },
    wangjiBtn() {
      this.form = {};
      this.activeIndex = 0;
      this.loginType = false;
    },
    homeSkipRegister(formName, type) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (type == 0) {
            post(api.retrievePasswordForCheckUcname, {
              ucname: this.form.phone,
              code: this.form.graphics,
            }).then(
              (d) => {
                //console.log(d, 1);
                if (d.status == 0) {
                  this.noID = d.data.no;
                  this.activeIndex = 1;
                } else {
                  this.$message.error(d.msg);
                }
                //console.log(d);
              },
              (err) => {}
            );
          }
          if (type == 1) {
            post(api.retrievePassword, {
              password: this.form.password,
              newPasswordConfirm: this.form.newPassword,
              no: this.noID,
            }).then(
              (d) => {
                //console.log(d, 1);
                if (d.status == 0) {
                  this.activeIndex = 2;
                } else {
                  this.$message.error(d.msg);
                }
              },
              (err) => {}
            );
          }
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    },
    validationSms() {
      //console.log(this.form.phone, "33333");
      if (this.times != 60) {
        return;
      }
      if (!this.form.phone) {
        this.$message.error("请输入手机号");
        return;
      }
      //   短信验证码
      var regMoblie = /^1[345678]\d{9}$/;
      if (!regMoblie.test(this.form.phone)) {
        this.$message.error("该手机号格式错误");
        return;
      }
      this.countdown();
      this.timer = setInterval(this.countdown, 1000);
      post(api.sendMobileCode, {
        mobile: this.form.phone,
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
        clearInterval(this.timer);
        that.countdownHtml = "获取验证码";
        that.times = 60;
        return false;
      } else {
        that.countdownHtml = "" + that.times + "s";
        that.times--;
      }
    },
    findtotaskIdPost() {
      //console.log("发起请求");
      post(api.findtotaskId, {
        taskId: sessionStorage.getItem("taskId"),
      }).then(
        (d) => {
          //console.log(d);
          if (d.status == 0) {
            this.inputType = true;
            this.phone = d.data.agent_mobile;
          } else {
            this.$message.error(d.msg);
          }
        },
        (err) => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
    register() {
      this.$router.push({ path: "/register" });
    },
    homeSkip() {
      if (this.phone == "") {
        this.$message.error("请输入手机号");
        return;
      }
      var regMoblie = /^1[345678]\d{9}$/;
      if (!regMoblie.test(this.phone)) {
        this.$message.error("该手机号格式错误");
        return;
      }
      if (this.password == "") {
        this.$message.error("请输入密码");
        return;
      }
      post(api.login, {
        loginName: this.phone,
        password: this.password,
      }).then(
        (d) => {
          //console.log(d, 1);
          if (d.status == 0) {
            this.$message.success("登录成功");
            sessionStorage.setItem("esignmerchantsid", d.data.loginKey);
            sessionStorage.setItem("loginPhone", d.data.ucname);
            // sessionStorage.setItem("account_id", d.data.uc_auth.account_id);
            if (sessionStorage.getItem("taskId")) {
              post(api.findtotaskId, {
                taskId: sessionStorage.getItem("taskId"),
              }).then(
                (d) => {
                  console.log(d, "登录后在调用一次");
                  if (d.status == 0) {
                    console.log(d.data.approvetype,'登录后获取到类型111111')
                      if(d.data.status == '2'){
                      this.$router.push({ path: "/PCusageseal" });
                      return
                      }
                    if (d.data.approvetype == 1) {
                      this.$message.error("请先进行个人认证");
                      this.$router.push({ path: "/personalShou" });
                    } else if (d.data.approvetype == 2) {
                      this.$message.error("请先进行企业认证");
                      this.$router.push({ path: "/enterprise" });
                    } else if (d.data.approvetype == 0) {
                      sessionStorage.setItem("agent_id", d.data.agent_id);
                      sessionStorage.setItem("main_id", d.data.main_id);
                      this.$router.push({ path: "/nestedContract" });
                    } else {
                      this.$message.error("认证中");
                      this.$router.push({ path: "/" });
                    }
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
            } else {
              this.$router.push({ path: "/" });
            }
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
  updated() {
    //console.log("???");
  },
  created() {
    this.isMobile()
    if (sessionStorage.getItem("taskId")) {
      this.findtotaskIdPost();
    }
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.PcLogin::-webkit-scrollbar {
  width: 0;
}

.PcLogin {
  width: 100%;
  height: 100%;
  background: url("https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_7161595906958578202028112918578背景.png")
    no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  .toubu {
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.11);
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
    top: 0;
    overflow: hidden;
    min-width: 1200px;
    .juzhong {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      .right {
        width: 120px;
        height: 36px;
        border: 1px solid #3083ff;
        float: right;
        margin-top: 10px;
        .zhuce {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #3083ff;
          line-height: 36px;
          cursor: pointer;
          text-align: center;
        }
      }
      .baowei {
        // width: 228px;
        height: 60px;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo {
          width: 31px;
          height: 34px;
        }
        .title {
          float: left;
          margin-left: 8px;
          line-height: 60px;
          text-align: center;
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(26, 28, 45, 1);
          span {
            font-size: 16px;
          }
        }
      }
    }
  }

  .dialog {
    width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 220px;
    height: 100%;
    .main_right {
      box-sizing: border-box;
      float: right;
      width: 38%;
      height: 40%;
      background: #ffffff;
      box-shadow: 0px 5px 22px 0px rgba(0, 97, 184, 0.65);
      border-radius: 4px;
      min-width: 421px;
      min-height: 385px;
      .main {
        width: 100%;
        padding-top: 47px;
        .name {
          width: 100%;
          height: 100%;
          font-size: 25px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.75);
          text-align: center;
          img {
            width: 31px;
            height: 34px;
            vertical-align: middle;
          }
        }
        .laber {
          width: 100%;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          text-align: left;
          margin-top: 25px;
        }
        .input {
          width: 85%;
          margin: 0 auto;
          height: 42px;
          background: rgb(232, 240, 254);
          border-radius: 6px;
          border: 1px solid rgba(224, 224, 224, 1);
          margin-top: 8%;
          line-height: 42px;
          overflow: hidden;
        }
        .validation {
          width: 100%;
          height: 52px;
          margin-top: 11px;
          .left {
            float: left;
            width: 257px;
            height: 52px;
            line-height: 52px;
            background: rgba(245, 245, 245, 1);
            border-radius: 6px;
            border: 1px solid rgba(224, 224, 224, 1);
          }
          .right {
            float: right;
            width: 97px;
            height: 52px;
            padding: 8px;
            box-sizing: border-box;
            background: rgba(245, 245, 245, 1);
            div {
              width: 100%;
              height: 100%;
              background-color: #fff;
              cursor: pointer;
            }
          }
          .obtain {
            float: right;
            width: 97px;
            height: 52px;
            line-height: 52px;
            text-align: center;
            background: rgba(245, 245, 245, 1);
            border-radius: 6px;
            border: 1px solid rgba(224, 224, 224, 1);
            font-size: 13px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            cursor: pointer;
          }
        }
        .forget {
          width: 100%;
          font-size: 13px;
          font-family: PingFangSC;
          font-weight: 400;
          color: rgba(77, 194, 248, 1);
          line-height: 18px;
          text-align: right;
          padding: 11px 13px;
          box-sizing: border-box;
          cursor: pointer;
        }
        .determine {
          width: 85%;
          margin: 0 auto;
          height: 40px;
          background: rgba(121, 176, 250, 1);
          box-shadow: 0px 1px 9px 0px rgba(0, 121, 254, 0.54);
          border-radius: 2px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 400;
          color: #ffffff;
          margin-top: 7%;
          cursor: pointer;
        }
        .determineNo {
          width: 85%;
          margin: 0 auto;
          height: 40px;
          background: rgba(121, 176, 250, 0.5);
          border-radius: 2px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 400;
          color: #ffffff;
          margin-top: 7%;
          cursor: pointer;
        }
        .wangji {
          width: 85%;
          margin: 13px auto;
          text-align: right;
          cursor: pointer;
        }
        .wangji:hover{
          color:  #3083FF;
        }
      }
    }
  }
  .dialog2 {
    width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 125px;
    height: 100%;
    .main_right {
      box-sizing: border-box;
      background: #ffffff;
      box-shadow: 0px 5px 22px 0px rgba(0, 97, 184, 0.65);
      border-radius: 4px;
      margin: 0 auto;
      width: 51%;
      height: 52%;
      min-width: 1126px;
      min-height: 546px;
      .xiugai {
        width: 100%;
        display: inline-block;
        text-align: center;
        padding-top: 35px;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.75);
      }
      .toubuindex {
        width: 70%;
        margin: 0 auto;
        padding-top: 66px;
      }
      .main {
        width: 100%;
        padding-top: 10px;
        margin: 0 auto;
        // height: 477px;
        .dibu {
          display: flex;
          padding-top: 24px;
          width: 37%;
          margin: 0 auto;
          .denglu {
            width: 200px;
            height: 40px;
            background: rgba(121, 176, 250, 1);
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            line-height: 40px;
            cursor: pointer;
            text-align: center;
            font-size: 16px;
            color: #fff;
            margin: 0 auto;
          }
          .qiye {
            width: 80px;
            height: 32px;
            background: #eceef0;
            border-radius: 4px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 32px;
            cursor: pointer;
            text-align: center;
          }
          .qiye:hover {
            background: #3083ff;
            color: #ffffff;
          }
          .geren:hover {
            background: #3083ff;
            color: #ffffff;
          }
          .geren {
            width: 80px;
            height: 32px;
            background: #eceef0;
            border-radius: 4px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 32px;
            cursor: pointer;
            text-align: center;
          }
        }
        .dibu2 {
          display: flex;
          padding-top: 24px;
          width: 10%;
          margin: 0 auto;
          .qiye {
            width: 80px;
            height: 32px;
            background: #3083ff;
            border-radius: 4px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 32px;
            cursor: pointer;
            text-align: center;
          }
        }
        .wenzi2 {
          width: 100%;
          // height: 100%;
          text-align: center;
          img {
            width: 426px;
            height: 224px;
          }
        }
        .chenggou {
          font-size: 25px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          padding-top: 5%;
          text-align: center;
        }

        .xieyi {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(48, 131, 255, 1);
          cursor: pointer;
        }
        .zhanghao {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(61, 61, 61, 1);
        }
        .denglu {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #3083ff;
          cursor: pointer;
        }
        .name {
          font-size: 25px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.75);
          width: 90%;
          margin: 0 auto;
          .qianguo {
            font-size: 26px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.75);
          }
          .dian {
            font-size: 36px;
            color: #ccc;
          }
          img {
            width: 31px;
            height: 34px;
            vertical-align: middle;
          }
        }
        .laber {
          width: 100%;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          text-align: left;
          margin-top: 25px;
        }
        .main_form {
          width: 37%;
          margin: 0 auto;
          .name {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.85);
          }
          .tupian {
            margin: 0 auto;
            padding-top: 40px;
            width: 30%;
            img {
              width: 82px;
              height: 82px;
            }
            .chongzhi {
              font-size: 18px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.85);
              padding-top: 10px;
            }
          }
        }
        .input {
          width: 100%;
          height: 42px;
          background: #e8f0fe;
          border-radius: 6px;
          border: 1px solid #e0e0e0;
          line-height: 42px;
          overflow: hidden;
          cursor: pointer;
        }
        .input2 {
          width: 100%;
          border-radius: 6px;
          border: 1px solid #e0e0e0;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          .left_input {
            width: 335px;
          }
          span {
            cursor: pointer;
            width: 116px;
            height: 44px;
            line-height: 44px;
            background: #fff;
            border-radius: 2px;
            border: 1px solid rgba(224, 224, 224, 0.6);
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #3083ff;
            text-align: center;
            border-top: none;
            border-bottom: none;
            border-right: none;
          }
        }
        .validation {
          width: 100%;
          height: 52px;
          margin-top: 11px;
          .left {
            float: left;
            width: 257px;
            height: 52px;
            line-height: 52px;
            background: rgba(245, 245, 245, 1);
            border-radius: 6px;
            border: 1px solid rgba(224, 224, 224, 1);
          }
          .right {
            float: right;
            width: 97px;
            height: 52px;
            padding: 8px;
            box-sizing: border-box;
            background: rgba(245, 245, 245, 1);
            div {
              width: 100%;
              height: 100%;
              background-color: #fff;
              cursor: pointer;
            }
          }
        }
        .forget {
          width: 100%;
          font-size: 13px;
          font-family: PingFangSC;
          font-weight: 400;
          color: rgba(77, 194, 248, 1);
          line-height: 18px;
          text-align: right;
          padding: 11px 13px;
          box-sizing: border-box;
          cursor: pointer;
        }
      }
      .determine {
        width: 14%;
        margin: 0 auto;
        height: 40px;
        background: rgba(121, 176, 250, 1);
        box-shadow: 0px 1px 9px 0px rgba(0, 121, 254, 0.54);
        border-radius: 4px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC;
        font-weight: 400;
        color: #ffffff;
        cursor: pointer;
      }
      .determineNo {
        width: 14%;
        margin: 0 auto;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #ccc;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC;
        font-weight: 400;
        color: #333;
        cursor: pointer;
      }
    }
  }
}
</style>

<style>
.PcLogin .dialog .el-input > .el-input__inner {
  height: 46px !important;
  line-height: 46px !important;
  border: none !important;
  padding-left: 70px;
}
.PcLogin .dialog2 .el-input > .el-input__inner {
  height: 46px !important;
  line-height: 46px !important;
  border: none !important;
}
.PcLogin .dialog .el-input__icon {
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s !important;
  color: #33aeff !important;
  font-size: 24px !important;
  width: 65px !important;
}
.PcLogin .el-step__head.is-success {
  color: rgba(48, 131, 255, 1);
  border-color: rgba(48, 131, 255, 1);
}
.PcLogin .el-step__title.is-success {
  color: rgba(0, 0, 0, 0.65);
}
.PcLogin .is-process .el-step__icon.is-text {
  background: rgba(48, 131, 255, 1);
  border: none;
  color: #fff;
}
.el-tooltip__popper[x-placement^="right"].is-dark {
  width: 250px !important;
  height: 80px !important;
  background: rgba(255, 255, 255, 1) !important;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15) !important;
  border: 1px solid rgba(235, 238, 245, 1) !important;
  font-size: 14px !important;
  font-family: PingFangSC-Regular, PingFang SC !important;
  font-weight: 400 !important;
  color: rgba(100, 102, 106, 1) !important;
  line-height: 20px !important;
}
.el-tooltip__popper[x-placement^="right"] .popper__arrow {
  border-right-color: rgba(0, 0, 0, 0.15) !important;
}
.el-tooltip__popper[x-placement^="right"] .popper__arrow:after {
  border-right-color: rgba(0, 0, 0, 0.15) !important;
}
</style>
