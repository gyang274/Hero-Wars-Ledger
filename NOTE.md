# ledger

## venv

```
$ nvm -v
0.37.0

$ node -v
v16.15.0

$ npm -v
8.5.5

$ vue -V
@vue/cli 5.0.4
```

## init

### vue + vite

```
npm init vue@latest
#- router and pinia
```

```
cd src
npm install
npm run dev
```

### quasar

```
npm install quasar @quasar/extras

npm install --save-dev @quasar/vite-plugin sass@1.32.12 
```

```
// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
```

```
// FILE: vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

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
    })
  ]
})
```

```
// FILE (create it): src/styles/quasar-variables.sass

$primary   : #1976D2
$secondary : #26A69A
$accent    : #9C27B0

$dark      : #1D1D1D

$positive  : #21BA45
$negative  : #C10015
$info      : #31CCEC
$warning   : #F2C037
```

### plugins

- vite-plugin-commonjs

dynamic binding with require()

```
npm install --save-dev @originjs/vite-plugin-commonjs
```

```
# vite.config.js

import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

export default {
    plugins: [
        viteCommonjs()
    ]
}
```