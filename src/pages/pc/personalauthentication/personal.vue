<style lang="less" scoped>
.personal {
  width: 1200px;
  height: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
  .left {
    float: left;
    width: 20%;
    height: 500px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.12);
    padding: 10px 0px;
    box-sizing: border-box;
    .list {
      width: 100%;
      height: 40px;
      background: #3083ff26;
      border-left: 4px solid rgba(48, 131, 255, 1);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(48, 131, 255, 1);
      cursor: pointer;
      i {
        width: 14px;
        height: 10px;
        margin-left: 14px;
        margin-right: 10px;
      }
    }
    .listNo {
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-left: 4px solid #fff;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: black;
      cursor: pointer;
      i {
        width: 14px;
        height: 10px;
        margin-left: 14px;
        margin-right: 10px;
      }
    }
  }
  .right {
    float: right;
    width: 79%;
    height: 500px;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    .title {
      width: 100%;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      padding: 20px 32px;
      box-sizing: border-box;
      text-align: left;
    }
    .form {
      width: 50%;
      text-align: right;
      margin-left: 90px;
      i {
        position: absolute;
        top: 13px;
        right: -20px;
        cursor: pointer;
        color: rgba(48, 131, 255, 1);
      }
      .button {
        width: 335px;
        height: 40px;
        line-height: 40px;
        background: #3083ff;
        border-radius: 2px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        cursor: pointer;
        margin-left: 120px;
      }
      .buttonNo {
        width: 335px;
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
        margin-left: 120px;
      }
    }
  }
  .dialog-form {
    width: 100%;
    .list {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 32px;
      .label {
        width: 70px;
        text-align: right;
      }
      .input {
        width: 324px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        .left_input {
          width: 229px;
        }
        span {
          cursor: pointer;
          width: 94px;
          height: 30px;
          line-height: 30px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-left: none;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(48, 131, 255, 0.7);
          text-align: center;
        }
      }
    }
  }
  .tanluang {
    height: auto;
    .daozheng {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      position: absolute;
      top: 16px;
    }
    .shangwei {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      padding-left: 30px;
    }
  }

  .tanluang2 {
    height: auto;
    .daozheng {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      position: absolute;
      top: 16px;
    }
    .shangwei {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      padding-left: 30px;
    }
  }
}
</style>
<style>
</style>

<template>
  <div class="personal">
    <div class="left">
      <div
        :class="activeClass == item.id ? 'list' : 'listNo'"
        v-for="(item, key) in checkBoxArr"
        :key="key"
        @click="selectClick(item)"
      >
        <i class="el-icon-bank-card"></i>
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="activeClass == 10">
      <div class="title">银行卡认证</div>
      <div class="form">
        <el-form
          ref="Authform"
          :model="Authform"
          :rules="rules"
          label-width="120px"
        >
          <el-form-item label="姓 名:" prop="id_name">
            <el-input
              v-model="Authform.id_name"
              :disabled="inputType"
            ></el-input>
          </el-form-item>
          <el-form-item label="身份证号:" prop="id_no">
            <el-input v-model="Authform.id_no"></el-input>
          </el-form-item>
          <el-form-item label="个人银行卡号:" prop="bank_no">
            <el-input v-model="Authform.bank_no"></el-input>
            <i class="el-icon-warning-outline" @click="error"></i>
          </el-form-item>
          <el-form-item label="手机号码:" prop="mobile">
            <el-input
              v-model="Authform.mobile"
              :disabled="inputType"
            ></el-input>
            <i class="el-icon-warning-outline" @click="warning"></i>
          </el-form-item>
          <div
            :class="
              this.Authform.id_name != '' &&
              this.Authform.id_no != '' &&
              this.Authform.bank_no != '' &&
              this.Authform.mobile != ''
                ? 'button'
                : 'buttonNo'
            "
            @click="onSubmit('Authform')"
          >
            下一步
          </div>
          <br />
          <div
            style="text-align: center; margin-left: 120px; cursor: pointer"
            @click="failBtn"
          >
            认证不成功?
          </div>
        </el-form>
      </div>
    </div>
    <!-- <div class="right" v-if="activeClass == 20">
          <div class="title">手机认证</div>
          <div class="form">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="姓 名:">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="身份证号:">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号码:">
                    <el-input v-model="form.name"></el-input><i class="el-icon-warning-outline" @click="warning"></i>
                </el-form-item>
                <div class="button" @click="onSubmit">下一步</div>
                </el-form>
          </div>
    </div>-->
    <el-dialog
      title="手机验证"
      :visible.sync="dialogVisible"
      width="483px"
      :before-close="handleClose"
    >
      <div class="dialog-form">
        <div class="list">
          <span class="label">手机号码:</span>
          <div class="input">
            <el-input
              v-model="phone"
              placeholder="请输入手机号"
              :disabled="true"
            ></el-input>
          </div>
        </div>
        <div class="list">
          <span class="label">验证码:</span>
          <div class="input">
            <div class="left_input">
              <el-input v-model="glycms" placeholder="请输入验证码"></el-input>
            </div>
            <span @click="validationSms()">{{ countdownHtml }}</span>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="queDing()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 以下情况不支持 -->
    <el-dialog
      :visible.sync="dialogVisible2"
      width="522px"
      :before-close="handleClose"
    >
      <div class="tanluang">
        <div>
          <span class="daozheng">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_4237159653043671420204164036714Shape.png"
              alt
              style="vertical-align: middle"
            />&nbsp;以下情况不支持
          </span>
        </div>
        <br />
        <div class="shangwei">1. 银联标识银行卡或存折；</div>
        <br />
        <div class="shangwei">
          2. 认证次数过于频繁（超过3次/天或超过2次/分钟）；
        </div>
        <br />
        <div class="shangwei">
          3. 柜台办理、电话更改预留手机号，需要过2天后才可核验；
        </div>
        <br />
        <div class="shangwei">4. 银联标识银行卡或存折；</div>
        <br />
        <div style="width: 100%; text-align: right">
          <el-button type="primary" @click="guanbi">我知道了</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 友情提示 -->
    <el-dialog
      :visible.sync="dialogVisible3"
      width="522px"
      :before-close="handleClose"
    >
      <div class="tanluang">
        <div>
          <span class="daozheng">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_63715965281146852020416154685jinggao.png"
              alt
              style="vertical-align: middle"
            />&nbsp;友情提示
          </span>
        </div>
        <br />
        <div class="shangwei">
          1.
          银行卡预留手机号和短信通知号码是不一样的，请确认手机号码为预留手机号码；
        </div>
        <br />
        <div class="shangwei">
          2.
          通过电话银行、手机银行、短信通知等修改手机号可能会核验失败，建议去银行柜台修改；
        </div>
        <br />
        <div class="shangwei">
          3. 柜台办理、电话更改预留手机号，需要过2天后才可核验；
        </div>
        <br />
        <div style="width: 100%; text-align: right">
          <el-button type="primary" @click="guan">我知道了</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 以下场景无法支持 -->
    <el-dialog
      :visible.sync="dialogVisible4"
      width="522px"
      :before-close="handleClose"
    >
      <div class="tanluang2">
        <div>
          <span class="daozheng">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_63715965281146852020416154685jinggao.png"
              alt
              style="vertical-align: middle"
            />&nbsp;以下场景无法支持
          </span>
        </div>
        <br />
        <div class="shangwei">1. 港澳台及外籍人士；</div>
        <br />
        <div class="shangwei">2. 户籍变动等特殊情况；</div>
        <br />
        <div style="width: 100%; text-align: right">
          <el-button type="primary" @click="guanBtn">我知道了</el-button>
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
    var mobile = (rule, value, callback) => {
      var type = /^1[345678]\d{9}$/;
      // var type = value.replace(/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/i);
      if (!type.test(value)) {
        callback(new Error("请输入正确手机号"));
      } else {
        callback();
      }
    };

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
      phone: "", //手机号
      glycms: "", //验证码
      countdownHtml: "获取验证码",
      times: 60,
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      checkBoxArr: [{ id: 10, name: "银行卡认证" }],
      activeClass: 10,
      rules: {
        id_name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        id_no: [{validator: id_no, trigger: "blur" }],
        bank_no: [{ required: true, message: "请输入个人银行卡号", trigger: "blur" }],
        mobile: [{ validator: mobile, trigger: "blur" }],
      },
      inputType: false,
      Authform: {
        id_name: "",
        id_no: "",
        bank_no: "",
        mobile: "",
      },
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
    failBtn() {
      this.dialogVisible4 = true;
    },
    guanBtn() {
      this.dialogVisible4 = false;
    },
    infoPost() {
      post(api.info).then(
        (d) => {
          //console.log(d, 1);
          if (d.status == 0) {
            //console.log(d.data.user_name, "444444");
            if (this.$route.query.type) {
              this.phone = d.data.mobile;
              this.validationSms();
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
              path: "/personal2",
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
    selectClick(item) {
      this.activeClass = item.id;
      //console.log(this.activeClass, "文字说明");
    },
    handleClose(done) {
      done();
    },
    guanbi() {
      this.dialogVisible2 = false;
    },
    guan() {
      this.dialogVisible3 = false;
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
                  this.$router.push({ path: "/personal2" });
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
    warning() {
      this.dialogVisible3 = true;
      // const h = this.$createElement;
      // this.$msgbox({
      //   title: '友情提示',
      //   message: h('div', null , [
      //     h('div', { style: 'height: 48px' }, '1. 银行卡预留手机号和短信通知号码是不一样的，请确认手机号码为预留手机号码； '),
      //     h('div', { style: 'height: 48px' }, '2. 通过电话银行、手机银行、短信通知等修改手机号可能会核验失败，建议去银行柜台修改；'),
      //     h('div', { style: 'height: 48px' }, '3. 柜台办理、电话更改预留手机号，需要过2天后才可核验；')
      //   ]),
      //   type: 'warning',
      //   showCancelButton: false,
      //   showClose: false,
      //   confirmButtonText: '我知道了',
      // }).then(action => {
      //   //console.log('guanbi')
      // });
    },
    error() {
      this.dialogVisible2 = true;
      // const h = this.$createElement;
      // this.$msgbox({
      // title: '以下情况不支持',
      // message: h('div', null , [
      //     h('div', { style: 'height: 32px' }, '1. 银联标识银行卡或存折；'),
      //     h('div', { style: 'height: 32px' }, '2. 认证次数过于频繁（超过3次/天或超过2次/分钟）；'),
      //     h('div', { style: 'height: 32px' }, '3. 柜台办理、电话更改预留手机号，需要过2天后才可核验；'),
      //     h('div', { style: 'height: 32px' }, '4. 银联标识银行卡或存折；')
      // ]),
      // iconClass: 'el-icon-error',
      // showCancelButton: false,
      // showClose: false,
      // confirmButtonText: '我知道了',
      // }).then(action => {
      //console.log.log('guanbi')
      // });
    },
  },
  components: {},
};
</script>
