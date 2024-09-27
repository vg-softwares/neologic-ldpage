import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createBootstrap } from 'bootstrap-vue-next';

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
// Importando Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Isso inclui o Popper também

import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);
app.use(createBootstrap()); // Important
app.mount('#app');
