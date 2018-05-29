<template>
  <div id="hello" class="container-fluid">

      <div class="row">
        <div class="col-md-12">
          <h1>Child App!</h1>
          <p>Back to Home</p>
          <a href="#/app/Parent">Navigate to Home</a>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'child',
    data () {
      return {
      }
    },
    created () {
      console.log(this.$route.query)
    },
    activated () {
      console.log(this.$route.query)
    }
  }
  
</script>

<style>

</style>