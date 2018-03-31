<template>
  <div>

    <div>
      <entities-nav>
        <span slot="title">Add</span>
        <span slot="action">
          <form class="form-inline">
            <button class="btn btn-outline-light btn-sm" type="submit" form="addForm">Submit</button>
          </form>
        </span>
      </entities-nav>
    </div>

    <div class="container-fluid">

      <div class="row">

        <div class="col-md-6">

          <form id="addForm" @submit.prevent="validateBeforeSubmit">

            <div class="form-group" :class="{'has-error': errors.has('summary') }">
                <p class="text-danger" v-if="errors.has('summary')">{{ errors.first('summary') }}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('name') }">
                <label class="control-label" for="name">Name</label>
                <input name="name" v-model="name" v-validate="'required|alpha|min:2'" class="form-control" type="text" placeholder="Name">
                <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('address') }">
                <label class="control-label" for="address">Address</label>
                <input name="address" v-model="address" v-validate="'required|min:2'" class="form-control" type="text" placeholder="Address">
                <p class="text-danger" v-if="errors.has('address')">{{ errors.first('address') }}</p>
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
  Vue.component('entities-nav', require('@/components/Entities/EntitiesNav.vue'))

  Vue.use(VeeValidate)

  export default {
    name: 'AddEntity',
    data () {
      return {
        name: '',
        address: ''
      }
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
        var details = {
          name: this.name,
          address: this.address,
          image: this.image
        }

        this.$http.post(Website.getUrl('api/entities'), details).then(
          response => {
            // get status
            response.status

            // get status text
            response.statusText

            // get 'Expires' header
            response.headers.get('Expires')

            // get body data
            this.data = response.body
            
            this.$router.push('/Entities') 
          },
          response => {      
            this.errors.add('summary', 'An error occured when creating the entity')
          })
      }
    }
  }
  
</script>

<style>
</style>