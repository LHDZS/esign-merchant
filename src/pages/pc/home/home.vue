<style lang="less" scoped>
.home::-webkit-scrollbar {
  width: 0;
}
.home {
  width: 1200px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  .content {
    width: 100%;
    min-height: calc(100% - 20px);
    box-sizing: border-box;
    .baokuai {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      flex-wrap: wrap;
      -webkit-box-align: center;
      align-items: center;
      padding-bottom: 20px;
      .kuai:hover {
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04),
          0 2px 4px 0 rgba(0, 0, 0, 0.06);
      }
      .kuai {
        width: 590px;
        height: 260px;
        background: #ffffff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.11);
        border-radius: 2px;
        margin-top: 20px;
        .yinzhang {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
        }
        .yinzhang2 {
          color: rgba(0, 0, 0, 0.55);
          float: right;
          cursor: pointer;
          font-size: 20px;
        }
        .yinzhang3 {
          color: rgba(0, 0, 0, 0.55);
          float: right;
          cursor: pointer;
          font-size: 14px;
        }
        .gangge {
          padding: 20px;
          cursor: pointer;
          .ziduan {
            margin: 0 auto;
            width: 122px;
            height: 112px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .dianji {
            width: 360px;
            height: 120px;
            margin: 0 auto;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .dianji2 {
            width: 128px;
            height: 72px;
            margin: 0 auto;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .wode {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
            text-align: center;
            padding: 20px;
          }
          .renzheng {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(48, 131, 255, 1);
            text-align: center;
            cursor: pointer;
          }
        }
        .zhongxin {
          display: flex;
          width: 80%;
          margin: 0 auto;
          justify-content: space-between;
          padding: 38px;
          .zhogntu {
            width: 71px;
            height: 50px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .shuju {
            font-size: 26px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
            text-align: center;
          }
          .wenzi {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.85);
            text-align: center;
          }
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
      width: 541px;
      height: 40px;
      background: rgba(230, 247, 255, 1);
      border-radius: 4px;
      .chaungjian {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        display: block;
        padding-top: 10px;
        padding-left: 10px;
        img {
          vertical-align: middle;
        }
      }
    }
  }
  .qianyue {
    text-align: center;
    width: 100%;
    height: 100%;
    .bottom-table {
      height: 197px;
      overflow: auto;
      padding-top: 30px;
      font-size: 20px;
    }
    .gongxi {
      text-align: center;
      display: block;
      font-size: 35px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #595959;
    }
    .dibu {
      width: 100%;
      text-align: right;
    }
  }
}
</style>

<template>
  <div class="home">
    <div class="content">
      <div class="baokuai">
        <div class="kuai">
          <div style="padding: 10px;">
            <span class="yinzhang">我的印章</span>
          </div>
          <div class="gangge" @click="yinzhang('1')" v-if="yinzhangShow">
            <div class="dianji">
              <img
                src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_405715965233910492020414431149yinzhang.png"
                alt
              />
            </div>
            <div class="wode">创建我的印章</div>
          </div>
          <div class="gangge" v-if="!yinzhangShow">
            <div class="ziduan">
              <img :src="sealUrl" alt />
            </div>
            <div class="wode">您已完成实名认证，可进行电子印章签署。</div>
          </div>
        </div>
        <div class="kuai">
          <div style="padding: 10px;">
            <span class="yinzhang">发起签署</span>
          </div>
          <div class="gangge" @click="yinzhang('2')">
            <div class="dianji">
              <img
                src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_3927159652355773820204144557738faqi.png"
                alt
              />
            </div>
            <div class="wode">直接发起</div>
          </div>
        </div>
        <div class="kuai">
          <div style="padding: 10px;">
            <span class="yinzhang">个人中心</span>
          </div>
          <div class="zhongxin">
            <div>
              <div class="zhogntu">
                <img
                  src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_129715965238310382020414503138daiwocaozuo.png"
                  alt
                />
              </div>
              <div class="shuju">{{aftersigned}}</div>
              <div class="wenzi">待我操作</div>
            </div>
            <div>
              <div class="zhogntu">
                <img
                  src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_4877159652400967720204145329677taren.png"
                  alt
                />
              </div>
              <div class="shuju">{{otherssigned}}</div>
              <div class="wenzi">待他人操作</div>
            </div>
            <div>
              <div class="zhogntu">
                <img
                  src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_423715965241606302020414560630wancheng.png"
                  alt
                />
              </div>
              <div class="shuju">{{completed}}</div>
              <div class="wenzi">已完成</div>
            </div>
          </div>
        </div>
        <div class="kuai" v-for="(item,key) in shujuData" :key="key">
          <div style="padding: 10px;">
            <span class="yinzhang">{{item.ent_name}}</span>
            <span
              class="yinzhang3"
              @click="kongzhiBtn(item)"
              v-if="item.ucUserMerchant && item.ucUserMerchant.mgr == 1 "
            >企业控制台</span>
          </div>
          <div class="zhongxin">
            <div>
              <div class="zhogntu">
                <img
                  src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_129715965238310382020414503138daiwocaozuo.png"
                  alt
                />
              </div>
              <div class="shuju">{{item.aftersigned}}</div>
              <div class="wenzi">待我操作</div>
            </div>
            <div>
              <div class="zhogntu">
                <img
                  src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_4877159652400967720204145329677taren.png"
                  alt
                />
              </div>
              <div class="shuju">{{item.otherssigned}}</div>
              <div class="wenzi">待他人操作</div>
            </div>
            <div>
              <div class="zhogntu">
                <img
                  src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_423715965241606302020414560630wancheng.png"
                  alt
                />
              </div>
              <div class="shuju">{{item.completed}}</div>
              <div class="wenzi">已完成</div>
            </div>
          </div>
        </div>
        <div class="kuai" v-for="(item,index) in shujuWeiData" :key="'info2-'+index">
          <div style="padding: 10px;">
            <span class="yinzhang">{{item.ent_name}}</span>
            <span class="yinzhang2" @click="shanchu(item.id)">x</span>
          </div>
          <div class="gangge">
            <div class="dianji2">
              <img
                src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_11571597112476901202011102116901renzheng.png"
                alt
              />
            </div>
            <div class="wode">该企业暂未认证</div>
            <div class="renzheng" @click="lijiRen(item)">立即认证</div>
          </div>
        </div>
        <div class="kuai">
          <div style="padding: 10px;">
            <span class="yinzhang">企业中心</span>
          </div>
          <div class="gangge" @click="qiye">
            <div class="dianji">
              <img
                src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_357715965236780622020414475862qiye.png"
                alt
              />
            </div>
            <div class="wode">创建企业</div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="522px" :before-close="handleClose">
      <div class="tanluang">
        <div>
          <span class="daozheng">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_63715965281146852020416154685jinggao.png"
              alt
              style="vertical-align: middle;"
            />&nbsp;提示
          </span>
        </div>
        <br />
        <div class="shangwei">您尚未完成实名认证，请完成实名后再操作</div>
        <br />
        <div style="width: 100%; text-align: right;margin-top: 15px;">
          <el-button @click="quxiao">&nbsp;&nbsp;取消&nbsp;&nbsp;</el-button>
          <el-button type="primary" @click="gerenBtn">实名认证</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 创建企业 -->
    <el-dialog :visible.sync="dialogVisible2" width="589px" :before-close="handleClose">
      <div class="tanluang2">
        <div>
          <span class="daozheng">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_472715965293970662020416231766gongsi.png"
              alt
              style="vertical-align: middle;"
            />&nbsp;创建企业
          </span>
        </div>
        <br />
        <div class="shangwei">
          <span class="chaungjian">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_157159652942682020204162346820lanse.png"
              alt
            />&nbsp;创建企业并实名成功后，将自动成为该企业管理员，并生成对应企业名称的公章
          </span>
        </div>
        <div style="padding-top: 13px;">
          <el-form ref="form" :model="form" :rules="rules" label-width="100px">
            <el-form-item label="企业名称:" prop="ent_name">
              <el-input
                v-model="form.ent_name"
                placeholder="请输入您要创建的企业名称，并确保与营业执照上的名称一致"
                style="width: 443px;"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <br />
        <div style="width: 100%; text-align: right;">
          <el-button @click="guanbi('form')">&nbsp;&nbsp;取消&nbsp;&nbsp;</el-button>
          <el-button type="primary" @click="submitForm('form')">确定</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 自动提示电子合同 -->
    <el-dialog
      title="使用签必果签约流程，领取免费电子合同"
      :visible.sync="dialogVisible3"
      width="700px"
      :before-close="handleClose"
    >
      <div class="qianyue">
        <!-- <img
          src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_317815989476123042020116652304qianshu.png"
          alt
        />-->
        <span class="gongxi">恭喜您！</span>
        <div class="bottom-table">
          <div v-for="(item,key) in tableData1" :key="key" style="margin-top: 10px;">
            <span>{{item.ent_name}}认证成功</span>,
            <span>
              赠送您
              <span style="color: #3083FF;">{{item.product_specifications}}份</span>免费电子合同!
            </span>
            <br />
          </div>
        </div>
        <div class="dibu">
          <el-button type="primary" @click="dialogVisible3 = false">开始签约</el-button>
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
    return {
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false,
      yinzhangShow: true,
      completed: 0, //已完成
      aftersigned: 0, //待我
      otherssigned: 0, //待他人
      shujuData: [], //已认证
      shujuWeiData: [], //立即认证
      sealUrl: "", //印章图片
      zhuzhiType: "", //1印章 2签署
      authStatus: "", //状态
      tableData1: [],
      form: {
        ent_name: "",
      },
      rules: {
        ent_name: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.initPost(); //企业数据 已经认证
    this.initweiPost(); //企业数据 l立即认证
    this.gerenZhong(); //个人中心
    this.infoPost(); //认证状态
    this.dianziPost();
  },
  methods: {
    infoPost() {
      post(api.info).then(
        (d) => {
          //console.log(d, 1);
          if (d.status == 0) {
            // if (d.data.account_id) {
            //   sessionStorage.setItem("account_id", d.data.account_id);
            // }
            if (d.data.auth_status == 30) {
              this.yinzhangPost(); //我的印章
            }
            if (d.data.auth_status == 20) {
              this.yinzhangShow = true;
            }
            if (d.data.auth_status == 10 || d.data.auth_status == "") {
              this.yinzhangShow = true;
            }
          } else {
            // this.$message.error(d.msg);
          }
          //console.log.log(d);

          //success callback
        },
        (err) => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
    //我的印章
    yinzhangPost() {
      post(api.queryPersonalSeal).then(
        (d) => {
          //console.log.log(d, "我的印章");
          if (d.status == 0) {
            if (d.data) {
              var yinData = d.data.seals;
              for (let index = 0; index < yinData.length; index++) {
                this.sealUrl = yinData[0].sealUrl;
              }
              this.yinzhangShow = false;
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
    },
    gerenZhong() {
      post(api.personalCenter).then(
        (d) => {
          //console.log.log(d, "个人中心");
          if (d.status == 0) {
            this.completed = d.data.completed;
            this.aftersigned = d.data.aftersigned;
            this.otherssigned = d.data.otherssigned;
          } else {
            // this.$message.error(d.msg);
          }
          //console.log.log(d);

          //success callback
        },
        (err) => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
    //立即认证
    lijiRen(item) {
      //console.log(item, "44444");
      localStorage.setItem("obj", JSON.stringify(item));
      var status = item.auth_status;
      var id = item.id;
      if (status == 10) {
        this.$router.push({ path: "/enterprise2" });
      }
      if (status == 20) {
        this.$router.push({ path: "/corporatePayment", query: { id: id } });
      }
    },
    kongzhiBtn(item) {
      localStorage.setItem("kongzhiData", JSON.stringify(item));
      this.$router.push({ path: "/enterpriseConsole" });
    },
    //删除
    shanchu(id) {
      this.$confirm("此操作将永久删除该企业, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          post(api.delAuthMerchantById, {
            id: id,
          }).then(
            (d) => {
              //console.log.log(d, 1);
              if (d.status == 0) {
                this.$message.success("删除成功");
               this.initPost(); //企业数据 已经认证
               this.initweiPost(); //企业数据 l立即认证
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
        })
        .catch(() => {
          this.$message.warning("已取消删除");
        });
    },
    //已经认证
    initPost() {
      post(api.firmalCenter).then(
        (d) => {
          //console.log.log(d, 1);
          if (d.status == 0) {
            this.shujuData = d.data;
          } else {
            // this.$message.error(d.msg);
          }
          //console.log.log(d);

          //success callback
        },
        (err) => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
    //立即认证
    initweiPost() {
      post(api.firmalCenterForAuthing).then(
        (d) => {
          // console.log(d, 1);
          if (d.status == 0) {
            this.shujuWeiData = d.data;
          } else {
            // this.$message.error(d.msg);
          }
          //console.log.log(d);

          //success callback
        },
        (err) => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
    //送电子合同
    dianziPost() {
      post(api.bestowedOrderDisplay).then(
        (d) => {
          //console.log.log(d, 1);
          if (d.status == 0) {
            if (d.data.length > 0) {
              this.tableData1 = d.data;
              this.dialogVisible3 = true;
              this.shanchuPost();
            } else {
              this.dialogVisible3 = false;
            }
          } else {
            this.$message.error(d.msg);
          }
          //console.log.log(d);
        },
        (err) => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
    //删除电子弹框
    shanchuPost() {
      post(api.clearBestowedOrderDisplay).then(
        (d) => {
          //console.log.log(d, 1);
          if (d.status == 0) {
          } else {
            this.$message.error(d.msg);
          }
          //console.log.log(d);
        },
        (err) => {
          //console.log(err.data.msg);
          //error callback
        }
      );
    },
    gerenBtn() {
      //1印章2签署
      if (this.authStatus == 20) {
        // this.$router.push({ path: "/yiyuanRen" });
        this.$router.push({ path: "/personal", query: { type: true } });
      }
      if (this.authStatus == 10 || this.authStatus == "") {
        this.$router.push({ path: "/personalShou" });
      }
    },
    //1创建印章2签署
    yinzhang(val) {
      this.zhuzhiType = val;
      post(api.info).then(
        (d) => {
          //console.log.log(d, 1);
          if (d.status == 0) {
            if (d.data.auth_status == 30) {
              if (this.zhuzhiType == 2) {
                this.$router.push({ path: "/Sign" });
              }
            }
            if (d.data.auth_status == 20) {
              this.authStatus = d.data.auth_status;
              this.dialogVisible = true;
            }
            if (d.data.auth_status == 10 || d.data.auth_status == "") {
              this.authStatus = d.data.auth_status;
              this.dialogVisible = true;
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
    },
    handleClose(done) {
      done();
    },
    quxiao() {
      this.dialogVisible = false;
    },
    //创建企业
    qiye() {
      this.dialogVisible2 = true;
    },
    guanbi(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible2 = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem("orgYype", "企业");
          localStorage.setItem("enterName", this.form.ent_name);
          // this.$router.push({ path: "/enterprise2" });
          post(api.queryMerchantAuthByEntName, this.form).then(
            (d) => {
              // console.log(d, "??????????????");
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
