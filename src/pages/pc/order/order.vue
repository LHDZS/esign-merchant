<style lang="less" scoped>
.order {
     width: 1200px;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
    margin: 0 auto;
  .header {
    width: 100%;
    height: 65px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 29px;
    box-sizing: border-box;
    margin-top: 20px;
    .title {
      width: 100%;
      height: 52px;
      line-height: 52px;
      .fanhui {
        float: left;
        font-size: 14px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        position: relative;
        cursor: pointer;
      }
      .fanhui:after {
        content: "";
        position: absolute;
        top: 20px;
        right: -16px;
        width: 1px;
        height: 13px;
        background-color: #979797;
      }
      .qianyue {
        float: left;
        margin-left: 24px;
        font-size: 14px;
        font-family: PingFangSC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
    }
    .wenzi {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
    .zimu {
      font-size: 25px;
      font-family: ArialMT;
      color: rgba(0, 0, 0, 1);
    }
  }
  .main {
    width: 100%;
    min-height: calc(100% - 100px);
    background-color: #fff;
    padding: 5px 23px;
    box-sizing: border-box;
    .top-search {
      width: 100%;
      overflow: hidden;
      .item {
        height: 46px;
        line-height: 46px;
        float: left;
        margin-bottom: 10px;
        margin-left: 30px;

        .active {
              display: inline-block;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.85);
              width: 88px;
              height: 24px;
              background: #d6e6ff;
              border-radius: 12px;
              line-height: 24px;
              margin-right: 20px;
              cursor: pointer;
              text-align: center;
        }
        .default {
          display: inline-block;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
          width: 88px;
          height: 24px;
          border-radius: 12px;
          line-height: 24px;
          margin-right: 20px;
          cursor: pointer;
            text-align: center;
        }

        div {
          display: inline-block;
          min-width: 294px;
          height: 46px;
          text-align: center;
          vertical-align: middle;
        }
      }
    }
    .middle-button {
      width: 100%;
      text-align: left;
      padding-top: 10px;
    }
    .bawei {
      width: 100%;
      margin-top: 20px;
      .top-table {
        width: 100%;
        margin-top: 20px;
        .toubu {
         width: 100%;
          height: 36px;
          background: #f5f5f5;
          line-height: 36px;
          text-align: center;
          span {
            display: inline-block;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
            margin-right: 20px;
            cursor: pointer;
            width: 102px;
          }
        }
      }
      .tablebiao {
        width: 100%;
        margin-top: 20px;
        .biaoge {
              height: 30px;
              background: #f4f8fd;
              line-height: 30px;
              border: 1px solid rgba(243,243,243,1);
          .toubu {
            float: left;
            padding-left: 30px;
            span {
              display: inline-block;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(0, 0, 0, 1);
              margin-right: 20px;
              cursor: pointer;
            }
          }
          .toubu2 {
            float: right;
            span {
              display: inline-block;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              margin-right: 20px;
              cursor: pointer;
            }
          }
        }

        .biankuang {
          width: 100%;
          height: 88px;
          .toubu {
            // line-height: 88px;
            width: 100%;
            display: flex;
            height: 88px;
            border-right: 1px solid #f3f3f3;
            .baozhu {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #000000;
              cursor: pointer;
              flex: 1;
              display: flex;
              height: 88px;
              border: 1px solid #f3f3f3;
              justify-content: center;
              align-items: center;
              border-right: none;
              border-top: none;
              .wenhao{
              width: 15px;
              height: 16px;
              border: 1px solid #3083FF;
              border-radius: 50px;
              text-align: center;
              color: #3083FF;
              cursor: pointer;
              }
            }
          }
         
        }
      }
    }

    .bottom-table {
      width: 100%;
      margin-top: 20px;
      span {
        color: rgba(24, 107, 255, 1);
        font-size: 14px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
        cursor: pointer;
      }
    }
  }
}
</style>
<style>
.order .el-button.is-round {
  padding: 0 !important;
}
</style>

<template>
  <div class="order">
    <div class="main" v-show="detailsType">
      <div class="top-search">
        <div class="item">
          <span>下单时间：</span>
          <div>
            <el-date-picker
              v-model="createDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
        </div>
        <div class="item">
          <span>订购产品：</span>
          <div>
            <el-select v-model="chanpin" size="small" placeholder="请选择订购产品">
              <el-option
                v-for="item in chanpinOptions"
                :key="item.product_id"
                :label="item.product_name"
                :value="item.product_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="item">
          <span style="width: 30px;"></span>
          <el-button type="primary" @click="merchantsSearch" size="small">搜索</el-button>
          <el-button @click="merchantsReset" plain size="small">重置</el-button>
        </div>
        <div class="top-search">
          <div class="item">
            <span>付款状态：</span>
            <div>
              <el-select v-model="fuKuan" size="small" placeholder="请选择付款状态">
                <el-option
                  v-for="item in fukuanOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="item">
            <span
              :class="activeClass==item.id ? 'active' : 'default'"
              v-for="(item,key) in checkBoxArr"
              :key="key"
              @click="selectClick(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="bawei">
        <div class="top-table">
          <div class="toubu">
            <span>订单详情</span>
            <span>订单金额</span>
            <span>单价</span>
            <span>产品规格数量</span>
            <span>有效时间</span>
            <span>已使用量</span>
            <span>当前余量</span>
            <span>付款状态</span>
            <span>操作</span>
          </div>
        </div>
        <div class="tablebiao" v-for="(item,key) in table1obj" :key="key">
          <div class="biaoge">
            <span class="toubu">
              <span>订单编号:</span>
              <span>{{item.id}}</span>
              <span>合同编号:</span>
              <span>{{item.contract_id}}</span>
              <span>下单时间</span>
              <span>{{item.created_at}}</span>
            </span>
            <span class="toubu2" :style="'color:' + colorArr[item.live_status]">
              <i :class="'iconfont' + ' ' + iconArr[item.live_status]"></i>
              <span>{{item.live_status_name}}</span>
            </span>
          </div>

          <div class="biankuang">
            <div class="toubu">
              <span class="baozhu">{{item.product_name}}</span>
              <span class="baozhu">{{item.price}}</span>
              <!-- {{item.product_unit_price==-1 ? ' 分开计价' : item.product_unit_price+'元/份'}} -->
                <span v-if="item.product_unit_price==-1" class="baozhu">  
                  <span>分开计价</span>
                  <el-popover
                  placement="top-start"
                  title=""
                  width="339"
                  trigger="hover">
                  <div v-for="(item,key) in item.eorderproduct" :key="key">
                  <div style="margin-top:10px;">
                      <span>{{item.product_name}}</span> <span style="float: right;">{{item.price}}元/次</span>
                  </div>
                  </div>
                   <div slot="reference" class="wenhao">?</div>
                </el-popover>
                </span>
                <span v-else class="baozhu">{{item.product_unit_price}}元/份</span>
               
              <span class="baozhu">{{item.product_specifications}}</span>
              <span class="baozhu">{{item.live_start | time}}至{{item.live_end | time}}</span>
              <span class="baozhu">{{item.allowance}}</span>
              <span v-if="item.fee" class="baozhu">
                <span>{{item.fee.balance}}</span>
              </span>
          
              <span class="baozhu">{{item.pay_status_name}}</span>
              <span class="baozhu">
                <el-button  @click="viewDetails(item)" :disabled="item.live_status != 20" type="primary" round>查看账单</el-button>
              </span>
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
    <div class="header" v-show="!detailsType">
      <div class="title">
        <div class="fanhui" @click="detailsType = true">
          <i class="el-icon-arrow-left"></i>返回
        </div>
        <span class="qianyue">账单记录</span>
      </div>
    </div>
    <div class="main" v-show="!detailsType">
      <div class="top-search">
        <div class="item">
          <span>账单时间：</span>
          <div>
            <!-- <el-date-picker v-model="zhangDate" type="month" placeholder="选择月"></el-date-picker> -->
          <el-date-picker
          v-model="zhangDate"
          @change="changePicker"
          type="month"
          placeholder="选择月"
          value-format="yyyy-MM">
        </el-date-picker>
          </div>
        </div>
        <div class="item">
          <span>产品名称：</span>
           <el-select v-model="chanpinName" size="small" placeholder="请选择产品名称" @change="chanpins">
                <el-option
                  v-for="item in nameChanOptions"
                  :key="item.product_id"
                  :label="item.product_name"
                  :value="item.product_id"
                ></el-option>
              </el-select>
        </div>
        <div class="item">
          <span style="width: 30px;"></span>
          <el-button type="primary" @click="zhangSearch" size="small">搜索</el-button>
          <el-button @click="zhangReset" plain size="small">重置</el-button>
        </div>
      </div>
      <div class="bottom-table">
        <el-table
          ref="multipleTable"
          :data="tableData2"
          style="width: 100%"
          :header-cell-style="{background:'rgb(250, 250, 250)'}"
        >
          <el-table-column
            v-for="(item,key) in tableArray"
            :key="key"
            :prop="item.prop"
            :label="item.label"
            :show-overflow-tooltip="true"
          ></el-table-column>
        </el-table>
      </div>
      <pagination
        :total="totalZhang"
        @handleSizeChange="handleSizeZhang"
        @handleCurrentChange="handleCurrentZhang"
      ></pagination>
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
      dangCount: "0.00",
      kePay: "0.00",
      detailsType: true,
      radio: "",
      colorArr: {
        10: "#FF7217",
        20: "#12CE66",
        30: "#7A7A7A"
      },
      iconArr: {
        10: "icon-daishengxiao",
        20: "icon-shengxiaozhong",
        30: "icon-yizhongzhi"
      },
      table1obj: [
        // {
        //   id: 1,
        //   sign_id: 2,
        //   created_at: "2018-10-2",
        //   live_status: 10,
        //   live_status_name: "待生效",
        //   orderInfo: "悟空签署服务（按份）",
        //   price: "30",
        //   product_unit_price: "3",
        //   product_count: "1",
        //   created_at: "2018-09-1至2018-03-09",
        //   status_name: "3",
        //   status_name3: "4",
        //   pay_status_name: "付款状态"
        // }
      ],
      chanpinName:"",
      createDate: ["", ""],
      tableArray: [],
      nameChanOptions:[],
      product_property: "",
      order_id: "",
      tr_id: "",
      tableArr: {
        "2": [
          {
            label: "消费时间",
            prop: "spended_at"
          },
          {
            label: "平台名称",
            prop: "platform_name"
          },
          {
            label: "签署任务名称",
            prop: "engine_contract_name"
          },
          {
            label: "签署ID",
            prop: "engine_contract_id"
          },
          {
            label: "消费数量",
            prop: "spended_num"
          },
          {
            label: "实际使用方",
            prop: "actual_spend_name"
          }
        ],
        "1": [
          {
            label: "消费时间",
            prop: "spended_at"
          },
          {
            label: "平台名称",
            prop: "platform_name"
          },
          {
            label: "子服务名称",
            prop: "product_info.product_name"
          },
          {
            label: "使用方",
            prop: "user_name"
          },
          {
            label: "消费金额",
            prop: "product_info.price"
          },
          {
            label: "实际使用方",
            prop: "actual_spend_name"
          }
        ]
      },
      fuKuan: "", //付款状态
      chanpin: "", //产品
      zhangDate: "", //账单时间
      fukuanOptions: [
        {
          value: "10",
          label: "待付款"
        },
        {
          value: "20",
          label: "已付款"
        },
        {
          value: "30",
          label: "付款失败"
        }
      ],
      chanpinOptions: [],
      activeClass: 1,
      checkBoxArr: [{ id:1,name: "所有订单" }, { id:10,name: "待生效订单" },{id:20, name: "已生效订单" } ,{ id:30,name: "已终止订单" }],
      //总条数
      total: null,
      totalZhang:null,
      pageSize: 10,
      pageZhangSize:10,
      tableData2: [
      ],
    };
  },
  created() {
    this.tr_id = this.$route.query.trId;
        //订购产品
    post(api.getMerchantLiveAllProducts).then(
      d => {
        //console.log(d, "订购产品");
        this.chanpinOptions = d.data;
      },
      err => {
        //error callback
      }
    );
  },
  mounted() {
    this.orderCtlPagePost();
  },
  methods: {
    changePicker(val) {
      //console.log(val,'444');
      //console.log(this.zhangDate,'4444');
    },
       // 详情点击产品
    chanpins(row) {
      //console.log(row);
      
      for (let i = 0; i < this.nameChanOptions.length; i++) {
        //console.log(this.nameChanOptions);
        if (row == this.nameChanOptions[i].product_id) {
          //console.log(this.nameChanOptions[i],'ddddddddddddddddd');
          var j = this.nameChanOptions[i].product_property;
          this.tableArray = this.tableArr[j];
          // 赋值
          this.product_property = j;
          // 请求
           this.zhangPagePost();
        }
        
      }
    },
    viewDetails(row) {
     //console.log(row.eorderproduct[0])
      if (row.eorderproduct[0].product_property) {
        this.detailsType = false;
        var i = row.eorderproduct[0].product_property || 1
        this.tableArray = this.tableArr[i];
        // 赋值
        this.nameChanOptions = row.eorderproduct;
        this.chanpinName = row.eorderproduct[0].product_id
        this.order_id = row.eorderproduct[0].order_id;
        this.zhangDate = this.$moment().format('YYYY-MM');
        this.product_property = row.eorderproduct[0].product_property;
        // 请求
        this.zhangPagePost();
      }
      
      // this.product_property = row.product_info.product_property || "1";
      //console.log.log(this.deliveryForm.deliver_time,'444444')
    
    },
    selectClick(item) {
      this.activeClass = item.id;
      //console.log(this.activeClass, "文字说明");
      this.orderCtlPagePost();
    },
    // 重置
    merchantsReset() {
      this.tr_id = "";
      this.createDate = ["", ""];
      this.chanpin = "";
      this.fuKuan = "";
      this.orderCtlPagePost();
    },
    // 查看详情重置
    zhangReset() {
      this.zhangDate = this.$moment().format('YYYY-MM');
      this.zhangPagePost();
    },
    //查看详情搜索
    zhangSearch() {
      this.zhangPagePost();
    },
    //搜索
    merchantsSearch() {
      this.orderCtlPagePost();
    },
    handleSizeZhang(val) {
      //console.log(`每页 ${val} 条aaaaa`);
      this.pageSize = val;
      this.zhangPagePost();
    },
    handleCurrentZhang(val) {
      //console.log(`当前页: ${val}aaaaaaaaaaaaaaaa`);
      this.zhangPagePost(val);
    },
    handleSizeChange(val) {
      //console.log(`每页 ${val} 条aaaaa`);
      this.pageSize = val;
      this.orderCtlPagePost();
    },
    handleCurrentChange(val) {
      //console.log(`当前页: ${val}aaaaaaaaaaaaaaaa`);
      this.orderCtlPagePost(val);
    },
    //查看详情搜索数据
    zhangPagePost(size) {
         var url = "";
      if (this.product_property == 1) {
        url = api.pageEorderAuthLog;
      } else {
        url = api.pageEorderSignLog;
      }
      post(url, {
        currentPage: size || 1,
        pageSize: this.pageZhangSize,
        spendedDate: this.zhangDate,
        product_property: this.product_property,
        product_id: this.chanpinName,
        order_id: this.order_id
      }).then(
        d => {
          //console.log(d.status);
          //  loading.close();
          if (d.status === 0) {
            //console.log(d, "??????????????");
            this.totalZhang = d.data.count;
            this.tableData2 = d.data.rows;
              for (let i = 0; i < d.data.rows.length; i++) {
              const element = d.data.rows[i];
              if(element.spended_num){
                element.spended_num =  element.spended_num + '份';
              }
               if(element.product_info.price){
                element.product_info.price =  element.product_info.price + '元';
              }
            }
          }
        },
        err => {
          //error callback
        }
      );
    },
    orderCtlPagePost(size) {
        const loading = this.$loading({
        lock: true,
        spinner: "loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      post(api.pageEorder, {
        currentPage: size || 1,
        pageSize: this.pageSize,
        product_id: this.chanpin,
        createdBegin: this.createDate[0],
        createdEnd: this.createDate[1],
        pay_status: this.fuKuan,
        live_status: this.activeClass == 1 ? '':this.activeClass,
        id: this.tr_id
      }).then(
        d => {
          //console.log(d.status);
          loading.close();
          if (d.status === 0) {
            //console.log(d, "??????????????");
            this.total = d.data.count;
            this.table1obj = d.data.rows;
          } 
        },
        err => {
          loading.close();
          //error callback
        }
      );
    }
  },
  components: {
    pagination: pagination
  }
};
</script>
