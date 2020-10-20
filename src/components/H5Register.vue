<template>
  <div class="H5Register">
    <div class="dialog" v-if="loginType">
        <div class="header">
            <span class="qianguo">欢迎注册签必果</span>
        </div>
        <div class="main">
          <div style="width: 90%;text-align: right;font-size: 1.4vh;" @click="login">
            <span class="zhanghao">已有账号?</span>
            <span class="denglu">&nbsp;立即登录</span>
          </div>
          <div class="main_form">
            <el-form ref="form" :model="form" :rules="rules" label-width="0px">
              <el-form-item prop="phone">
                <div class="input">
                  <el-input
                    v-model="form.phone"
                    placeholder="请输入手机号"
                    clearable
                    :disabled="inputType"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="password">
                <div class="input">
                  <!-- <el-tooltip placement="right" popper-class="test">
                    <div slot="content" style="font-size:14px;">
                      密码强度
                      <br />
                      <span style="color:red;">x</span>&nbsp;&nbsp;8-20个字符
                      <br />
                      <span style="color:red;">x</span>&nbsp;&nbsp;只能包含字母、数字及特殊字符
                      <br />
                      <span style="color:red;">x</span>&nbsp;&nbsp;字母、数字及特殊字符任意两种组合
                    </div>
                    <el-input placeholder="设置登录密码" v-model="form.password" show-password></el-input>
                  </el-tooltip> -->
                  <el-input placeholder="设置登录密码" v-model="form.password" show-password></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="newPassword">
                <div class="input">
                  <el-input placeholder="再次确认密码" v-model="form.newPassword" show-password></el-input>
                </div>
              </el-form-item>
              <el-form-item prop="graphics">
                <div class="input2">
                  <div class="left_input">
                    <el-input placeholder="输入动态验证码" v-model="form.graphics"></el-input>
                  </div>
                  <span @click="validationSms()">{{countdownHtml}}</span>
                </div>
              </el-form-item>
            </el-form>
          </div>
          <div style="padding-top: 14px;text-align: center;">
            <span class="xieyi" @click="yonghu">《用户协议》</span>
            <span class="xieyi" @click="yinsi">《用户隐私协议》</span>
            <span class="xieyi" @click="shuzi">《数字证书协议》</span>
          </div>
          <div style="width: 90%;margin: 0 auto">
            <el-divider></el-divider>
          </div>
          <div
            :class="form.phone != '' && form.password != ''&& form.newPassword != ''&& form.graphics != '' ? 'determine' : 'determineNo'"
            @click="homeSkip('form')"
          >同&nbsp;意&nbsp;并&nbsp;注&nbsp;册</div>
        </div>
    </div>
    <div class="dialog" v-if="!loginType">
      <div class="main_right">
        <div class="main">
          <div class="wenzi2">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_1336159599405203420202911405234注册成功.png"
              alt
            />
          </div>
          <div class="chenggou">个人账号注册成功！</div>
          <div class="dibu">
            <div class="qiye" @click="qiyeBtn">代表企业签署</div>
            <div style="width:30px;"></div>
            <div class="geren" @click="gerenBtn">代表个人签署</div>
            <!-- <div
              :class="activeClass == item.id ? 'qiye' : 'geren'"
              v-for="(item, y) in zhuArr"
              :key="y"
              @click="selectClick(item)"
            >{{item.name}}</div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 用户协议 -->
    <el-dialog
      :title="title"
      :visible.sync="dialogSubject"
      center
      width="80%"
      :before-close="handleClose"
    >
      <div class="CheckAccept">
        <privacyPolicy></privacyPolicy>
      </div>
    </el-dialog>
    <!-- 隐私协议 -->
    <el-dialog
      :title="title"
      :visible.sync="dialogSubject2"
      center
      width="80%"
      :before-close="handleClose"
    >
      <div class="CheckAccept">
        <privacyYingsi></privacyYingsi>
      </div>
    </el-dialog>
    <!-- 数字协议 -->
    <el-dialog
      :title="title"
      :visible.sync="dialogSubject3"
      center
      width="80%"
      :before-close="handleClose"
    >
      <div class="CheckAccept">
        <privacyShuzi></privacyShuzi>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
import privacyPolicy from "@/components/privacyPolicy";
import privacyYingsi from "@/components/privacyYingsi";
import privacyShuzi from "@/components/privacyShuzi";

export default {
  name: 'H5Register',
  data() {
    var password = (rule, value, callback) => {
      var type = /^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/i;
      if (value === "") {
        callback(new Error("请输入密码"));
      }else if (!type.test(value)) {
        callback(new Error("请按规则输入密码"));
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
    var newPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loginType: true,
      dialogSubject: false,
      dialogSubject2: false,
      dialogSubject3: false,
      activeClass: 1,
      title: "用户协议",
      yonghuXieyi: false,
      yinsiXieyi: false,
      shuziXieyi: false,
      ImageArr: {},
      zhuArr: [
        { id: 1, name: "企业代表签署"},
        { id: 2, name: "代表个人签署"}
      ],
      form: {
        phone: "",
        password: "",
        newPassword: "",
        graphics: ""
      },
      rules: {
        phone: [{ validator: phone, trigger: "blur" }],
        password: [{ validator: password, trigger: "blur" }],
        newPassword: [{ validator: newPassword, trigger: "blur" }],
        graphics: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      countdownHtml: "获取验证码",
      times: 60,
      inputType: false
    };
  },
  methods: {
    //登录
    loginPost(phone, password) {
      post(api.login, {
        loginName: phone,
        password: password
      }).then(
        d => {
          if (d.status == 0) {
            //console.log(d.data.loginName, "首页手机号");
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
                    if (d.data.approvetype == 1) {
                      this.$message.error("请先进行个人认证");
                      this.$router.push({ path: "/h5personalShou" });
                    } else if (d.data.approvetype == 2) {
                      this.$message.error("请先进行企业认证");
                      this.$router.push({ path: "/h5enterprise" });
                    } else if (d.data.approvetype == 0) {
                      sessionStorage.setItem("agent_id", d.data.agent_id);
                      sessionStorage.setItem("main_id", d.data.main_id);
                      this.$router.push({ path: "/nestedContract" });
                    } else {
                      this.$message.error("认证中");
                      this.$router.push({ path: "/h5corporatePayment", query: { approvetype: d.data.approvetype } });
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
        },
        err => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
    selectClick(item) {
      
      // 1企业2个人
      this.activeClass = item.id;
      return
      if(item.id == 1){
        localStorage.setItem("orgYype", "企业");
        this.$router.push({ path: "/enterprise" });
      }else{
        localStorage.setItem("orgYype", "个人");
        this.$router.push({ path: "/personalShou" });
      }
      //console.log(item.id, "文字说明");
    },
    //企业
    qiyeBtn() {
      localStorage.setItem("orgYype", "企业");
      this.$router.push({ path: "/enterprise" });
    },
    //个人
    gerenBtn() {
      localStorage.setItem("orgYype", "个人");
      this.$router.push({ path: "/personalShou" });
    },
    handleClose(done) {
      done();
    },
    //用户协议
    yonghu() {
      this.dialogSubject = true;
      this.title = "用户协议";
    },
    //隐私协议
    yinsi() {
      this.dialogSubject2 = true;
      this.title = "签必果用户隐私政策";
    },
    //数字隐私协议
    shuzi() {
      this.dialogSubject3 = true;
      this.title = "签必果数字证书服务协议";
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
      post(api.sendMobileCode, {
        mobile: this.form.phone,
        sendType:"register"
      }).then(
        d => {
          if (d.status == 0) {
             this.$message.success("发送成功");
              this.countdown();
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
    login() {
      this.$router.push({ path: "/login" });
    },
    homeSkip(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          post(api.register, {
            ucname: this.form.phone,
            password: this.form.password,
            code: this.form.graphics
          }).then(
            d => {
              //console.log(d, 1);
              if (d.status == 0) {
                // this.$message({
                //   message: "注册成功",
                //   type: "success"
                // });
                this.loginPost(this.form.phone, this.form.password);
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
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {
    privacyPolicy: privacyPolicy,
    privacyYingsi: privacyYingsi,
    privacyShuzi: privacyShuzi
  },
  created() {
    if (sessionStorage.getItem("taskId")) {
      this.inputType = true;
      let data = JSON.parse(sessionStorage.getItem("data"))
      this.form.phone = data ? data.agent_mobile : "";
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.H5Register::-webkit-scrollbar {
  width: 0;
}
.H5Register {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  .dialog {
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    // padding-top: 125px;
    height: 100%;
    .header {
        width: 100%;
        height: 29.9%;
        background: url("https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_480815991056335612020312033561bj1.png") no-repeat;
        background-size: 100% 100%;
        padding-top: 6.8vh;
        padding-left: 4.7vh;
        box-sizing: border-box;
        .qianguo {
            font-size: 4vh;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
    .main {
        width: 93.6%;
        height: 80.2%;
        background: #FFFFFF;
        box-shadow: 0px 2px 24px 0px rgba(37, 93, 200, 0.65);
        border-radius: 3vh;
        margin: 0 auto;
        margin-top: -14vh;
        padding-top: 2vh;
        box-sizing: border-box;
        .dibu {
            display: flex;
            -webkit-box-pack: center;
            padding-top: 40px;
            width: 40%;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
            .qiye {
            width: 200px;
            height: 40px;
            background:rgba(236,238,240,1);
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0,0,0,1);
            line-height: 40px;
            cursor: pointer;
            text-align: center;
            }
            .qiye:hover {
            background:linear-gradient(90deg,rgba(48,130,255,1) 0%,rgba(51,174,255,1) 100%);
            color: rgba(255, 255, 255, 1);
            }
            .geren {
                width: 200px;
                height: 40px;
                background:rgba(236,238,240,1);
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                line-height: 40px;
                cursor: pointer;
                text-align: center;
                font-size: 16px;
                color: rgba(0,0,0,1);
            }
            .geren:hover {
            background:linear-gradient(90deg,rgba(48,130,255,1) 0%,rgba(51,174,255,1) 100%);
            color: rgba(255, 255, 255, 1);
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
            font-size: 1.4vh;
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
            width: 85%;
            margin: 0 auto;
            margin-top: 2vh;
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
        cursor: pointer;
    }
  }
  .CheckAccept {
    height: 500px;
    overflow-y: auto;
  }
}
</style>

<style>
.H5Register .el-input > .el-input__inner {
  height: 46px !important;
  line-height: 46px !important;
  border: none !important;
}
.H5Register input::-webkit-input-placeholder{
  font-size: 2.2vh;
}
.H5Register .el-input__icon {
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s !important;
  color: #33aeff !important;
  font-size: 24px !important;
  width: 65px !important;
}
.H5Register .el-input-group__append {
  background: #fff;
  border-top: none;
  color: #3083ff;
  border-left: 1px solid #ccc;
  border-bottom: none;
  border-right: none;
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
