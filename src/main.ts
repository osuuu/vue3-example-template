import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'




//动态修改title
import VueWechatTitle from 'vue-wechat-title'


const app = createApp(App);
app.use(VueWechatTitle);
app.use(store);
app.use(router);
app.mount('#app');