<template>
  <div id="bottom">
    <ul class="bottom-ul">
      <router-link to="/Home" tag="li">
        <div>
          <Icon type="ios-home-outline" v-if="active==='Home'"  />        
          <Icon type="ios-home" v-else/>        
        </div>
          <span>首页</span>
      </router-link>
      <router-link to="/Community" tag="li" >
        <div>
          <Icon type="ios-keypad-outline" v-if="active==='Community'" />
          <Icon type="ios-keypad" v-else/>                
        </div>
          <span>社区</span>
      </router-link>
      <router-link to="/News" tag="li">
        <div>
          <Icon type="ios-pin-outline" v-if="active==='News'"/>        
          <Icon type="ios-pin" v-else/>        
        </div>
          <span>动态</span>
      </router-link>
      <router-link to="/My" tag="li">
        <div>
          <Icon type="ios-contact-outline" v-if="active==='My'"/> 
          <Icon type="ios-contact" v-else/> 
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
      active:'Home'
    }
  },
  mounted(){  
    // this.active=this.$route.name
    // console.log('mount'+this.active)
  },
  methods:{
   show:()=>console.log('||'+this.active)  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
#bottom
  width 100%
  position fixed
  bottom 0
  background-color #f3f3f3 
  .bottom-ul
    display:flex
    justify-content center
    align-items center 
    height 1.6rem
    li
      width 25%
      display flex
      flex-direction column
      justify-content center
      text-align center
      span 
        font-size .3rem;
      i
        font-size :0.5rem      
    .router-link:hover,.router-link-active
      color:#25b5fe
</style>

