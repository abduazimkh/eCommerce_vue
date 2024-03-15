import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import store from "./store";
import router from './routes';
import BackToTop from 'vue-backtotop';
import Vue3Toastify from 'vue3-toastify';

createApp(App)
.use(BackToTop)
.use(router)
.use(store)
.use(Vue3Toastify, {
  autoClose: 3000,
})
.mount('#app')
