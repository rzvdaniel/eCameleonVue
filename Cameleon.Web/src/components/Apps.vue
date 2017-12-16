<template>

  <div id="home"> 
    <div class="row">
      <div v-for="app in apps" :key="app._id">
        <div class="card" style="width: 20rem;margin:10px;">
          <img class="card-img-top" :src="app.imagePath" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title"><a :href="app.path">{{ app.name }}</a></h4>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>     
      </div>
    </div>

  </div>
  
</template>

<script>

  export default {
    name: 'apps',
    data () {
      return {
        apps: []
      }
    },
    created: function () {
      this.getApps()
    },
    methods: {
      getApps () {
        this.$http.get('http://localhost:8000/api/apps', {}).then(
          response => {
            // success callback
            this.apps = response.body
            this.apps.forEach(element => {
              element.imagePath = require('../apps/hello/images/hello01.png')
            })
            
          },
          response => {
            // error callback
          })   
      }
    }
  }

</script>

<style>

/* .foo {
    background-image: url("../apps/hello/images/hello01.png");
} */

</style>
