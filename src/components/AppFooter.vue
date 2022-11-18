<script>
import {store} from '../data/store'
export default {
  name: 'AppFooter',
  data(){
    return{
      store
    }
  },
  methods:{
    lacioEvento(){
      // ....... logica...
      // se l'evento $emit è lanciato da una funzione deve essere anticipato da this
      this.$emit('altroEvento')
    }
  }
}
</script>
<template>

<footer class="container">Contatore: {{store.counter}}
  <br>
  <button @click="$emit('mioEvento','Ciao $emit',50)"  class="btn btn-info">Invio un $emit</button>
  <br>
  <button @click="lacioEvento()"  class="btn btn-info">Evento da funzione</button>
</footer>
</template>


<style>

</style>