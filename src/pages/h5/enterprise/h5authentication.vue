<style lang="less" scoped>
.h5authentication {
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
    box-sizing: border-box;
    height: auto;
     padding-top: 10vh;
    .name {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      text-align: center;
      padding-top: 10px;
      width: 100%;
      height: auto;
    }
    .title {
      width: 100%;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      margin-bottom: 30px;
    }
    .input {
      width: 90%;
      margin: 0 auto;
      height: auto;
      .renzheng {
        color: rgb(48, 131, 255);
        float: right;
        // display: inline-block;
      }
      .button {
        width: 100%;
        height: 40px;
        background: #3083ff;
        border-radius: 2px;
        line-height: 40px;
        margin: 0 auto;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        cursor: pointer;
        text-align: center;
      }
      .buttonNo {
        width: 100%;
        height: 40px;
        background: #6ea8ff;
        border-radius: 2px;
        line-height: 40px;
        margin: 0 auto;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        cursor: pointer;
        text-align: center;
      }
    }
  }
  .tankuang {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .fangkuai {
      width: 100%;
      height: auto;
      .banli {
        width: 90%;
        margin-left: 11px;
        padding-bottom: 30px;
        border-left: 1px dotted;
        font-size: 14px;
        padding-left: 23px;
        padding-top: 10px;
      }
      .tou {
        width: 100%;
        height: auto;
        .yuandian {
          width: 20px;
          height: 20px;
          background: linear-gradient(204deg, #0093d7 0%, #2c6cff 100%);
          box-shadow: 0px 2px 4px 0px rgba(0, 154, 225, 0.6);
          display: inline-block;
          border-radius: 50px;
          vertical-align: middle;
          font-size: 1.5vh;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 20px;
          text-align: center;
        }
        .title {
            font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
          width: 88%;
          vertical-align: middle;
          display: inline-block;
        }
      }
    }
    .button {
      width: 130px;
      height: 32px;
      background: #3083ff;
      border-radius: 4px;
      line-height: 32px;
      margin: 0 auto;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
      text-align: center;
      margin-top: 24px;
    }
  }
}
</style>
<style>
.h5authentication .el-form-item__label {
  text-align: left !important;
  width: 188px !important;
}
.h5authentication .el-form-item__content {
  margin-left: 0px !important;
}
</style>

<template>
  <div class="h5authentication">
    <div class="header">
      <div class="text">实名认证服务</div>
    </div>
    <div class="content">
      <div class="name">组织机构实名认证</div>
      <div class="input">
        <el-form ref="form" :model="form" :rules="rules" label-width="200px">
          <el-form-item label="企业名称:" prop="ent_name">
            <span class="renzheng" @click="zhiYing">
              <i class="el-icon-warning"></i>认证流程指引
            </span>
            <el-input v-model="form.ent_name" placeholder="请输入企业名称" :disabled="inputType"></el-input>
          </el-form-item>
          <el-form-item label="统一社会信用代码:" prop="credit_code">
            <el-input v-model="form.credit_code" placeholder="请输入统一社会信用代码"></el-input>
          </el-form-item>
          <el-form-item label="法定代表人名称:" prop="id_name">
            <el-input v-model="form.id_name" placeholder="请输入法定代表人名称"></el-input>
          </el-form-item>
          <el-form-item label="法定代表人身份证号:" prop="id_no">
            <el-input v-model="form.id_no" placeholder="请输入法定代表人身份证号"></el-input>
          </el-form-item>
          <div
            :class="this.form.ent_name !='' && this.form.credit_code !='' && this.form.id_name !='' && this.form.id_no !='' ? 'button' : 'buttonNo'"
            @click="submitForm('form')"
          >确认</div>
        </el-form>
      </div>
    </div>
    <!-- 认证流程指引 -->
    <el-dialog
      title="认证流程指引"
      :visible.sync="dialogSubject"
      center
      width="80%"
      :before-close="handleClose"
    >
      <div class="tankuang">
        <div class="fangkuai">
          <div class="tou">
            <span class="yuandian">1</span>
            <span class="title">办理人认证</span>
          </div>
          <div class="banli">
            <span>企业实名流程需确保办理人完成个人认证，并为本人真实意愿操作办理</span>
          </div>
        </div>
        <div class="fangkuai">
          <div class="tou">
            <span class="yuandian">2</span>
            <span class="title">填写企业基础信息</span>
          </div>
          <div class="banli">
            <span>选择组织类型，填写基本信息</span>
            <br />
            <span>企业：同一信用代码需为91开头</span>
          </div>
        </div>
        <div class="fangkuai">
          <div class="tou">
            <span class="yuandian">3</span>
            <span class="title">选择企业认证方式（若您为法定代表人亲自办理，则略过该步骤）</span>
          </div>
          <div class="banli">
            <span>通过下列其中一种认证即可（页面可选项以平台方设置为准）</span>
            <br />
            <span>对公打款：需要提供公司对公账户信息，开户支行、账号等</span>
            <br />
            <span>法人授权：需要填写法定代表人有效手机号</span>
          </div>
        </div>
        <div class="fangkuai">
          <div class="tou">
            <span class="yuandian">4</span>
            <span class="title">认证完成</span>
          </div>
        </div>
        <div class="button" @click="guanBi()">我知道了</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
export default {
  data() {
    return {
      form: {
        org_type: "2",
        ent_name: "",
        credit_code: "",
        id_name: "",
        id_no: "",
      },
      rules: {
        ent_name: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
        ],
        org_type: [
          { required: true, message: "请输入组织类型", trigger: "blur" },
        ],
        credit_code: [
          {
            required: true,
            message: "请输入统一社会信用代码",
            trigger: "blur",
          },
        ],
        id_name: [
          { required: true, message: "请输入法定代表人名称", trigger: "blur" },
        ],
        id_no: [
          {
            required: true,
            message: "请输入法定代表人身份证号",
            trigger: "blur",
          },
        ],
      },
      dialogSubject: false,
      inputType: false,
      approvetype: 0,
    };
  },
  created() {
    this.infoPost();
    this.form["ent_name"] = localStorage.getItem("enterName");
    if (
      sessionStorage.getItem("taskId") &&
      localStorage.getItem("enterName") &&
      this.$route.query.type
    ) {
      this.inputType = true;
    }

    this.$forceUpdate();
  },
  methods: {
    infoPost() {
      post(api.info).then(
        (d) => {
          //console.log(d, 1);
          if (d.status == 0) {
            if (d.data.account_id) {
              sessionStorage.setItem("agent_id", d.data.account_id);
            }
          } else {
            // this.$message.error(d.msg);
          }
        },
        (err) => {
          //console.log(err.data.msg);
        }
      );
    },
    handleClose(done) {
      done();
    },
    guanBi() {
      this.dialogSubject = false;
    },
    zhiYing() {
      this.dialogSubject = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
          });
          post(api.enterpriseCertification, this.form).then(
            (d) => {
              //console.log(d, "??????????????");
              if (d.status === 0) {
                loading.close();
                localStorage.setItem("obj", JSON.stringify(d.data));
                sessionStorage.setItem("main_id", d.data.id);
                if (d.data.redirect == 100) {
                  this.$router.push({ path: "/h5enterpriseYin" });
                } else if (d.data.redirect == 200) {
                  if (sessionStorage.getItem("taskId")) {
                    this.$router.push({ path: "/nestedContract" });
                  } else {
                    this.$router.push({ path: "/" });
                  }
                } else {
                  this.$router.push({ path: "/h5corporatePayment" });
                }
              } else {
                loading.close();
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
