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
      store,
      numeri:[1,2,3,4,5,6,7,8,9],
      date: '2022/11/18'
    }
  },
  methods:{
    miaFunzione(saluto, numero){
      console.log(saluto, numero);
      store.counter++
    },
    altraFunzione(){
      console.log('Altra Funzione');
    }
  },
  computed:{
    numeriPari(){
      return this.numeri.filter( n => !(n % 2) )
    },
    formatData(){
      return this.date.split('/').reverse().join('/');
    }
  }
}
</script>

<template>
  <div class="container my-5">

    <h1>Oggi è il {{formatData}} di {{date}}</h1>

    <h1>Import codice {{code}} random {{getRandomNumber(1,10)}}</h1>
    <ul>
      <li v-for="(colore, index) in colori" :key="index">{{colore}}</li>
    </ul>
    <button @click="store.counter++" class="btn btn-info">Incrementa il contatore</button>

    <h1>Numeri pari</h1>
    <ul>
      <li v-for="(n, index) in numeriPari" :key="index">{{n}}</li>
    </ul>

    <br>
    <i class="fa-solid fa-star"></i>
    <br>
    <span class="fi fi-it"></span>


  </div>

  <AppFooter @mioEvento="miaFunzione" @altroEvento="altraFunzione" />

</template>


<style lang="scss">

  @use './styles/general';

</style>