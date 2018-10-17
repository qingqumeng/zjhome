<template>
  <div id="bottom">

    <ul class="bottom-ul">
      <router-link to="/" tag="li">
        <div>
          <Icon type="ios-home-outline" size="24" />        
          <Icon type="ios-home" />        
        </div>
          <span>首页</span>
      </router-link>
      <router-link to="/" tag="li">
        <div>
          <Icon type="ios-keypad-outline" />
          <Icon type="ios-keypad" />
                
        </div>
          <span>社区</span>
      </router-link>
      <router-link to="/" tag="li">
        <div>
          <Icon type="ios-pin-outline" />        
          <Icon type="ios-pin" />        
        </div>
          <span>动态</span>
      </router-link>
      <router-link to="/" tag="li">
        <div>
          <Icon type="ios-contact-outline" /> 
          <Icon type="ios-contact" /> 
        </div>
          <span>我的</span>
      </router-link>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to zjhome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
#bottom
  width 100%
  position fixed
  bottom 0
  .bottom-ul
    display:flex
    justify-content center
    align-items center 
    height 2rem
    li
      width 25%
      display flex
      flex-direction column
      justify-content center
      text-align center
      span 
        font-size .3rem
      .i-icon 
        font-size 0.3rem

    .router-link:hover
      color:#25b5fe
</style>

