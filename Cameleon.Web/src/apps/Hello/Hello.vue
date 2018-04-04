<template>
  <div id="hello" class="container-fluid">

      <div class="row">

        <div class="col-md-6">
            <h1>Simple Form</h1>

          <form @submit.prevent="validateBeforeSubmit">

            <div class="form-group" :class="{'has-error': errors.has('name') }">
                <label class="control-label" for="name">Name</label>
                <input name="name" v-model="name" v-validate="'required|alpha|min:3'" class="form-control" type="text" placeholder="Full Name">
                <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('email') }" >
                <label class="control-label" for="email">Email</label>
                <input name="email" v-model="email" v-validate="'required|email'" class="form-control" type="email" placeholder="Email">
                <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('text') }">
                <label class="control-label" for="text">Text</label>
                <input name="text" v-model="text" class="form-control" type="text" placeholder="Text">
                <p class="text-danger" v-if="errors.has('text')">{{ errors.first('text') }}</p>
            </div>

            <button class="btn btn-primary" type="submit">Submit</button>

          </form>
        </div>

        <div class="col-md-6">
          <h1>Description</h1>
          <br>
          <p> This form was written as a *.Vue component and contains it's own HTML
            template, Javascrit logic and Css styles.</p>
          <p> The Javascript logic access the REST service to serialize itself as an Activity. Serialization takes place
            into a MongoDB database, a NoSQL database which is more friendlier with ad-hoc, complex objects than a Relational Database is. </p>
        </div>
      </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    name: 'hello',
    data () {
      return {
        email: '',
        name: '',
        text: ''
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
        let appName = this.$route.params.name
        console.log(appName)
        debugger
        alert(this._data)
      }
    }
  }
  
</script>

<style>

</style>