<template>
  <div >
    <Tabs>
        <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
        <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {
      msg: 'Welcome to zjhome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
