import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 
import { createVuetify } from 'vuetify';  // Correct import
import 'vuetify/styles';  // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css';  // Import Material Design Icons

// Create Vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Set default icon set to Material Design Icons
  },
});

const app = createApp(App);

// Register Quill globally in the app
app.config.globalProperties.$quill = Quill;

// Use Vuetify with the app
app.use(vuetify);

// Mount the app to the DOM
app.mount('#app');
