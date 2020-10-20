

<template>
  <div class="merchants">
    <!-- 详情 -->
    <div class="mains" id="baowei">
      <div class="content">
        <div class="xinxi">
          <div class="names">
            <div class="shu"></div>
            <div class="name">基本信息</div>
          </div>
          <div class="box4">
              <span class="baospan">
                <span class="laber">商户ID：</span>
                {{orderListObj.id}}
              </span>
              <span class="baospan">
                <span class="laber">商户名称：</span>
                {{orderListObj.name}}
              </span>
              <span class="baospan">
                <span class="laber">统一社会信用代码：</span>
                {{orderListObj.credit_code}}
              </span>
              <div class="box_imgs">
                <div class="box-item">
                  <div>营业执照：</div>
                  
                  <div class="box_img">
                    <!-- <img
                      @click="detailsImage(orderListObj.business_lincense_img)"
                      :src="orderListObj.business_lincense_img"
                      alt
                    /> -->
                     <el-upload
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false"
                        :file-list="file"
                        >
                          <div slot="file" slot-scope="{file}">
                            <img
                              class="el-upload-list__item-thumbnail"
                              :src="file.url" alt=""
                            >
                            <span class="el-upload-list__item-actions">
                              <span
                                class="el-upload-list__item-preview"
                                @click="handlePictureCardPreview(file)"
                              >
                                <i class="iconfont icon-yanjing"></i>
                              </span>
                              <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleDownload(file)"
                              >
                                <i class="iconfont icon-xiazai"></i>
                              </span>
                            </span>
                          </div>
                          </el-upload>
                  </div>
                  <div>
                    <span></span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="xinxi">
          <div class="names">
              <div class="shu"></div>
            <div class="name">结算信息</div>
          </div>
          <div class="box4">
              <span class="baospan">
                <span class="laber">开户名称：</span>
                {{orderListObj.account_name}}
              </span>
              <span class="baospan">
                <span class="laber">对公账号：</span>
                {{orderListObj.account_bank_no}}
              </span>
              <span class="baospan">
                <span class="laber">开户银行：</span>
                {{orderListObj.account_bank_name}}
              </span>
          </div>
        </div>

        <div class="xinxi">
          <div class="names">
                <div class="shu"></div>
            <div class="name">联系人信息</div>
          </div>
          <div class="box4">
              <span class="baospan">
                <span class="laber">联系人姓名：</span>
                {{orderListObj.contact_man}}
              </span>
              <span class="baospan">
                <span class="laber">联系人电话：</span>
                {{orderListObj.contact_mobile}}
              </span>
              <span class="baospan">
                <span class="laber">联系人邮箱：</span>
                {{orderListObj.contact_email}}
              </span>
          </div>
        </div>

        <div class="xinxi">
          <div class="names">
                 <div class="shu"></div>
            <div class="name">客户支持</div>
          </div>
          <div class="box4">
              <span class="baospan">
                <span class="laber">客户经理：</span>
                {{orderListObj.bd ? orderListObj.bd.ucname : ''}}
              </span>
              <span class="baospan">
                <span class="laber">手机号码：</span>
                {{orderListObj.bd_mobile}}
              </span>
              <span class="baospan">
                <span class="laber">邮箱：</span>
                {{orderListObj.bd_email}}
              </span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="600px">
        <img width="100%" :src="dialogImageUrl" alt="">
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
      imageDetails: "",
      dialogImg: false,
       dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
      orderListObj: {
      },
      //总条数
      total: null,
      pageSize: 10,
      file:[{url:''}],
      // 阿里oss
      data: {
        d: {},
        action: ""
      }
    };
  },
  mounted() {
    this.viewDetails();
    // oss
    this.getUploadConfig();
  },
  methods: {
    handleDownload(file){
    window.open(file.url);
    },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    handleClose(done) {
      done();
    },
    // 阿里接口
    getUploadConfig() {
      var that = this;
      post(api.getOssConfig).then(
        d => {
          //console.log(d, "阿里接口");

          that.data.d["Bucket"] = d.Bucket;
          that.data.d["OSSAccessKeyId"] = d.OSSAccessKeyId;
          that.data.d["signature"] = d.Signature;
          that.data.d["policy"] = d.policy;
          that.data.d["success_action_status"] = d.success_action_status;
          that.data.action = d.url;
        },
        err => {
          //error callback
        }
      );
    },

    detailsImage(src) {
      if (src) {
        this.imageDetails = src;
        this.dialogImg = true;
      }
    },
    // 查看详情
    viewDetails() {
        post(api.merchantOfInfo).then(
          d => {
            if (d.status === 0) {
              //console.log(d, "??????????????");
              this.orderListObj = d.data;
              this.file[0].url = this.orderListObj.business_lincense_img
              this.detailsType = false;
            }
          },
          err => {
            //error callback
          }
        );
    },
    handleAvatarSuccess(res, file) {
      var result = res.substring(
        res.indexOf("https://gsb-zc.oss-cn-beijing.aliyuncs.com"),
        res.indexOf("</Location>")
      );
      this.deliveryForm.pay_voucher_img = result;
      this.$forceUpdate();
    },
    beforeAvatarUpload(file) {
      this.data.d["key"] = "zc_wxapplet_" + new Date().getTime() + ".jpg";
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 或 PNG 格式!");
      }
      return isJPG;
    }
  },
  components: {
    pagination: pagination
  }
};
</script>

<style lang="less" scoped>
.merchants {
    width: 1200px;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
    margin: 0 auto;
  .mains {
    width: 100%;
    min-height: calc(100% - 100px);
    background-color: #fff;
    padding: 5px 23px;
    box-sizing: border-box;
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
    .content {
      width: 100%;
      .name {
        width: 100%;
        font-size: 14px;
        font-family: PingFangSC;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        padding-left: 10px;
        box-sizing: border-box;
      }
      .names {
        width: 100%;
        height: 45px;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        .shu {
          width: 3px;
          height: 16px;
          background: #3083ff;
          margin-left: 40px;
        }
        .name {
          display: inline-block;
          // width: 80px;
          color: rgba(16, 16, 16, 1);
          font-size: 18px;
          font-weight: 600;
          white-space: nowrap;
        }
      }
      .box4 {
        margin-top: 10px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 6px;
        text-align: left;
        overflow: hidden;
        padding: 0 50px;
        .baospan {
          float: left;
          width: 33%;
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 400;
          color: #333333;
          margin-bottom: 15px;
          line-height: 36px;
          padding-right: 8px;
          box-sizing: border-box;
          text-align: left;
          text-align: justify;
          text-justify: newspaper;
          word-break: break-all;
          .laber {
            display: inline-block;
            // width: 130px;
            margin-right: 8px;
          }
          div {
            // min-width: 100px;
            display: inline-block;
          }
        }
        .box_imgs {
          width: 100%;
          overflow: hidden;
          padding: 8px 0px;
          box-sizing: border-box;
          margin-bottom: 7px;
          .box-item {
            min-width: 200px;
            // margin-right: 10px;
            font-size: 14px;
            font-family: PingFangSC;
            font-weight: 400;
            margin-top: 10px;
            color: #333333;
            div {
                   text-align: left;
                  margin-right: 15px;
                  width: 81px;
                  height: 112px;
            }
            .box_img {
              display: inline-block;
              img {
                cursor: pointer;
                display: inline-block;
                width: 100%;
                height: 100%;
              }
            }
         
          }
          div {
            float: left;
          }
        }
      }
    }
  }
}
</style>

<style>
/* .merchants .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.merchants .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.merchants .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 104px;
  height: 104px;
  line-height: 104px;
  text-align: center;
}
.merchants .avatar {
  width: 104px;
  height: 104px;
  display: block;
} */
/* .orderRegistered .CheckAccept .el-form-item {
    margin-bottom: 0px;
  } */
  .merchants .el-upload--picture-card{
    display: none;
  }
  .merchants .el-upload-list--picture-card .el-upload-list__item{
    border: none;
  }
   .merchants  .el-upload-list--picture-card .el-upload-list__item{
      width: 81px;
      height: 112px;
  }
</style>