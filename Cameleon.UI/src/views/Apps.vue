<template>

<div>
  <router-view></router-view>
  <table id="mainTable" class="table table-striped m-b-0">
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
            <router-link :to="app.url">{{ app.title }}</router-link>
        </td>
        <td>{{ app.active }}</td>
    </tr>  
    </tbody>
  </table>

</div>
</template>

<script lang="ts">

import axios from 'axios';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Apps extends Vue {

  public apps: any = [];

  public created() {
    this.getApps();
  }

  private getApps() {
    axios.get('http://localhost:8000/api/queries/app/{}/{}')
      .then((response) => {
        this.apps = response.data;
        for (const element of this.apps) {
          element.url = 'app/' + element.name;
        }
      });
  }
}

</script>