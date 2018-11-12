<template>
  <div id="AppHost"> 
    <!-- <keep-alive> -->
      <component :is="currentView"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script>

export default {
  name: 'appHost',
  data: () => ({
    currentView: {},
  }),
  created() {
    this.setCurrentApp(this.$route.params.name);
  },
  watch: {
    $route(to, from) {
      this.setCurrentApp(to.params.name);
    },
  },
  activated() {
    this.setCurrentApp(this.$route.params.name);
  },
  methods: {
    setCurrentApp(appName) {
      this._data.currentView = (resolve) => {
        resolve(require('../apps/' + appName + '/' + appName));
      };
    },
  },
};

// import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

// @Component({})
// export default class AppHost extends Vue {
//   public currentView = {};

//   public data() {
//     return {
//       currentView: {}
//     };
//   }
//   public async setCurrentApp(appName: string) {
//     const app = await import('../apps/' + appName + '/' + appName);
//     this.currentView = app.default;
//   }

//   public navigated() {
//     this.setCurrentApp(this.$route.params.name);
//   }

//   public created() {
//     this.setCurrentApp(this.$route.params.name);
//   }

//   public activated() {
//     this.setCurrentApp(this.$route.params.name);
//   }

//   @Watch('$route') onRouteChange(to: any, from: any) {
//     alert('Hello');
//     this.setCurrentApp(to.params.name);
//   }
// }

</script>

<style>
</style>
