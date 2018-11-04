<template>
  <div id="apps"> 
    <!-- <keep-alive> -->
      <component :is="currentView"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script>

// import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

// @Component({ components: {}, props: {} })
// export default class AppHost extends Vue {
//   public currentView = {};

//   public data() {
//     return {
//       text: 'This is a test app!',
//     };
//   }
//   public async setCurrentApp(appName: string) {
//     const app = await import('../apps/' + appName + '/' + appName);
//     this.currentView = app.default;
//   }

//   public navigated() {
//     alert('navigate');
//     this.setCurrentApp(this.$route.params.name);
//   }

//   public created() {
//     this.setCurrentApp(this.$route.params.name);
//   }

//   public activated() {
//     this.setCurrentApp(this.$route.params.name);
//   }

// }

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
        alert('setCurrentApp');
        this._data.currentView = resolve => {
          resolve(require('../apps/' + appName + '/' + appName));
        }
      }
    }
  }

</script>

<style>
</style>
