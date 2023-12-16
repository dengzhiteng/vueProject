<script lang="ts" setup>
interface Columns {
  prop?: string
  label: string
  width?: number | "auto"
  slot?: string
}

const props = withDefaults(
  defineProps<{
    tableData: {}[]
    columns: Columns[]
    border?: boolean
    stripe?: boolean
    size?: "large" | "default" | "small"
    isExportExcel?: boolean
  }>(),
  {
    border: true,
    stripe: true,
    size: "default",
    isExportExcel: true
  }
)
// 导出
const onExportExcel = () => {}
</script>
<template>
  <el-button type="primary" plain v-if="isExportExcel" class="float-right mb-1" @click="onExportExcel">导出</el-button>
  <el-table :data="props.tableData" :border="props.border" :stripe="props.stripe" :size="props.size">
    <template v-for="(col, index) in props.columns" :key="index">
      <slot :name="col.slot" v-if="col.slot"></slot>
      <el-table-column :prop="col.prop" :label="col.label" v-else />
    </template>
  </el-table>
</template>
