<template>
  <div class="usageseal">
    <div class="toubu">
      <div class="juzhong">
        <div class="baowei">
          <img
            class="logo"
            src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_87715967013558162020616915816qianbi.png"
            alt
          />
          <div class="title">签必果</div>
        </div>
      </div>
    </div>
    <div class="dialog">
      <div class="main_right">
        <div class="wenzi2">
          <img
            src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_1938160136572201620202915484216111.png"
            alt=""
          />
        </div>
        <div class="chenggou">{{ name }}</div>
        <!-- <div class="chenggou">文件已签署完成</div> -->
        <div class="qiye" @click="fanhui()">返回主页</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
export default {
  name: "usageseal",
  data() {
    return {
      name: "",
      contractId: "",
    };
  },
  methods: {
    fanhui() {
      console.log("跳转首页");
      this.$router.push({ path: "/" });
    },
    shenpiPost() {
      post(api.callbackSigned, {
        contractId: this.$route.query.contractId || "",
      }).then(
        (d) => {
          if (d.status == 0) {
            this.name = d.msg;
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
  },
  components: {},
  created() {},
  mounted() {
    this.shenpiPost();
  },
};
</script>

<style lang="less" scoped>
.usageseal::-webkit-scrollbar {
  width: 0;
}
.usageseal {
  width: 100%;
  height: 100%;
  padding-top: 60px;
  box-sizing: border-box;
  background: #f2f2f2;
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

  .dialog {
    width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 30px;
    height: 100%;
    .main_right {
      box-sizing: border-box;
      background: #ffffff;
      margin: 0 auto;
      width: 100%;
      height: 546px;
      .qiye {
        width: 200px;
        height: 40px;
        background: #3083ff;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 40px;
        cursor: pointer;
        text-align: center;
        margin: 40px auto;
      }
      .wenzi2 {
        width: 374px;
        height: 240px;
        margin: 0 auto;
        padding-top: 75px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .chenggou {
        text-align: center;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
      }
    }
  }
}
</style>

<style>
</style>
