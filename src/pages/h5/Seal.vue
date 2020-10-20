
<style lang="less" scoped>
.Seal {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .toubuBtn {
    display: inline-block;
    width: 100%;
    background: #fff;
    position: fixed;
    z-index: 1000;
    height: 114px;
    box-sizing: border-box;
    .tou1 {
      height: 57px;
      border-bottom: 1px solid #d9d9d9;
      .tou1Name {
        line-height: 57px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 300px;
        padding-left: 30px;
      }
    }

    .tou2Name {
      line-height: 57px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 200px;
      padding-left: 20px;
      float: left;
    }
    .touRight {
      float: right;
      width: 88px;
      height: 28px;
      text-align: center;
      border-left: 1px solid #d9d9d9;
      margin-top: 14px;
    }
    .tou2 {
      height: 57px;
      border-bottom: 1px solid #d9d9d9;
    }
  }
  .esigns {
    .toubuBtn2 {
      display: inline-block;
      width: 100%;
      background: #fff;
      position: fixed;
      z-index: 1000;
      height: 57px;
      .BtnName {
        height: 57px;
        border-bottom: 1px solid #d9d9d9;
        display: flex;
        line-height: 57px;
        .tou1Name2 {
          display: block;
          margin: 0 auto;
        }
        .tou1Name1 {
          padding-left: 20px;
          display: block;
          cursor: pointer;
        }
      }
    }
    .zhongbu {
      height: 100px;
      padding-top: 86px;
      display: flex;
      justify-content: space-evenly;
      .imgurl {
        width: 75px;
        height: 75px;
        border: 1px solid #eeeeee;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .wenzi {
      text-align: center;
    }
    .tongguo {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #444444;
      text-align: center;
      padding-top: 10px;
    }
    .btnFooter {
      width: 100%;
      height: 57px;
      background: #ffffff;
      border-radius: 2px;
      border: 1px solid #e9e9e9;
      position: fixed;
      bottom: 0;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-around;
      .baowei {
        display: flex;
        .but {
          width: 34px;
          height: 34px;
          background: #000000;
          border-radius: 50%;
          margin-top: 10px;
          .duigou {
            line-height: 34px;
            display: block;
            text-align: center;
            font-size: 24px;
            color: #fff;
            i {
              font-weight: bold;
            }
          }
        }
        .but2 {
          width: 34px;
          height: 34px;
          background: #d32d1e;
          border-radius: 50%;
          margin-top: 10px;
          margin-left: 40px;
          .duigou {
            line-height: 34px;
            display: block;
            text-align: center;
            font-size: 24px;
            color: #fff;
            i {
              font-weight: bold;
            }
          }
        }
      }
      .quedingBtn {
        width: 162px;
        height: 40px;
        margin: 0 auto;
        background: rgba(121, 176, 250, 0.5);
        border-radius: 4px;
        line-height: 40px;
        text-align: center;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        cursor: pointer;
        margin-top: 10px;
      }
    }
  }
  .con {
    background: #fff;
    padding-top: 115px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .pdf {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-color: #fff;
      overflow-y: scroll;
      .pdfaaa {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .pdfsss {
          display: inline-block;
          width: 100%;
          height: 100%;
          position: relative;
          .dra {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;

            .list {
              width: 20%;
              height: 14%;
              position: absolute;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              border-width: 1px;
              border-style: solid;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              background-color: hsla(0, 0%, 100%, 0.85);
              border: 1px dashed rgb(0, 76, 192);
              cursor: move;
              .inner-container {
                margin-top: -20px;
                height: 20px;
                // position: relative;
                font-size: 12px;
              }

              .name {
                width: 100%;
                height: auto;
                font-family: 宋体;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: block;
                // position: absolute;
                // top: 50%;
                // left: 50%;
                // transform: translate(-50%,-50%);
              }
              .baoguo {
                img {
                  width: 57px;
                  height: 57px;
                }
              }
              .shanchu {
                width: 50px;
                height: 20px;
                line-height: 20px;
                background-color: #333;
                position: absolute;
                bottom: -20px;
                left: 25px;
                color: #fff;
                cursor: pointer;
                z-index: 999999;
                text-align: center;
                font-size: 14px;
              }
            }
            .list:hover #yunian {
              display: block;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 57px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #e9e9e9;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    .left {
      padding-left: 10px;
      display: flex;
      width: 100px;
      justify-content: space-between;
      .leftSpan {
        width: 32px;
        text-align: center;
        height: 50px;
        padding-top: 10px;
      }
      .rightSpan {
        width: 32px;
        text-align: center;
        height: 50px;
        padding-top: 10px;
      }
    }
    .right {
      padding-right: 10px;
      line-height: 57px;
    }
  }
}
.fangkuai {
  height: 57px;
  border-bottom: 1px solid #e9e9e9;
  text-align: center;
  line-height: 57px;
  color: #3083ff;
}
.yinzhang {
  height: 200px;
  border-bottom: 1px solid #e9e9e9;
  .imgurl {
    width: 122px;
    height: 112px;
    padding-top: 47px;
    padding-left: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style>
.el-popover.myPopover {
  height: 73px;
  background: #595959;
  border-radius: 2px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}
.el-popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: #595959;
}
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: #595959;
}
.el-drawer__header {
  display: none;
}
canvas[data-v-25d47434] {
  margin: 0px auto;
  width: 359px;
  height: 342px;
  margin-top: 20px;
  box-sizing: border-box;
  background: url("https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_379815996340430932020914472393tu.png")
    no-repeat !important;
  background-size: 100% 100% !important;
}
</style>

<template>
  <div class="Seal">
    <div v-show="showType" style="width:100%;height:100%">
      <div class="toubuBtn">
        <div class="tou1">
          <span class="tou1Name">{{pathName}}</span>
        </div>
        <div class="tou2">
          <span class="tou2Name">{{pathName}}</span>
          <span class="touRight">
            <el-popover placement="bottom" width="150" trigger="click" popper-class="myPopover">
              <div>
                <i class="iconfont icon-renwuxinxi"></i>&nbsp;任务信息
              </div>
              <br />
              <div>
                <i class="iconfont icon-jujueqianshu1"></i>&nbsp;拒绝签署
              </div>
              <span slot="reference">
                <i class="el-icon-s-fold"></i>更多
              </span>
            </el-popover>
          </span>
        </div>
      </div>
      <div class="con" ref="con">
        <div class="pdf" id="pdf" @touchmove.prevent>
          <div class="pdfaaa" v-for="i in numPages" :key="i">
            <div
              class="pdfsss"
              ref="pdf"
              @mouseover="changeActive(i)"
              @dragover="dragover"
              @mousedown="dragend($event)"
            >
              <pdf
                :src="pdfSrc"
                :page="i"
                @num-pages="pageCount=$event"
                @page-loaded="currentPage=$event"
              ></pdf>
              <div class="dra">
                <vue-draggable-resizable
                  ref="dragg"
                  v-for="(element,index) in list2[i]"
                  :key="index"
                  :custom-id="element.customId"
                  :h="element.height"
                  :w="element.width"
                  :x="element.x"
                  :y="element.y"
                  :parent="true"
                  :resizable="false"
                  :grid="[10,10]"
                  class-name="list"
                  :style="{background: element.background}"
                  @dragging="onDrag(arguments, i, index)"
                  @resizing="onResize"
                  @activated="nodianji($event, element)"
                >
                  <div class="shanchu" @click.stop="shanchu(i,index)">删除</div>
                  <div :class="commonClassName" class="baoguo">
                    <img :src="element.imgurl" alt />
                  </div>
                </vue-draggable-resizable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="left">
          <div class="leftSpan" @click="shouHui">
            <i class="iconfont icon-shouhui"></i>
            手绘
          </div>
          <div class="rightSpan" @click="drawer = true">
            <i class="iconfont icon-gaizhang"></i>
            盖章
          </div>
        </div>
        <div class="right">
          <el-button type="primary">提交</el-button>
        </div>
      </div>
    </div>
    <div class="esigns" v-show="!showType">
      <div class="toubuBtn2">
        <div class="BtnName">
          <span class="tou1Name1" @click="guanbiBtn">
            <i class="el-icon-close"></i>
          </span>
          <span class="tou1Name2">手绘签名</span>
        </div>
      </div>
      <!-- <div ref="photo" style="width:200px;padding-top: 60px;margin: 0 auto;"></div> -->
      <div class="zhongbu">
        <div v-for="(item,index) in arrImg" :key="index" class="imgurl">
          <img :src="item" :ref="'img' + index" alt />
        </div>

        <!-- <div slot="" class="imgurl">
          <img ref="img0" alt />
        </div>-->
      </div>
      <div class="wenzi">请书写第一个字"{{qianName}}""</div>
      <div @touchend="gtouchend()" @touchstart="gtouchstart()">
        <vue-esign
          ref="esign"
          :isCrop="isCrop"
          :width="359"
          :height="342"
          :lineWidth="lineWidth"
          :lineColor="lineColor"
          :bgColor.sync="bgColor"
        />
      </div>
      <div class="tongguo">通过AI智能识别手写文字，保障签署更准确</div>
      <div class="btnFooter">
        <div class="baowei">
          <div class="but" @click="baoguoBtn">
            <span class="duigou">
              <i v-if="check" class="el-icon-check"></i>
            </span>
          </div>
          <div class="but2" @click="dianjiBtn">
            <span class="duigou">
              <i v-if="checked" class="el-icon-check"></i>
            </span>
          </div>
        </div>
        <div @click="queBtn">
          <div class="quedingBtn">确定</div>
        </div>
      </div>
    </div>
    <el-drawer
      :show-close="false"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :with-header="false"
      size="50%"
    >
      <div class="fangkuai" @click="shouHui">
        <i class="el-icon-edit"></i>手绘印章
      </div>
      <div class="yinzhang" @click="gaizhang(yinzhang)">
        <div class="imgurl">
          <img :src="yinzhang" alt />
        </div>
      </div>
    </el-drawer>
    <canvas v-show="false" ref="myCanvas" id="myCanvas"></canvas>
  </div>
</template>


<script>
import pdf from "vue-pdf";
// import showPdf from "@/components/pdf.vue";
import vuedraggable from "vuedraggable";
import { findIndex, find } from "lodash";
import screenfull from "screenfull";

export default {
  name: "Seal",
  display: "Clone",
  order: 2,
  components: {
    pdf,
    vuedraggable,
  },
  data() {
    return {
      activedId: "", // 编辑实例的id
      input: 1,
      pdfKey: 1,
      currentPage3: 1,
      isshow: true,
      isshow2: true,
      translate: "",
      padWidth: "600",
      pdfHeight: "850",
      idx: -1,
      typeValue: "",
      commonClassName: "target", // 确保点击其它非控件元素时，已激活的控件不失去焦点,作为单选高亮判定标准
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      numPages: 1,
      activeIndex: 0,
      fontSizeValue: 10, // 默认5号 14px
      vuePdf: null,
      itemType: false,
      item: {},
      width: 100,
      height: 100,
      x: 50,
      y: 50,
      positionX: 0,
      positionY: 0,
      dra: true,
      sty: "",
      list2: {
        1: [],
      },
      list4: {
        1: [],
      },
      activeNames: null,
      count: 0,
      pdfSrc:
        "https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf",
      pathName: "",
      drawer: false,
      direction: "btt",
      yinzhang:
        "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_44581599550619720202081536597201.png",
      showType: true,
      lineWidth: 6,
      lineColor: "#000000",
      bgColor: "",
      resultImg: "",
      arrImg: [{}],
      isCrop: false,
      qianName: "郝",
      check: true,
      checked: false,
      timer: null,
      pageX: 0,
      pageY: 0,
      shijianId: "",
    };
  },
  updated() {},
  created() {},
  computed: {},
  mounted() {
    document
      .getElementById("pdf")
      .addEventListener("scroll", this.handleScroll, true);
    this.pdfTask(this.pdfSrc);
    var substr = this.pdfSrc.substring(8);
    this.pathName = substr;
    // console.log(substr,'多活动还带回')
  },
  methods: {
    gaizhang(imgurl) {
      // console.log(this.pageX,'xxxxx')
      // console.log(this.pageY,'yyyyy')
      if(this.pageX == 0){
       this.pageX = 270
      }
      if(this.pageY == 0){
       this.pageY = 361
      }
      const controlObjMap = {
        customId: Date.now(),
        width: 60,
        height: 60,
        imgurl: imgurl,
        type: 1,
        x: this.pageX,
        y: this.pageY,
      };
      this.list2[this.pdfKey].push(controlObjMap);
      console.log(this.list2, "创建拖拽方块");
      this.drawer = false;
      this.$forceUpdate();
    },
    onCreateCanvas() {
      // console.log(img1.naturalWidth, img1.naturalHeight,'//////////////////') //可获取图片的原始宽度和高度
      let canvasWidth = 100; // 这里设置固定值
      let canvasHeight = 100; // 合成的画布高度为两张图片高度之和
      let canvas = this.$refs.myCanvas;
      // console.log(img1, img2, img3)
      let context = canvas.getContext("2d");
      // console.log(context)
      canvas.width = canvasWidth; // canvas画布宽度
      canvas.height = canvasHeight; // canvas画布高度

      let imgWidth = Math.ceil(100 / this.arrImg.length); // 每个字的宽度
      let imgTpo = Math.ceil((100 - imgWidth) / 2); // tpo值
      // 将img1、img2等依次加入画布
      for (let i = 0; i < this.arrImg.length; i++) {
        let name = "img" + i;
        context.drawImage(
          this.$refs[name][0],
          imgWidth * i,
          imgTpo,
          imgWidth,
          imgWidth
        );
      }
      // context.drawImage(img1, 0, 33, 33, 33)  // 加入图片1
      // context.drawImage(img2, 33, 33, 33, 33) //加入图片2
      // context.drawImage(img3, 66, 33, 33, 33) // 加入图片3

      let newImg = new Image();
      newImg.src = canvas.toDataURL("image/png"); // canvas画布导出图片
      // this.$refs.photo.append(newImg); // 将图片插入div中展示出来
      this.gaizhang(newImg.src)
      this.showType = true;
      console.log(newImg);
    },
    // 点击合成按钮，执行合成方法
    queBtn() {
      if (this.arrImg.length != 0) {
        this.onCreateCanvas();
      } else {
        console.log("不能为空");
      }
    },
    gtouchstart() {
      window.console.log("1，按下啦啦啦啦啦");
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    gtouchend() {
      window.console.log("3，松开啦啦啦啦啦");
      this.timer = setTimeout(() => {
        this.handleGenerate();
      }, 1000);
    },
    //黑色
    baoguoBtn() {
      this.check = true;
      this.checked = false;
      if (this.check == true) {
        this.lineColor = "#000000";
      } else {
        this.lineColor = "#D32D1E";
      }
    },
    //红色
    dianjiBtn() {
      this.check = false;
      this.checked = true;
      if (this.checked == true) {
        this.lineColor = "#D32D1E";
      } else {
        this.lineColor = "#000000";
      }
    },
    guanbiBtn() {
      this.showType = true;
    },
    shouHui() {
      this.arrImg = [];
      this.drawer = false;
      this.showType = false;
    },
    handleReset() {
      // 清除
      this.$refs.esign.reset();
    },
    handleGenerate() {
      clearInterval(this.timer);
      // this.arrImg = [];
      this.$refs.esign
        .generate()
        .then((res) => {
          this.resultImg = res; //生成图片，这里生成的是base64格式
          // document.getElementByName('img').setAttribute( 'src', res );
          this.arrImg.push(this.resultImg);
          this.$refs.esign.reset();
          console.log(this.arrImg, "图片东海大道好好的");

          // this.$refs.img0.setAttribute( 'src', res );
          // console.log(this.$refs.img0);
        })
        .catch((err) => {
          alert(err); // 画布没有签字时会执行这里 'Not Signned'
        });
    },
    handleClose(done) {
      done();
    },
    handleScroll(e) {
      // //console.log.log('????????????????????')
      // let h = document.getElementById('pdf').scrollTop;
      var scrollTop = document.getElementById("pdf").scrollTop;
      if (scrollTop === 0) {
        return;
      }
      for (let i = 1; i <= this.numPages; i++) {
        if ((scrollTop) => Number(this.pdfHeight) * i) {
          this.currentPage3 = i + 1;
          // this.handleCurrentChange(i+1)
        } else if (scrollTop < Number(this.pdfHeight) * i) {
          this.currentPage3 = i - 1;
          // this.handleCurrentChange(i-1)
        }
      }
    },
    dragover(event) {
      // //console.log.log(val,'移动的')
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    },
    shanchu(i, key) {
      console.log(i, "张数");
      console.log(key, "11111");
      this.list2[i].splice(key, 1);
      this.$forceUpdate();
    },
    // 鼠标进入
    changeActive(i) {
      //console.log.log(i, "鼠标移入");
      this.pdfKey = i;
    },
    pdfTask(pdfUrl) {
      let self = this;
      let loadingTask = pdf.createLoadingTask(pdfUrl);
      //console.log.log(loadingTask, "这是啥啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊");
      loadingTask.promise
        .then((pdf) => {
          //console.log.log(pdf, "成功了");
          self.pdfUrl = loadingTask;
          self.numPages = pdf._pdfInfo.numPages;
          for (let index = 0; index < self.numPages; index++) {
            self.list2[index + 1] = [];
            self.list4[index + 1] = [];
          }
          self.$forceUpdate();
          //console.log.log(self.list2);
        })
        .catch((err) => {
          //console.log.error("pdf加载失败");
        });
    },
    nodianji(e, val) {
      this.itemType = true;
      this.item = val;
    },
    onResize: function (x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      //console.log.log(">??????????????");
    },
    onDrag: function (arr, val, i) {
      console.log(val, i, "!!!!!!!!!!");
      // document.getElementById('pdf').preventDefault();
      this.list2[val][i].x = arr[0];
      this.list2[val][i].y = arr[1];
      // //console.log.log(this.list2[val][i].type,'typedjdjdjdjd')
      if (this.list2[val][i].type == 5) {
        // this.hetongWidth = 500
      }
      // //console.log.log(this.list2[val][i].x,'x!!!!!!!!!!!!!!')
      // //console.log.log(this.list2[val][i].y,'y!!!!!!!!!!!!!!')
    },
    dragstart(e, val, key) {
      val["time"] = new Date();
      //console.log.log("左边拖动开始", e);
      // e.target.className = 'hezi'
      //   this.list2.push(evt);
      this.activeNames = e;
    },
    dragend(e) {
      console.log(e, "增加");
      // console.log(this.pdfKey,'打的电话和就')
      // this.showType = true;
      if (e.target.className == "shanchu") {
        return;
      }
      this.pageX = e.pageX;
      this.pageY = e.pageY - 116;
      this.drawer = true;
      this.$forceUpdate();
    },
  },
};
</script>