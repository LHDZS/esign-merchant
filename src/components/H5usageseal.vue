<style lang="less" scoped>
.h5enterpriseWan {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
  background: #fff;
  .header {
    width: 100%;
    height: 57px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
    line-height: 57px;
    position: fixed;
    z-index: 1000;
    .text {
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #181818;
      text-align: center;
    }
  }
  .baowei {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin: 0 auto;
    padding-top: 120px;
    .zhongbu {
      width: 70%;
      height: auto;
      margin: 0 auto;
      img {
        margin: 0 auto;
        display: block;
        padding-top: 40px;
        width: 100%;
        height: 100%;
      }
    }
    .text {
      font-size: 2.5vh;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      text-align: center;
      padding-top: 44px;
    }
  }
}
</style>

<template>
  <div class="h5enterpriseWan">
    <div class="header">
      <div class="text">签署完成</div>
    </div>
    <div class="baowei">
      <div class="zhongbu">
        <img
          src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_43691602470797584202012104637584fasong.png"
          alt
        />
      </div>
      <div class="text">{{ name }}</div>
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
