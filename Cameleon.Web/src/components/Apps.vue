<template>

  <div id="home"> 
    <a href="#/apps/Hello"> 
      <i class="fa fa-fort-awesome icon"></i>
    </a>
    <a href="#/apps/Bye">
      <i class="fa fa-pied-piper-alt icon"></i>
    </a>
  </div>
  
</template>

<script>

  require('font-awesome/css/font-awesome.css')

  export default {
    name: 'home',
    data: () => ({
    })
  }

</script>

<style>

  .icon {
    color: black;
    margin-top: 5px;
    font-size: 180px;
    text-align: center;
    line-height: 180px;
    text-shadow: 0 2px 0 rgba(0,0,0,0.15);
  }

</style>
