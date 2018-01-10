<template>
  <div>

    <div>
      <apps-nav>
        <span slot="title">Edit</span>
        <span slot="action">
          <form class="form-inline">
            <button class="btn btn-outline-light btn-sm" type="submit" form="editAppForm">Done</button>
          </form>
        </span>
      </apps-nav>
    </div>

    <div class="container-fluid">

      <div class="row">

        <div class="col-md-6">
          
          <form id="editAppForm" @submit.prevent="validateBeforeSubmit">

            <div class="form-group" :class="{'has-error': errors.has('name') }">
                <label class="control-label" for="name">Name</label>
                <input name="name" v-model="app.name" v-validate="'required|alpha|min:2'" class="form-control" type="text" placeholder="App Name">
                <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('title') }">
                <label class="control-label" for="title">Title</label>
                <input name="title" v-model="app.title" v-validate="'required|min:2'" class="form-control" type="text" placeholder="App Title">
                <p class="text-danger" v-if="errors.has('title')">{{ errors.first('title') }}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('image') }">
                <label class="control-label" for="image">Image</label>
                <input name="image" v-model="app.image" v-validate="'max:50'" class="form-control" type="text" placeholder="App Image">
                <p class="text-danger" v-if="errors.has('image')">{{ errors.first('image') }}</p>
            </div>

            <button class="btn btn-primary d-none d-md-block d-lg-block" type="submit">Done</button>

          </form>
        </div>
      
      </div>

    </div>

  </div>
</template>

<script>

  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import Website from '@/utils/website'

  Vue.component('apps-nav', require('@/components/Apps/AppsNav.vue'))
  Vue.use(VeeValidate)

  export default {
    name: 'EditApp',
    data () {
      return {
        app: {
          name: '',
          title: '',
          image: ''
        }
      }  
    },
    created: function () {
      let url = Website.getUrl('api/apps/' + this.$route.params.id)
      this.$http.get(url, {}).then(
        response => {
          this.app = response.body
        },
        response => {
          // error callback
        })
    },
    methods: {
      validateBeforeSubmit (e) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.submitForm()
            return
          }
        })
      },
      submitForm () {
        let url = Website.getUrl('api/apps/' + this.$route.params.id)
        this.$http.put(url, this.app).then(
          response => {
            // get status
            response.status

            // get status text
            response.statusText

            // get 'Expires' header
            response.headers.get('Expires')
            
            this.$router.push('/Apps') 
          },
          response => {
            alert('App not updated')
          })
      }
    }
  }
  
</script>

<style>
</style>