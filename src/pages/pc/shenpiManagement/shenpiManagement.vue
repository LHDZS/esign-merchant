<template>
  <div class="shenpiManagement">
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
        <i class="iconfont icon-wodeshenpi"></i>&nbsp;&nbsp;我的审批
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
        <div class="dialog-form" v-if="faqiType =='2'">
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
        <div class="dialog-form" v-else>
          <div class="list">
            <div class="input">
              <div
                :class="checkModel.length>0 && jujieType == '3'? 'tongguoBian' : 'tongguo'"
                @click="selectXuanClick()"
              >批量通过</div>
            </div>
            <span
              class="shai"
              v-if="checkModel.length>0 && jujieType == '3' "
            >已选{{checkModel.length}}条</span>
          </div>
        </div>
      </div>
      <!-- 数据-->
      <!-- v-if="shujuArr.length>0" -->
      <div class="diyiShuceng" v-if="shujuArr.length>0">
        <div>
          <el-table
            ref="multipleTable"
            :data="shujuArr"
            border
            tooltip-effect="dark"
            style="width: 100%"
            :header-cell-style="{background:'rgb(250, 250, 250)'}"
            @selection-change="changeState"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="contract_title" label="合同名称" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="initiator_name" label="发起人" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="status" label="状态" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <!-- <div>
                    <span :style="'color:' + infoBoxStatusColor[scope.row.status]" class="yuandian"></span>
                    <span>{{infoBoxStatusName[scope.row.status]}}</span>
                </div>-->
                <div>
                  <span
                    class="daishen"
                    :style="'background-color:' + infoBoxStatusColor[scope.row.status]"
                  ></span>&nbsp;&nbsp;
                  <span>{{scope.row.status | invoice}}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="initiator_time" label="发起时间" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column
              prop="auditor_time"
              label="完成时间"
              :show-overflow-tooltip="true"
              :key="2"
              v-if="faqiType =='2'"
            ></el-table-column>
            <el-table-column prop="address" label="操作" width="200" :key="1" v-if="faqiType =='1'">
              <template slot-scope="scope">
                <span @click="tongyiBtn(scope.row)" style="cursor: pointer;color: #3083FF;">同意用印</span>
                <span @click="jujieBtn(scope.row)" style="cursor: pointer;color: #3083FF;">拒绝用印</span>
              </template>
            </el-table-column>
          </el-table>
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
          <div class="hetong">暂无审批</div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="483px" :before-close="handleClose">
      <div class="dialog-form2">
        <div>
          <span class="daozheng">
            <img
              src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_11081600309729715202017102849715yiyuan.png"
              alt
              style="vertical-align: middle;"
            /> 意愿认证
          </span>
        </div>
        <div class="list" v-if="jujieType == '1'">
          <span class="labr">*</span>
          <span class="label">拒绝原因:</span>
          <div class="input">
            <el-input v-model="yuanyin" placeholder="请输入拒绝签署本文件的原因"></el-input>
            <!-- <div class="left_input2">
              <el-input type="textarea" v-model="yuanyin" placeholder="请输入拒绝签署本文件的原因"></el-input>
              <span class="wenben">{{ yuanyin.length }}</span>
            </div>-->
          </div>
        </div>
        <div class="list">
          <span class="label">手机号:</span>
          <div class="input">
            <el-input v-model="phone" placeholder="请输入手机号" :disabled="true"></el-input>
          </div>
        </div>
        <div class="list">
          <span class="label">验证码:</span>
          <div class="input">
            <div class="left_input">
              <el-input v-model="glycms" placeholder="请输入验证码"></el-input>
            </div>
            <span @click="validationSms()" class="yanzheng">{{countdownHtml}}</span>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="quxiaoBtn()">取 消</el-button> -->
        <el-button type="primary" @click="queDing()">确 定</el-button>
      </span>
    </el-dialog>
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
      infoName: "待我审批",
      phone: "", //手机号
      glycms: "", //验证码
      yuanyin: "", //拒绝原因
      countdownHtml: "获取验证码",
      times: 60,
      dialogVisible: false,
      checkBoxArr: [
        { id: 10, name: "待我审批", type: 1, show: true },
        { id: 20, name: "我已审批", type: 2, show: false },
      ],
      // 任务状态 0:草稿 1:签署中 2:已完成 3:已撤销 4:已终止 5:已过期 6:已删除 7:已拒签8:失败
      infoBoxArr: [
        { id: 10, name: "审批通过" },
        { id: 20, name: "审批驳回" },
      ],
      infoBoxStatusColor: {
        "00": "#3083FF",
        10: "#52C41A",
        20: "#F5222D",
      },
      shujuArr: [],
      // colorArr: ["#6EB56D","#B7B7B7","#676767"],
      indexList: [],
      infoShu: [],
      activeClass: 10,
      options: [
        // {
        //   value: "99",
        //   label: "个人中心",
        //   org_type: "1",
        // },
      ],
      optionsKey: "",
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
      jujieType: "",
      status: "10",
    };
  },
  mounted() {
    this.qiyePost();
  },
  methods: {
    quxiaoBtn() {
      this.glycms = "";
      this.yuanyin = "";
      clearInterval(this.timer);
      this.countdownHtml = "获取验证码";
      this.times = 60;
      this.dialogVisible = false;
    },
    handleClose(done) {
      this.glycms = "";
      this.yuanyin = "";
      if (this.jujieType == 2 || this.jujieType == 1) {
        this.checkModel = [];
        let refsElTable = this.$refs.multipleTable; // 获取表格对象
        refsElTable.clearSelection();
      }
      clearInterval(this.timer);
      this.countdownHtml = "获取验证码";
      this.$forceUpdate();
      this.times = 60;
      done();
    },
    //同意用印
    tongyiBtn(item) {
      this.checkModel = [];
      this.checkModel.push(item.id);
      let refsElTable = this.$refs.multipleTable; // 获取表格对象
      refsElTable.clearSelection();
      this.jujieType = 2;
      this.glycms = "";
      this.yuanyin = "";
      this.status = "10";
      this.phone = sessionStorage.getItem("loginPhone") || "";
      this.dialogVisible = true;
    },
    //拒绝用印
    jujieBtn(item) {
      this.checkModel = [];
      this.checkModel.push(item.id);
      let refsElTable = this.$refs.multipleTable; // 获取表格对象
      refsElTable.clearSelection();
      this.jujieType = 1;
      this.glycms = "";
      this.yuanyin = "";
      this.status = "20";
      this.phone = sessionStorage.getItem("loginPhone") || "";
      this.dialogVisible = true;
    },
    validationSms() {
      //console.log("33333");
      if (this.times != 60) {
        return;
      }
      if (this.phone == "") {
        this.$message.error("请输入手机号");
        return;
      }
      //   短信验证码
      var regMoblie = /^1[345678]\d{9}$/;
      if (!regMoblie.test(this.phone)) {
        this.$message.error("该手机号格式错误");
        return;
      }
      this.countdown();
      this.timer = setInterval(this.countdown, 1000);
      post(api.sendMobileCode, {
        mobile: this.phone,
      }).then(
        (d) => {
          if (d.status == 0) {
            this.$message.success("发送成功");
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
    //60秒倒计时
    countdown() {
      var that = this;
      if (that.times == 0) {
        clearInterval(this.timer);
        that.countdownHtml = "获取验证码";
        that.times = 60;
        return false;
      } else {
        that.countdownHtml = "" + that.times + "s";
        that.times--;
      }
    },
    queDing() {
      if (this.jujieType == 1) {
        if (this.yuanyin == "") {
          this.$message.error("请输入拒绝原因");
          return;
        }
        // console.log(this.yuanyin.length, "长度");
        if (this.yuanyin.length > 1 && this.yuanyin.length > 10) {
          this.$message.error("拒绝原因最多10个字");
          return;
        }
      }
      if (this.phone == "") {
        this.$message.error("请输入手机号");
        return;
      }
      if (this.glycms == "") {
        this.$message.error("请输入验证码");
        return;
      }

      this.tongguoPost();
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
      if (this.faqiType == 1) {
        this.hetongPost();
      } else {
        this.hetongWoPost();
      }
    },
    //清除筛选
    qinliBtn() {
      this.checkModel = [];
      this.indexList = [];
      this.hetongWoPost();
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
              if (this.options.length > 0) {
                for (let index = 0; index < this.options.length; index++) {
                  const element = this.options[0];
                  if (element) {
                    this.optionsKey = element.value;
                    this.initiatorId = element.account_id;
                    this.hetongPost();
                  }
                }
              }
            }
          }
        },
        (err) => {
          //error callback
        }
      );
    },
    changeState(val) {
      console.log(val);
      this.checkModel = [];
      for (let i = 0; i < val.length; i++) {
        this.checkModel.push(this.shujuArr[i].id);
      }
      this.jujieType = 3;
      // console.log(this.checkModel, "选中复选框多活动还带回");
    },
    handleSizeChange(val) {
      ////console.log.(`每页 ${val} 条aaaaa`);
      this.pageSize = val;
      if (this.faqiType == 1) {
        this.hetongPost();
      } else {
        this.hetongWoPost();
      }
    },
    handleCurrentChange(val) {
      ////console.log.(`当前页: ${val}aaaaaaaaaaaaaaaa`);
      if (this.faqiType == 1) {
        this.hetongPost(val);
      } else {
        this.hetongWoPost(val);
      }
    },
    selectInfoClick(index) {
      let arrIndex = this.indexList.indexOf(index);
      ////console.log.(arrIndex)
      if (arrIndex > -1) {
        this.indexList.splice(arrIndex, 1);
      } else {
        this.indexList.push(index);
      }
      this.hetongWoPost();
    },
    selectXuanClick() {
      this.jujieType = 3;
      this.status = "10";
      this.phone = sessionStorage.getItem("loginPhone") || "";
      if (this.checkModel.length == 0) {
        this.$message.error("请至少选择一条合同");
        return;
      }
      this.dialogVisible = true;
    },
    tongguoPost() {
      post(api.applyforturn, {
        ids: this.checkModel,
        status: this.status,
        mobile: this.phone,
        code: this.glycms,
        remark: this.yuanyin,
      }).then(
        (d) => {
          if (d.status === 0) {
            if(this.jujieType == 1){
              this.$message.success('拒绝成功');
            }else{
             this.$message.success('审批成功');
            }
            this.dialogVisible = false;
            clearInterval(this.timer);
            this.countdownHtml = "获取验证码";
            this.times = 60;
            this.hetongPost();
          } else {
            this.$message.error(d.msg);
          }
        },
        (err) => {
          //error callback
        }
      );
    },
    selectClick(item) {
      //console.log.(item, "itemddhdh ");
      this.checkModel = [];
      this.indexList = [];
      this.activeClass = item.id;
      this.infoName = item.name;
      this.faqiType = String(item.type);
      if (item.type == 1) {
        this.hetongPost();
      } else {
        this.hetongWoPost();
      }
    },
    //待我审批
    hetongPost(size) {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      post(api.contracttasksealList, {
        currentPage: size || 1,
        pageSize: this.pageSize,
        status: this.indexList,
        initiatorId: this.initiatorId,
      }).then(
        (d) => {
          loading.close();
          if (d.status === 0) {
            this.shujuArr = d.data.rows;
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
    //我已审批
    hetongWoPost(size) {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      post(api.contracttasksealLists, {
        currentPage: size || 1,
        pageSize: this.pageSize,
        status: this.indexList,
        initiatorId: this.initiatorId,
      }).then(
        (d) => {
          // console.log(d, "我已审批");
          loading.close();
          if (d.status === 0) {
            this.shujuArr = d.data.rows;
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

  created() {},
};
</script>

<style lang="less" scoped>
.shenpiManagement::-webkit-scrollbar {
  width: 0;
}
.shenpiManagement {
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
          width: 93%;
          margin: 0 auto;
          .tongguo {
            width: 72px;
            height: 27px;
            border-radius: 2px;
            background: rgba(48, 131, 255, 0.6);
            color: rgba(255, 255, 255, 1);
            text-align: center;
            line-height: 27px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            cursor: pointer;
          }
          .tongguoBian {
            background: rgba(48, 131, 255, 1);
            color: rgba(255, 255, 255, 1);
            width: 72px;
            height: 27px;
            border-radius: 2px;
            text-align: center;
            line-height: 27px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            cursor: pointer;
          }
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
            width: 79%;
            .xuanzhong {
              width: 72px;
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
              height: 27px;
              border-radius: 2px;
              background: #fff;
              border: 1px solid #e0e0e0;
              margin-left: 20px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              text-align: center;
              line-height: 27px;
              display: block;
              cursor: pointer;
              width: 72px;
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
      .daishen {
        background-color: #1890ff;
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        vertical-align: middle;
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
      .title {
        width: 100%;
        border-bottom: 1px solid #e6e6e6;
        .titleshu {
          height: 37px;
          line-height: 37px;
          width: 90%;
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
    }
  }
  .dialog-form2 {
    width: 100%;
    .daozheng {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      position: absolute;
      top: 16px;
    }
    .list {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 32px;
      .labr {
        color: red;
      }
      .label {
        width: 64px;
        text-align: right;
      }
      .input {
        width: 324px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        .left_input {
          width: 229px;
        }
        .wenben {
          float: right;
          color: #333;
        }
        .left_input2 {
          width: 324px;
        }
        .yanzheng {
          cursor: pointer;
          width: 94px;
          height: 30px;
          line-height: 30px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-left: none;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(48, 131, 255, 0.7);
          text-align: center;
        }
      }
    }
  }
}
</style>

<style>
.shenpiManagement .left .el-select {
  display: block;
  margin: 0 auto;
  width: 182px;
  height: 30px;
}
.shenpiManagement .left .el-input--suffix .el-input__inner {
  height: 32px !important;
  line-height: 32px !important;
  background: rgba(48, 131, 255, 1);
  color: #fff;
}
.shenpiManagement .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266;
}
.shenpiManagement .titleshu .el-checkbox__label {
  color: rgba(155, 155, 155, 1);
  font-size: 12px;
}
.shenpiManagement .dialog-form .el-checkbox__label:hover {
  color: rgba(48, 131, 255, 1);
}
.shenpiManagement .el-checkbox-group {
  display: inline-block;
}
.shenpiManagement .bottom-pag {
  text-align: right;
}
.shenpiManagement .el-select .el-input .el-select__caret {
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
