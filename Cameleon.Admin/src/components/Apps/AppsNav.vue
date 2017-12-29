<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div>
      <a class="navbar-brand float-left" href="#/apps/">
          <i class="material-icons">keyboard_backspace</i>
      </a>

      <div class="float-left">
        <a class="navbar-brand" href="#">
          <slot name="action" class="d-sm-block d-md-block d-lg-none d-md-none"></slot>
        </a>
      </div>
    </div>

  </nav>  
</template>

<script>
  export default {
    name: 'apps-nav'
  }
</script>

<style>
  .title {
    padding-left: 10px;
  }
</style>

