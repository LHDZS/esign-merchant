<style lang="less" scoped>
.h5enterpriseYin {
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
  .content {
    width: 100%;
    padding-top: 10vh;
    box-sizing: border-box;
    margin: 0 auto;
    height: auto;
    .form {
      width: 90%;
      margin: 0 auto;
      height: auto;
      .button {
        height: 40px;
        line-height: 40px;
        background: #3083ff;
        border-radius: 2px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
        width: 100%;
      }
      .buttonNo {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #6ea8ff;
        border-radius: 2px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .dialog-form {
    width: 100%;
    .list {
      width: 100%;
      margin-bottom: 32px;
      .label {
        width: 9vh;
        text-align: right;
        font-size: 14px;
      }
      .input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          cursor: pointer;
           width: 100px;
          height: 38px;
          line-height: 38px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-left: none;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(48, 131, 255, 0.7);
          text-align: center;
        }
      }
    }
  }
}
</style>
<style>
.h5enterpriseYin .el-form-item__label {
  text-align: left !important;
}
.h5enterpriseYin .el-form-item__content {
  margin-left: 0px !important;
}
</style>

<template>
  <div class="h5enterpriseYin">
    <div class="header">
      <div class="text">实名认证服务</div>
    </div>
    <div class="content">
      <div class="form">
        <el-form ref="Authform" :model="Authform" :rules="rules" label-width="120px">
          <el-form-item label="姓 名:" prop="id_name">
            <el-input v-model="Authform.id_name" :disabled="inputType"></el-input>
          </el-form-item>
          <el-form-item label="身份证号:" prop="id_no">
            <el-input v-model="Authform.id_no"></el-input>
          </el-form-item>
          <el-form-item label="个人银行卡号:" prop="bank_no">
            <el-input v-model="Authform.bank_no"></el-input>
          </el-form-item>
          <el-form-item label="手机号码:" prop="mobile">
            <el-input v-model="Authform.mobile" :disabled="inputType"></el-input>
          </el-form-item>
          <div
            :class="this.Authform.id_name !='' && this.Authform.id_no !='' && this.Authform.bank_no !='' && this.Authform.mobile !='' ? 'button' : 'buttonNo'"
            @click="onSubmit('Authform')"
          >下一步</div>
        </el-form>
      </div>
    </div>
    <el-dialog title="手机验证" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
      <div class="dialog-form">
        <div class="list">
          <span class="label">手机号:</span>
          <div class="input">
            <el-input v-model="phone" placeholder="请输入手机号" :disabled="true"></el-input>
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
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="queDing()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";

export default {
  data() {
    var mobile = (rule, value, callback) => {
      var type = /^1[345678]\d{9}$/;
      // var type = value.replace(/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/i);
      if (!type.test(value)) {
        callback(new Error("请输入正确手机号"));
      } else {
        callback();
      }
    };
    return {
      phone: "", //手机号
      glycms: "", //验证码
      countdownHtml: "获取验证码",
      times: 60,
      rules: {
        id_name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        id_no: [{ required: true, message: "请输入身份证号", trigger: "blur" }],
        bank_no: [
          { required: true, message: "请输入个人银行卡号", trigger: "blur" },
        ],
        mobile: [{ validator: mobile, trigger: "blur" }],
      },
      inputType: false,
      Authform: {
        id_name: "",
        id_no: "",
        bank_no: "",
        mobile: "",
      },
      dialogVisible: false,
    };
  },
  created() {
    if (this.$route.query.type) {
      this.dialogVisible = true;
    } else {
      this.dialogVisible = false;
    }
  },
  mounted() {
    this.infoPost();
  },
  methods: {
    queDing() {
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
            this.$message.success("认证成功");
            this.$router.push({
              path: "/h5enterpriseWan",
              query: { user_name: d.data.user_name, user_id: d.data.user_id },
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
    handleClose(done) {
      done();
    },
    infoPost() {
      post(api.info).then(
        (d) => {
          //console.log(d, 1);
          if (d.status == 0) {
            //console.log(d.data.user_name, "444444");
            if (this.$route.query.type) {
              this.phone = d.data.mobile;
            }
            this.Authform["id_name"] = d.data.user_name;
            this.Authform["id_no"] = d.data.user_id;
            this.Authform["bank_no"] = d.data.bank_no;
            this.Authform["mobile"] = d.data.mobile;
            if (sessionStorage.getItem("taskId")) {
              this.inputType = true;
              this.Authform.mobile = JSON.parse(
                sessionStorage.getItem("data")
              ).agent_mobile;
              this.Authform.id_name = JSON.parse(
                sessionStorage.getItem("data")
              ).agent_name;
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
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          post(api.fourFactorVerification, this.Authform).then(
            (d) => {
              //console.log(d, "??????????????");
              if (d.status === 0) {
                if (d.data) {
                  this.phone = d.data.mobile;
                  this.dialogVisible = true;
                } else {
                  this.$router.push({ path: "/h5enterpriseWan" });
                }
              } else {
                this.$message.error(d.msg);
              }
            },
            (err) => {
              //error callback
            }
          );
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    },
  },
  components: {},
};
</script>
