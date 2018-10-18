<template>
<div class="hot">
    <img src="@/assets/toutiao.png" alt="头条" class="hotimg">
    <marquee direction="up" scrollamount="" scrolldelay="500" class="hottext" > A warning promptA warning promptA warning prompt</marquee>
</div> 
</template>

<script>
export default {
name:'HomeHot',
   data() {
     return {

     }
   },
    components:{ },
    computed:{},
    methods:{},
    creaded(){},
}
</script>

<style lang="stylus" scoped>
.hot
  width 100%
  height 1.5rem
  line-height 1rem
  margin-top 1px
  background-color #e6eae3
  display flex    
  justify-content center
  align-items center    
  .hotimg 
    height 1rem
    margin 0 .2rem     
  .hottext
    font-size 0.5rem  
    overflow hidden
    white-space nowrap 
    // text-overflow ellipsis      
</style>
