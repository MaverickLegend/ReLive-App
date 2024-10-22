import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(Toast);

app.mount('#app');
