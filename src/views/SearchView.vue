
<template>
    <div>
    <h5 class="text-danger" v-if="invalid">The pokemon cannot be found. Please ensure you have the correct spelling</h5>
    <div class="row g-3 justify-content-center">
        <div class="col-auto">
            <input @keyup.enter="SearchPoke(searchterm)" type="text" v-model="searchterm" class="form-control" id="searchbar" placeholder="Pokemon Name or ID">
        </div>
        <div class="col-auto">
            <button @keyup.enter="SearchPoke(searchterm)" @click="SearchPoke(searchterm)" class="btn btn-primary mb-3">Search</button>
        </div>
    </div>
    <div  v-if="result" class="row justify-content-center">
            <PokemonCard :pokedata=pokedata :pokename=myname  :picture=picurl :desc=mydescription :height=myheight :weight=myweight :abilities=myabilities />
        </div>
    </div>
</template>

<script>
import  PokemonCard from '../components/PokemonCard.vue'
export default {/* eslint-disable */
    name: 'SearchView',
    components:{
        PokemonCard
    },
    data(){
        return{
            pokedata: {},
            picurl: '',
            myname: '',
            myheight: '',
            myweight: '',
            myabilities: '',
            tempabilities: [],
            mydescription: 'Not available',
            id: '',
            searchterm: '',
            invalid: false,
            result: false
            
        }
    },
    methods: {
      async fetchPoke(pokename){
        let response;
        try {
            response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokename)
            const data = await response.json()
            this.invalid = false
            return data
        }
        catch (error) {
            this.invalid = true
        }
    },
      async fetchDesc(id){
        const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+id)
        const data = await res.json()
        try {
          const desc = await data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text
          return desc
        }
        catch{
          return 'Not available'
        }
      },
      async SearchPoke(searchname){

        this.pokedata = {}
        this.pokedata = await this.fetchPoke(searchname)
        this.searchterm = '';
        if (this.pokedata === -1){
            
        }
        else{
            this.picurl = await this.pokedata.sprites.front_default
            this.myname = await this.pokedata.name.charAt(0).toUpperCase() + this.pokedata.name.substring(1)
            this.myheight = this.pokedata.height
            this.myweight = this.pokedata.weight
            this.tempabilities = []
            for (const ability in this.pokedata.abilities){
                this.tempabilities.push(this.pokedata.abilities[ability]['ability']['name'])
                }
            this.myabilities = this.tempabilities.join(', ')
            this.mydescription = await this.fetchDesc(this.pokedata.id)
            this.result = true
        }
        
        
      },
    },
}
</script>

