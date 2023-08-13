import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import * as components from "@element-plus/icons-vue";

const app = createApp(App)

for (const key in components) {
    const componentConfig = components[key];
    app.component(componentConfig.name, componentConfig);
}


app.use(ElementPlus, {locale:zhCn}).use(store).use(router).mount('#app')