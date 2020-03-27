import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Loader
import Loader from "./components/app/Loader";
Vue.component('Loader', Loader);

// Materialize
import 'materialize-css/dist/js/materialize.min'

// Filters
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import localizeFilter from "./filters/localize.filter";

Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);

// Plugins
import messagePlugin from './utils/message.plugin';
import titlePlugin from './utils/title.plugin';
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta'
Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.component('Paginate', Paginate);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});

// Directives
import tooltipDirective from './directives/tooltip.directive';
Vue.directive('tooltip', tooltipDirective);

Vue.config.productionTip = false;
Vue.use(Vuelidate);

// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBS41CDXE71DYJreIDifmozbxT08Gmaojg",
  authDomain: "vue-money-crm.firebaseapp.com",
  databaseURL: "https://vue-money-crm.firebaseio.com",
  projectId: "vue-money-crm",
  storageBucket: "vue-money-crm.appspot.com",
  messagingSenderId: "1057285923855",
  appId: "1:1057285923855:web:a8b06580395801f7e72f7a"
};

firebase.initializeApp(config);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});

