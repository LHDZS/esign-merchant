<template>
  <component :is="register"></component>
</template>

<script>
import PcRegister from "@/components/PcRegister.vue";
import H5Register from "@/components/H5Register.vue";

export default {
  data() {
    return {
      register: "PcRegister",
    };
  },
  methods: {
    isMobile() {
      //判断数组中是否包含某字符串
      Array.prototype.contains = function (needle) {
        for (i in this) {
          if (this[i].indexOf(needle) > 0) return i;
        }
        return -1;
      };

      var device_type = navigator.userAgent; //获取userAgent信息
      // document.write(device_type); //打印到页面
      var md = new MobileDetect(device_type); //初始化mobile-detect
      var os = md.os(); //获取系统
      // let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if (os) {
        console.log("移动端打开");
        this.register = "H5Register";
      } else {
        console.log("PC端打开");
        this.register = "PcRegister";
      }
    },
  },
  components: {
    PcRegister: PcRegister,
    H5Register: H5Register,
  },
  updated() {},
  created() {
    this.isMobile();
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
</style>