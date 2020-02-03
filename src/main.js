import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import wrap from '@vue/web-component-wrapper';
import "vuetify/dist/vuetify.min.css";
import VueComponent from './components/vue-component'

const CustomElement = wrap(Vue, VueComponent);

Vue.use(vuetify);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

window.customElements.define('vue-component', CustomElement);
