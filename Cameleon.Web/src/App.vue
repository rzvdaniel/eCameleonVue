<template>
  <div id="app" class="container-fluid">
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">eCameleon</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#/">Home</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>

  </div>
</template> 

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>

<style>
</style>
