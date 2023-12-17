// 动态路由
import layout from '@/views/layout'
const routes = [
  {
    path: "/table",
    component: layout,
    meta: {
      title: "表格1",
      icon: 'el-icon-message'
    },
    children: [
      {
        path: "",
        component: () => import("@/views/table/list"),
        meta: {
          title: "列表",
        }
      },
      {
        path: "export",
        component: () => import("@/views/table/export"),
        meta: {
          title: "列表-导出",
        }
      }
    ]
  },
  {
    path: "/table1",
    component: layout,
    meta: {
      title: "表格2",
      icon: 'el-icon-message'
    },
    children: [
      {
        path: "",
        component: () => import("@/views/table/list"),
        meta: {
          title: "列表",
        }
      },
      {
        path: "export",
        component: () => import("@/views/table/export"),
        meta: {
          title: "列表-导出",
        }
      }
    ]
  },
];
export default routes;