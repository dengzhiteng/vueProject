import {defineConfig, loadEnv} from "vite"
import {resolve} from "path"
import { createHtmlPlugin } from "vite-plugin-html"
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import vue from '@vitejs/plugin-vue'

// elementPlus按需导入
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"

const getViteEnv = (mode: any, target: any) => {
  return loadEnv(mode, process.cwd())[target]
}

export default () =>
  defineConfig({
    base: './',
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue']
      }),
      Components({
        resolvers: [
          // 1. 配置elementPlus采用sass样式配色系统
          ElementPlusResolver({ importStyle: 'sass' })
        ]
      }),
      createHtmlPlugin({
        inject: {
          data: {}
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/variables.scss" as *;`
        }
      },
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      }
    },
    server: {
      port: 9090,
      host: '0.0.0.0',
      hmr: true,
      proxy: {
        '/api/': {
          target: '/api/',
          changeOrigin: true,
          rewrite: (p:any) => p.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  })
