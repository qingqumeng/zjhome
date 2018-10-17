<template>
  <div id="app">    
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import rem from './rem/rem.js'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Footer,
  }
}
</script>

<style>
@import 'styles/style.css'
</style>
