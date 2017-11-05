<template>
  <div id="apps"> 
    <component v-bind:is="currentView"></component>
  </div>
</template>

<script>
  export default {
    name: 'apps',
    data: () => ({
      currentView: {}
    }),
    created: function () {

      const currentPath = this.$router.history.current.path
      const pathArray = currentPath.split(/[\s/]+/)
      const app = pathArray[pathArray.length - 1]

      this._data.currentView = resolve => {
        resolve(require('../apps/' + app + '.vue'))
      }
    }
  }
</script>

<style>

</style>
