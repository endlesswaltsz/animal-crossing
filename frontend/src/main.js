import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import routes from './router/router'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
	routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== "login") {next({name: 'login'})} else next()
  
})
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
      document.title = to.meta.title
  });
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
