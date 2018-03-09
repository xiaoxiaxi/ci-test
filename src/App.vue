<template>
  <div id="app">
    <el-tabs @tab-click="handleClick">
      <el-tab-pane label="主页" name="main"></el-tab-pane>
      <el-tab-pane label="列表" name="list"></el-tab-pane>
      <el-tab-pane label="关于" name="about"></el-tab-pane>
    </el-tabs>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick (tab, event) {
      this.$router.push({ name: tab.name })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
