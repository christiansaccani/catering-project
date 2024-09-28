import { registerPlugins } from '@/plugins';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
