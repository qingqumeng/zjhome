<template>
  <div class="Home">
    <div class="HomeHeader">之江家园</div>
    <home-swipe></home-swipe>
    <h1>{{ msg }}</h1>   
    <Footer></Footer>
  </div>
</template>

<script>
import HomeSwipe from './component/HomeSwipe'
import Footer from '../../components/Footer'

export default {
  name: 'Home',
  components:{HomeSwipe,Footer},
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.Home
  .HomeHeader  
    position fixed
    tap 0
    width 100%
    height 1.3rem
    line-height 1.3rem
    background-color #f3f3f3
    font-size 0.35rem
    color #f00
    z-index 1
</style>
