<template>
  <div class="navigationBar">
    <div class="main">
      <div class="main_left" @click="homecli">
        <img
          class="logo"
          src="https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_255615959064670102020281121710logo.png"
          alt
        />
        <div class="title">签必果</div>
      </div>
      <div class="main_left" v-if="$route.meta.title">
        <span class="name">{{$route.meta.title}}</span>
      </div>
      <div class="menu" v-if="$route.meta.navType">
        <el-menu  
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#FFFFFF"
          text-color="#969DB3"
          active-text-color="#3083FF"
          @select="handleSelect">
          <el-menu-item v-for="(item,key) in menuArr" :key="key" :index="item.path">{{item.name}}</el-menu-item>
        </el-menu>
      </div>
      <div class="my">
        <el-dropdown @command="menuTrigger">
          <span class="el-dropdown-link">
         
           <i class="iconfont icon-touxiang" style="color: #3083FF ;"></i>
              {{loginPhone}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-unlock" command="/password">账户密码</el-dropdown-item>
            <el-dropdown-item icon="el-icon-video-play" command="/login">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <exitPassword :dialogInvoice="dialogInvoice" @handleClose="handleClose"></exitPassword>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { get, post } from "@/api/index.js";
import exitPassword from "@/components/exitPassword";

export default {
  name: "navigationBar",
  data() {
    return {
      activeIndex: "/",
      loginPhone: "",
      dialogInvoice: false,
       menuArr: [
        {
          name: "首页",
          icon: "iconfont icon-1",
          path: "/"
        },
        {
          name: "合同管理",
          icon: "iconfont icon-2",
          path: "/contractManagement"
        },
         {
          name: "审批管理",
          icon: "iconfont icon-gth-gsgetihuzhongxin",
          path: "/shenpiManagement"
        }
        // {
        //   name: "账户管理",
        //   icon: "iconfont icon-1",
        //   path: "/account"
        // },
        // {
        //   name: "订单管理",
        //   icon: "iconfont icon-2",
        //   path: "/order"
        // },
        // {
        //   name: "商户信息",
        //   icon: "iconfont icon-gth-gsgetihuzhongxin",
        //   path: "/merchants"
        // }
       
      ]
    };
  },
  watch: {
    $route(val, wVal) {
      //console.log(val,wVal,'++++++++++++++++++++++')
      
    }
  },
  computed: {
    // 我们使用计算属性来获取到当前点击的菜单的路由路径，然后设置default-active中的值
    // 使得菜单在载入时就能对应高亮
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      // 可以在路由配置文件中设置自定义的路由路径到meta.activeMenu属性中，来控制菜单自定义高亮显示
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  },
  components: {
    exitPassword: exitPassword
  },
  props:{
    // loginPhone: String
    // menuArr:Array
  },
  methods: {
    homecli() {
      this.$router.push({ path: '/' });
    },
    handleClose() {
      this.dialogInvoice = false;
    },
    handleSelect(key, keyPath) {
      //console.log(key, "菜单点击事件", this.activeIndex);
      this.$router.push({ path: key });
    },
    menuTrigger(command) {
      //console.log.log('?????????',command)
      if (command == "/login") {
        sessionStorage.removeItem("loginPhone");
        sessionStorage.removeItem("esignmerchantsid");
        this.$router.push({ path: "/login" });
      }
      if (command == "/password") {
        this.dialogInvoice = true;
        //console.log.log(typeof this.dialogInvoice, "4444");
      }
    }
  },
  mounted() {
    this.loginPhone = sessionStorage.getItem("loginPhone");
    //   获取用户信息
  },
  created() {
    // this.activeIndex = '/' + this.$router.history.current.path.split('/')[1]
    // for (let i = 0; i < this.menuArr.length; i++) {
    //   if (this.activeIndex == this.menuArr[i].path) {
    //     this.$emit('handleSelect','',this.menuArr[i].submenu)
    //   }
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.navigationBar {
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
  overflow: hidden;
  min-width: 1200px;
  .main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .main_left {
      height: 60px;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .name {
        height:22px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:22px;
        border-left: 1px solid rgba(217, 217, 217, 1);
        padding-left: 30px;
        margin-left: 14px;
      }
      .banli{
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
      }
      .logo {
        width: 30px;
        height: 30px;
      }
      .title {
        float: left;
        margin-left: 8px;
        line-height: 60px;
        text-align: center;
        font-size:24px;
        font-weight: 600;
        font-family: PingFangSC;
        color: rgba(26, 28, 45, 1);
        span {
          font-size: 16px;
        }
      }
    }
    .menu {
      float: left;
      height: 100%;
      padding-left: 50px;
    }
    .my {
      float: right;
      height: 100%;
      line-height: 60px;
      margin-right: 24px;
      font-size: 14px;
      font-family: PingFangSC;
      font-weight: 400;
      color: #333;
      .el-dropdown {
        color: #333;
      }
    }
  }
}
</style>

<style>
/* .navigationBar .el-menu--horizontal>.el-menu-item {
  width: 130px;
  height: 58px;
  line-height: 58px;
} */
.navigationBar .el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
</style>
