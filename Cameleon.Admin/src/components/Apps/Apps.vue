<template>

<div>
  
  <main-nav>
    <span slot="title">Apps</span>
    <span slot="action">
      <a href="/#/apps/add" class="btn btn-primary btn-outline-light btn-sm">Add</a>
    </span>
  </main-nav> 

  <div class="container-fluid">

    <div class="py-2 d-none d-md-block d-lg-block">
      <a href="/#/apps/add" class="btn btn-primary">Add</a>
    </div>

    <table id="mainTable" class="table table-striped mb-0">
      <thead>
      <tr>
          <th>Name</th>
          <th>Active</th>
      </tr>
      </thead>
      <tbody v-for="app in apps" :key="app._id">
      <tr>
          <td>
              <!-- <img class="card-img-top" :src="app.imagePath" alt="Card image cap"> -->
              <a :href="app.url">{{ app.title }}</a>
          </td>
          <td>{{ app.active }}</td>
      </tr>  
      </tbody>
    </table>

  </div>

</div>
</template>

<script>

  import Website from '@/utils/website'
  import Vue from 'vue'

  Vue.component('main-nav', require('@/components/MainNav.vue'))

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
        this.$http.get(Website.getUrl('api/apps'), {}).then(
          response => {
            // success callback
            this.apps = response.body
            this.apps.forEach(element => {
              element.url = '#/apps/' + element._id
              // element.imagePath = require('../apps/hello/images/hello01.png')
            })
            
          },
          response => {
            // error callback
          })   
      }
    }
  }

</script>