<template>
<div id="home"> 
  <a href="#" @click="currentView='Hello'">Hello</a>
  <a href="#" @click="currentView='Bye'">Bye</a>
  <component v-bind:is="currentView"></component>
</div>
</template>

<script>

var comps = {}

comps['Hello'] = resolve => {
  require.ensure(['./Hello.vue'], () => {
    resolve(require('./Hello.vue'))
  })
}

comps['Bye'] = resolve => {
  require.ensure(['./Bye.vue'], () => {
    resolve(require('./Bye.vue'))
  })
}

export default {
  name: 'home',
  data: () => ({
    currentView: 'Hello'
  }),
  components: comps
}

</script>

<style>

</style>
