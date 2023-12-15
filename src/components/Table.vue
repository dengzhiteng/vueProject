<template>
  <div id="table">
    <el-table
      stripe
      ref="table"
      :data="tableData"
      :header-cell-style="isSetHeaderColor ? tableHeaderColor : null"
      :row-key="getRowKey"
      :height="height"
      :row-style="rowStyle"
      @select="handleSelect"
      @select-all="handleSelectionChange"
      @selection-change="handleSelectionChange"
      @current-change="clickChange"
      @row-click="rowClick"
      v-loading="loading"
      element-loading-text="拼命加载中"
    >
      <el-table-column
        type="selection"
        width="55"
        v-if="isSelection"
      ></el-table-column>
      <el-table-column
        label="序号"
        type="index"
        width="50"
        :align="tableAlign"
        v-if="isSerialNum"
      ></el-table-column>
      <template
        v-for="(column, index) in colData"
        v-show="tableData.length > 1"
      >
        <!-- 操作列 -->
        <slot v-if="column.slot" :name="column.slot"></slot>
        <!--普通列-->
        <el-table-column
          v-else
          :align="tableAlign"
          :key="index"
          :label="column.label"
          :fixed="column.fixed"
          :prop="column.prop"
          :formatter="column.formatter"
          :width="column.width"
          :show-overflow-tooltip="column.showTooltip"
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
/**
 * formatter: 格式化内容,
 * label: 表头内容，
 * prop: prop属性，
 * slot: 有操作项时，传入得插槽名,
 * width: 表格宽度，number类型
 */
export default {
  props: {
    tableData: {
      //表格数据
      type: Array,
      default: () => {
        return [];
      }
    },
    colData: {
      //单元格数据
      type: Array,
      default: () => {
        return [];
      }
    },
    isSerialNum: {
      //默认需要序号
      type: Boolean,
      default: () => {
        return true;
      }
    },
    activeIndex: {
      type: Number,
      default: () => {
        return 0;
      }
    },
    isSelection: {
      //默认不需要多选
      type: Boolean,
      default: () => {
        return false;
      }
    },
    isSetHeaderColor: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    tableAlign: {
      //表格对齐方式
      type: String,
      default: () => {
        return "center";
      }
    }
  },
  data() {
    return {
      height: "80vh",
      loading: false
    };
  },
  watch: {
    activeIndex(newVal, oldVal) {
      this.rowStyle({ rowIndex: newVal + 1 });
    },
    tableData(newVal, oldVal) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.height = window.innerHeight - 250;
    });
  },
  methods: {
    tableHeaderColor({ rowIndex }) {
      if (rowIndex === 0) {
        return "background-color:#fafafa;color:#666;font-weight:600;";
      }
    },
    handleSelect(selection, row) {
      this.$emit("handleSelect", [selection, row]);
    },
    handleSelectionChange(rows) {
      //当表格需要多选功能时
      this.$emit("handleSelectionChange", rows);
    },
    clickChange(item) {
      this.$emit("clickChange", item);
    },
    rowClick(row, column, event) {
      this.$emit("rowClick", {
        row,
        column,
        event
      });
    },
    rowStyle({ rowIndex }) {
      let styleJson = {};
      if (this.activeIndex == 0) {
        return styleJson;
      }
      if (rowIndex == this.activeIndex - 1) {
        styleJson = {
          backgroundColor: "#DCDCDC"
        };
      } else {
        styleJson = {};
      }
      return styleJson;
    },
    getRowKey(row) {
      //通过设置rowKey来实现多选记忆功能
      let id = "";
      if (row.id) {
        id = row.id;
      } else if (row.custId) {
        id = row.custId;
      } else {
        id = String(Math.random(0, 100));
      }
      return id;
    },
    clearTableSelect() {
      //清空表格选择项
      this.$refs.table.clearSelection();
    },
    toggleRowExpand(row, expanded) {
      //控制展开
      this.$refs.table.toggleRowExpansion(row, expanded);
    }
  }
};
</script>

<style lang="scss" scoped>
#table {
  border: 1px solid #dcdfe6;
}
</style>
