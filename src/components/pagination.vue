
<template>
  <div class="bottom-pag">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data() {
    return {
        currentPage: 1
    }
  },
  props: {
    total: Number
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange',val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange',val)
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-pag {
    width: 100%;
    margin-top: 20px;
}
</style>
