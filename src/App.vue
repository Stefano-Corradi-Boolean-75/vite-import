<script>

// se il file da importare ha export deault in nome attribuito è arbitrario
import colori from './data/colori';

// senza export default importo tra le graffe gli elementi che mi servono
import {code, getRandomNumber} from './data/data';
import {store} from './data/store'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components:{
    AppFooter
  },
  data(){
    return{
      colori,
      code,
      getRandomNumber,
      store
    }
  }
}
</script>

<template>
  <div class="container my-5">

    <h1>Import codice {{code}} random {{getRandomNumber(1,10)}}</h1>
    <ul>
      <li v-for="(colore, index) in colori" :key="index">{{colore}}</li>
    </ul>
    <button @click="store.counter++" class="btn btn-info">Incrementa il contatore</button>
  </div>

  <AppFooter />

</template>


<style lang="scss">

  @use './styles/general';

</style>