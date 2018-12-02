<template>
<!-- <h1>helllo i am error</h1> -->
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>


  </div>
  
</template>

<script>
import NameList from './component/NameList.vue'
import Header from './component/header.vue'
import Footer from './component/footer.vue'
import Content from './component/content.vue'

export default {
  name: 'app',
  components:{
    'NameList':NameList,
    'app-header':Header,
    'app-footer':Footer,
    'app-content':Content
  },
  data :function() {
    return {
      msg: 'Welcome to Your Vue.js App',
      names:['aung','kyaw','zin']
    }
  },
  methods:{
    greet:function(){
      return 'nice to meet you man!'
    }
  }
}
</script>

<style>
h1{
  color: rgb(196, 68, 59);
}
</style>
