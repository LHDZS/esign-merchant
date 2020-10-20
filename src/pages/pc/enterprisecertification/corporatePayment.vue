<style lang="less" scoped>
.corporatePayment {
  width: 1200px;
  height: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
  .left {
    float: left;
    width: 20%;
    height: 621px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.12);
    padding: 10px 0px;
    box-sizing: border-box;
    .list {
      width: 100%;
      height: 40px;
      background: rgba(48, 131, 255, 0.15);
      border-left: 4px solid rgba(48, 131, 255, 1);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(48, 131, 255, 1);
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
    height: auto;
    border-radius: 2px;
    .duigong {
      background: rgba(255, 255, 255, 1);
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
      .renzheng {
        width: 100%;
        font-size: 13px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        padding: 20px 32px;
        box-sizing: border-box;
        text-align: left;
      }
    }

    .baowei {
      width: 100%;
      height: 494px;
      background: #ffffff;
      border-radius: 2px;
      box-sizing: border-box;
      text-align: left;
      margin-top: 9px;
      padding: 30px;
      .heikuang {
        height: 106px;
        background: rgba(250, 250, 250, 1);
        border-radius: 2px;
        padding: 15px;
        .gui {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #000000;
        }
        .button {
          width: 130px;
          height: 32px;
          border-radius: 2px;
          line-height: 32px;
          background: #3083ff;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          cursor: pointer;
          margin-left: 171px;
          margin-top: -11px;
        }
      }
      .waiguo {
        .button {
          width: 324px;
          height: 40px;
          background: #6ea8ff;
          border-radius: 2px;
          line-height: 40px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          cursor: pointer;
          margin: 40px auto;
        }
        .buttonNo {
             width: 324px;
            height: 40px;
            background: #3083ff;
            border-radius: 2px;
            line-height: 40px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            text-align: center;
            cursor: pointer;
            margin: 40px auto;
        }
        .heikuang2 {
            height: 222px;
            background: #fafafa;
            border-radius: 2px;
            padding: 15px;
            margin-top: 30px;
          .gui2 {
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
           
          }
        }
      }
      .zuzhi{
            font-size:25px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(0,0,0,1);
      }
      .buttonNo2{
            width: 324px;
            height: 40px;
            background: #3083ff;
            border-radius: 2px;
            line-height: 40px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            cursor: pointer;
            margin: 40px auto;
      }
    }
  }
  .tanluang{
    .daozheng{
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(0,0,0,0.85);
        position: absolute;
        top: 16px;
        }
    .shangwei{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
            padding-left: 27px;
        }
     .buttonNo2{
            width: 92px;
            height: 32px;
            background: #3083ff;
            border-radius: 4px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 32px;
            cursor: pointer;
            margin-left: auto;
            text-align: center;
      }
      .mingcheng{
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(244,0,0,1);
      }

  }
}
</style>
<style>
.corporatePayment .el-step__head.is-success {
  color: rgba(48, 131, 255, 1);
  border-color: rgba(48, 131, 255, 1);
}
.corporatePayment .el-step__title.is-success {
  color: rgba(0, 0, 0, 0.65);
}
.corporatePayment .is-process .el-step__icon.is-text {
  background: rgba(48, 131, 255, 1);
  border: none;
  color: #fff;
}
.corporatePayment  .el-checkbox__input.is-checked + .el-checkbox__label{
  color: #606266;
}
</style>

<template>
  <div class="corporatePayment">
    <div class="left">
      <div class="list">
        <i class="iconfont icon-duigongdakuan"></i>对公打款
      </div>
    </div>
    <div class="right">
      <div class="duigong">
        <div class="title">对公打款</div>
        <div class="renzheng">认证信息：{{ent_name}}({{credit_code}})</div>
      </div>
      <div class="baowei">
        <div v-if="payMentShow">
          <div class="heikuang">
            <div class="gui">贵司向平台方打款</div>
            <br />
            <div>
              <i class="iconfont icon-dakuan" style="color:#3083FF;"></i>&nbsp;&nbsp;贵司向平台方打款
            </div>
            <br />
            <div style="display:flex;">
              <div>
                <i class="iconfont icon-wancheng" style="color:#3083FF;"></i>&nbsp;&nbsp;需要你向我方账户打款{{money}}，我方确定收到款项后，完成实名认证
              </div>
              <div class="button" @click="dakuanPost">立即打款</div>
            </div>
          </div>
        </div>
        <div class="waiguo" v-if="!payMentShow">
          <el-steps :active="activeIndex" finish-status="success">
            <el-step title="查看打款细则"></el-step>
            <el-step title="查看汇入方账号"></el-step>
            <el-step title="认证成功"></el-step>
          </el-steps>
          <div v-if="activeIndex == 0">
              <div class="heikuang2">
            <div class="gui2">需要您向签必果对公账户汇款{{money}}元，我方确认到账后，即可完成企业实名认证</div>
            <br />
            <div>· 汇款方必须为当前企业：{{ent_name}}</div>
            <br />
            <div>· 汇款方必须使用对公账户进行汇款</div>
            <br />
            <div>· 汇款方向汇入方出单笔金额为{{money}}元（一分钱）人民币，不能为其他金额或其他币种</div>
            <br />
            <div>· 汇款金额作为企业实名专用，不做退还</div>
            <br />
            <div>
              <el-checkbox v-model="checked">我已阅读并同意以上细则</el-checkbox>
            </div>
          </div>
          <div :class="!checked ? 'button' : 'buttonNo'" @click="nextStep">下一步</div>
        </div>
            <div v-if="activeIndex == 1">
              <div class="heikuang2">
            <div class="gui2">薪必果平台汇入方账户信息</div>
            <br />
            <div>公司名称：{{mainAccountName}}</div>
            <br />
            <div>开户行：{{mainAccountBank}}</div>
            <br />
            <div>账号：{{subAccountNo}}</div>
            <br />
            <div>打款金额：{{money}}元</div>
            <br />
             <div class="gui2"><span style="color: rgba(0, 0, 0, 0.85);">请先进行线下付款，可通过【查询到账结果】确认是否到账 </span> <span style="color: rgb(48, 131, 255);cursor: pointer;" @click="dakuan">查看打款细则</span></div>
          </div>
          <div class="buttonNo" @click="nextStep2">查询到账结果</div>
        </div>
         <div v-if="activeIndex == 2">
             <div style="text-align: center;">
                <img src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_1827159642538496220203112944962bainzu.png" alt="">
                  <div class="zuzhi">组织机构认证已完成</div>
                    <div class="buttonNo2" @click="complete">完成 ({{countdownHtml}})</div>
              </div>
        </div>
        </div>
      </div>
    </div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="38%"
        :before-close="handleClose">
        <div class="tanluang">
            <div>
            <span class="daozheng"><img src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_187159643631588220203143155882jieguo.png" alt="" style="vertical-align: middle;">&nbsp;到账结果</span>
        </div>
        <br>
        <div class="shangwei">{{xinxi}}</div>
        <br>
            <div class="buttonNo2" @click="guanbi">我知道了</div>
        </div>
     <!-- 打款细则 -->
       </el-dialog>
        <el-dialog
        :visible.sync="dialogVisible2"
        width="38%"
        :before-close="handleClose">
        <div class="tanluang">
            <div>
            <span class="daozheng"><img src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_155715964361489912020314298991tishi-4.png" alt="" style="vertical-align: middle;">  打款细则</span>
        </div>
        <br>
        <div style="padding-left: 20px;"> <span class="shangwei">1. 汇款方必须为当前企业：</span> <span class="mingcheng">{{ent_name}}</span> </div>
          <br>
        <div style="padding-left: 20px;"> <span class="shangwei">2.汇款方必须使用：</span> <span class="mingcheng">对公账户</span> <span>进行汇款</span></div>
         <br>
        <div style="padding-left: 20px;"> <span class="shangwei">3. 汇款方向汇入方出单笔金额为</span> <span class="mingcheng">{{money}}元</span> <span>（一分钱）人民币，不能为其他金额或其他币种</span></div>
           <br>
        <div style="padding-left: 20px;"> <span class="shangwei">4. 汇款金额作为企业实名专用，</span> <span class="mingcheng">不做退还</span></div>
        <br>
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
      credit_code:"",
      mainAccountName:"",
      mainAccountBank:"",
       money:"",
      subAccountNo:"",
      merchant_auth_id:"",
      dialogVisible: false,
      dialogVisible2:false,
      payMentShow: true,
      checked: false,
      activeIndex: 0,
      countdownHtml: "5s",
      xinxi:"",
      code:"",
      times:5,
      timer: null,
      approvetype: 0
    };
  },
  created() {
     this.ent_name = JSON.parse(localStorage.getItem('obj')).ent_name || "";
     this.money = JSON.parse(localStorage.getItem('obj')).paymentAmount || 0;
     this.credit_code = JSON.parse(localStorage.getItem('obj')).credit_code || 0;
     this.mainAccountName = JSON.parse(localStorage.getItem('obj')).mainAccountName || "";
     this.mainAccountBank = JSON.parse(localStorage.getItem('obj')).mainAccountBank || "";
     this.subAccountNo = JSON.parse(localStorage.getItem('obj')).subAccountNo || "";
     this.merchant_auth_id = JSON.parse(localStorage.getItem('obj')).id || this.$route.query.id;     
     sessionStorage.setItem("main_id", this.merchant_auth_id);
     console.log('??????????',this.$route.query)
     if ( this.$route.query.id ) {
       this.payMentShow = false;
       this.activeIndex = 1
     }
    this.$forceUpdate();
  },
  mounted() {

  },
  methods: {
    complete() {
      clearInterval(this.timer);
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
    dakuanPost(){
    this.payMentShow = false;
    },
    nextStep() {
      
      if(!this.checked){
        this.$message.error("请阅读并同意以上细则");
        return
      }
       this.activeIndex = 1;
     
    },
    nextStep2(){
        post(api.organizeQuery, {
        id: this.merchant_auth_id
      }).then(
        d => {
          if (d.status == 0) {
            this.xinxi = d.data.msg
            this.code = d.data.code
             this.dialogVisible = true;
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
       handleClose(done) {
          done();
      },
      dakuan(){
      this.dialogVisible2 = true;
      },
      guanbi(){
           this.dialogVisible = false;
           if(this.code == 3){
             this.countdown();
             this.timer = setInterval(this.countdown, 1000);
             this.activeIndex = 2;
           }
          
      },
      guanbi2(){
           this.dialogVisible2 = false;
      }
  },
  components: {}
};
</script>
