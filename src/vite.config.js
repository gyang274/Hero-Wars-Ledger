import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls
      }
    }),
    quasar({
      sassVariables: 'src/styles/quasar-variables.sass'
    }),
    viteCommonjs(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // // set base = '', default '/'
  // //  or use `npm run build --base=""` when build
  // // gh-page look for __absolute__ directory w.r.t account, 
  // //  but want look for __relative__ directory w.r.t account's project
  // // see resume-template for details
  // base: '',
})
