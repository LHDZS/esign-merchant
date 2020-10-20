<template>
  <div id="app" v-if="navigationBarType">
    <navigationBar :loginPhone="loginPhone"></navigationBar>
    <!-- <navigationBarLeft :menuLeftArr="menuLeftArr" :activeIndex="activeIndex"></navigationBarLeft> -->
    <div class="main">
      <div class="view"><router-view /></div>
    </div>
  </div>
  <div id="appNo" v-else>
    <router-view />
  </div>
</template>

<script>
import navigationBar from "@/components/navigationBar";
import navigationBarLeft from "@/components/navigationBarLeft";

import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
import { getUrlKey } from "@/utils";

export default {
  name: "App",
  data() {
    return {
      activeIndex: "",
      navigationBarType: true,
      navigationBarLeftType: true,
      navWhiteList: [
        "Login",
        "Register",
        "Sign",
        "nestedContract",
        "emptyvuedraggable",
        "h5EnterpriseYiyuan",
        "Seal",
        "enterpriseConsole",
        "h5enterprise",
        "h5enterprise2",
        "h5enterpriseYin",
        "h5enterpriseWan",
        "h5authentication",
        "h5PersonalYiyuan",
        "h5personalShou",
        "h5personalYin",
        "h5personalWan",
        "h5corporatePayment",
        "Usageseal",
      ],
      menuLeftArr: [],
      menuArr: [],
      loginPhone: "",
    };
  },
  watch: {
    $route(to, from) {
      if (from.name == "Login") {
      }
      if (this.navWhiteList.indexOf(to.name) >= 0) {
        this.navigationBarType = false;
      } else {
        this.navigationBarType = true;
      }
    },
  },
  components: {
    navigationBar: navigationBar,
    navigationBarLeft: navigationBarLeft,
  },
  mounted() {
    this.loginPhone = sessionStorage.getItem("loginPhone");
    // 导航菜单状态获取
    this.activeIndex = sessionStorage.getItem("activeIndex") || "0-0";
    this.isMobile();
  },
  created() {
    if (sessionStorage.getItem("taskId")) {
      //console.log('发起请求')
      post(api.findtotaskId, {
        taskId: sessionStorage.getItem("taskId"),
      }).then(
        (d) => {
          //console.log(d,'签署');
          if (d.status == 0) {
            sessionStorage.setItem("data", JSON.stringify(d.data));
            if (sessionStorage.getItem("loginPhone") != d.data.agent_mobile) {
              sessionStorage.removeItem("loginPhone");
              sessionStorage.removeItem("esignmerchantsid");
              this.$router.push({ path: "/login" });
            }
            if (d.data.status == 1) {
              if (d.data.approvetype == 1) {
                if (sessionStorage.getItem("esignmerchantsid")) {
                  this.$message.error("请先进行个人认证");
                } else {
                  this.$message.success("请登录");
                }
                this.$router.push({ path: "/personalShou" });
              } else if (d.data.approvetype == 2) {
                if (sessionStorage.getItem("esignmerchantsid")) {
                  this.$message.error("请先进行企业认证");
                } else {
                  this.$message.success("请登录");
                }
                this.$router.push({ path: "/enterprise" });
              } else if (d.data.approvetype == 0) {
                this.$router.push({ path: "/nestedContract" });
              } else {
                this.$message.error("认证中");
                this.$router.push({ path: "/" });
              }
            } else {
              this.$message.error("合同已签署");
              sessionStorage.removeItem("taskId");
            }
            //console.log('跳走');
            // this.$router.push({ path: '/nestedContract' });
          } else {
            this.$message.error(d.msg);
          }
          //success callback
        },
        (err) => {
          //error callback
        }
      );
    }

    if (this.navWhiteList.indexOf(this.$router.history.current.name) >= 0) {
      this.navigationBarType = false;
    } else {
      this.navigationBarType = true;
    }
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
      // alert(os, "型号");
      // let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if (os) {
        console.log("移动端打开");
      } else {
        console.log("PC端打开");
      }
    },
  },
  onbeforeunload() {
    //console.log('页面销毁')
    sessionStorage.removeItem("taskId");
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background: rgba(242, 242, 242, 1);
  overflow-y: auto;
  .main {
    width: 100%;
    height: calc(100% - 64px);
    // overflow-y: auto;
    background: rgba(242, 242, 242, 1);
  }
}
#appNo {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background: rgba(242, 242, 242, 1);
  // background:rgba(242,242,242,1);
  // overflow-y: auto;
}
</style>

<style>
.loading {
  display: inline-block;
  width: 54px;
  height: 56px;
  background: url(./assets/img/bars.svg);
  background-size: cover;
}
.el-range-editor.el-input__inner {
  padding: 0px 10px !important;
}
.el-range-editor--small.el-input__inner {
  line-height: 20px !important;
}

.el-input--suffix .el-input__inner {
  height: 32px !important;
  line-height: 32px !important;
}
.main .el-input__inner {
  height: 32px !important;
  line-height: 32px !important;
}

.el-dialog__footer {
  padding: 12px 20px 12px 20px !important;
  border-top: 1px solid #f4f4f4;
}
.el-message-box__status {
  top: -30px;
}
.el-message-box__header {
  padding-left: 50px !important;
}
.el-message-box {
  width: 522px !important;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
/* .el-message-box__status {
  top: -30px;
} */
/* .el-message-box__title {
  padding-left: 35px;
} */
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: #fff !important;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: none !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none !important;
}
.el-button--primary {
  background: rgba(48, 131, 255, 1) !important;
  border-color: rgba(48, 131, 255, 1) !important;
}
.el-date-editor .el-range-input {
  height: 95% !important;
}
</style>
