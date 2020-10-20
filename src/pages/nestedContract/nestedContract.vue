<style lang="less" scoped>
.nestedContract::-webkit-scrollbar {
  width: 0;
}
.nestedContract {
  width: 100%;
  // height: calc(100% - 60px);
  // padding-top: 60px;
  height: 100%;
  .toubu {
    width: 100%;
    background: #002140;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
    top: 0;
    .juzhong {
      margin: 0 auto;
      height: 60px;
      width: 95%;
      display: flex;
      justify-content: space-between;
      .right {
        // width: 90px;
        height: 30px;
        // background: #3083ff;
        // border-radius: 2px;
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
          margin-left: 50px;
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
  }
}
</style>

<template>
  <div class="nestedContract">
    <!-- <div class="toubu">
      <div class="juzhong">
        <div class="baowei">
          <img
            class="logo"
            src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_87715967013558162020616915816qianbi.png"
            alt
          />
          <div class="title">签必果</div>
        </div>
        <div class="right">
          <span class="faqiIcon">
            <i class="iconfont icon-chehui" style="font-size:14px;"></i>&nbsp;撤回
          </span>
          <span class="faqiIcon">
            <i class="iconfont icon-cuiqian" style="font-size:14px;"></i>&nbsp;拒签
          </span>
        </div>
      </div>
    </div> -->
    <iframe :src="iframeUlr" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
export default {
  data() {
    return {
      iframeUlr: "",
    };
  },
  mounted() {
     this.signtocontractPost()
  },
  methods: {
    infoPost() {
      return post(api.info).then(
        d => {
          if (d.status == 0) {
            sessionStorage.setItem("agent_id", d.data.account_id);
            
          }
          console.log('1',sessionStorage.getItem('agent_id'))
        },
        err => {
          console.log(err.data.msg);
        }
      );
    },
    async signtocontractPost() {
      console.log('0', sessionStorage.getItem('agent_id'))
      if (!sessionStorage.getItem('agent_id')) {
        await this.infoPost()
      }
      post(api.signtocontract,{
        'taskId': sessionStorage.getItem('taskId'),
        'agent_id': sessionStorage.getItem('agent_id'), //个人
        'main_id':  sessionStorage.getItem('main_id') //企业
      }).then(
        d => {
          console.log('2', sessionStorage.getItem('agent_id'))
          if (d.status == 0) {
            this.iframeUlr = d.data;
            // sessionStorage.removeItem('agent_id');
            sessionStorage.removeItem('taskId');
            // sessionStorage.removeItem('main_id')
          } else {
            // this.$message.error(d.msg);
            this.$router.push({ path: '/' });
          }
          //success callback
        },
        err => {
          console.log(err.data.msg);
          // this.$router.push({ path: '/' });
          //error callback
        }
      );
    }
  },
  components: {},
};
</script>
