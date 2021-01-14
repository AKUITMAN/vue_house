// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueCookie from 'vue-cookie';
import VueAMap from 'vue-amap';
Vue.use(VueAMap)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueCookie);
VueAMap.initAMapApiLoader({
  key: '32f1324b2c5ef583e67377b8c54927a7',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
  v: '1.4.4',
  uiVersion: '1.0'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
