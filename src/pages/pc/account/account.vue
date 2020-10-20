<style lang="less" scoped>
.account {
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
    margin-top: 22px;
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
          width: 60px;
          height: 24px;
          background: #D6E6FF;
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
          width: 60px;
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

<template>
  <div class="account">
    <div class="header">
      <span class="wenzi">当前余额：</span>
      <span class="zimu">{{dangCount}}</span>
      <span class="wenzi">元</span>
      <span style="padding-left: 100px;">
        <el-divider direction="vertical"></el-divider>
      </span>
      <span style="padding-left: 100px;">
        <span class="wenzi">可用金额：</span>
        <span class="zimu">{{kePay}}</span>
        <span class="wenzi">元</span>
      </span>
    </div>
    <div class="main">
      <div class="top-search">
        <div class="item">
          <span>时间：</span>
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
          <span
            :class="activeClass==item.id ? 'active' : 'default'"
            v-for="(item,key) in checkBoxArr"
            :key="key"
            @click="selectClick(item)"
          >{{item.name}}</span>
        </div>
        <div class="item">
          <span></span>
          <el-radio v-model="radio" label="1">收入</el-radio>
          <el-radio v-model="radio" label="2">支出</el-radio>
        </div>
        <div class="item">
          <span style="width: 30px;"></span>
          <el-button type="primary" @click="merchantsSearch" size="small">搜索</el-button>
          <el-button  @click="merchantsReset" plain size="small">重置</el-button>
        </div>
      </div>
      <div class="bottom-table">
        <el-table
          ref="multipleTable"
          :data="tableData1"
          style="width: 100%"
          :header-cell-style="{background:'rgb(250, 250, 250)'}"
        >
          <el-table-column prop="trade_data_id" label="流水号" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="created_at" label="日期" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="amount" label="收入(元)" :show-overflow-tooltip="true">
            <template slot-scope="scope" v-if="scope.row.trade_type === 1">
              <div style="color:rgba(34, 175, 107, 1)">{{scope.row.amount}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="amount" label="支出(元)" :show-overflow-tooltip="true">
            <template slot-scope="scope" v-if="scope.row.trade_type === 2">
              <div style="color: rgba(245, 34, 45, 1) ">-{{scope.row.amount}}</div>
            </template>
          </el-table-column>
         <el-table-column prop="balance_amount" label="余额(元)" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="pay_type" label="支付方式" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <div>{{scope.row.pay_type | pay}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="trade_type" label="项目" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <div>{{scope.row.trade_type | trade}}</div>
            </template>
          </el-table-column>
          <el-table-column label="详情" width="100">
             <template slot-scope="scope">
           <div v-if="scope.row.trade_type == 2">
              <span @click="viewDetails(scope.row)">查看详情</span>
          </div>
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
      createDate: ["", ""],
      activeClass: '',
      checkBoxArr: [{ id:1,name: "本月" }, {id:2, name: "近半年" }, { id:3,name: "近一年" }],
      //总条数
      total: 400,
      pageSize: 10,
      tableData1: [
      ]
    };
  },
    mounted() {
    this.orderCtlPagePost();
  },
  methods: {
    viewDetails(row){
       this.$router.push({path: '/order' ,query:{
          trId: row.trade_data_id
        }})
    },
    selectClick(item) {
      this.activeClass = item.id;
      //console.log(this.activeClass,'文字说明')
    },
    // 重置
    merchantsReset() {
      this.createDate = ["", ""];
      this.activeClass = "";
      this.radio = "";
      this.orderCtlPagePost();
    },
    merchantsSearch() {
      this.orderCtlPagePost();
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
     orderCtlPagePost(size) {
       const loading = this.$loading({
        lock: true,
        spinner: 'loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      post(api.accountmanagement, {
        currentPage: size || 1,
        pageSize: this.pageSize,
        timetype: this.activeClass,
        beginTime: this.createDate[0],
        entTime: this.createDate[1],
        amount_type: this.radio
      }).then(
        d => {
          //console.log(d.status);
          loading.close();
          if (d.status === 0) {
            //console.log(d, "??????????????");
            this.total = d.data.count;
            this.tableData1 = d.data.rows;
            this.dangCount = d.data.balance_amount;
            this.kePay = d.data.available_amount;

          }
        },
        err => {
          loading.close();
          //error callback
        }
      );
    },
  },
  components: {
    pagination: pagination
  }
};
</script>
