<template>
  <div id="pagination">
    <el-pagination
      background
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="tempCurrentPage"
      :page-sizes="[10, 15, 20, 30, 40]"
      :page-size="15"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :small="small"
      class="tc mt40"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
      default: () => {
        return 20;
      }
    },
    pageSize: {
      type: Number,
      default: () => {
        return 15;
      }
    },
    currentPage: {
      type: Number,
      default: () => {
        return 1;
      }
    },
    small: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  data() {
    return {
      tempPageSize: 15,
      tempCurrentPage: 1
    };
  },
  watch: {
    currentPage(newval, oldval) {
      this.tempCurrentPage = newval;
    }
  },
  created() {
    this.tempCurrentPage = this.currentPage;
    this.tempPageSize = this.pageSize;
  },
  methods: {
    sizeChange(val) {
      this.tempPageSize = val;
      this.tempCurrentPage = 1;
      this.$emit("pagination", {
        pageSize: this.tempPageSize,
        currentPage: this.tempCurrentPage
      });
    },
    currentChange(val) {
      this.tempCurrentPage = val;
      this.$emit("pagination", {
        pageSize: this.tempPageSize,
        currentPage: this.tempCurrentPage
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#pagination {
  margin-top: 15px;
}
</style>
