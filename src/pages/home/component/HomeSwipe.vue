<template>
  <div class="wrapper">
      <Carousel v-model="value1" autoplay arrow="never">
        <CarouselItem v-for="(item, index) in swiper" :key="index">
           <img :src=item.img :alt=item.text class="swiperimg"> 
        </CarouselItem>       
    </Carousel>
  </div>
</template>

<script>
export default {
    name:'HomeSwipe',
    components:{},
    props:{},
    data(){
        return {
            value1:1,           
            swiper:[
                {id:0,img:'../static/img/bj.jpg',text:'图片1'},
                {id:1,img:'../static/img/bj.png',text:'图片2'},
                {id:2,img:'../static/img/bj.jpg',text:'图片3'},
                {id:3,img:'../static/img/bj.png',text:'图片4'},
                {id:4,img:'../static/img/bj.jpg',text:'图片5'}
                ]
        }
  },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
}
</script>
<style lang="stylus" scoped>
.wrapper
    background-color #f25d1f
    height 5rem
    margin-top 1.3rem   
    .ivu-carousel
        height 100%
        overflow hidden
        img     
            height 100%            

</style>