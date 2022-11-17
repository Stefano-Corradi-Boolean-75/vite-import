<script>
import {store} from '../data/store'
export default {
  name: 'AppFooter',
  data(){
    return{
      store
    }
  }
}
</script>
<template>

<footer class="container">Contatore: {{store.counter}}</footer>
  
</template>


<style>

</style>