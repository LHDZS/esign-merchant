
<style lang="less" scoped>
.hello {
     width: 100%;
    height: 100%;
    background-color: #eee;
     box-sizing: border-box;
  .left {
    width: 240px;
    background: #fff;
    border-right: 1px solid #e4e4e4;
    position: relative;
    .row {
      width: 204px;
      margin: 0 auto;
      padding-top: 110px;
      .col-5 {
        .list-group-item {
          width: 195px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          font-size: 16px;
          border: 1px dashed #eee;
          margin: 10px auto;
        }
      }
    }
    #baoweizuo {
      position: absolute;
      top: 50%;
      cursor: pointer;
      z-index: 101;
      left: 237px;
      img {
        width: 12px;
        height: 94px;
      }
    }
  }
  .toubuBtn {
    display: inline-block;
    width: 100%;
    background: #fff;
    position: fixed;
    z-index: 1000;
    .baoweiBtn {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .ladu {
        float: left;
        height: 38px;
        line-height: 38px;
        margin-right: 8px;
        padding: 0 20px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-right: 1px solid #e4e4e4;
        .pagin {
          display: flex;
          align-items: center;
          justify-content: center;
          .but {
            padding: 0px 15px;
            cursor: pointer;
          }
        }
      }
    }
  }
  // .con::-webkit-scrollbar {
  //   width: 0 !important;
  // }
  .con {
    // height: 896px;
    text-align: center;
    user-select: none;
    background: #fff;
    width: calc(100% - 480px);
    margin: 0 auto;
    padding-top: 38px;
    overflow: auto;
    .pdf {
      display: inline-block;
      width: 100%;
      overflow: auto;
      background-color: #eee;
      .pdfaaa {
        width: 100%;
        .pdfsss {
          display: inline-block;
          width: 600px;
          height: 850px;
          position: relative;
          margin-top: 20px;
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
  #rightBian {
    width: 240px;
    padding-top: 20px;
    box-sizing: border-box;
    background: #fff;
    border-left: 1px solid #e4e4e4;
    position: relative;
    .kongjian {
      .baoguo {
        width: 186px;
        margin: 0 auto;
        text-align: left;
        min-height: calc(100vh - 119px);
        .control-set-item {
          margin-bottom: 20px;
          .title {
            margin-bottom: 5px;
            font-size: 14px;
          }
        }
      }
      .shanchu {
        width: 100%;
        height: 70px;
        border-top: 1px solid #e4e4e4;
        margin-top: 20px;
        .detele-btn {
          width: 148px;
          height: 32px;
          font-size: 14px;
          color: #333;
          line-height: 32px;
          border-radius: 3px;
          border: 1px solid #d9d9d9;
          text-align: center;
          margin: 18px auto;
          cursor: pointer;
        }
      }
    }
    .zuihou {
      margin-top: 200px;
      text-align: center;
      font-size: 12px;
    }
    #baoweiyou {
      position: absolute;
      top: 50%;
      cursor: pointer;
      z-index: 101;
      cursor: pointer;
      user-select: none;
      right: 237px;
      img {
        width: 12px;
        height: 94px;
      }
    }
  }
   #yunian {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    z-index: 10;
    right: -4px;
    top: calc(50% - 3px);
    background: #fff;
    border: 1px solid #004cc0;
    cursor: ew-resize;
    display: none;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .item {
    width: 300px;
    height: 50px;
    background-color: #42b983;
    color: #ffffff;
  }
}
</style>

<style lang="less">
.hello .pagin .el-input--mini .el-input__inner {
  border: none;
  border-bottom: 1px solid;
  border-radius: 0px;
  height: 13px;
  padding: 0px 5px;
  box-sizing: border-box;
  text-align: center;
}
.hello .baoguo .el-input__inner {
  width: 192px;
  height: 28px;
}
</style>

<template>
  <div class="hello">
    <div class="toubuBtn">
      <div class="baoweiBtn">
        <div class="ladu" style="width:200px">
          <el-slider v-model="scale" :min="50" :max="200" @change="chang"></el-slider>
        </div>
        <div class="ladu">
          <div class="pagin">
            <div class="but" @click="handleCurrentChange('jian')">
              <i class="el-icon-arrow-left"></i>
            </div>
            <div style="font-size: 14px;">
              <el-input
                size="mini"
                style="width:30px;"
                v-model="input"
                @change="handleCurrentChange"
              ></el-input>
              /{{numPages}}
            </div>
            <div class="but" @click="handleCurrentChange('jia')">
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <!-- <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="1"
            layout="prev, pager, next, jumper"
            :total="numPages">
          </el-pagination>-->
        </div>
        <div class="ladu" @click="fangda">
          <!-- <el-button size="mini" type="primary" @click="fangda">放大</el-button> -->
          <i class="el-icon-rank" style="font-size: 20px;line-height: 38px;"></i>
        </div>
        <div class="ladu">
          <el-button size="mini" type="primary" @click="tijiao">提交</el-button>
        </div>
      </div>
    </div>
    <div style="display: flex;height:100%;">
      <div class="left" id="leftBian" :style="{left:leftBian + 'px'}">
        <div class="row">
          <div class="col-5">
            <h3>控件库</h3>
            <span style="font-size: 10px;">请将控件拖动到文件区域。同一页中的控件，按住键盘ctrl键后可进行多选。</span>
            <div
              class="list-group-item"
              v-for="(element,key) in list1"
              :key="key"
              draggable
              dropEffect="move"
              @dragstart="dragstart($event, element, key)"
              @dragend="dragend($event, element, key)"
            >{{ element.name }}</div>
          </div>
        </div>
        <div id="baoweizuo" @click="dakaiZuo($event)">
          <img :src="imgzuo" alt />
        </div>
      </div>
      <div class="con" ref="con">
        <div class="pdf" id="pdf">
          <div class="pdfaaa" v-for="i in numPages" :key="i">
            <div
              class="pdfsss"
              ref="pdf"
              :style="'width:' + padWidth + 'px;' + 'height:' + pdfHeight + 'px'"
              @mouseover="changeActive(i)"
              @dragover="dragover"
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
                  <!-- <div>{{element.name}}</div> -->
                  <!-- <div>{{element.content}}</div> -->
                  <!-- <div class="shanchu" @click="shanchu(i,index)">删除</div> -->
                  <div :class="commonClassName">
                    <div class="inner-container">
                      <span
                        v-if="(element.type == 1 || element.type == 2 ||element.type == 3)&&element.checked"
                      >*</span>
                      <span>{{element.type == 4 || element.type == 5 ? "签署人:":"填写人:"}}</span>
                      {{ filterSignatory(element.signatory)
                      }}
                    </div>
                    <span
                      class="name"
                      :style="{fontSize: element.fontsSize + 'px',fontFamily: element.fontFamily,lineHeight:element.height + 'px',Width:element.width + 'px'}"
                    >
                      {{ element.name }}
                      <span v-if="element.type == 3">{{ element.dateItem }}</span>
                      <span
                        v-if=" element.type == 4 && element.dateItem != '不显示'"
                        style="display: block; margin-top: 40px;"
                      >{{ element.dateItem }}</span>
                    </span>
                    <!-- <div
                      id="yunian"
                      v-if="element.type == 1 || element.type == 2 ||element.type == 3"
                    ></div> -->
                  </div>
                </vue-draggable-resizable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rightBian" :style="{right:rightBian + 'px'}">
        <div class="kongjian" v-if="itemType">
          <div class="baoguo">
            <div style="margin-top: 14px;">
              <div>{{item.content}}控件设置</div>
              <el-input
                v-model="item.name"
                style="margin-top: 15px;"
                placeholder="请输入内容"
                @change="ziti(item)"
              ></el-input>
            </div>
            <div class="control-set-item" v-if="item.type == 1 || item.type == 2 || item.type == 3">
              <p class="title">
                <el-checkbox v-model="item.checked">是否必填</el-checkbox>
              </p>
            </div>
            <div class="control-set-item" v-if="item.type == 1 || item.type == 2 || item.type == 3">
              <p class="title">填写人设置</p>
              <el-select
                size="mini"
                v-model="item.signatory"
                @change="selectSignatory(item)"
                placeholder="请选择"
              >
                <el-option
                  v-for="main in signatoryOptions"
                  :key="main.value"
                  :label="main.label"
                  :value="main.value"
                ></el-option>
              </el-select>
            </div>

            <div class="control-set-item" v-if="item.type == 3">
              <p class="title">日期</p>
              <el-select
                size="mini"
                v-model="item.dateItem"
                @change="selectdateItem(item)"
                placeholder="请选择"
              >
                <el-option
                  v-for="cun in dateItemOptions"
                  :key="cun.value"
                  :label="cun.label"
                  :value="cun.value"
                ></el-option>
              </el-select>
            </div>
            <div class="control-set-item" v-if="item.type == 4 || item.type == 5">
              <p class="title">签署方设置</p>
              <el-select
                size="mini"
                v-model="item.signatory"
                @change="selectSignatory(item)"
                placeholder="请选择"
              >
                <el-option
                  v-for="main in signatoryOptions"
                  :key="main.value"
                  :label="main.label"
                  :value="main.value"
                ></el-option>
              </el-select>
            </div>
            <div class="control-set-item" v-if="item.type == 4">
              <p class="title">签署日期显示设置</p>
              <el-select
                size="mini"
                v-model="item.dateItem"
                @change="selectdateItem(item)"
                placeholder="请选择"
              >
                <el-option
                  v-for="cun in dateItemOptions"
                  :key="cun.value"
                  :label="cun.label"
                  :value="cun.value"
                ></el-option>
              </el-select>
            </div>
            <div class="control-set-item" v-if="item.type == 1 || item.type == 2 || item.type == 3">
              <p class="title">字体</p>
              <el-select
                size="mini"
                v-model="item.fontFamily"
                @change="selectFontfamily(item)"
                placeholder="请选择"
              >
                <el-option
                  v-for="cun in fontFamilyOptions"
                  :key="cun.value"
                  :label="cun.label"
                  :value="cun.value"
                ></el-option>
              </el-select>
            </div>
            <div class="control-set-item" v-if="item.type == 1 || item.type == 2">
              <p class="title">字号</p>
              <el-select
                size="mini"
                v-model="item.fontsSize"
                @change="selectFontsize(item)"
                placeholder="请选择"
              >
                <el-option
                  v-for="cun in fontSizeOptions"
                  :key="cun.value"
                  :label="cun.label"
                  :value="cun.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="shanchu">
            <div class="detele-btn" @click="shanchu(item)">删除</div>
          </div>
        </div>
        <div v-if="!itemType" class="zuihou">
          <i class="el-icon-copy-document" style="font-size: 50px;"></i>
          <br />
          <br />
          <span>请从控件库中将控件拖动到文件区域</span>
          <br />
          <span>或选中已经添加到文件上的控件</span>
        </div>
        <div id="baoweiyou" @click="dakaiYou($event)">
          <img :src="imgyou" alt />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import pdf from "vue-pdf";
// import showPdf from "@/components/pdf.vue";
import vuedraggable from "vuedraggable";
import { findIndex, find } from "lodash";
import screenfull from "screenfull";

export default {
  name: "HelloWorld",
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
      scale: 100, //放大系数
      idx: -1,
      typeValue: "",
      commonClassName: "target", // 确保点击其它非控件元素时，已激活的控件不失去焦点,作为单选高亮判定标准
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      numPages: 1,
      activeIndex: 0,
      fontSizeValue: 10, // 默认5号 14px
      vuePdf: null,
      options: [
        {
          value: "选项1",
          label: "知圈圈",
        },
        {
          value: "选项2",
          label: "薪必果",
        },
      ],
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
      list1: [
        { name: "单行文本", id: 1, content: "单行文本" },
        { name: "数字", id: 2, content: "数字" },
        { name: "日期", id: 3, content: "日期" },
        { name: "签署区", id: 4, content: "签署区" },
        { name: "骑缝章", id: 5, content: "骑缝章" },
      ],
      list2: {
        1: [],
      },
      list4: {
        1: [],
      },
      activeNames: null,
      count: 0,
      msg: "Welcome to Your Vue.js App",
      docInfo: {
        type: "pdf",
        href:
          "https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf",
      },
      pdfSrc:
        "https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf",
      signatory: 0, // 默认甲方
      signatoryOptions: [
        {
          label: "不限定",
          value: 0,
        },
        {
          label: "甲方",
          value: 1,
        },
        {
          label: "乙方",
          value: 2,
        },
        {
          label: "丙方",
          value: 3,
        },
      ],
      fontSizeOptions: [
        {
          label: "初号",
          value: 56,
        },
        {
          label: "小初",
          value: 48,
        },
        {
          label: "一号",
          value: 35,
        },
        {
          label: "小一",
          value: 32,
        },
        {
          label: "二号",
          value: 29,
        },
        {
          label: "小二",
          value: 24,
        },
        {
          label: "三号",
          value: 21,
        },
        {
          label: "小三",
          value: 20,
        },
        {
          label: "四号",
          value: 19,
        },
        {
          label: "小四",
          value: 16,
        },
        {
          label: "五号",
          value: 14,
        },
        {
          label: "小五",
          value: 12,
        },
      ],
      fontFamilyOptions: [
        {
          label: "宋体",
          value: "宋体",
        },
        {
          label: "新宋体",
          value: "新宋体",
        },
        {
          label: "黑体",
          value: "黑体",
        },
        {
          label: "楷体",
          value: "楷体",
        },
      ],
      dateItemOptions: [
        {
          label: "不显示",
          value: "不显示",
        },
        {
          label: "YYYY/MM/DD",
          value: "YYYY/MM/DD",
        },
        {
          label: "YYYY-MM-DD",
          value: "YYYY-MM-DD",
        },
        {
          label: "YYYY年MM月DD日",
          value: "YYYY年MM月DD日",
        },
      ],
      leftBian: "",
      rightBian: "",
      imgzuo:
        "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_1978159903355684920202155916849zuo.png",
      imgyou:
        "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_3868159903358666020202155946660right.png",
    };
  },
  updated() {},
  created() {},
  computed: {
    filterSignatory() {
      return function (signatory) {
        let findItem = find(this.signatoryOptions, (o) => {
          return signatory === o.value;
        });
        return findItem.label;
      };
    },
  },
  filters: {
    filterFonstSizeToHeight(fontSize, item) {
      if (item.type === "sign" || item.type === "seal") {
        // 印章和签名固定高度
        return item.height;
      }
      return fontSize + 10;
    },
  },
  mounted() {
    document
      .getElementById("pdf")
      .addEventListener("scroll", this.handleScroll, true);
    this.pdfTask(this.pdfSrc);
  },
  methods: {
    // yuandian(item){
    //   console.log(item,'电话多活动还带回')
    //   let editIndex = this.getEditIndex(item.customId);
    //   console.log(editIndex,'555555')
    //   this.list2[this.pdfKey][editIndex].width = item.width + 10;
    //   console.log(this.list2[this.pdfKey][editIndex], "555555");
    // },
    //打开左
    dakaiZuo(e) {
      // console.log(e,'大家都觉得静静地')
      this.leftBian = document.getElementById("leftBian").offsetLeft;
      if (this.leftBian == 0) {
        this.leftBian = -223;
        this.imgzuo =
          "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_4028159910090670420203104146704zuoimg.png";
      } else {
        this.leftBian = 0;
        this.imgzuo =
          "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_1978159903355684920202155916849zuo.png";
      }
      // console.log(this.zuoLeft, "往左走多活动还带回和");
      // this.isshow = !this.isshow;
    },
    //打开右
    dakaiYou(e) {
      // console.log(e,'大家都觉得静静地')
      // this.rightBian = document.getElementById("rightBian").offsetLeft;
      this.rightBian = document.querySelector("#rightBian").style.right;
      console.log(this.rightBian, "大家都交接单");
      if (this.rightBian == "" || this.rightBian == "0px") {
        this.rightBian = -223;
        this.imgyou =
          "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_1138159910087950020203104119500youimg.png";
      } else {
        this.rightBian = 0;
        this.imgyou =
          "https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_3868159903358666020202155946660right.png";
      }

      // console.log(this.rightBian, "往左走多活动还带回和");
      // this.isshow = !this.isshow;
    },
    fangda() {
      screenfull.toggle();
    },
    ziti(item) {
      //console.log.log(item, "555555");
      let editIndex = this.getEditIndex(item.customId);
      //console.log.log(editIndex, "555555");
      this.list2[this.pdfKey][editIndex].name = item.name;
      // console.log.log(
      //   this.list2[this.pdfKey][editIndex],
      //   "list2数据都会好的都会好的"
      // );
    },
    // 选择签署方
    selectSignatory(item) {
      //console.log.log(item, "555555");
      let editIndex = this.getEditIndex(item.customId);
      //console.log.log(editIndex, "555555");
      this.list2[this.pdfKey][editIndex].signatory = item.signatory;
    },
    // 选择字号
    selectFontsize(item) {
      //console.log.log(item, "555555");
      let editIndex = this.getEditIndex(item.customId);
      // //console.log.log(editIndex,'555555')
      this.list2[this.pdfKey][editIndex].fontsSize = item.fontsSize;
      this.list2[this.pdfKey][editIndex].height = item.fontsSize + 10;
      //console.log.log(this.list2[this.pdfKey][editIndex], "555555");
    },
    //选择日期
    selectdateItem(item) {
      //console.log.log(item, "555555");
      let editIndex = this.getEditIndex(item.customId);
      // //console.log.log(editIndex,'555555')
      this.list2[this.pdfKey][editIndex].dateItem = item.dateItem;
    },
    // 选择字体
    selectFontfamily(item) {
      //console.log.log(item, "555555");
      let editIndex = this.getEditIndex(item.customId);
      // //console.log.log(editIndex,'555555')
      this.list2[this.pdfKey][editIndex].fontFamily = item.fontFamily;
      // //console.log.log(this.list2[this.pdfKey][editIndex],'555555')
    },
    // 获取当前编辑控件的索引Index
    getEditIndex(customId) {
      return findIndex(this.list2[this.pdfKey], (o) => {
        return o.customId === customId;
      });
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
    // shanchu(i,key) {
    //   //console.log.log(i,'张数')
    //       //console.log.log(key,'11111')
    // //   this.list2[i].splice(key,1)
    // //   this.list4[i].splice(key,1)
    // },
    shanchu(item) {
      var customId = item.customId;
      let editIndex = findIndex(this.list2[this.pdfKey], (o) => {
        return o.customId === customId;
      });
      //console.log.log(editIndex, "的活动活动");
      if (item.type == 5) {
        for (let index = 1; index <= this.numPages; index++) {
          const element = index;
          this.list2[element].splice(editIndex, 1);
        }
      } else {
        this.list2[this.pdfKey].splice(editIndex, 1);
      }

      this.item = {};
      this.itemType = false;
    },

    tijiao() {
      console.log.log(this.list2, "提交了");
      // this.$router.push({path: '/yanshi1', query: {list : JSON.stringify(this.list2)}})
    },
    handleCurrentChange(val) {
      console.log(val, typeof val);
      console.log(this.currentPage3, "currentPage311111");
      console.log(this.numPages, "numPages22222");
      if (!val) {
        return (this.input = 1);
      }
      if (val === "jia" && this.currentPage3 < this.numPages) {
        this.currentPage3++;
        this.input++;
      } else if (val === "jian" && this.currentPage3 > 1) {
        this.currentPage3--;
        this.input--;
      } else if (val <= this.numPages) {
        this.currentPage3 = val;
      } else {
        return;
      }

      console.log(`当前页: ${this.currentPage3}`);

      //console.log.log(this.$refs.pdf);
      let h = this.$refs.pdf[this.currentPage3 - 1].offsetTop;
      console.log(h, "高度电话多活动还带回");
      this.$nextTick(() => {
        this.$refs.con.scrollTop = h - 50;
        console.log(this.$refs.con.scrollTop, "对对对就带九点");
        // document.querySelector(".pdf").scrollTop = h - 50;
      });
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
    chang() {
      // //console.log.log(this.$refs.dragg, '。。。。。。。。。。。。。。。。')
      this.padWidth = parseInt(600 * (this.scale / 100));
      this.pdfHeight = parseInt(850 * (this.scale / 100));

      this.width = parseInt(100 * (this.scale / 100));
      this.height = parseInt(100 * (this.scale / 100));

      for (let i = 1; i <= this.numPages; i++) {
        for (let j = 0; j < this.list2[i].length; j++) {
          this.list2[i][j].y = this.list4[i][j].y * (this.scale / 100);
          this.list2[i][j].x = this.list4[i][j].x * (this.scale / 100);
        }
      }
      //console.log.log(this.list2);
      this.$forceUpdate();
    },
    qingkong() {
      this.itemType = false;
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
      //console.log.log(val, i, "!!!!!!!!!!");
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
    dragend(e, val, key) {
      //console.log.log(key, "左边拖动结束");
      //console.log.log(this.pdfKey, "dhdhdhd");
      //console.log.log(this.$refs.pdf[this.pdfKey - 1].getBoundingClientRect());
      //console.log.log(e.x, e.y, "当前值");

      let left = this.$refs.pdf[this.pdfKey - 1].getBoundingClientRect().left;
      let right = this.$refs.pdf[this.pdfKey - 1].getBoundingClientRect().right;
      let bottom = this.$refs.pdf[this.pdfKey - 1].getBoundingClientRect()
        .bottom;
      let top = this.$refs.pdf[this.pdfKey - 1].getBoundingClientRect().top;
      if (e.x <= left || e.x >= right) {
        return;
      }
      if (e.y <= 0 || e.y >= bottom) {
        return;
      }
      this.width = parseInt(100 * (this.scale / 100));
      this.height = parseInt(100 * (this.scale / 100));
      let x = null;
      let y = null;
      if (parseInt(bottom - e.y) < 100) {
        y = parseInt(bottom - 160);
      } else if (parseInt(e.y - top) < 100) {
        y = 0;
      } else {
        y = e.y - top;
      }
      if (parseInt(e.x - left) < 100) {
        x = 0;
      } else if (parseInt(right - e.x) < 100) {
        x = parseInt(e.x - left) - 90;
      } else {
        x = parseInt(e.x - left);
      }

      const controlObjMap = {
        0: {
          customId: Date.now(),
          width: 160,
          height: 20,
          content: val.content,
          id: val.id,
          name: val.name,
          type: 1,
          x: x,
          y: y,
          fontsSize: 14,
          fontFamily: "宋体",
          dateItem: "YYYY/MM/DD",
          signatory: 0, // 签署方默认甲方
          checked: true,
          background: "rgba(244, 250, 255, 0.85)",
        },
        1: {
          customId: Date.now(),
          width: 160,
          height: 20,
          content: val.content,
          id: val.id,
          name: val.name,
          type: 2,
          x: x,
          y: y,
          fontsSize: 14,
          fontFamily: "宋体",
          dateItem: "YYYY/MM/DD",
          signatory: 0, // 签署方默认甲方
          checked: true,
          background: "rgba(244, 250, 255, 0.85)",
        },
        2: {
          customId: Date.now(),
          width: 160,
          height: 20,
          content: val.content,
          id: val.id,
          name: val.name,
          type: 3,
          x: x,
          y: y,
          fontsSize: 14,
          fontFamily: "宋体",
          dateItem: "YYYY/MM/DD",
          signatory: 0, // 签署方默认甲方
          checked: true,
          background: "rgba(244, 250, 255, 0.85)",
        },
        3: {
          customId: Date.now(),
          width: 100,
          height: 100,
          content: val.content,
          id: val.id,
          name: val.name,
          type: 4, // 签署
          x: x,
          y: y,
          fontsSize: 14,
          fontFamily: "宋体",
          dateItem: "不显示",
          signatory: 1, // 签署方默认甲方
          checked: false,
          background: "rgba(244, 250, 255, 0.9)",
        },
        4: {
          customId: Date.now(),
          width: 74,
          height: 118,
          content: val.content,
          id: val.id,
          name: val.name,
          type: 5, // 印章
          x: x,
          y: y,
          fontsSize: 14,
          fontFamily: "宋体",
          dateItem: "YYYY/MM/DD",
          signatory: 1, // 签署方默认甲方
          checked: true,
          background: "rgba(244, 250, 255, 0.9)",
        },
      };

      // let obj = {
      //   content: val.content,
      //   id: val.id,
      //   name: val.name,
      //   x: x,
      //   y: y
      // }
      // //console.log.log(controlObjMap[key],'1111111')
      if (controlObjMap[key].type == 5) {
        //console.log.log(this.numPages, "总页数");
        for (let index = 1; index <= this.numPages; index++) {
          const element = index;
          //console.log.log(element, "获取没页数多好多好");
          this.list2[element].push(controlObjMap[key]);
          //console.log.log(this.list2, "xxhxhxhh");
        }
      } else {
        this.list2[this.pdfKey].push(controlObjMap[key]);
      }

      // //console.log.log(this.list2,'ddhdhdhdh')
      // this.list4[this.pdfKey].push(controlObjMap[key]);
      this.item = controlObjMap[key];
      //console.log.log(this.item, "ggjgjgjgj");
      this.itemType = true;
      //console.log.log(x, y, "最后值");
      this.$forceUpdate();
    },
  },
};
</script>