import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Materialize
import 'materialize-css/dist/js/materialize.min'

// Filters
import dateFilter from "./filters/date.filter";
Vue.filter('date', dateFilter);

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
