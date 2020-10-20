<style lang="less" scoped>
.enterprise {
  width: 1200px;
  padding: 12px 24px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 0 auto;
  height: 435px;
  margin-top: 30px;
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
      text-align: center;
    }
    .input {
      width: 500px;
      margin: 0 auto;
      .button {
        width: 200px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        background: rgba(110, 168, 255, 1);
        border-radius: 2px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-top: 90px;
        cursor: pointer;
        text-align: center;
      }
      .buttonNo {
        width: 200px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        background: rgba(110, 168, 255, 0.5);
        border-radius: 2px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-top: 90px;
        cursor: pointer;
        text-align: center;
      }
    }
  }
}
</style>

<template>
  <div class="enterprise">
    <div class="header">
      <div class="left" @click="fanhui">
        <i class="el-icon-arrow-left"></i>返回
      </div>
      <div class="text">创建企业</div>
    </div>
    <div class="content">
      <div class="title">请输入您要创建的企业名称，并确保与营业执照上的名称一致</div>
      <div class="input">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="企业名称" prop="ent_name">
            <el-input v-model="form.ent_name" placeholder="请输入企业名称" :disabled="inputType"></el-input>
          </el-form-item>
          <div
            :class="this.form.ent_name != ''  ? 'button' : 'buttonNo'"
            @click="submitForm('form')"
          >下一步</div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";

export default {
  data() {
    return {
      form: {
        ent_name: ""
      },
      inputType:false,
      rules: {
        ent_name: [
          { required: true, message: "请输入企业名称", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    if (sessionStorage.getItem("taskId")) {
      this.inputType = true;
      this.form.ent_name = JSON.parse(sessionStorage.getItem("data")).main_name
    }
  },
  methods: {
    fanhui() {
      this.$router.push({ path: "/" });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("orgYype", "企业");
          localStorage.setItem("enterName", this.form.ent_name);
            post(api.queryMerchantAuthByEntName, this.form).then(
            (d) => {
              console.log(d, "??????????????");
              if (d.status === 0) {
                if (JSON.stringify(d.data)!='{}') {
                  if(d.data.auth_status == 30){
                    this.$message.warning("该企业已认证，请联系管理员!");
                  }
                } else {
                  post(api.isExistMerchantAuthByName, this.form).then(
                    (d) => {
                      //console.log.log(d, "??????????????");
                      if (d.status === 0) {
                        if (d.data.isExist) {
                          this.$message.warning("已存在该企业名称");
                        } else {
                          post(api.info).then(
                            (d) => {
                              //console.log.log(d, 1);
                              if (d.status == 0) {
                                if (d.data.auth_status == 10) {
                                  this.$router.push({ path: "/enterprise2" });
                                }
                                if (d.data.auth_status != 10) {
                                  this.$router.push({ path: "/yiyuanRen" });
                                }
                              } else {
                                this.$message.error(d.msg);
                              }
                              //console.log.log(d);
                              //success callback
                            },
                            (err) => {
                              //console.log(err.data.msg);
                              //error callback
                            }
                          );
                        }
                      } else {
                        this.$message.error(d.msg);
                      }
                    },
                    (err) => {
                      //error callback
                    }
                  );
                }
              } else {
                this.$message.error(d.msg);
              }
            },
            (err) => {
              //error callback
            }
          );
          // post(api.isExistMerchantAuthByName, this.form).then(
          //   d => {
          //     //console.log(d, "??????????????");
          //     if (d.status === 0) {
          //       if (d.data.isExist) {
          //        this.$message.warning('已存在该企业名称');
          //       } else {
          //         post(api.info).then(
          //           d => {
          //             //console.log(d, 1);
          //             if (d.status == 0) {
          //               if (d.data.auth_status == 10) {
          //                 this.$router.push({ path: "/enterprise2" });
          //               }
          //               if (d.data.auth_status != 10) {
          //                 this.$router.push({ path: "/yiyuanRen" });
          //               }
          //             } else {
          //               this.$message.error(d.msg);
          //             }
          //             //console.log(d);

          //             //success callback
          //           },
          //           err => {
          //             //console.log(err.data.msg);
          //             //error callback
          //           }
          //         );
          //       }
          //     } else {
          //      this.$message.error(d.msg);
          //     }
          //   },
          //   err => {
          //     //error callback
          //   }
          // );
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {}
};
</script>
