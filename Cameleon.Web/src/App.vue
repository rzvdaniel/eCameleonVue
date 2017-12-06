<template>
  <div id="app">
    
    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./styles/custom-bootstrap.scss";
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 10px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #2c3e50;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
