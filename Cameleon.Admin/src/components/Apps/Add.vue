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

            <div class="form-group" :class="{'has-error': errors.has('summary') }">
                <p class="text-danger" v-if="errors.has('summary')">{{ errors.first('summary') }}</p>
            </div>

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
        // this.$validator.validateAll().then((result) => {
        //   if (result) {
        this.submitForm()
        //     return
        //   }
        // })
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
            this.data = response.body
            
            this.$router.push('/Apps') 
          },
          response => {
            
            let responseErrors = response.body.uiErrors

            for (const key in responseErrors) {
              this.errors.add(key, responseErrors[key].msg)
            }

            // A. Incomming errors structure:
            // {
            //     "errors": {
            //         "name":{"location":"body","param":"name","value":"","msg":"Invalid value"},
            //         "title":{"location":"body","param":"title","value":"","msg":"Invalid value"}
            //     }
            // }

            // B. Client errors structure
            // {
            //   "items": [
            //     {
            //       "field": "email",
            //       "msg": "Newsletter Email is not valid",
            //       "rule": "email",
            //       "scope": "newsletter",
            //       "regenerate": null
            //     },
            //     {
            //       "field": "email",
            //       "msg": "Newsletter Email is required",
            //       "rule": "required",
            //       "scope": "newsletter",
            //       "regenerate": null
            //     }
            //   ]
            // }
          })
      }
    }
  }
  
</script>

<style>
</style>