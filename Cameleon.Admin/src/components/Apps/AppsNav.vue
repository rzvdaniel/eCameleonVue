<template>
  <nav class="navbar navbar-dark bg-primary">
    <div>
      
      <a class="float-left pt-1 text-white" href="#/apps/">
          <i class="material-icons">keyboard_backspace</i>
      </a>

      <div class="float-left">
        <h4 class="text-white px-2">
          <slot name="title"></slot>
        </h4>
      </div>

    </div>

    <div class="float-right px-2 d-lg-none d-md-none">
        <slot name="action"></slot>
    </div>

  </nav>  
</template>

<script>
  export default {
    name: 'apps-nav'
  }
</script>

<style>
</style>

