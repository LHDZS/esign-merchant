<style lang="less" scoped>
.show-pdf {
  width: 100%;
  .pdfaaa {
    width: 100%;
    height: 90%;
    .pdfsss {
      display: inline-block;
      min-width: 595px;
      min-height: 841px;
    }
  }
  
}
</style>

<template>
    <div class="show-pdf">
        <p class="arrow2" v-if="pdfSrc">
        <el-slider v-model="scale" :step="10" show-stops :max="300" @change="chang"></el-slider>
        </p>
        <div class="pdfaaa">
          <div class="pdfsss" :style="'width:' + padWidth + 'px'">
          <pdf
              v-for="i in numPages"
              :key="i"
              ref="pdf"
              :src="pdfSrc"
              :page="i"
              @num-pages="pageCount=$event"
              @page-loaded="currentPage=$event"
              @loaded="loadPdfHandler"
          ></pdf>
          </div>
        </div>
    </div>
</template>
<script>
import pdf from "vue-pdf";

export default {
  name: "Pdf",
  components: {
    pdf
  },
  props: ["dochref", "doctype"],
  watch: {
    dochref(val) {
      console.log("pdfSrc");
      console.log(val);
      this.pdfSrc = val;
    },
    pdfSrc(val) {},
    doctype(typeval) {
      this.typeValue = typeval;
    }
  },

  data() {
    return {
      padWidth: 595,
      scale: 100, //放大系数
      idx: -1,
      typeValue: "",
      pdfSrc: "",
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      numPages: 1,
      activeIndex: 0,
      vuePdf: null
    };
  },
  methods: {
    pdfTask(pdfUrl){
        let self = this
        let loadingTask = pdf.createLoadingTask(pdfUrl)
        console.log(loadingTask,'这是啥啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊');
        loadingTask.promise.then(pdf => {
          console.log(pdf,'成功了');
          self.pdfUrl = loadingTask
          self.numPages = pdf._pdfInfo.numPages
        }).catch((err) => {
          console.error('pdf加载失败')
      })
    },
    chang() {
      console.log(this.$refs.pdf, '。。。。。。。。。。。。。。。。')
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage(val) {
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--;
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    // pdf加载时
    loadPdfHandler(e) {
      this.currentPage = 1; // 加载的时候先加载第一页
    }
  },
  mounted: function() {
    this.pdfSrc = "";
    this.pdfSrc = this.dochref;
    this.pdfTask(this.dochref)
  }
};
</script>