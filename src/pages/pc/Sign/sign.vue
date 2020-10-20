<template>
  <div class="Sign">
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
            <span class="name">发起合同签署任务</span>
          </div>
        </div>
        <div class="right" @click="faqiPost()">
          <span class="faqiIcon">
            <i class="iconfont icon-zhijiefaqi" style="font-size:14px;"></i>&nbsp;直接发起
          </span>
        </div>
      </div>
      <div class="baoguo">
        <div class="xiala">
          <el-select
            v-model="optionsKey"
            filterable
            placeholder="请选择"
            @change="selectModel($event)"
          >
            <el-option
              v-for="(item,key) in options"
              :key="key"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>

    <div class="personal">
      <div class="right">
        <!-- 任务基本信息 -->
        <div class="diyiceng">
          <div class="title">任务基本信息</div>
          <div class="dialog-form">
            <div class="list">
              <span class="label">
                <span style="color:rgba(229,0,0,1);">*</span> 任务主题：
              </span>
              <div class="input">
                <el-input v-model="title" placeholder="请输入任务主题"></el-input>
              </div>
            </div>
          </div>
        </div>
        <!-- 合同文件 -->
        <div class="diyiceng2">
          <div class="title">
            <span class="hetong">合同文件</span>
            <span class="zhichi">&nbsp;&nbsp;支持格式为：（pdf）</span>
          </div>
          <div class="dialog-form">
            <div class="list">
              <div class="baowei">
                <el-upload
                  class="avatar-uploader"
                  :action="data.action"
                  :data="data.d"
                  accept=".pdf"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeUpload"
                >
                  <img
                    v-if="!business_img"
                    src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_4947159660479549920205131955499wenjian.png"
                    alt
                  />
                  <div class="tupian" v-if="business_img">
                    <img
                      v-if="sign_contract_type == 'pdf'"
                      src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_387715972156005972020121500597pdf.png"
                      class="avatar"
                    />
                    <img
                      v-if="sign_contract_type == 'doc'"
                      src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_29671597215525612202012145845612doc.png"
                      class="avatar"
                    />
                    <img
                      v-if="sign_contract_type == 'docx'"
                      src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_3971597215568243202012145928243docx.png"
                      class="avatar"
                    />
                    <div style="padding: 10px;">{{wenjianName}}</div>
                    <div class="tubiao">
                      <span class="logo" @click.stop="handlePictureCardPreview()">
                        <i class="iconfont icon-yanjing1"></i>
                      </span>
                      <span class="logo">
                        <i class="iconfont icon-shangchuan1"></i>
                      </span>
                      <span class="logo" @click.stop="handleRemove()">
                        <i class="el-icon-delete"></i>
                      </span>
                    </div>
                  </div>
                </el-upload>
              </div>
            </div>
          </div>
        </div>
        <!-- 任务参与人 -->
        <div class="diyiSan">
          <div class="title">
            <span class="hetong">任务参与人</span>
          </div>
          <div class="fanwei">
            <div class="qiyeCan" v-for="(item,key) in EnterPrisePost" :key="key">
              <div class="zhongjian">
                <span class="canyu" style="padding-left:30px;">参与方</span>
                <span class="canyu" style="padding-left:30px;">权限</span>
                <span class="canyu" style="padding-left:30px;">参与主体</span>
                <span class="canyu" style="padding-left: 185px;">{{item.type == 1?'经办人账号':'个人账号'}}</span>
                <span class="canyu" style="padding-left: 259px;">签署要求</span>
              </div>
              <div class="qianshu">
                <span class="canyu" style="padding-left:30px;">{{indexArr[key]}}</span>
                <span class="canyu" style="padding-left:45px;">签署</span>
                <span class="canyu" style="padding-left:47px;">
                  <span>{{item.type == 1?'企业:':'个人'}}</span>
                  <span class="qiye">
                    <el-autocomplete
                      v-if="item.type == 1"
                      v-model="item.main_name"
                      :fetch-suggestions="querySearch"
                      @select="handleSelect(item,key)"
                      placeholder="单行输入"
                    ></el-autocomplete>
                  </span>
                </span>
                <span class="canyu" style="padding-left: 30px;">
                  <span class="shouji">
                    <el-autocomplete
                      popper-class="my-autocomplete"
                      :popper-append-to-body="false"
                      v-model="item.agent_name"
                      :fetch-suggestions="((queryString,cb)=>{queryNameSearch(queryString,cb,item.type)})"
                      @select="handleSelectName(item,key,'EnterPrisePost')"
                      placeholder="真实姓名"
                    >
                      <i
                        v-if="item.type == 1"
                        class="iconfont icon-zhenshixingming"
                        slot="suffix"
                        @click="handleIconClick(key,'1',item.type)"
                      ></i>
                      <i v-else slot="suffix"></i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}: {{ item.address }}</div>
                      </template>
                    </el-autocomplete>
                  </span>
                  <span class="qiye">
                    <el-autocomplete
                      popper-class="my-autocomplete"
                      v-model="item.agent_mobile"
                      :fetch-suggestions="((queryString,cb)=>{queryPhoneSearch(queryString,cb,item.type)})"
                      @select="handleSelectPhone(item,key,'EnterPrisePost')"
                      placeholder="请输入手机号/邮箱"
                      :maxlength="11"
                    >
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.address }}: {{ item.value }}</div>
                      </template>
                    </el-autocomplete>
                  </span>
                </span>
                <span class="canyu" style="padding-left: 48px;" v-if="item.type == 1">
                  <el-checkbox-group v-model="item.checkedZhang">
                    <el-checkbox v-for="zhang in gerenList" :label="zhang" :key="zhang">{{zhang}}</el-checkbox>
                  </el-checkbox-group>
                </span>
                <span class="canyu" style="padding-left: 48px;" v-else>
                  <el-checkbox-group v-model="item.checkedZhang">
                    <el-checkbox v-for="zhang in zhangList" :label="zhang" :key="zhang">{{zhang}}</el-checkbox>
                  </el-checkbox-group>
                </span>

                <span class="canyu" @click="delGradient(key,'1','EnterPrisePost')">
                  <i class="iconfont icon-shanchu" style="color:#B3B3B3"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="footed" v-if="EnterPrisePost.length < 10">
            <div class="qiyeKuai" @click="addEnterQiyePrise(qiyeObj)">
              <div class="tianjia">
                <i class="el-icon-circle-plus-outline"></i>添加企业
              </div>
            </div>
            <div class="qiyeKuai" @click="addEnterGerenPrise(gerenObj)">
              <div class="tianjia">
                <i class="el-icon-circle-plus-outline"></i>添加个人
              </div>
            </div>
          </div>
        </div>
        <!-- 抄送人 -->
        <div class="diyiSan">
          <div class="title">
            <span class="hetong">抄送人</span>
          </div>
          <div class="fanwei">
            <div class="qiyeCan" v-for="(item,key) in CopyPost" :key="key">
              <div class="zhongjian">
                <span class="canyu" style="padding-left:30px;">抄送主体</span>
                <span class="canyu" style="padding-left: 323px;">{{item.type == 1?'经办人账号':'个人账号'}}</span>
              </div>
              <div class="qianshu">
                <span class="canyu" style="padding-left:30px;">
                  <span>{{item.type == 1?'企业:':'个人'}}</span>
                  <span class="qiyechao">
                    <el-autocomplete
                      v-if="item.type == 1"
                      v-model="item.main_name"
                      :fetch-suggestions="querySearch"
                      @select="handleChaoSelect(item,key)"
                      placeholder="单行输入"
                    ></el-autocomplete>
                  </span>
                </span>
                <span class="canyu" style="padding-left: 30px;">
                  <span class="shouji">
                    <el-autocomplete
                      popper-class="my-autocomplete"
                      :popper-append-to-body="false"
                      v-model="item.agent_name"
                      :fetch-suggestions="((queryString,cb)=>{queryNameSearch(queryString,cb,item.type)})"
                      @select="handleSelectName(item,key,'CopyPost')"
                      placeholder="真实姓名"
                    >
                      <i
                        v-if="item.type == 1"
                        class="iconfont icon-zhenshixingming"
                        slot="suffix"
                        @click="handleChaoIconClick(key,'2',item.type)"
                      ></i>
                      <i v-else slot="suffix"></i>
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}: {{ item.address }}</div>
                      </template>
                    </el-autocomplete>
                  </span>
                  <span class="qiyechao2">
                    <el-autocomplete
                      popper-class="my-autocomplete"
                      v-model="item.agent_mobile"
                      :fetch-suggestions="((queryString,cb)=>{queryPhoneSearch(queryString,cb,item.type)})"
                      @select="handleSelectPhone(item,key,'CopyPost')"
                      placeholder="请输入手机号/邮箱"
                      :maxlength="11"
                    >
                      <template slot-scope="{ item }">
                        <div class="name">{{ item.address }}: {{ item.value }}</div>
                      </template>
                    </el-autocomplete>
                  </span>
                </span>
                <span class="canyu" @click="delGradient(key,'2','CopyPost')">
                  <i class="iconfont icon-shanchu" style="color:#B3B3B3"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="footed">
            <div class="qiyeKuai" @click="addEnterQiyeChaoPrise(qiyeChaoObj)">
              <div class="tianjia">
                <i class="el-icon-circle-plus-outline"></i>添加企业
              </div>
            </div>
            <div class="qiyeKuai" @click="addEnterGerenChaoPrise(gerenChaoObj)">
              <div class="tianjia">
                <i class="el-icon-circle-plus-outline"></i>添加个人
              </div>
            </div>
          </div>
        </div>
        <!-- 其他设置 -->
        <div class="diyiQita">
          <div class="title">其他设置</div>
          <div class="dialog-form">
            <div class="list">
              <span class="label">
                <span style="color:rgba(229,0,0,1);">*</span>签署截止日期：
              </span>
              <div class="input">
                <el-date-picker
                  v-model="zhangDate"
                  @change="changePicker"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  :picker-options="queryPickerOptions"
                ></el-date-picker>
              </div>
              <span class="riqi">
                <i class="el-icon-warning-outline" style="font-size:14px;"></i>所有签署方须在截止日期前完成签署
              </span>
            </div>
            <div class="list" style="margin-top: 20px;">
              <span class="label">
                <span style="color:rgba(229,0,0,1);">*</span>文件到期日：
              </span>
              <div class="input">
                <el-date-picker
                  v-model="zhangDaoDate"
                  @change="changeDaoPicker"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  :picker-options="queryPickerOptions2"
                ></el-date-picker>
              </div>
              <span class="riqi">
                <i class="el-icon-warning-outline" style="font-size:14px;"></i>所有签署方须在截止日期前完成签署
              </span>
            </div>
          </div>
        </div>
        <div style="padding-top: 30px;"></div>
      </div>
    </div>
    <!-- pdf -->
    <!-- <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>-->
    <!-- <el-dialog
      title="文件预览"
      :visible.sync="dialogVisible"
      width="50%"
      :fullscreen="isFull"
      :custom-class="isFull ? 'preview-dialog' : ''"
      :before-close="handleClose"
    >-->
    <!-- iframe打印 -->
    <!-- <iframe :src="dialogImageUrl" frameborder="0" style="width: 100%; height: 100%"></iframe>
    </el-dialog>-->
    <!-- 真实姓名 -->
    <el-dialog title="联系人列表" width="648px" :visible.sync="dialogTableVisible">
      <div class="tankuangPost">
        <div class="dialog-form">
          <div class="list">
            <div class="input">
              <el-input v-model="userName" placeholder="请输入手机号/邮箱/名称搜索"></el-input>
            </div>
            <div class="input" style="margin-left: 10px;">
              <el-button type="primary" @click="sousuoPost">搜索</el-button>
            </div>
          </div>

          <div class="biaoge">
            <div class="biaotitle">
              <span>手机号/邮箱</span>
              <span>名称</span>
              <!-- <span>备注</span> -->
            </div>
            <div class="biaozhong" v-for="(item,key) in tableData1" :key="key">
              <span>
                <el-radio
                  v-model="radio"
                  :label="item.id"
                  @change="dangeChpan(item)"
                >{{item.mobile}}</el-radio>
              </span>
              <span>{{item.user_name}}</span>
              <!-- <span>{{item.beizhu}}</span> -->
            </div>
          </div>
          <pagination
            :total="total"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
          ></pagination>
          <div class="dibu">
            <div class="buttonNo" @click="quxiao">取消</div>
            <div class="buttonNo2" @click="xuanze">选择</div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
import pagination from "@/components/pagination";
import Pdf from "vue-pdf";

export default {
  data() {
    return {
      title: "", //任务主题
      userName: "",
      //总条数
      total: null,
      pageSize: 10,
      loading: false,
      qiyeOptions: [], //任务参与人企业
      chaoOptions: [], //抄送人企业
      radio: "",
      tableData1: [],
      options: [
        // {
        //   value: "99",
        //   label: "个人中心",
        //   org_type: '1'
        // }
      ],
      optionsKey: "",
      initiator_type: null,
      initiatorId: "", //企业id
      initiatorName: "", //企业名称
      zhangDate: "", //签署截止日期
      zhangDaoDate: "", //文件到期日期
      business_img: "",
      touMingShow: false,
      dialogTableVisible: false,
      data: {
        d: {},
        action: "",
      },
      file: [{ url: "" }],
      dialogVisible: false,
      dialogImageUrl: "",
      disabled: false,
      restaurants: [], //企业下拉第一个
      restaurantRens: [], //企业任务参与人 抄送人
      restaurantNames: [], //真实姓名
      restaurantNames1: [],
      restaurantPhones: [], //手机号
      restaurantPhones1: [],
      EnterPrisePost: [
        // 任务参与人
      ],
      CopyPost: [], //抄送人
      //抄送人  企业
      qiyeChaoObj: {
        main_name: "", //企业名称
        agent_name: "", //真实姓名
        agent_mobile: "", //手机号
        type: 1,
        main_id: "", //企业id
        main_type: "2", //个人
        agent_id: "", //真实姓名id
      },
      //抄送人  个人
      gerenChaoObj: {
        name: "个人",
        agent_name: "", //真实姓名
        agent_mobile: "", //手机号
        type: 2,
        agent_id: "", //真实姓名id
        main_type: "1", //个人
      },
      //任务参与人  企业
      qiyeObj: {
        main_name: "", //企业名称
        agent_name: "", //真实姓名
        agent_mobile: "", //手机号
        main_id: "", //企业id
        main_type: "2", //企业
        agent_id: "", //真实姓名id
        checkedZhang: ["企业章"], //企业章
        type: 1,
      },
      //任务参与人  个人
      gerenObj: {
        name: "个人",
        agent_name: "", //真实姓名
        agent_mobile: "", //手机号
        agent_id: "", //真实姓名id
        main_type: "1", //个人
        checkedZhang: ["手绘章", "模板章"], //手绘章
        type: 2,
      },
      indexArr: ["甲", "乙", "丙", "丁", "戊", "已", "庚", "辛", "壬", "葵"],
      zhangList: ["手绘章", "模板章"], //个人
      gerenList: ["企业章"], //个人
      renIndex: 0, //任务参与人索引
      chaoIndex: 0, //抄送人索引
      zuzhiType: 0, //1任务参与人2抄送人
      keyType: null,
      objData: {}, //1任务参与人2抄送人
      sign_contract_type: "", //文件类型
      wenjianName: "", //文件名字
      queryPickerOptions: {
        disabledDate(time) {
          // return time.getTime() <= Date.now();
          let curDate = new Date().getTime();
          // 这里算出一个月的毫秒数,这里使用30的平均值,实际中应根据具体的每个月有多少天计算
          let day = 30 * 24 * 3600 * 1000;
          let dateRegion = curDate + day;
          return (
            time.getTime() < Date.now() - 8.64e7 || time.getTime() > dateRegion
          );
        },
      },
      queryPickerOptions2: {
        disabledDate(time) {
          return time.getTime() <= Date.now();
        },
      },
    };
  },
  mounted() {
    this.qiyePost();
  },
  methods: {
    esignUserAuthListPost() {
      post(api.esignUserAuthList, {
        auth_status: 30,
      }).then(
        (d) => {
          if (d.status === 0) {
            //console.log(d, "个人真实姓名");
            for (let i = 0; i < d.data.length; i++) {
              var obj = {
                value: d.data[i].user_name,
                address: d.data[i].mobile,
                agent_id: d.data[i].account_id,
              };
              var obj1 = {
                value: d.data[i].mobile,
                address: d.data[i].user_name,
                agent_id: d.data[i].account_id,
              };
              this.restaurantNames1.push(obj);
              this.restaurantPhones1.push(obj1);
            }
          }
        },
        (err) => {
          //error callback
        }
      );
    },
    fanhuiBtn() {
      this.$router.push({ path: "/" });
    },
    selectModel(id) {
      //console.log(id);
      let obj = {};
      obj = this.options.find((item) => {
        //model就是上面的数据源
        return item.value === id; //筛选出匹配数据
      });
      this.initiatorName = obj.label;
      this.initiatorId = obj.account_id;
      this.initiator_type = obj.org_type;
      //console.log("initiatorId"+ obj.account_id)
    },
    handleClose(done) {
      done();
    },
    //企业名称下拉
    qiyePost() {
      post(api.getMerchantBelongToUser).then(
        (d) => {
          //console.log(d, "企业名称");
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
                    this.initiatorName = element.label;
                    this.initiatorId = element.account_id;
                    this.initiator_type = element.org_type;
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
    faqiPost() {
      // return //console.log(this.EnterPrisePost.length);
      if (this.title == "") {
        this.$message.error("请输入任务主题");
        return;
      }
      // console.log(this.title.length,'多活动还带回')
       if (this.title.length > 1 && this.title.length > 50) {
          this.$message.error("任务主题最多50个字");
          return;
        }
        if(this.business_img == ""){
          this.$message.error("请输入合同文件");
          return;
        }
      //任务参与人
      var taskList = [];
      if (this.EnterPrisePost) {
        this.EnterPrisePost.reduce((prev, cur, index, arr) => {
          cur.task_sort = index;
          taskList.push(cur);
        }, 0);
      }
      if (taskList.length == 0) {
        this.$message.error("任务参与人不得少于一人");
        return;
      }
      // if (taskList.length < 2) {
      //   this.$message.error("任务参与人不得少于两人");
      //   return;
      // }

      let hashmap = {};
      // 企业 真实姓名 手机号
      if (this.restaurantNames) {
        for (let item of this.restaurantNames) {
          let key = item.address + "@" + item.value;
          hashmap[key] = item.agent_id;
        }
      }
      let hashmapTwo = {};
      // 个人 真实姓名 手机号
      if (this.restaurantNames1) {
        for (let item of this.restaurantNames1) {
          let key = item.address + "@" + item.value;
          hashmapTwo[key] = item.agent_id;
        }
      }
      var hashmap2 = {};
      //企业
      if (this.restaurantRens) {
        for (let item of this.restaurantRens) {
          //console.log(item, "3333333333");
          let key = item.value;
          hashmap2[key] = item.address;
        }
      }
      //任务参与人
      if (taskList.length > 0) {
        for (let ele of taskList) {
          if (ele.main_name == "") {
            this.$message.error("请输入任务参与人企业");
            return;
          }
          if (ele.agent_name == "") {
            this.$message.error("请输入任务参与人真实姓名");
            return;
          }
          if (ele.agent_mobile == "") {
            this.$message.error("请输入任务参与人手机号");
            return;
          }

          var regMoblie = /^1[345678]\d{9}$/;
          if (!regMoblie.test(ele.agent_mobile)) {
            this.$message.error("手机号格式错误");
            return;
          }

          //真实姓名 手机号
          let key = ele.agent_mobile + "@" + ele.agent_name;
          if (ele.type == 1 && hashmap[key]) {
            ele.agent_id = hashmap[key];
          } else if (ele.type == 2 && hashmapTwo[key]) {
            ele.agent_id = hashmapTwo[key];
          } else {
            ele.agent_id = "";
          }

          //企业
          let key2 = ele.main_name;
          if (hashmap2[key2]) {
            ele.main_id = hashmap2[key2];
          } else {
            ele.main_id = "";
          }
        }
      }
      //抄送人
      if (this.CopyPost.length > 0) {
        for (let ele of this.CopyPost) {
          if (ele.main_name == "") {
            this.$message.error("请输入抄送人企业");
            return;
          }
          if (ele.agent_name == "") {
            this.$message.error("请输入抄送人真实姓名");
            return;
          }
          if (ele.agent_mobile == "") {
            this.$message.error("请输入抄送人手机号");
            return;
          }

          let key = ele.agent_mobile + "@" + ele.agent_name;
          if (ele.type == 1 && hashmap[key]) {
            ele.agent_id = hashmap[key];
          } else if (ele.type == 2 && hashmapTwo[key]) {
            ele.agent_id = hashmapTwo[key];
          } else {
            ele.agent_id = "";
          }

          //企业
          let key2 = ele.main_name;
          if (hashmap2[key2]) {
            ele.main_id = hashmap2[key2];
          } else {
            ele.main_id = "";
          }
        }
      }
      if (this.zhangDate == "") {
        this.$message.error("请输入签署截止日期");
        return;
      }
      if (this.zhangDaoDate == "") {
        this.$message.error("请输入文件到期日期");
        return;
      }
      // console.log(taskList, "任务参与人111111");
      // console.log(this.CopyPost, "抄送人2222222");
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      //  api.tobySigning   'http://192.168.210.220:3602/web/business/businessCtl/tobySigning'
      post(api.tobySigning, {
        initiatorId: this.initiatorId,
        initiatorName: this.initiatorName,
        title: this.title,
        contract_file: this.business_img,
        sign_end_time: this.zhangDate,
        file_end_time: this.zhangDaoDate,
        initiator_type: this.initiator_type || 1,
        notifyList: this.CopyPost,
        taskList: taskList,
      }).then(
        (d) => {
          //console.log(d, "直接发起");

          if (d.status === 0) {
            loading.close();
            this.$message.success("发起成功");
            this.$router.push({ path: "/" });
          } else {
            loading.close();
            this.$message.error(d.msg);
          }
        },
        (err) => {
          //error callback
        }
      );
    },
    handleSizeChange(val) {
      //console.log(`每页 ${val} 条aaaaa`);
      this.pageSize = val;
      if (this.keyType == 1) {
        this.mainCtlPagePost();
      } else {
        this.mainCtlPagePost2();
      }
    },
    handleCurrentChange(val) {
      //console.log(`当前页: ${val}aaaaaaaaaaaaaaaa`);
      if (this.keyType == 1) {
        this.mainCtlPagePost(val);
      } else {
        this.mainCtlPagePost2(val);
      }
    },
    xuanze() {
      if (this.radio == "") {
        this.dialogTableVisible = false;
        return;
      }
      //任务参与人表格
      if (this.zuzhiType == 1) {
        for (let index = 0; index < this.EnterPrisePost.length; index++) {
          if (index == this.renIndex) {
            this.EnterPrisePost[index].agent_mobile = this.objData.mobile;
            this.EnterPrisePost[index].agent_name = this.objData.user_name;
            this.EnterPrisePost[index].agent_id = this.objData.account_id;
            //console.log(this.EnterPrisePost[index].agent_id, "3333");
          }
        }
        //console.log(this.EnterPrisePost, "任务参与人");
        this.dialogTableVisible = false;
      }
      //抄送人表格
      if (this.zuzhiType == 2) {
        for (let index = 0; index < this.CopyPost.length; index++) {
          if (index == this.chaoIndex) {
            this.CopyPost[index].agent_mobile = this.objData.mobile;
            this.CopyPost[index].agent_name = this.objData.user_name;
            this.CopyPost[index].agent_id = this.objData.account_id;
            //console.log(this.CopyPost[index].agent_id, "3333");
          }
        }
        //console.log(this.CopyPost, "抄送人");
        this.dialogTableVisible = false;
      }
    },
    dangeChpan(item) {
      this.objData = item;
      //console.log(item, "选择1");
    },
    //抄送人
    handleChaoIconClick(ev, key, type) {
      this.tableData1 = [];
      this.radio = "";
      //console.log(ev, "文字说明");
      this.chaoIndex = ev;
      this.zuzhiType = key;
      this.keyType = type;
      //console.log(this.zuzhiType, "抄送人");
      if (type == 1) {
        this.mainCtlPagePost();
      } else {
        this.mainCtlPagePost2();
      }
      this.dialogTableVisible = true;
    },
    //任务参与人
    handleIconClick(ev, key, type) {
      this.userName = "";
      this.tableData1 = [];
      this.radio = "";
      //console.log(ev, "文字说明");
      this.renIndex = ev;
      this.zuzhiType = key;
      this.keyType = type;
      //console.log(this.zuzhiType, "任务参与人");
      if (type == 1) {
        this.mainCtlPagePost();
      } else {
        this.mainCtlPagePost2();
      }
      this.dialogTableVisible = true;
    },
    //搜索
    sousuoPost() {
      if (this.zuzhiType == 1) {
        this.mainCtlPagePost();
      } else {
        this.mainCtlPagePost2();
      }
    },
    //表格
    mainCtlPagePost2(size) {
      post(api.esignUserAuthList, {
        currentPage: size || 1,
        pageSize: this.pageSize,
        user_or_mobile: this.userName,
        auth_status: 30,
      }).then(
        (d) => {
          //console.log(d, "??????????????");
          if (d.status === 0) {
            this.total = d.data.count;
            this.tableData1 = d.data.rows;
          }
        },
        (err) => {
          //error callback
        }
      );
    },
    //表格
    mainCtlPagePost(size) {
      post(api.mailList, {
        currentPage: size || 1,
        pageSize: this.pageSize,
        user_or_mobile: this.userName,
        allFlag: 1,
      }).then(
        (d) => {
          //console.log(d, "??????????????");
          if (d.status === 0) {
            this.total = d.data.count;
            this.tableData1 = d.data.rows;
          }
        },
        (err) => {
          //error callback
        }
      );
    },
    quxiao() {
      this.dialogTableVisible = false;
    },
    changeDaoPicker(val) {
      //console.log(val, "444");
      //console.log(this.zhangDate, "4444");
    },
    changePicker(val) {
      //console.log(val, "444");
      //console.log(this.zhangDate, "4444");
    },
    //删除任务参与人
    delGradient(key, val, dome) {
      this[dome].splice(key, 1);
      // var title = "";
      // if (val == "1") {
      //   title = "任务参与方";
      // } else {
      //   title = "抄送人";
      // }
      // this.$confirm("确定删除" + title + "？", "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning"
      // })
      //   .then(() => {
      //     this[dome].splice(key, 1);
      //     this.$message({
      //       type: "success",
      //       message: "删除成功!"
      //     });
      //   })
      //   .catch(() => {
      //     this.$message({
      //       type: "info",
      //       message: "已取消删除"
      //     });
      //   });
    },
    //添加任务参与人企业
    addEnterQiyePrise(obj) {
      var obj = {
        main_name: "", //企业名称
        agent_name: "", //真实姓名
        agent_mobile: "", //手机号
        main_id: "", //企业id
        main_type: "2", //企业类型
        agent_id: "", //真实姓名id
        checkedZhang: ["企业章"], //企业章
        type: 1,
      };
      this.EnterPrisePost.push(obj);
    },
    //添加任务参与人个人
    addEnterGerenPrise(obj) {
      var obj = {
        name: "个人",
        agent_name: "", //真实姓名
        agent_mobile: "", //手机号
        agent_id: "", //真实姓名id
        main_type: "1", //企业类型
        checkedZhang: ["手绘章", "模板章"], //手绘章
        type: 2,
      };
      this.EnterPrisePost.push(obj);
    },
    //添加抄送人 企业
    addEnterQiyeChaoPrise(obj) {
      var obj = {
        main_name: "", //企业名称
        agent_name: "", //真实姓名
        agent_mobile: "", //手机号
        type: 1,
        main_id: "", //企业id
        main_type: "2", //企业类型
        agent_id: "", //真实姓名id
      };
      this.CopyPost.push(obj);
    },
    //添加抄送人 个人
    addEnterGerenChaoPrise(obj) {
      var obj = {
        name: "个人",
        agent_name: "", //真实姓名
        agent_mobile: "", //手机号
        type: 2,
        agent_id: "", //真实姓名id
        main_type: "1", //企业类型
      };
      this.CopyPost.push(obj);
    },
    //真实姓名
    loadAll() {
      post(api.mailList, {
        allFlag: 0,
      }).then(
        (d) => {
          if (d.status === 0) {
            //console.log(d, "真实姓名");
            for (let i = 0; i < d.data.length; i++) {
              var obj = {
                value: d.data[i].user_name,
                address: d.data[i].mobile,
                agent_id: d.data[i].account_id,
              };
              this.restaurantNames.push(obj);
            }
          }
        },
        (err) => {
          //error callback
        }
      );
      // return [
      //   { value: "王昆", address: "18838976079" },
      //   { value: "郝珍华订单", address: "18838946079" }
      // ];
    },
    //手机号
    loadAllPhone() {
      post(api.mailList, {
        allFlag: 0,
      }).then(
        (d) => {
          if (d.status === 0) {
            //console.log(d, "真实姓名");
            for (let i = 0; i < d.data.length; i++) {
              var obj = {
                value: d.data[i].mobile,
                address: d.data[i].user_name,
                agent_id: d.data[i].account_id,
              };
              this.restaurantPhones.push(obj);
            }
          }
        },
        (err) => {
          //error callback
        }
      );
      // return [
      //   { value: "18838976079", address: "王昆" },
      //   { value: "18838946079", address: "郝珍华订单" }
      // ];
    },
    //企业
    loadAllQiye() {
      post(api.getMerchantAllByAuthStatus, {
        auth_status: 30,
      }).then(
        (d) => {
          if (d.status === 0) {
            //console.log(d, "!!!!!!!!!!!!");
            for (let i = 0; i < d.data.length; i++) {
              var obj = {
                value: d.data[i].ent_name,
                address: d.data[i].account_id,
              };
              this.restaurants.push(obj);
              //console.log(this.restaurant, "shujdjdj");
            }
          }
        },
        (err) => {
          //error callback
        }
      );
      // return [{ value: "智信云(天津)科技有限公司", address: "123456" }];
    },

    //企业 真实姓名 手机号
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    //企业
    querySearch(queryString, cb) {
      this.restaurantRens = [];
      post(api.getMerchantAllByAuthStatus, {
        auth_status: 30,
        ent_name: queryString,
      }).then(
        (d) => {
          if (d.status === 0) {
            //console.log(d, "企业下拉");
            this.qiyeOptions = d.data;
            for (let i = 0; i < d.data.length; i++) {
              let obj = {
                value: d.data[i].ent_name,
                address: d.data[i].account_id,
              };
              this.restaurantRens.push(obj);
            }
            cb(this.restaurantRens);
          }
        },
        (err) => {
          //error callback
        }
      );
    },
    //任务参与人企业
    handleSelect(item, key) {
      //console.log(item.main_name, "444444", key);
      for (let i = 0; i < this.qiyeOptions.length; i++) {
        //console.log(item.main_name, this.qiyeOptions[i].ent_name, "77777");
        if (item.main_name == this.qiyeOptions[i].ent_name) {
          this.EnterPrisePost[key].main_id = this.qiyeOptions[i].account_id;
        }
      }
      //console.log(this.EnterPrisePost);
      // for (let i = 0; i < this.restaurants.length; i++) {
      //   if (item.main_name == this.restaurants[i].value) {
      //     for (let index = 0; index < this.EnterPrisePost.length; index++) {
      //       if (index == key) {
      //         this.EnterPrisePost[index].main_id = this.restaurants[i].address;
      //       }
      //     }
      //   }
      // }
    },
    //抄送人企业
    // reChaoSelect(query) {
    //   //console.log(query, "企业暖暖的年");
    //   post(api.getMerchantAllByAuthStatus, {
    //     auth_status: 30,
    //     ent_name: query,
    //   }).then(
    //     (d) => {
    //       if (d.status === 0) {
    //         //console.log(d, "抄送人企业下拉");
    //         this.chaoOptions = d.data;
    //       }
    //     },
    //     (err) => {
    //       //error callback
    //     }
    //   );
    // },
    //抄送人企业
    handleChaoSelect(item, key) {
      // for (let i = 0; i < this.restaurants.length; i++) {
      //   if (item.main_name == this.restaurants[i].value) {
      //     for (let index = 0; index < this.CopyPost.length; index++) {
      //       if (index == key) {
      //         this.CopyPost[index].main_id = this.restaurants[i].address;
      //       }
      //     }
      //   }
      // }

      //console.log(item.main_name, "444444", key);
      for (let i = 0; i < this.qiyeOptions.length; i++) {
        //console.log(item.main_name, this.qiyeOptions[i].ent_name, "77777");
        if (item.main_name == this.qiyeOptions[i].ent_name) {
          this.CopyPost[key].main_id = this.qiyeOptions[i].account_id;
        }
      }
      //console.log(this.CopyPost);
    },
    //真实姓名
    queryNameSearch(queryString, cb, type) {
      //console.log(queryString, cb, type,'选择')
      var restaurantNames = type == 1 ? this.restaurantNames : [];
      var results = queryString
        ? restaurantNames.filter(this.createFilter(queryString))
        : restaurantNames;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    //抄送人真实姓名
    handleSelectName(item, key, arr) {
      //console.log(item, "电动机的角度讲");
      let participantArray =
        item.type == 1 ? this.restaurantNames : this.restaurantNames1;
      for (let i = 0; i < participantArray.length; i++) {
        if (item.agent_name == participantArray[i].value) {
          //console.log(this.CopyPost, "5555");
          for (let index = 0; index < this[arr].length; index++) {
            if (index == key) {
              this[arr][index].agent_mobile = participantArray[i].address;
              this[arr][index].agent_id = participantArray[i].agent_id;
            }
          }
        }
      }
    },
    //抄送人手机号
    handleSelectPhone(item, key, arr) {
      let participantArray =
        item.type == 1 ? this.restaurantPhones : this.restaurantPhones1;
      for (let i = 0; i < participantArray.length; i++) {
        if (item.agent_mobile == participantArray[i].value) {
          for (let index = 0; index < this[arr].length; index++) {
            if (index == key) {
              this[arr][index].agent_name = participantArray[i].address;
              this[arr][index].agent_id = participantArray[i].agent_id;
            }
          }
        }
      }
    },
    //手机号
    queryPhoneSearch(queryString, cb, type) {
      var restaurantPhones = type == 1 ? this.restaurantPhones : [];
      var results = queryString
        ? restaurantPhones.filter(this.createFilter(queryString))
        : restaurantPhones;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },

    handlePictureCardPreview() {
      window.open(this.business_img);
    },
    handleRemove() {
      this.business_img = "";
      this.dialogImageUrl = "";
    },
    getUploadConfig() {
      var that = this;
      post(api.getOssConfig).then(
        (d) => {
          //console.log(d, "阿里接口");
          that.data.d["Bucket"] = d.Bucket;
          that.data.d["OSSAccessKeyId"] = d.OSSAccessKeyId;
          that.data.d["signature"] = d.Signature;
          that.data.d["policy"] = d.policy;
          that.data.d["success_action_status"] = d.success_action_status;
          that.data.action = d.url;
        },
        (err) => {
          //error callback
        }
      );
    },
    beforeUpload(file) {
      var fname = file.name || "";
      //console.log(fname, "温江");
      this.wenjianName = fname;
      var lastidx = fname.lastIndexOf(".");
      var filetype = fname.substring(lastidx + 1);
      //console.log(filetype, "55555");
      this.data.d["key"] =
        "zc_wxapplet_" + new Date().getTime() + "." + filetype;
    },
    handleAvatarSuccess(res, file, files, key, val) {
      //console.log(res, file, files, key);
      var result = res.substring(
        res.indexOf("https://gsb-zc.oss-cn-beijing.aliyuncs.com"),
        res.indexOf("</Location>")
      );
      //console.log(result, "4444");
      this.business_img = result;
      if (this.business_img) {
        let fileName = this.business_img.lastIndexOf("."); //取到文件名开始到最后一个点的长度
        let fileNameLength = this.business_img.length; //取到文件名长度
        let fileFormat = this.business_img.substring(
          fileName + 1,
          fileNameLength
        ); //截
        //console.log(fileFormat);
        this.sign_contract_type = fileFormat;
      }
      this.$forceUpdate();
      //console.log(result, "上传成功");
    },
  },
  components: {
    pagination: pagination,
    Pdf: Pdf,
  },

  created() {
    this.getUploadConfig();
    this.loadAll(); // 真实姓名
    this.loadAllPhone(); //手机号
    this.esignUserAuthListPost();
    // this.loadAllQiye(); //企业
  },
};
</script>

<style lang="less" scoped>
.Sign::-webkit-scrollbar {
  width: 0;
}
.Sign {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #f2f2f2;
  position: relative;
  overflow-y: auto;
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
            padding-left: 30px;
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
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 125px;
    .right {
      float: right;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      box-sizing: border-box;
      .diyiceng {
        width: 100%;
        height: 109px;
        background: rgba(255, 255, 255, 1);
        border-radius: 2px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04),
          0 2px 4px 0 rgba(0, 0, 0, 0.06);
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
            .label {
              width: 92px;
              text-align: right;
            }
            .input {
              width: 324px;
              margin-left: 10px;
              display: flex;
              align-items: center;
              justify-content: center;

              span {
                cursor: pointer;
                width: 94px;
                height: 30px;
                line-height: 30px;
                background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-left: none;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(48, 131, 255, 0.7);
              }
            }
          }
        }
      }
      .diyiQita {
        width: 100%;
        height: 168px;
        background: #ffffff;
        border-radius: 2px;
        margin-top: 10px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04),
          0 2px 4px 0 rgba(0, 0, 0, 0.06);
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
            .label {
              width: 122px;
              text-align: right;
            }
            .input {
              margin-left: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              span {
                cursor: pointer;
                width: 94px;
                height: 30px;
                line-height: 30px;
                background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-left: none;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(48, 131, 255, 0.7);
              }
            }
            .riqi {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.3);
              padding-left: 33px;
            }
          }
        }
      }
      .diyiceng2 {
        width: 100%;
        height: 298px;
        background: #ffffff;
        border-radius: 2px;
        margin-top: 10px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04),
          0 2px 4px 0 rgba(0, 0, 0, 0.06);
        .title {
          width: 100%;
          padding: 20px 32px;
          box-sizing: border-box;
          text-align: left;
          .hetong {
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
          }
          .zhichi {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
          }
        }
        .dialog-form {
          width: 100%;
          .list {
            display: flex;
            align-items: center;
            padding-left: 30px;

            .baowei {
              width: 182px;
              height: 212px;
              position: relative;
              img {
                width: 100%;
                height: 100%;
              }
              .tupian {
                .tubiao {
                  display: none;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: #000000;
                  border-radius: 2px;
                  opacity: 0.5;
                  position: absolute;
                  color: #ffff;
                  font-size: 25px;
                  // display: flex;
                  align-items: center;
                  justify-content: center;
                  .logo {
                    margin-right: 10px;
                  }
                }
              }
              .tupian:hover .tubiao {
                display: flex;
              }
            }
            .label {
              width: 80px;
              text-align: right;
            }
            .input {
              width: 324px;
              margin-left: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              span {
                cursor: pointer;
                width: 94px;
                height: 30px;
                line-height: 30px;
                background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-left: none;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(48, 131, 255, 0.7);
              }
            }
          }
        }
      }
      .diyiSan {
        width: 100%;
        min-height: 130px;
        background: #ffffff;
        border-radius: 2px;
        margin-top: 10px;
        padding-bottom: 24px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04),
          0 2px 4px 0 rgba(0, 0, 0, 0.06);
        .title {
          width: 100%;
          padding: 20px 32px;
          box-sizing: border-box;
          text-align: left;
          .hetong {
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
          }
        }
        .footed {
          display: flex;
          justify-content: space-between;
          width: 94%;
          margin: 0 auto;
          margin-top: 21px;
          .qiyeKuai {
            width: 491px;
            height: 42px;
            border-radius: 2px;
            border: 1px dotted #d9d9d9;
            cursor: pointer;
            .tianjia {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #3083ff;
              display: block;
              text-align: center;
              line-height: 42px;
            }
          }
        }
        .fanwei {
          width: 94%;
          // height: 100px;
          margin: 0 auto;
          .qiyeCan {
            margin-top: 10px;
            .zhongjian {
              width: 100%;
              height: 38px;
              background: #eff0f2;

              .canyu {
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                line-height: 38px;
              }
            }
            .qianshu {
              width: 100%;
              height: 66px;
              background: rgba(250, 250, 250, 1);

              .canyu {
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #000000;
                line-height: 66px;
                cursor: pointer;
                .qiye {
                  width: 180px;
                  display: inline-block;
                }
                .qiyechao {
                  width: 305px;
                  display: inline-block;
                }
                .qiyechao2 {
                  width: 475px;
                  display: inline-block;
                }
              }
            }
          }
        }
      }
    }

    .tanluang {
      height: 210px;
      .daozheng {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
      }
      .shangwei {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        padding-left: 30px;
      }
    }
  }
  .tankuangPost {
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 2px;
    margin-top: 10px;
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
        .label {
          width: 122px;
          text-align: right;
        }
        .input {
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            cursor: pointer;
            width: 94px;
            height: 30px;
            line-height: 30px;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-left: none;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(48, 131, 255, 0.7);
          }
        }
        .riqi {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.3);
          padding-left: 33px;
        }
      }
      .biaoge {
        margin-top: 24px;
        width: 100%;
        .biaotitle {
          width: 100%;
          height: 42px;
          background: #f7f8fa;
          display: flex;
          justify-content: space-around;
          span {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(28, 28, 28, 1);
            line-height: 42px;
          }
        }
        .biaozhong {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          border-bottom: 1px solid #e6e6e6;
          span {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(28, 28, 28, 1);
            line-height: 42px;
          }
        }
      }
      .dibu {
        display: flex;
        justify-content: flex-end;
        margin-top: 72px;
        .buttonNo {
          width: 92px;
          height: 32px;
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #595959;
          line-height: 32px;
          cursor: pointer;
          text-align: center;
          margin-right: 10px;
        }
        .buttonNo2 {
          width: 92px;
          height: 32px;
          background: rgba(48, 131, 255, 1);
          border-radius: 4px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 32px;
          cursor: pointer;
          text-align: center;
        }
      }
    }
  }
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 210px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-upload-list--picture-card {
  margin: 0;
  display: inline;
  vertical-align: top;
  padding-left: 20px;
}
.el-upload--picture-card {
  margin-left: 30px;
}
.Sign .diyiceng .el-input__inner {
  width: 400px;
  height: 30px;
}

.Sign .diyiQita .el-input__inner {
  width: 240px;
  height: 30px;
}
.Sign .tankuangPost .input .el-input__inner {
  width: 280px;
  height: 32px;
}
.Sign .tankuangPost .el-pagination {
  text-align: right;
}

/* .Sign .shouji .el-input__inner {
  width: 88px;
  height: 32px;
} */
.Sign .qiye .el-input__inner {
  width: 180px;
  height: 32px;
}
.Sign .qiyechao .el-input__inner {
  width: 180px;
  height: 32px;
}
.Sign .qiyechao2 .el-input__inner {
  width: 180px;
  height: 32px;
}
.Sign .el-checkbox-group {
  display: inline-block;
  width: 250px;
}
.Sign .el-input__prefix {
  top: -5px;
}
.Sign .el-button--primary {
  height: 32px;
  line-height: 6px;
}
.Sign .el-radio__input.is-checked + .el-radio__label {
  color: rgba(97, 97, 97, 1);
}
.Sign .baoguo .el-input--suffix .el-input__inner {
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}

.Sign .shouji .el-input--suffix .el-input__inner {
    width: 116px;
}
.el-popper[x-placement^="bottom"] {
  width: 180px !important;
}

.el-dialog.is-fullscreen {
  width: 56%;
  margin-top: 150px;
  margin-bottom: 0;
  height: 76%;
  overflow: auto;
  overflow: auto;
}
.el-dialog__body {
  height: 80%;
}
</style>
