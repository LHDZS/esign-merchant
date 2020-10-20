<style lang="less" scoped>
.authentication {
  width: 1200px;
  padding: 12px 24px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 0 auto;
  height: 562px;
  margin-top: 30px;
  .header {
    width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
    .renzheng {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(89, 89, 89, 1);
      padding-left: 20px;
      cursor: pointer;
    }
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
  .content {
    width: 100%;
    padding-top: 50px;
    box-sizing: border-box;
    .title {
      width: 100%;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      margin-bottom: 30px;
    }
    .input {
      width: 500px;
      margin: 0 auto;
      text-align: left;
      .button {
        width: 324px;
        height: 40px;
        background: #3083ff;
        border-radius: 2px;
        line-height: 40px;
        margin: 0 auto;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        margin-top: 60px;
        cursor: pointer;
        text-align: center;
        margin-right: -5px;
      }
      .buttonNo {
        width: 324px;
        height: 40px;
        background: #6ea8ff;
        border-radius: 2px;
        line-height: 40px;
        margin: 0 auto;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        margin-top: 60px;
        cursor: pointer;
        text-align: center;
        margin-right: -5px;
      }
    }
  }
  .tankuang {
      height: 350px;
    .banli {
         width: 100%;
    margin-left: 10px;
    padding-bottom: 30px;
    border-left: 1px dotted;
    }
    .tou {
      .yuandian {
        width: 20px;
        height: 20px;
        background: linear-gradient(204deg, #0093d7 0%, #2c6cff 100%);
        box-shadow: 0px 2px 4px 0px rgba(0, 154, 225, 0.6);
        display: inline-block;
        border-radius: 50px;
        vertical-align: middle;
        font-size: 12px;
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
        padding-left: 13px;
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

<template>
  <div class="authentication">
    <div class="header">
      <div class="text">创建企业</div>
      <span class="renzheng" @click="zhiYing">
        <i class="el-icon-warning" style="color: #A4A4A4;"></i>认证流程指引
      </span>
    </div>
    <div class="content">
      <div class="input">
        <el-form ref="form" :model="form" :rules="rules" label-width="200px">
          <el-form-item label="组织类型:" prop="org_type">
            <el-radio v-model="form.org_type" label="2">企业</el-radio>
            <!-- <el-radio v-model="form.radio" label="2">个体工商户</el-radio>
            <el-radio v-model="form.radio" label="3">其他</el-radio>-->
          </el-form-item>
          <el-form-item label="企业名称:" prop="ent_name">
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
      width="587px"
      :before-close="handleClose"
    >
      <div class="tankuang">
        <!-- <div>
          <img
            src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_11861596010833454202029162033454liucheng.png"
            alt
          />
        </div>-->
        <div style="padding-left: 20px;">
          <div>
            <div class="tou">
              <span class="yuandian">1</span>
              <span class="title">办理人认证</span>
            </div>
            <div class="banli">
              <span style="padding-left: 25px;">企业实名流程需确保办理人完成个人认证，并为本人真实意愿操作办理</span>
            </div>
          </div>
          <div>
            <div class="tou">
              <span class="yuandian">2</span>
              <span class="title">填写企业基础信息</span>
            </div>
            <div class="banli">
              <span style="padding-left: 25px;">选择组织类型，填写基本信息</span>
              <br />
              <span style="padding-left: 25px;">企业：同一信用代码需为91开头</span>
            </div>
          </div>
          <div>
            <div class="tou">
              <span class="yuandian">3</span>
              <span class="title">选择企业认证方式（若您为法定代表人亲自办理，则略过该步骤）</span>
            </div>
            <div class="banli">
              <span style="padding-left: 25px;">通过下列其中一种认证即可（页面可选项以平台方设置为准）</span>
              <br />
              <span style="padding-left: 25px;">对公打款：需要提供公司对公账户信息，开户支行、账号等</span>
              <br />
              <span style="padding-left: 25px;">法人授权：需要填写法定代表人有效手机号</span>
            </div>
          </div>
          <div>
            <div class="tou">
              <span class="yuandian">4</span>
              <span class="title">认证完成</span>
            </div>
          </div>
          <div class="button" @click="guanBi()">我知道了</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
export default {
  data() {
      var id_no = (rule, value, callback) => {
        //15位和18位身份证号码的正则表达式
        var idCard = value
        var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/; //如果通过该验证，说明身份证格式正确，但准确性还需计算
        if (regIdCard.test(idCard)) {
          if (idCard.length == 18) {
            var idCardWi = new Array(7,9,10,5,8, 4,2,1,6,3,7,9,10,5,8,4,2); //将前17位加权因子保存在数组里
            var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
            var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
            for (var i = 0; i < 17; i++) {
              idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
            }
            var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
            var idCardLast = idCard.substring(17); //得到最后一位身份证号码 //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if (idCardMod == 2) {
              if (idCardLast == "X" || idCardLast == "x") {
                callback();
              } else {
                callback(new Error("身份证号码错误！"));
              }
            } else {
              //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
              if (idCardLast == idCardY[idCardMod]) {
                callback();
              } else {
                callback(new Error("身份证号码错误！"));
              }
            }
          }
        } else {
          callback(new Error("身份证格式不正确!"));
        }
    };
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
            validator: id_no,
            trigger: "blur",
          },
        ],
      },
      dialogSubject: false,
      inputType:false,
      approvetype: 0,
    };
  },
  created() {
    this.infoPost();
    this.form["ent_name"] = localStorage.getItem("enterName");
    if (sessionStorage.getItem("taskId") && localStorage.getItem("enterName") && this.$route.query.type) { 
      this.inputType = true;
    }

    this.$forceUpdate();
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
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
          post(api.enterpriseCertification, this.form).then(
            (d) => {
              //console.log(d, "??????????????");
              if (d.status === 0) {
                loading.close();
                localStorage.setItem("obj", JSON.stringify(d.data));
                sessionStorage.setItem("main_id", d.data.id);
                if (d.data.redirect == 100) {
                  this.$router.push({ path: "/enterpriseYin" });
                }else if (d.data.redirect == 200) {
                  if (sessionStorage.getItem('taskId')) {
                    this.$router.push({ path: '/nestedContract' });
                  }else {
                    this.$router.push({ path: '/' });
                  }
                }else {
                  this.$router.push({ path: "/corporatePayment" });
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
