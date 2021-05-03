<template >
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
 <Search />

 <!-- <Maps msg="Welcome to Maps "  /> -->
    <!-- <Data  msg="lets get the data "/> -->
   <!-- <Icons  msg="Where are the icons "/>  -->

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import Maps from './components/Maps.vue'
// import Icons from './components/Icons.vue'
// import Data from './components/Data.vue'
import Search from './components/Search.vue'

require('./assets/styles/output.css')
require('./assets/styles/tailwind.css')

export default {
  name: 'App',
  components: {
    // HelloWorld,
    //  Maps,
    // Icons,
    Search,
    // Data
  }
}
</script>

<style>
</style>
