import Vue from 'vue'
import App from './App.vue'
import show from './component/show.vue'

Vue.component('showname',{
  template:'<ul><li>aung</li><li>aung</li></ul>'
})

Vue.component('show',show)

new Vue({
  el: '#app',
  render: h => h(App)
})
