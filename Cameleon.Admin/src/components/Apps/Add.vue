<template>
  <div>

    <div>
      <apps-nav>
        <span slot="title">Add</span>
        <span slot="action">
          <form class="form-inline">
            <button class="btn btn-outline-light btn-sm" type="submit" form="addAppForm">Submit</button>
          </form>
        </span>
      </apps-nav>
    </div>

    <div class="container-fluid">

      <div class="row">

        <div class="col-md-6">

          <form id="addAppForm" @submit.prevent="validateBeforeSubmit">

            <div class="form-group" :class="{'has-error': errors.has('name') }">
                <label class="control-label" for="name">Name</label>
                <input name="name" v-model="name" v-validate="'required|alpha|min:2'" class="form-control" type="text" placeholder="App Name">
                <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('title') }">
                <label class="control-label" for="title">Title</label>
                <input name="title" v-model="title" v-validate="'required|min:2'" class="form-control" type="text" placeholder="App Title">
                <p class="text-danger" v-if="errors.has('title')">{{ errors.first('title') }}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('image') }">
                <label class="control-label" for="image">Image</label>
                <input name="image" v-model="image" v-validate="'max:50'" class="form-control" type="text" placeholder="App Image">
                <p class="text-danger" v-if="errors.has('image')">{{ errors.first('image') }}</p>
            </div>

            <button class="btn btn-primary d-none d-md-block d-lg-block" type="submit">Submit</button>

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

  Vue.use(VeeValidate)

  export default {
    name: 'AddApp',
    data () {
      return {
        name: '',
        title: '',
        image: ''
      }
    },
    methods: {
      validateBeforeSubmit (e) {
        this.$validator.validateAll()

        if (!this.errors.any()) {
          this.submitForm()
        }
      },
      submitForm () {
        var details = {
          name: this.name,
          title: this.title,
          image: this.image
        }

        this.$http.post(Website.getUrl('api/apps'), details).then(
          response => {
            // get status
            response.status

            // get status text
            response.statusText

            // get 'Expires' header
            response.headers.get('Expires')

            // get body data
            this.someData = response.body
            
            this.$router.push('/Apps') 
          },
          response => {
            alert('App not created')
          })
      }
    }
  }
  
</script>

<style>
</style>