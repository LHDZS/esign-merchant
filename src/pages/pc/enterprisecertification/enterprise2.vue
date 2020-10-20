<style lang="less" scoped>
.enterprise2 {
    width: 1200px;
    padding: 12px 24px;
    box-sizing: border-box;
    background-color: #fff;
    margin: 0 auto;
     height:587px;
    margin-top: 30px;
    text-align: center;
    .header {
        width: 100%;
        height: 57px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-bottom: 1px solid rgba(217, 217, 217, 1);
        .left {
            position: absolute;
            left: 0;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(0, 0, 0, 1);
        }
    }
    .content {
        width: 100%;
        padding-top: 30px;
        box-sizing: border-box;
        .title {
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(0,0,0,1);
            margin-top: 30px;
            margin-bottom: 20px;
        }
        .text {
            width: 434px;
            margin: 0 auto;
            text-align: left;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(0,0,0,1);
            line-height: 27px;
        }
        .box {
            width: 434px;
            margin: 0 auto;
            text-align: left;
            margin-top: 20px;
            span {
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(48,131,255,1);
                cursor: pointer;
            }
        }
        .button {
            width:340px;
            height:40px;
            line-height: 40px;
            margin: 0 auto;
            background:rgba(48,131,255,1);
            border-radius:2px;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            margin-top: 40px;
            cursor: pointer;
        }
          .buttonNo {
             width:340px;
            height:40px;
            line-height: 40px;
            margin: 0 auto;
            background:rgba(48,131,255,0.6);
            border-radius:2px;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            margin-top: 40px;
            cursor: pointer;
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
        margin-top: 30px;
        .button {
            width:130px;
            height:40px;
            line-height: 40px;
            background:rgba(48,131,255,1);
            border-radius:2px;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            cursor: pointer;
        }
    }
}
</style>

<style>
.enterprise2 .el-dialog__header {
    text-align: center;
    font-size:18px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(0,0,0,1);
}
.enterprise2  .el-checkbox__input.is-checked + .el-checkbox__label{
  color: #606266;
}
</style>

<template>
  <div class="enterprise2">
        <div class="header">
            <div class="left">创建企业</div>
        </div>
        <div class="content">
            <img src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_49361595921159193202028152559193人脸识别.png" alt="">
            <div class="title">为满足您的业务需求，需要您使用认证服务，服务可能采集如下信息：</div>
            <div class="text">• 组织机构名称及统一社会信用代码</div>
            <div class="text">• 法定代表人姓名及证件号</div>
            <div class="text">• 经办人姓名、证件号、银行卡及手机号码</div>
            <div class="box">
                <el-checkbox v-model="checked">我已阅读并同意</el-checkbox><span @click.stop="reading">《实名认证服务协议》</span>
            </div>
            <div :class="checked ? 'button' : 'buttonNo'" @click="renzheng">开始认证</div>
        </div>
        <el-dialog
            title="实名认证服务协议"
            :visible.sync="dialogVisible"
            width="80%"
            :before-close="handleClose">
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
import privacyShiMing from "@/components/privacyShiMing"
export default {
  data() {
    return {
        checked:false,
        dialogVisible: false
    }
  },
  mounted() {
      
  },
  methods: {
    tongyi(){
      this.checked = true
      this.dialogVisible = false
    },
    renzheng(){
     if(!this.checked){
        this.$message.error("请阅读并同意以上细则");
        return
      }
      post(api.info).then(
        d => {
          //console.log(d, 1);
          if (d.status == 0) {
              localStorage.setItem("orgYype", "企业");
            if(d.data.auth_status == 30){
              this.$router.push({ path: "/authentication", query:{type:'2'}});
            }else if(d.data.auth_status == 20){
              this.$router.push({ path: "/yiyuanRen" });
            }else {
              this.$router.push({ path: "/enterpriseYin" });
            }
           
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
     
      },
      reading() {
        this.dialogVisible = true
      },
      handleClose(done) {
      done();
    },
  },
   components: {
    privacyShiMing:privacyShiMing,
  },
}
</script>
