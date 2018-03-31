<template>

<div>
  
  <main-nav>
    <span slot="title">Entities</span>
    <span slot="action">
      <a href="/#/entities/add" class="btn btn-primary btn-outline-light btn-sm">Add</a>
    </span>
  </main-nav> 

  <div class="container-fluid">

    <div class="py-2 d-none d-md-block d-lg-block">
      <a href="/#/entities/add" class="btn btn-primary">Add</a>
    </div>

    <table id="mainTable" class="table table-striped mb-0">
      <thead>
      <tr>
          <th>Name</th>
          <th>Address</th>          
          <th>Active</th>
      </tr>
      </thead>
      <tbody v-for="entity in entities" :key="entity._id">
      <tr>
          <td>
              <!-- <img class="card-img-top" :src="entity.imagePath" alt="Card image cap"> -->
              <a :href="entity.url">{{ entity.name }}</a>
          </td>
          <td>{{ entity.address }}</td>
          <td>{{ entity.active }}</td>
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
    name: 'entities',
    data () {
      return {
        entities: []
      }
    },
    created: function () {
      this.getEntities()
    },
    methods: {
      getEntities () {
        this.$http.get(Website.getUrl('api/entities'), {}).then(
          response => {
            // success callback
            this.entities = response.body
            this.entities.forEach(element => {
              element.url = '#/entities/' + element._id
              // element.imagePath = require('../entities/hello/images/hello01.png')
            })
            
          },
          response => {
            // error callback
          })   
      }
    }
  }

</script>