import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AnotherPage from './components/AnotherPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/another', component: AnotherPage },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
