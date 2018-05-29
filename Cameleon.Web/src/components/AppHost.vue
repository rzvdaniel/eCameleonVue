<template>
  <div id="apps"> 
    <!-- <keep-alive> -->
      <component :is="currentView"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
  export default {
    name: 'appHost',
    props: ['name'],
    data: () => ({
      currentView: {}
    }),
    created: function () {
      this.setCurrentApp(this.$route.params.name)
    },
    watch: {
      '$route' (to, from) {
        this.setCurrentApp(to.params.name)
      }
    },
    activated () {
      this.setCurrentApp(this.$route.params.name)
    },
    methods: {
      setCurrentApp: function (appName) {
        this._data.currentView = resolve => {
          resolve(require('./' + appName))
        }
      }
    }
  }
</script>

<style>

</style>
