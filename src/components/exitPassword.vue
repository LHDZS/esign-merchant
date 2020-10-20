<template>
  <div class="exitPassword">
    <!-- 账户密码 -->
    <el-dialog
      title="修改账户密码"
      width="610px"
      :visible.sync="dialogInvoice"
      :before-close="handleClose"
    >
      <div style="width:500px;">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="140px"
          class="demo-ruleForm"
        >
          <el-form-item label="当前密码:" prop="oldPassword">
            <el-input placeholder="请输入当前密码" v-model="ruleForm.oldPassword" show-password></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input type="password" placeholder="6-20个字符" v-model="ruleForm.newPassword" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="newPasswordConfirm">
            <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.newPasswordConfirm" show-password></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";

export default {
  name: "exitPassword",
  data() {
    // var validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请输入密码"));
    //   } else {
    //     if (this.ruleForm.newPasswordConfirm !== "") {
    //       this.$refs.ruleForm.validateField("newPasswordConfirm");
    //     }
    //     callback();
    //   }
    // };
    var validatePass = (rule, value, callback) => {
      var type = /^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/i;
      if (value === "") {
        callback(new Error("请输入密码"));
      }else if (!type.test(value)) {
        callback(new Error("请按规则输入密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: ""
      },
      rules: {
        oldPassword: [
          { required: true, message: "当前密码不能为空", trigger: "blur" }
        ],
        newPassword: [{ validator: validatePass, trigger: "blur", required: true }],
        newPasswordConfirm: [
          { validator: validatePass2, trigger: "blur", required: true }
        ]
      }
    };
  },
  props: {
    dialogInvoice: Boolean
  },
  mounted() {},
  methods: {
    handleClose(done) {
      this.$emit("handleClose", false);
      done();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            post(api.resetPassword, this.ruleForm).then(
            d => {
              if (d.status === 0) {
                this.$message.success("修改成功,即将调回登录页面");
                sessionStorage.removeItem("loginPhone");
                sessionStorage.removeItem("esignmerchantsid");
                this.$router.push({ path: "/login" });
              }else{
                this.$message.error(d.msg);
              }
            },
            err => {
              //error callback
            }
          );
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$emit("handleClose", false);
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.exitPassword {
  width: 100%;
  height: 100%;
}
</style>

<style>
</style>