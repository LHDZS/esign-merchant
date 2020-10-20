<style lang="less" scoped>
.h5enterprise2 {
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
    width: 90%;
    box-sizing: border-box;
    margin: 0 auto;
    height: auto;
    padding-top: 59px;
    .shouquan {
      font-size: 2vh;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      text-align: center;
      padding: 10px;
    }
    .baowei {
      width: 100%;
      height: 190px;
      background: #f5f9ff;
      text-align: center;
      img {
        margin-top: 10%;
      }
    }
    .title {
      font-size: 2vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      margin-top: 30px;
      margin-bottom: 20px;
    }
    .text {
      width: 100%;
      margin: 0 auto;
      text-align: left;
      font-size: 2vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 27px;
    }
    .box {
      width: 100%;
      margin: 0 auto;
      text-align: left;
      margin-top: 20px;
      span {
        font-size: 2vh;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(48, 131, 255, 1);
        cursor: pointer;
      }
    }
    .button {
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      background: rgba(48, 131, 255, 1);
      border-radius: 2px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-top: 40px;
      cursor: pointer;
      text-align: center;
    }
    .buttonNo {
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      background: rgba(48, 131, 255, 0.6);
      border-radius: 2px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      margin-top: 40px;
      cursor: pointer;
      text-align: center;
    }
  }
  .dialog-content {
    width: 100%;
    height: 500px;
    overflow-y: scroll;
  }
  .dialog-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .button {
      width: 130px;
      height: 40px;
      line-height: 40px;
      background: #3083ff;
      border-radius: 2px;
      font-size: 2vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
      text-align: center;
    }
  }
}
</style>

<style>
.h5enterprise2 .el-dialog__header {
  text-align: center;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
}
.h5enterprise2 .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266;
}
</style>

<template>
  <div class="h5enterprise2">
    <div class="header">
      <div class="text">实名认证服务</div>
    </div>
    <div class="content">
      <div class="shouquan">用户授权</div>
      <div class="baowei">
        <img
          src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_49361595921159193202028152559193人脸识别.png"
          alt
        />
      </div>
      <div class="title">为满足您的业务需求，需要您使用认证服务，服务可能采集如下信息：</div>
      <div class="text">• 操作人姓名、证件号</div>
      <div class="text">• 操作人银行卡号及绑定的手机号码</div>
      <div class="box">
        <el-checkbox v-model="checked">我已阅读并同意</el-checkbox>
        <span @click.stop="reading">《实名认证服务协议》</span>
      </div>
      <div :class="checked ? 'button' : 'buttonNo'" @click="renzheng">开始认证</div>
    </div>
    <el-dialog
      title="实名认证服务协议"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
    >
      <div class="dialog-content">
        <privacyShiMing></privacyShiMing>
      </div>
      <div class="dialog-footer">
        <div class="button" @click="tongyi()">同意协议</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
import privacyShiMing from "@/components/privacyShiMing";
export default {
  data() {
    return {
      checked: false,
      dialogVisible: false,
    };
  },
  mounted() {},
  methods: {
    tongyi() {
      this.checked = true;
      this.dialogVisible = false;
    },
    renzheng() {
      if (!this.checked) {
        this.$message.error("请阅读并同意以上细则");
        return;
      }
      post(api.info).then(
        (d) => {
          //console.log(d, 1);
          if (d.status == 0) {
            localStorage.setItem("orgYype", "个人");
            if (d.data.auth_status == 30) {
              this.$router.push({ path: "/" });
            } else if (d.data.auth_status == 20) {
              this.$router.push({ path: "/h5PersonalYiyuan" });
            } else {
              this.$router.push({ path: "/h5personalYin" });
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
    reading() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
    },
  },
  components: {
    privacyShiMing: privacyShiMing,
  },
};
</script>
