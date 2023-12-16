<script lang="ts" setup>
const columns = [
  {
    prop: "date",
    label: "日期"
  },
  {
    prop: "name",
    label: "名称"
  },
  {
    prop: "address",
    label: "地址"
  },
  {
    label: "操作",
    slot: "operate"
  }
]
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
]
</script>
<template>
  <my-table :tableData="tableData" :columns="columns">
    <template v-slot:operate>
      <el-table-column label="操作" prop="operate">
        <el-button type="danger" plain size="small">删除</el-button>
      </el-table-column>
    </template>
  </my-table>
</template>
