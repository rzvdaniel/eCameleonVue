<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <nest text="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import nest from '@/components/nest.ts'; // @ is an alias to /src

@Component({
  components: {
    nest,
  },
})
export default class Home extends Vue {}
</script>
