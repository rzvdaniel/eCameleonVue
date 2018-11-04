<template>
  <div class="test">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Test extends Vue {
  public data() {
    return {
      text: 'I\'m an alligator!',
    };
  }

  public baz() {
    const c = 1;
    alert('baz');
  }
}
</script>
