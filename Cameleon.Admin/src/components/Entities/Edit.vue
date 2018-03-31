<template>
  <div>

    <div>
      <entities-nav>
        <span slot="title">Edit</span>
        <span slot="action">
          <form class="form-inline">
            <button class="btn btn-outline-light btn-sm" type="submit" form="editForm">Done</button>
          </form>
        </span>
      </entities-nav>
    </div>

    <div class="container-fluid">

      <div class="row">

        <div class="col-md-6">
          
          <form id="editForm" @submit.prevent="validateBeforeSubmit">

            <div class="form-group" :class="{'has-error': errors.has('name') }">
                <label class="control-label" for="name">Name</label>
                <input name="name" v-model="entity.name" v-validate="'required|min:2'" class="form-control" type="text" placeholder="Name">
                <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>

            <div class="form-group" :class="{'has-error': errors.has('address') }">
                <label class="control-label" for="address">Address</label>
                <input name="address" v-model="entity.address" v-validate="'required|min:2'" class="form-control" type="text" placeholder="Address">
                <p class="text-danger" v-if="errors.has('address')">{{ errors.first('address') }}</p>
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

  Vue.component('entities-nav', require('@/components/Entities/EntitiesNav.vue'))
  Vue.use(VeeValidate)

  export default {
    name: 'EditEntity',
    data () {
      return {
        entity: {
          name: '',
          address: ''
        }
      }  
    },
    created: function () {
      let url = Website.getUrl('api/entities/' + this.$route.params.id)
      this.$http.get(url, {}).then(
        response => {
          this.entity = response.body
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
        let url = Website.getUrl('api/entities/' + this.$route.params.id)
        
        this.$http.put(url, this.entity).then(
          response => {
            
            // get status
            response.status

            // get status text
            response.statusText

            // get 'Expires' header
            response.headers.get('Expires')
            
            this.$router.push('/Entities') 
          },
          response => {
            alert('Entity not updated')
          })
      }
    }
  }
  
</script>

<style>
</style>