
<template>
    <div class="container-fluid justify-content-center ">
        <div class="row justify-content-center">
            <PokemonCard :pokedata=pokedata :pokename=myname  :picture=picurl :desc=mydescription :height=myheight :weight=myweight :abilities=myabilities />
        </div>
        <div class="row">
            <div><button @click=generatePoke type="button" class="btn btn-primary">Generate Random Pokemon</button></div>
        </div>
    </div>
</template>

<script>
import  PokemonCard from '../components/PokemonCard.vue'
export default {/* eslint-disable */
    name: 'Home',
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
            mydescription: '',
            id: '',
        }
    },
    methods: {
      async fetchPoke(pokeid){
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeid)
        const data = await res.json()
        return data 
    },
      async fetchDesc(id){
        const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+id)
        const data = await res.json()
        const desc = await data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text
        return desc
      },
      random(){
        const id = Math.floor(Math.random() * 807) + 1
        return id
      },
      async generatePoke(){
        this.id = this.random()
        this.pokedata = await this.fetchPoke(this.id)
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
      }
    },
     async created(){
      this.generatePoke()
    }
}
</script>

