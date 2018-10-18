<template>
  <div >
    <h1>{{ msg }}</h1>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer'
export default {
    name:'Index',
    components:{Footer},
    props:{},
    data(){
      return {
        msg:'news'
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
</style>