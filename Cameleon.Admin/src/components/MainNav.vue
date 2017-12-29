<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div>
      <button class="navbar-toggler float-left" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="float-left d-sm-block d-md-block d-lg-none d-md-none">
        <a class="navbar-brand title" href="#">
          <slot name="title"></slot>
        </a>
      </div>
    </div>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/apps/">Apps</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/entities">Entities</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>

  </nav>  
</template>

<script>
  export default {
    name: 'main-nav'
  }
</script>

<style>
  .title {
    padding-left: 10px;
  }
</style>

