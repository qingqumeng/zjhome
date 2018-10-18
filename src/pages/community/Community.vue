<template>
  <div >
    <h1>{{ msg }}</h1>
    <Footer></Footer>   
  </div>
</template>

<script>
import Footer from '../../components/Footer'

export default {
  name: 'Index',
  components:{Footer},
  data () {
    return {
      msg: 'community'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
