import Layout from "@/views/Layout/index.vue"
import { RoleEnum } from "@/enums/roleEnum"
import { Promotion, DataAnalysis, FolderAdd } from "@element-plus/icons-vue"

export const asyncRoutes = [
  {
    meta: {
      title: "仪表盘",
      icon: DataAnalysis
    },
    path: "/",
    component: Layout,
    children: [
      {
        meta: {
          title: "工作台"
        },
        path: "/",
        component: () => import("@/views/Home/workbench/index.vue")
      },
      {
        meta: {
          title: "分析",
          roles: [RoleEnum.SUPER]
        },
        path: "analysis",
        component: () => import("@/views/Home/analysis/index.vue")
      }
    ]
  },
  {
    meta: {
      title: "功能",
      icon: FolderAdd
    },
    path: "/features",
    component: Layout,
    children: [
      {
        meta: {
          title: "下载"
        },
        path: "download",
        component: () => import("@/views/features/download/index.vue")
      },
      {
        meta: {
          title: "预览PDF"
        },
        path: "previewPdf",
        component: () => import("@/views/features/previewPdf/index.vue")
      },
      {
        meta: {
          title: "打印",
          icon: DataAnalysis
        },
        path: "print",
        component: () => import("@/views/features/print/index.vue")
      },
      {
        meta: {
          title: "水印"
        },
        path: "watermark",
        component: () => import("@/views/features/watermark/index.vue")
      }
    ]
  },
  {
    meta: {
      title: "表格",
      icon: Promotion
    },
    path: "/table",
    component: Layout,
    children: [
      {
        meta: {
          title: "普通表格"
        },
        path: "list",
        component: () => import("@/views/Table/list.vue")
      },
      {
        meta: {
          title: "表格合并"
        },
        path: "merge",
        component: () => import("@/views/Table/merge.vue")
      }
    ]
  },
  {
    meta: {
      title: "表单",
      icon: Promotion
    },
    path: "/form",
    component: Layout,
    children: [
      {
        meta: {
          title: "普通表单"
        },
        path: "list",
        component: () => import("@/views/Form/list.vue")
      }
    ]
  },
  {
    meta: {
      title: "Echart",
      icon: Promotion
    },
    path: "/echart",
    component: Layout,
    children: [
      {
        meta: {
          title: "图表"
        },
        path: "list",
        component: () => import("@/views/Echart/index.vue")
      }
    ]
  }
]
