<template>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <h5 class="card-title mt-3">{{ pokename }}</h5>
      <img :src=picture class="border img-fluid rounded">
    </div>
    <div class="col-md-8">
      <div class="card-body text-start">
        <div> <p class="mb-1 fw-bold">Description:</p><p class="card-text mb-2">{{ desc }}</p></div>
        <p class="card-text mb-2"><b>Abilities:</b> {{ abilities }}</p>
        <p class="card-text mb-2"><b>Height:</b> {{height}}</p>
        <p class="card-text mb-2"><b>Weight:</b> {{weight}}</p>
        <!-- <p class="card-text mb-2"><small class="text-muted">Last updated 3 mins ago</small></p> -->
      </div>
    </div>
  </div>
</div>
    
</template>


<script>
    export default {
        name: 'PokemonCard',
        props: ['pokedata', 'picture', 'pokename', 'height', 'weight', 'abilities', 'desc'],
        data(){
            return {
                name: '',
                abilitiesstr: '',
            }
        },
    }
</script>