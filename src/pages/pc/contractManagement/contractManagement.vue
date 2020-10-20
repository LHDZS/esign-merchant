<template>
  <div class="contractManagement">
    <div class="left">
      <div class="toubui">
        <el-select v-model="optionsKey" filterable placeholder="请选择" @change="selectModel($event)">
          <el-option
            v-for="(item,key) in options"
            :key="key"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="hetong">
        <i class="iconfont icon-wodehetong"></i>&nbsp;&nbsp;我的合同
      </div>
      <div
        :class="activeClass == item.id ? 'list' : 'listNo'"
        v-for="(item, y) in checkBoxArr"
        :key="y"
        @click="selectClick(item)"
      >{{item.name}}</div>
    </div>
    <div class="right">
      <!-- 状态 -->
      <div class="diyiceng">
        <div class="title">{{infoName}}</div>
        <div class="dialog-form">
          <div class="list">
            <span class="label">状态：</span>
            <div class="input">
              <div
                :class="indexList.indexOf(item.id)>-1 ? 'xuanzhong' : 'weixuanzhong'"
                v-for="(item,s) in infoBoxArr"
                :key="s"
                @click="selectInfoClick(item.id)"
              >{{item.name}}</div>
            </div>
            <span class="shai" v-if="indexList.length>0" @click="qinliBtn">清除筛选</span>
          </div>
        </div>
      </div>
      <!-- 数据-->
      <div class="diyiShuceng" v-if="shujuArr.length>0">
        <div class="title">
          <div class="titleshu">
            <span>
              <input
                type="checkbox"
                name="check"
                v-model="checkedAll"
                @change="changeState"
                class="check_box tui-checkbox"
              />
              <span>
                <span v-if="checkModel.length>0">
                  <span @click="qianPost(checkModel,'3')" class="che" v-if="faqiType == 2">
                    <i class="iconfont icon-chehui1"></i>&nbsp;撤回
                  </span>
                  <span @click="qianPost(checkModel,'2')" class="che" v-if="faqiType == 2">
                    <i class="iconfont icon-cuiqian1"></i>&nbsp;催签
                  </span>
                  <span @click="qianPost(checkModel,'1')" class="che" v-if="faqiType == 1">
                    <i class="iconfont icon-jujueqianshu1"></i>&nbsp;拒签
                  </span>
                  <span @click="qianPost(checkModel,'4')" class="che">
                    <i class="iconfont icon-shanchu1"></i>&nbsp;删除
                  </span>
                </span>
                <span v-else>全选各项</span>
              </span>
            </span>
            <span style="float: right;" v-if="checkModel.length>0">已选{{checkModel.length}}条</span>
            <span style="float: right;" v-else>共{{total}}条</span>
          </div>
        </div>
        <div class="dialog-form">
          <div class="fanwei">
            <div class="list" v-for="(item,index) in shujuArr" :key="index">
              <div class="baowei">
                <div>
                  <span style="display: flex;align-items: center;">
                    <input type="checkbox" name="check" v-model="checkModel" :value="item.id" />
                    <span class="wenzi" @click="dianji(item)">{{item.title}}</span>
                  </span>
                </div>
                <div class="faqi">
                  <div class="leftfaqi">
                    <span>发起人：{{item.initiator_name}}</span>
                    <br />
                    <br />

                    <span>
                      <el-tooltip placement="top">
                        <div slot="content">
                          <span v-for="(main,i) in item.tasks" :key="i">
                            <span v-if="main.status == 1 && item.status == 1 ">
                              <i
                                class="iconfont icon-shijian"
                                style="color: rgb(48, 131, 255);font-size: 12px;padding-left: 7px;"
                              ></i>
                            </span>
                            <span v-if="main.main_type == 2">{{main.main_name}}({{main.agent_name}})</span>
                            <span v-if="main.main_type == 1">{{main.agent_name}}</span>
                          </span>
                        </div>
                        <span>参与人:</span>
                      </el-tooltip>
                      <span v-for="(main,i) in item.tasks" :key="i">
                        <span v-if="main.status == 1 && item.status == 1 ">
                          <i
                            class="iconfont icon-shijian"
                            style="color: rgb(48, 131, 255);font-size: 12px;padding-left: 7px;"
                          ></i>
                        </span>
                        <span v-if="main.main_type == 2">{{main.main_name}}({{main.agent_name}})</span>
                        <span v-if="main.main_type == 1">{{main.agent_name}}</span>
                      </span>
                    </span>
                  </div>
                  <div class="rightfaqi">
                    <span
                      class="zuoyou"
                      :style="'color:' + infoBoxStatus[item.status].color"
                    >{{infoBoxStatus[item.status].name}}</span>
                    <br />
                    <br />
                    <span class="zuoyou">{{item.created_at}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <pagination
          :total="total"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        ></pagination>
      </div>
      <div class="diyiShuceng" v-else>
        <div class="tuwezi">
          <img
            src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_4567159738372375720201413423757wu.png"
            alt
          />
          <div class="hetong">暂无合同</div>
        </div>
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
      renwu: "",
      infoName: "我收到的",
      checkBoxArr: [
        { id: 10, name: "我收到的", type: 1 },
        { id: 20, name: "我发起的", type: 2 },
      ],
      // 任务状态 0:草稿 1:签署中 2:已完成 3:已撤销 4:已终止 5:已过期 6:已删除 7:已拒签8:失败
      infoBoxArr: [
        { id: 1, name: "签署中" },
        { id: 2, name: "已完成" },
        { id: 3, name: "已撤回" },
        { id: 7, name: "已拒绝" },
        { id: 5, name: "已过期" },
      ],
      infoBoxStatus: [
        { id: 0, name: "草稿", color: "#676767" },
        { id: 1, name: "签署中", color: "#3083FF" },
        { id: 2, name: "已完成", color: "#29C941" },
        { id: 3, name: "已撤回", color: "#3083FF" },
        { id: 4, name: "已终止", color: "#B7B7B7" },
        { id: 5, name: "已过期", color: "#B7B7B7" },
        { id: 6, name: "已删除", color: "#676767" },
        { id: 7, name: "已拒绝", color: "#FF554E" },
        { id: 8, name: "失败", color: "#FF554E" },
      ],
      shujuArr: [],
      // colorArr: ["#6EB56D","#B7B7B7","#676767"],
      indexList: [],
      infoShu: [],
      activeClass: 10,
      options: [
        {
          value: "99",
          label: "个人中心",
          org_type: "1",
        },
      ],
      optionsKey: "99",
      initiator_type: "1",
      initiatorId: "", //企业id
      initiatorName: "", //企业名称
      //总条数
      total: null,
      pageSize: 10,
      checkModel: [], //批量选择id
      checkedAll: false, //是否是全选
      faqiType: "1",
      chehuiArr: [], //1撤回 2催签 3拒签
      shanchuArr: [], //删除
      xiazaiArr: [], //下载
    };
  },
  watch: {
    checkModel(val, aval) {
      //console.log.(val, "555555");
      if (val.length != 0 && val.length == this.shujuArr.length) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    },
  },
  mounted() {
    this.qiyePost();
    this.hetongPost();
  },
  methods: {
    //1=拒签   2= 催签    3=撤回    4=删除
    qianPost(arr, type) {
      // console.log(this.initiator_type,'等会等会哈多喝点')
      var name = "";
      if (type == 1) {
        name = "拒签";
      } else if (type == 2) {
        name = "催签";
      } else if (type == 3) {
        name = "撤回";
      } else {
        name = "删除";
      }
      var chehuiArr = [];

      for (let j = 0; j < this.shujuArr.length; j++) {
        const element = this.shujuArr[j];
        for (let i = 0; i < arr.length; i++) {
          if (type == 4) {
            if (
              element.id == arr[i] &&
              element.status != "1" &&
              element.status != "2"
            ) {
              chehuiArr.push(arr[i]);
            }
          } else {
            if (element.id == arr[i] && element.status == "1") {
              chehuiArr.push(arr[i]);
            }
          }
        }
      }

      // console.log(chehuiArr, "返回数组1111");
      if (chehuiArr.length == 0) {
        // this.$message.warning("暂无可批量" + name + "的合同任务");
        this.$alert("暂无可批量" + name + "的合同任务", "批量" + name, {
          confirmButtonText: "知道了",
          callback: (action) => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          },
        });
        return;
      }
      this.$confirm(
        "你有" +
          chehuiArr.length +
          "个合同任务可批量" +
          name +
          "，确定要批量" +
          name +
          "吗？",
        "提示",
        {
          confirmButtonText: "批量" + name,
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          post(api.signingoperation, {
            ids: chehuiArr,
            type: type,
            initiatorId: this.initiatorId,
            state: this.faqiType,
          }).then(
            (d) => {
              if (d.status == 0) {
                this.$message.success(name + "成功！");
                this.hetongPost();
              } else if (d.status == 1) {
                this.$message.warning(d.msg);
              } else {
                this.$message.error(d.msg);
              }

              //success callback
            },
            (err) => {
              //error callback
            }
          );
        })
        .catch(() => {
          this.$message.warning("已取消" + name);
        });
    },
    //删除
    shanchuPost(arr) {},
    //下载
    // xiazaiPost(arr) {},
    dianji(item) {
      // console.log(item.docId,'4444')
      // if(item.tasks[0].sign_url !='0'){
      // }
      // if (item.status == 2) {
      //   if (item.file_url) {
      //     window.open(item.file_url);
      //   }
      // } else {
      //   window.open(item.contract_file);
      // }
     post(api.examineContract,{
       docId:item.docId
     }).then(
        (d) => {
          // console.log(d, "dddd");
          if (d.status === 0) {
           if(d.data.docUrl){
               window.open(d.data.docUrl);
           }
          }
        },
        (err) => {
          //error callback
        }
      );

    },
    selectModel(id) {
      // console.log(id);
      this.checkModel = [];
      this.indexList = [];
      this.checkedAll = false;
      let obj = {};
      obj = this.options.find((item) => {
        //model就是上面的数据源
        return item.value === id; //筛选出匹配数据
      });
      this.initiatorName = obj.label;
      this.initiatorId = obj.account_id;
      this.initiator_type = obj.org_type;
      // console.log(this.initiatorId,'多活动还带回')
      this.hetongPost();
    },
    //清除筛选
    qinliBtn() {
      this.checkModel = [];
      this.checkedAll = false;
      this.indexList = [];
      this.hetongPost();
    },
    //企业名称下拉
    qiyePost() {
      post(api.getMerchantBelongToUser).then(
        (d) => {
          ////console.log.(d, "企业名称");
          if (d.status === 0) {
            for (let i = 0; i < d.data.length; i++) {
              var obj = {
                org_type: String(d.data[i].org_type),
                label: d.data[i].ent_name,
                value: d.data[i].id,
                account_id: d.data[i].account_id,
              };
              this.options.push(obj);
            }
          }
        },
        (err) => {
          //error callback
        }
      );
    },
    changeState() {
      this.checkModel = [];
      if (this.checkedAll) {
        for (var i in this.shujuArr) {
          this.checkModel.push(this.shujuArr[i].id);
        }
      }
      console.log(this.checkModel, "选中复选框多活动还带回");
    },
    handleSizeChange(val) {
      ////console.log.(`每页 ${val} 条aaaaa`);
      this.pageSize = val;
      this.checkModel = [];
      this.checkedAll = false;
      this.hetongPost();
    },
    handleCurrentChange(val) {
      ////console.log.(`当前页: ${val}aaaaaaaaaaaaaaaa`);
      this.checkModel = [];
      this.checkedAll = false;
      this.hetongPost(val);
    },
    handleChecked(val) {},
    selectInfoClick(index) {
      this.checkModel = [];
      this.checkedAll = false;
      let arrIndex = this.indexList.indexOf(index);
      ////console.log.(arrIndex)
      if (arrIndex > -1) {
        this.indexList.splice(arrIndex, 1);
      } else {
        this.indexList.push(index);
      }
      this.hetongPost();
      ////console.log.(this.indexList,'类型对对对');
    },
    selectClick(item) {
      //console.log.(item, "itemddhdh ");
      this.checkModel = [];
      this.indexList = [];
      this.checkedAll = false;
      this.activeClass = item.id;
      this.infoName = item.name;
      this.faqiType = String(item.type);
      this.hetongPost();
      ////console.log.(item.type, "文字说明");
    },
    hetongPost(size) {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      post(api.contractlisttouser, {
        currentPage: size || 1,
        pageSize: this.pageSize,
        status: this.indexList,
        type: this.faqiType,
        initiatorName: this.initiatorName,
        initiatorId: this.initiatorId,
        initiator_type: this.initiator_type || 1,
      }).then(
        (d) => {
          ////console.log.(d, "合同数据");
          loading.close();
          if (d.status === 0) {
            if (d.data && d.data.length != 0) {
              if (d.data.rows) {
                this.shujuArr = d.data.rows;
                this.total = d.data.count;
              }
            } else {
              this.shujuArr = [];
              this.total = 0;
            }
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

  created() {},
};
</script>

<style lang="less" scoped>
// .contractManagement::-webkit-scrollbar {
//   width: 0;
// }
.contractManagement {
  width: 1200px;
  padding: 23px 14px;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
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
      line-height: 40px;
      padding-left: 18px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
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
    border-radius: 2px;
    height: auto;
    box-sizing: border-box;
    .diyiceng {
      width: 100%;
      height: 115px;
      background: rgba(255, 255, 255, 1);
      border-radius: 2px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 4px 0 rgba(0, 0, 0, 0.06);
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
      .dialog-form {
        width: 100%;
        .list {
          display: flex;
          align-items: center;
          width: 90%;
          margin: 0 auto;
          .label {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #4b4b4b;
          }
          .shai {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(48, 131, 255, 1);
            cursor: pointer;
          }
          .input {
            display: flex;
            align-items: center;
            width: 88%;
            .xuanzhong {
              width: 60px;
              height: 27px;
              background: #3083ff;
              border: 1px solid #3083ff;
              border-radius: 2px;
              margin-left: 20px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              text-align: center;
              line-height: 27px;
              display: block;
              cursor: pointer;
            }
            .weixuanzhong {
              width: 60px;
              height: 27px;
              border-radius: 2px;
              background: #fff;
              border: 1px solid rgba(224, 224, 224, 1);
              margin-left: 20px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              text-align: center;
              line-height: 27px;
              display: block;
              cursor: pointer;
            }
          }
        }
      }
    }
    .diyiShuceng {
      width: 100%;
      background: #ffffff;
      border-radius: 2px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 4px 0 rgba(0, 0, 0, 0.06);
      margin-top: 10px;
      height: 678px;
      overflow: hidden;
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
      .title {
        width: 100%;
        border-bottom: 1px solid #e6e6e6;
        .titleshu {
          height: 37px;
          line-height: 37px;
          width: 92%;
          margin: 0 auto;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.65);
          cursor: pointer;
          .che {
            width: 78px;
            height: 28px;
            background: #fafafa;
            border: 1px solid #eee;
            border-radius: 2px;
            text-align: center;
            display: inline-block;
            line-height: 28px;
            margin-left: 20px;
          }
          .che:hover {
            border: 1px solid #3083ff;
            color: #3083ff;
            background: #fff;
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
              width: 92%;
              margin: 0 auto;
              padding-bottom: 30px;
              .wenzi {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
                width: 100%;
                // display: block;
                vertical-align: middle;
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
</style>

<style>
.contractManagement .left .el-select {
  display: block;
  margin: 0 auto;
  width: 182px;
  height: 30px;
}
.contractManagement .left .el-input--suffix .el-input__inner {
  height: 32px !important;
  line-height: 32px !important;
  background: rgba(48, 131, 255, 1);
  color: #fff;
}
.contractManagement .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266;
}
.contractManagement .titleshu .el-checkbox__label {
  color: rgba(155, 155, 155, 1);
  font-size: 12px;
}
.contractManagement .dialog-form .el-checkbox__label:hover {
  color: rgba(48, 131, 255, 1);
}
.contractManagement .el-checkbox-group {
  display: inline-block;
}
.contractManagement .bottom-pag {
  text-align: right;
}
.contractManagement .el-select .el-input .el-select__caret {
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
