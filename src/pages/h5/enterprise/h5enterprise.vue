<style lang="less" scoped>
.h5enterprise {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
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
    height: 29vh;
    background: #fff;
    padding-top: 12vh;
    .title {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      margin-bottom: 30px;
      text-align: center;
    }
    .input {
      width: 100%;
      margin: 0 auto;
      height: auto;
      .el-form {
        width: 90%;
        margin: 0 auto;
        height: auto;
      }
    }
  }
  .footer {
    width: 90%;
    height: auto;
    margin: 0 auto;
    .button {
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      background: rgba(110, 168, 255, 1);
      border-radius: 2px;
      font-size: 2vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      cursor: pointer;
      text-align: center;
      margin-top: 48px;
    }
    .buttonNo {
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      background: rgba(110, 168, 255, 0.5);
      border-radius: 2px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
      text-align: center;
      margin-top: 48px;
    }
  }
}
</style>

<template>
  <div class="h5enterprise">
    <div class="header">
      <div class="text">创建企业</div>
    </div>
    <div class="content">
      <div class="title">请确保企业或单位名称与营业执照上的一致</div>
      <div class="input">
        <div class="el-form">
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="企业名称" prop="ent_name">
              <el-input v-model="form.ent_name" placeholder="请输入企业名称" :disabled="inputType"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="footer">
      <div
        :class="this.form.ent_name != ''  ? 'button' : 'buttonNo'"
        @click="submitForm('form')"
      >下一步</div>
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
        ent_name: "",
      },
      inputType: false,
      rules: {
        ent_name: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    if (sessionStorage.getItem("taskId")) {
      this.inputType = true;
      this.form.ent_name = JSON.parse(sessionStorage.getItem("data")).main_name;
    }
  },
  methods: {
    fanhui() {
      this.$router.push({ path: "/" });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem("orgYype", "企业");
          localStorage.setItem("enterName", this.form.ent_name);
          post(api.queryMerchantAuthByEntName, this.form).then(
            (d) => {
              console.log(d, "??????????????");
              if (d.status === 0) {
                if (JSON.stringify(d.data) != "{}") {
                  if (d.data.auth_status == 30) {
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
                                  this.$router.push({ path: "/h5enterprise2" });
                                }
                                if (d.data.auth_status != 10) {
                                  this.$router.push({ path: "/h5EnterpriseYiyuan" });
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
