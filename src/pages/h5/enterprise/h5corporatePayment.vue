<style lang="less" scoped>
.h5corporatePayment {
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
  .right {
    width: 100%;
    box-sizing: border-box;
    height: auto;
    padding-top: 57px;
    .renzheng {
      width: 100%;
      font-size: 13px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      box-sizing: border-box;
      padding: 10px;
      height: auto;
      background: #f2f2f2;
    }

    .baowei {
      width: 100%;
      border-radius: 2px;
      box-sizing: border-box;
      height: auto;
      .tabBtn {
        width: 90%;
        margin: 0 auto;
        padding-top: 22px;
      }
      .dibuBtn {
        width: 100%;
        background: #fafafa;
        height: auto;
        .heikuang2 {
          border-radius: 2px;
          height: auto;
          width: 94%;
          margin: 30px auto;
          padding-top: 22px;
          .qiye {
            font-size: 2vh;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 500;
          }
          .gui2 {
            font-size: 2.5vh;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
          }
        }
        .button {
          width: 90%;
          height: 40px;
          background: #6ea8ff;
          border-radius: 2px;
          line-height: 40px;
          font-size: 2vh;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          cursor: pointer;
          margin: 0 auto;
          margin-top: 28px;
        }
        .buttonNo {
          width: 90%;
          height: 40px;
          background: #3083ff;
          border-radius: 2px;
          line-height: 40px;
          font-size: 2vh;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          cursor: pointer;
          margin: 0 auto;
          margin-top: 28px;
        }
      }
    }
    .zuzhi {
      font-size: 3.5vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
    }
    .buttonNo2 {
      width: 90%;
      height: 40px;
      background: #3083ff;
      border-radius: 2px;
      line-height: 40px;
      font-size: 2vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
      margin: 0 auto;
      margin-top: 28px;
    }
  }
  .tanluang {
    width: 100%;
    height: auto;
    .daozheng {
      font-size: 2.1vh;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      position: absolute;
      top: 16px;
    }
    .shangwei {
      font-size: 2vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      padding-left: 27px;
    }
    .buttonNo2 {
      width: 92px;
      height: 32px;
      background: #3083ff;
      border-radius: 4px;
      font-size: 2vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 32px;
      cursor: pointer;
      margin-left: auto;
      text-align: center;
    }
    .mingcheng {
      font-size: 2vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(244, 0, 0, 1);
    }
  }
}
</style>
<style>
.h5corporatePayment .el-step__head.is-success {
  color: rgba(48, 131, 255, 1);
  border-color: rgba(48, 131, 255, 1);
}
.h5corporatePayment .el-step__title.is-success {
  color: rgba(0, 0, 0, 0.65);
}
.h5corporatePayment .is-process .el-step__icon.is-text {
  background: rgba(48, 131, 255, 1);
  border: none;
  color: #fff;
}
.h5corporatePayment .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266;
}
</style>

<template>
  <div class="h5corporatePayment">
    <div class="header">
      <div class="text">实名认证服务</div>
    </div>
    <div class="right">
      <div class="renzheng">&nbsp;认证信息：{{ent_name}}({{credit_code}})</div>
      <div class="baowei">
        <div class="tabBtn">
          <el-steps :active="activeIndex" finish-status="success">
            <el-step title="查看打款细则"></el-step>
            <el-step title="查看汇入方账号"></el-step>
            <el-step title="认证成功"></el-step>
          </el-steps>
        </div>

        <div class="dibuBtn">
          <div class="heikuang2" v-if="activeIndex == 0">
            <div class="gui2">需要您向签必果对公账户汇款{{money}}元，我方确认到账后，即可完成企业实名认证</div>
            <br />
            <div class="qiye">
              · 汇款方必须为当前企业：
              <span style="color:#3083FF;">{{ent_name}}</span>
            </div>
            <br />
            <div class="qiye">
              · 汇款方必须使用
              <span style="color:#3083FF;">对公账户</span> 进行汇款
            </div>
            <br />
            <div class="qiye">
              · 汇款方向汇入方出单笔金额为
              <span style="color:#3083FF;">{{money}}</span> 元（一分钱）人民币，不能为其他金额或其他币种
            </div>
            <br />
            <div class="qiye">
              · 汇款金额作为企业实名专用，
              <span style="color:#3083FF;">不做退还</span>
            </div>
            <br />
            <div class="qiye">
              <el-checkbox v-model="checked">我已阅读并同意以上细则</el-checkbox>
            </div>
            <div :class="!checked ? 'button' : 'buttonNo'" @click="nextStep">下一步</div>
          </div>

          <div class="heikuang2" v-if="activeIndex == 1">
            <div class="gui2">薪必果平台汇入方账户信息</div>
            <br />
            <div class="qiye">公司名称：{{mainAccountName}}</div>
            <br />
            <div class="qiye">开户行：{{mainAccountBank}}</div>
            <br />
            <div class="qiye">账号：{{subAccountNo}}</div>
            <br />
            <div class="qiye">打款金额：{{money}}元</div>
            <br />
            <div class="gui2">
              <span style="color: rgba(0, 0, 0, 0.85);">请先进行线下付款，可通过【查询到账结果】确认是否到账</span>
              <span style="color: rgb(48, 131, 255);cursor: pointer;" @click="dakuan">查看打款细则</span>
            </div>

            <div class="buttonNo" @click="nextStep2">查询到账结果</div>
          </div>
          <div style="text-align: center;" v-if="activeIndex == 2">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_1827159642538496220203112944962bainzu.png"
              alt
            />
            <div class="zuzhi">组织机构认证已完成</div>
            <div class="buttonNo2" @click="complete">完成 ({{countdownHtml}})</div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
      <div class="tanluang">
        <div>
          <span class="daozheng">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_187159643631588220203143155882jieguo.png"
              alt
              style="vertical-align: middle;"
            />&nbsp;到账结果
          </span>
        </div>
        <br />
        <div class="shangwei">{{xinxi}}</div>
        <br />
        <div class="buttonNo2" @click="guanbi">我知道了</div>
      </div>
      <!-- 打款细则 -->
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible2" width="80%" :before-close="handleClose">
      <div class="tanluang">
        <div>
          <span class="daozheng">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_155715964361489912020314298991tishi-4.png"
              alt
              style="vertical-align: middle;"
            /> 打款细则
          </span>
        </div>
        <br />
        <div>
          <span class="shangwei">1. 汇款方必须为当前企业：</span>
          <span class="mingcheng">{{ent_name}}</span>
        </div>
        <br />
        <div>
          <span class="shangwei">2.汇款方必须使用：</span>
          <span class="mingcheng">对公账户</span>
          <span>进行汇款</span>
        </div>
        <br />
        <div>
          <span class="shangwei">3. 汇款方向汇入方出单笔金额为</span>
          <span class="mingcheng">{{money}}元</span>
          <span>（一分钱）人民币，不能为其他金额或其他币种</span>
        </div>
        <br />
        <div>
          <span class="shangwei">4. 汇款金额作为企业实名专用，</span>
          <span class="mingcheng">不做退还</span>
        </div>
        <br />
        <div class="buttonNo2" @click="guanbi2">我知道了</div>
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
      ent_name: "",
      credit_code: "",
      mainAccountName: "",
      mainAccountBank: "",
      money: "",
      subAccountNo: "",
      merchant_auth_id: "",
      dialogVisible: false,
      dialogVisible2: false,
      checked: false,
      activeIndex: 0,
      countdownHtml: "5s",
      xinxi: "",
      code: "",
      times: 5,
      timer: null,
      approvetype: 0,
    };
  },
  created() {
    this.ent_name = JSON.parse(localStorage.getItem("obj")).ent_name || "";
    this.money = JSON.parse(localStorage.getItem("obj")).paymentAmount || 0;
    this.credit_code = JSON.parse(localStorage.getItem("obj")).credit_code || 0;
    this.mainAccountName =
      JSON.parse(localStorage.getItem("obj")).mainAccountName || "";
    this.mainAccountBank =
      JSON.parse(localStorage.getItem("obj")).mainAccountBank || "";
    this.subAccountNo =
      JSON.parse(localStorage.getItem("obj")).subAccountNo || "";
    this.merchant_auth_id =
      JSON.parse(localStorage.getItem("obj")).id || this.$route.query.id;
    sessionStorage.setItem("main_id", this.merchant_auth_id);
    console.log("??????????", this.$route.query);
    if ( this.$route.query.approvetype == 3 ) {
       this.activeIndex = 1
     }
    this.$forceUpdate();
  },
  mounted() {},
  methods: {
    complete() {
      clearInterval(this.timer);
      if (sessionStorage.getItem("taskId")) {
        this.$router.push({ path: "/nestedContract" });
      } else {
        this.$router.push({ path: "/" });
      }
    },
    //60秒倒计时
    countdown() {
      var that = this;
      if (that.times == 0) {
        clearInterval(this.timer);
        if (sessionStorage.getItem("taskId")) {
          this.$router.push({ path: "/nestedContract" });
        } else {
          this.$router.push({ path: "/" });
        }
        return false;
      } else {
        that.countdownHtml = "" + that.times + "s";
        that.times--;
      }
    },
    nextStep() {
      if (!this.checked) {
        this.$message.error("请阅读并同意以上细则");
        return;
      }
      this.activeIndex = 1;
    },
    nextStep2() {
      post(api.organizeQuery, {
        id: this.merchant_auth_id,
      }).then(
        (d) => {
          if (d.status == 0) {
            this.xinxi = d.data.msg;
            this.code = d.data.code;
            this.dialogVisible = true;
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
    handleClose(done) {
      done();
    },
    dakuan() {
      this.dialogVisible2 = true;
    },
    guanbi() {
      this.dialogVisible = false;
      if (this.code == 3) {
        this.countdown();
        this.timer = setInterval(this.countdown, 1000);
        this.activeIndex = 2;
      }
    },
    guanbi2() {
      this.dialogVisible2 = false;
    },
  },
  components: {},
};
</script>
