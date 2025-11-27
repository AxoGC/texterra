import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {createI18n} from 'vue-i18n'

import App from './App.vue'
import router from './router'
import zh from './locale/zh'
import en from './locale/en'
import {useColorMode} from '@vueuse/core'

const app = createApp(App)

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: { zh, en },
})
app.use(i18n)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ElementPlus)

const mode = useColorMode()
mode.value = 'auto'

app.mount('#app')
