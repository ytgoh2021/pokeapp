<template>
   <nav class="navbar navbar-expand navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse px-5 " style="background-color: 	rgb(194, 43, 46);" id="navbarNav">
    <ul class="navbar-nav  ">
      <li class="nav-item active ">
          <router-link class="fs-4 nav-link text-light  border-end" to="/">Home</router-link>
      </li>
      <li class="nav-item ">
        <router-link class="fs-4 nav-link text-light " to="/search">Search</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
    export default {
        name: 'HeaderBar'
    }



</script>