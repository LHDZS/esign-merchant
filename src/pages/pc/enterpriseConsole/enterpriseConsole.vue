<template>
  <div class="enterpriseConsole">
    <div class="toubu">
      <div class="juzhong">
        <div class="baowei" @click="fanhuiBtn">
          <img
            class="logo"
            src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_87715967013558162020616915816qianbi.png"
            alt
          />
          <div class="title">签必果</div>
          <div class="main_left">
            <span class="name">{{merchantName}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="personal">
      <div class="left">
        <div class="hetong">
          <i class="iconfont icon-wodehetong"></i>&nbsp;&nbsp;企业成员
        </div>
      </div>
      <div class="right">
        <!-- 状态 -->
        <div class="diyiceng">
          <div class="title">企业成员</div>
          <div class="add" @click="addition">添加成员</div>
        </div>
        <!-- 数据-->
        <div class="diyiShuceng">
          <div class="inquire">
            <div class="label">
              <span>姓名：</span>
              <div>
                <el-input v-model="user_name" placeholder="请输入姓名"></el-input>
              </div>
            </div>
            <div class="label">
              <span>账号：</span>
              <div>
                <el-input v-model="mobile" placeholder="请输入账号"></el-input>
              </div>
            </div>
            <div class="label">
              <span>工号：</span>
              <div>
                <el-input v-model="ent_no" placeholder="请输入工号"></el-input>
              </div>
            </div>
            <div class="label" style="margin: 0px">
              <el-button type="primary" @click="hetongPost()" size="mini">查询</el-button>
              <el-button size="mini" @click="reset">重置</el-button>
            </div>
          </div>
          <div class="table">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <!-- <el-table-column label="序号" width="200">
                <template slot-scope="scope">{{ scope.row.id }}</template>
              </el-table-column> -->
               <el-table-column type="index" width="50" label="序号"></el-table-column>
              <el-table-column prop="user_name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="auth_mobile" label="账号" show-overflow-tooltip></el-table-column>
              <el-table-column prop="ent_no" label="工号" show-overflow-tooltip></el-table-column>
              <el-table-column prop="department" label="所属部门" show-overflow-tooltip></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <span class="itemSpan" @click="compile(scope.row)">编辑</span>
                  <span class="itemSpan" @click="remove(scope.row)" v-if="scope.row.mgr == 0">删除</span>
                </template>
              </el-table-column>
            </el-table>
            <pagination
              :total="total"
              @handleSizeChange="handleSizeChange"
              @handleCurrentChange="handleCurrentChange"
            ></pagination>
          </div>
        </div>
        <el-dialog
          :title="dialogTiele"
          :visible.sync="dialogVisible"
          width="414px"
          :before-close="handleClose"
        >
          <el-form ref="form" :model="form" :rules="rules" label-width="85px">
            <el-form-item label="姓名：" prop="user_name">
              <el-input v-model="form.user_name" :disabled="disabled"></el-input>
            </el-form-item>
            <el-form-item label="账号：" prop="mobile">
              <el-input v-model="form.mobile" :disabled="disabled"></el-input>
            </el-form-item>
            <el-form-item label="工号：">
              <el-input v-model="form.ent_no"></el-input>
            </el-form-item>
            <el-form-item label="所属部门：">
              <el-input v-model="form.department"></el-input>
            </el-form-item>
            <div style="text-align: right;">
              <el-button size="mini" @click="resetForm('form')">&nbsp;&nbsp;取 消&nbsp;&nbsp;</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="submitForm('form')"
              >&nbsp;&nbsp;确 定&nbsp;&nbsp;</el-button>
            </div>
          </el-form>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
import pagination from "@/components/pagination";

export default {
  data() {
    return {
      tableData: [],
      //总条数
      total: null,
      pageSize: 10,
      user_name: "",
      ent_no: "",
      mobile: "",
      form: {
        id: "",
        user_name: "",
        mobile: "",
        ent_no: "",
        department: "",
        merchantId: "12220655442000125",
        companyname:""
      },
      rules: {
        user_name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        mobile: [{ required: true, message: "请输入账号", trigger: "blur" }],
      },
      dialogVisible: false,
      dialogTiele: "添加成员",
      merchantId: "12220655442000125",
      merchantName: "",
      disabled: false,
    };
  },
  created() {
    let data = JSON.parse(localStorage.getItem("kongzhiData"));
    this.form.merchantId = data.merchant_id;
    this.form.companyname = data.ent_name;
    this.merchantName = data.ent_name;
    this.merchantId = data.merchant_id;
  },
  mounted() {
    this.hetongPost();
  },
  methods: {
    fanhuiBtn() {
      this.$router.push({ path: "/" });
    },
    // 重置
    reset() {
      this.user_name = "";
      this.ent_no = "";
      this.mobile = "";
      this.hetongPost();
    },
    // 添加
    addition() {
      this.form["mgr"] = 0;
      this.form.id = "";
      this.form.user_name = "";
      this.form.mobile = "";
      this.form.ent_no = "";
      this.form.department = "";
      this.disabled = false;
      this.dialogVisible = true;
      this.dialogTiele = "添加成员";
    },
    // 编辑
    compile(row) {
      console.log(row);
      this.disabled = true;
      // this.rules[user_name].required
      this.form.id = row.id;
      this.form.user_name = row.user_name;
      this.form.mobile = row.auth_mobile;
      this.form.ent_no = row.ent_no;
      this.form.department = row.department;
      this.dialogVisible = true;
      this.dialogTiele = "编辑成员";
    },
    // 删除
    remove(row) {
      this.$confirm("确定将该成员从企业中删除吗？", "删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          post(api.removeMembersById, {
            id: row.id,
          }).then(
            (d) => {
              if (d.status === 0) {
                this.$message.success("删除成功");
                this.hetongPost();
              } else {
                this.$message.warning(d.msg);
              }
            },
            (err) => {
              console.log(err);
            }
          );
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
    handleClose(done) {
      done();
    },
    // 查询
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let url = "";
          if (this.form.id) {
            url = api.updateMembersById;
          } else {
            url = api.saveMember;
          }
          post(url, this.form).then(
            (d) => {
              //console.log.(d, "ddd");
              if (d.status === 0) {
                  if (this.form.id) {
                  this.$message.success('编辑成功');
                  } else {
                      this.$message.success('添加成功');
                  }
                this.dialogVisible = false;
                this.hetongPost();
              } else {
                this.$message.warning(d.msg);
              }
            },
            (err) => {
              //error callback
            }
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false;
    },
    handleSelectionChange() {},
    handleSizeChange(val) {
      ////console.log.(`每页 ${val} 条aaaaa`);
      this.pageSize = val;
      this.hetongPost();
    },
    handleCurrentChange(val) {
      ////console.log.(`当前页: ${val}aaaaaaaaaaaaaaaa`);
      this.hetongPost(val);
    },
    hetongPost(size) {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      post(api.queryMembersPage, {
        currentPage: size || 1,
        pageSize: this.pageSize,
        merchantId: this.merchantId,
        user_name: this.user_name,
        ent_no: this.ent_no,
        mobile: this.mobile,
      }).then(
        (d) => {
          ////console.log.(d, "合同数据");
          loading.close();
          if (d.status === 0) {
            this.tableData = d.data.rows;
            this.total = d.data.count;
          } else {
            ////console.log.(d.msg)
          }
        },
        (err) => {
          //error callback
        }
      );
    },
  },
  components: {
    pagination: pagination,
  },
};
</script>

<style lang="less" scoped>
.enterpriseConsole::-webkit-scrollbar {
  width: 0;
}
.enterpriseConsole {
  width: 100%;
  height: 100%;
  padding-top: 90px;
  box-sizing: border-box;
  background: #f2f2f2;
  // margin: 0 auto;
  .toubu {
    width: 100%;
    background: #002140;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
    top: 0;
    .juzhong {
      max-width: 1200px;
      margin: 0 auto;
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .right {
        width: 90px;
        height: 30px;
        background: #3083ff;
        border-radius: 2px;
        float: right;
        margin-top: 16px;
        .faqiIcon {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 30px;
          cursor: pointer;
          text-align: center;
          display: block;
        }
      }
      .baowei {
        // width: 300px;
        height: 60px;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .main_left {
          height: 60px;
          float: left;
          display: flex;
          align-items: center;
          justify-content: center;
          .name {
            height: 22px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #fff;
            line-height: 22px;
            border-left: 1px solid #d9d9d9;
            padding-left: 14px;
            margin-left: 14px;
          }
        }
        .logo {
          width: 31px;
          height: 34px;
        }
        .title {
          float: left;
          margin-left: 8px;
          line-height: 60px;
          text-align: center;
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #fff;
          span {
            font-size: 16px;
          }
        }
      }
    }
    .baoguo {
      height: 42px;
      width: 100%;
      line-height: 50px;
      background-color: #e0e1e5;
      .xiala {
        width: 1200px;
        margin: 0 auto;
      }
    }
  }
  .personal {
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
    padding: 3px;
    box-sizing: border-box;
    .left {
      float: left;
      width: 20%;
      height: 803px;
      background: #ffffff;
      box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.12);
      padding: 10px 0px;
      box-sizing: border-box;
      .toubui {
        width: 100%;
        height: 70px;
        border-bottom: 3px solid #ececec;
        line-height: 65px;
        ::-webkit-input-placeholder {
          /* WebKit browsers */
          color: #fff;
        }

        ::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #fff;
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: #fff;
        }
      }
      .hetong {
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
        cursor: pointer;
        padding-left: 15px;
      }
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
        cursor: pointer;
        padding-left: 55px;
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
        padding-left: 55px;
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
      // height: 500px;
      border-radius: 2px;
      .diyiceng {
        width: 100%;
        height: 64px;
        background: rgba(255, 255, 255, 1);
        border-radius: 2px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04),
          0 2px 4px 0 rgba(0, 0, 0, 0.06);
        .title {
          float: left;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          padding: 22px 32px;
          box-sizing: border-box;
          text-align: left;
        }
        .add {
          float: right;
          width: 130px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          background: #3083ff;
          border-radius: 2px;
          cursor: pointer;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          margin: 16px 32px;
        }
      }
      .diyiShuceng {
        width: 100%;
        background: #ffffff;
        border-radius: 2px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04),
          0 2px 4px 0 rgba(0, 0, 0, 0.06);
        margin-top: 10px;
        height: 730px;
        overflow: hidden;
        .inquire {
          width: 100%;
          overflow: hidden;
          padding: 14px 24px;
          padding-top: 32px;
          box-sizing: border-box;
          .label {
            float: left;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.85);
            margin-right: 24px;
            div {
              display: inline-block;
              width: 180px;
            }
          }
        }
        .tuwezi {
          width: 374px;
          height: 242px;
          margin: 0 auto;
          padding-top: 60px;
          img {
            width: 100%;
            height: 100%;
          }
          .hetong {
            text-align: center;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
          }
        }
        .table {
          width: 95%;
          margin: 0 auto;
          .itemSpan {
            cursor: pointer;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #3083ff;
          }
        }

        /* 谷歌浏览器隐藏滚动条 */
        .dialog-form::-webkit-scrollbar {
          display: none;
        }
        .dialog-form {
          width: 100%;
          overflow-y: auto;
          height: 570px;
          .fanwei {
            width: 100%;
            .list:hover {
              background: rgba(247, 248, 250, 1);
            }
            .list {
              margin: 0 auto;
              padding-top: 8px;
              width: 100%;
              border-bottom: 1px solid #e6e6e6;
              height: 120px;
              .baowei {
                width: 90%;
                margin: 0 auto;
                padding-bottom: 30px;
                .wenzi {
                  cursor: pointer;
                }
                .wenzi:hover {
                  color: rgba(48, 131, 255, 1);
                }
                input[type="checkbox"] {
                  width: 14px;
                  height: 14px;
                  display: inline-block;
                  text-align: center;
                  position: relative;
                }
                input[type="checkbox"]::before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  background: #fff;
                  width: 100%;
                  height: 100%;
                  border: 1px solid #d9d9d9;
                }
                input[type="checkbox"]:checked::before {
                  content: "\2713";
                  background-color: #409eff;
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  border: 1px solid #409eff;
                  color: #fff;
                  font-size: 12px;
                  font-weight: bold;
                }

                .faqi {
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: rgba(103, 103, 103, 0.6);
                  padding-left: 23px;
                  padding-top: 10px;
                  cursor: pointer;
                  // .zuoyou {
                  //   float: right;
                  // }
                  .leftfaqi {
                    padding-top: 5px;
                    width: 81%;
                    float: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  .rightfaqi {
                    float: right;
                  }
                }
                .label {
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #4b4b4b;
                  padding-left: 36px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

<style>
.enterpriseConsole .left .el-select {
  display: block;
  margin: 0 auto;
  width: 182px;
  height: 30px;
}
.enterpriseConsole .el-input__inner {
  height: 32px !important;
  line-height: 32px !important;
  border-radius: 4px !important;
}
.enterpriseConsole .el-button--mini {
  height: 32px !important;
  border-radius: 4px !important;
}
.enterpriseConsole .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266;
}
.enterpriseConsole .titleshu .el-checkbox__label {
  color: rgba(155, 155, 155, 1);
  font-size: 12px;
}
.enterpriseConsole .dialog-form .el-checkbox__label:hover {
  color: rgba(48, 131, 255, 1);
}
.enterpriseConsole .el-checkbox-group {
  display: inline-block;
}
.enterpriseConsole .bottom-pag {
  text-align: right;
}
.enterpriseConsole .el-select .el-input .el-select__caret {
  color: #fff;
}
.el-tooltip__popper[x-placement^="top"].is-dark {
  background: rgba(255, 255, 255, 1) !important;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15) !important;
  border: 1px solid rgba(235, 238, 245, 1) !important;
  font-size: 14px !important;
  font-family: PingFangSC-Regular, PingFang SC !important;
  font-weight: 400 !important;
  color: rgba(100, 102, 106, 1) !important;
  line-height: 20px !important;
}
.el-tooltip__popper[x-placement^="top"] .popper__arrow {
  border-right-color: rgba(0, 0, 0, 0.15) !important;
}
.el-tooltip__popper[x-placement^="top"] .popper__arrow:after {
  border-right-color: rgba(0, 0, 0, 0.15) !important;
}
</style>
