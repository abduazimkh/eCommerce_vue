import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import store from "./store";
import router from './routes';
import BackToTop from 'vue-backtotop';

createApp(App)
.use(BackToTop)
.use(router)
.use(store)
.mount('#app')
