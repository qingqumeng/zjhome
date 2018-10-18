<template>
  <div class="Home">
    <div class="HomeHeader">之江家园</div> 
      <!-- <Affix>
        <span class="affix">之江家园</span>
    </Affix> -->
    <home-swipe></home-swipe>
    <home-hot></home-hot>
    {{ msg }}
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer'
import HomeSwipe from './component/HomeSwipe'
import HomeHot from './component/HomeHot'

export default {
  name: 'Home',
  components:{HomeSwipe,Footer,HomeHot},
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
    top 0
    width 100%
    height 1.3rem
    line-height 1.3rem
    background-color #f3f3f3
    font-size 0.35rem
    color #f00
    z-index 1
  .divider  
    border-border-bottom  0.1rem solid #000
</style>
