<template>
  <div>
    <!-- <Search/> -->
    <!-- <div>

<div class="w-64 h-auto m-5 p-3   bg-white rounded overflow-hidden shadow " >
   <div class="p-5">
       <span class=" text-xs block font-light pb-2 pt-0"> Temperature</span> 

 <div class=" left-0  text-xl text-weatherMediumBlue  "> 
     <span class="left-0">25 </span> <span class="text-xs text-black">°C</span> <br>
      <span class="h-8 text-xs"> Maximum </span>
</div>
 <span class="text-3xl"> | </span>

 <div class=" right-0 pt-4 pl-0 text-xl text-weatherMediumBlue "> 
     <span >25 </span> <span class="text-xs text-black">°C</span> <br>
      <span class="h-8 text-xs"> Minimum </span>
</div>
</div>
</div>
<div>
    
</div>
</div> -->
<div class="flex items-start  ">
<div class="px-5 ml-24 h-44 w-auto   ">
    <div class="border3  px-10 mx-1 py-10 font-ubuntu " >
      <h1 class="text-3xl text-black font-bold">Place : {{ name }}</h1>
    <h2 class="text-base text-black">Weather Forcast</h2>
    <h3 class="text-sm text-black" >Monday, 3rd April 2021 <br> Current Date : {{ localtime }}</h3>
    </div>
</div>

<div class="border3 ml-1 p-2 shadow-md w-auto mx-auto px-auto pb-4 pt-3 bg-white  rounded  ">
    <!-- Temperature Box 1 Start-->
    <div  class="w-auto h-auto inline-block mx-5">
      <h3 class="pt-0.5 mt-0 pb-6 text-gray-500 text-sm">Temperature</h3>
      <div >
        <!-- payload boxes -->
        <div class="inline-block">
          <!-- Maximum-->
          <span class="text-3xl text-weatherMediumBlue">{{ temperature }}</span>
 <span class="text-xs text-black font-bold" > °C</span>
         <h2 class="pl-3.5 pr-3.5 pt-3">  maximum </h2>
        </div>
<div class="inline-block text-gray-200 text-8xl mt-0">|</div>
        <div class="inline-block">
          <!-- Minimum -->
           <span class=" text-weatherMediumBlue text-3xl">25</span>
           <span class="text-xs text-black font-bold"> °C</span>
          <h2 class="pl-3.5 pr-3.5 pt-3"> minimum</h2>
        </div>
      </div>
      </div>
       <Icons  msg="Where are the icons "/> 
    </div>
 <!-- Temperature Box 1 End-->

<div class="mr-32">
<!-- additinal parameters box 2 Start-->
  <div class=" h-44 w-72 border-3 shadow   pt-3  bg-white rounded inline-block ">
  <div >
      <h3 class="pt-0.5 text-gray-500 text-sm pb-4">Additional Parameters</h3>
      <!-- Wind -->
      <div class="flex items-start"> <h2 class=" text-left pl-7 pr-16"> Wind </h2> <span class="text-right pl-16 pr-4 text-weatherMediumBlue">{{ wind_speed }}</span></div>
         <!-- Pressure -->
      <div  class="flex items-start"> <h2 class=" text-left pl-7 pr-16"> Pressure </h2>  <span class="text-right pl-10 pr-4 text-weatherMediumBlue">{{ pressure }}</span></div>
         <!-- Precipitation -->
      <div class="flex items-start"> <h2 class=" text-left pl-7 pr-16">Precipitation </h2>  <span class="text-right pl-3 pr-4 text-weatherMediumBlue">{{ precip }}</span></div>
  </div>
  </div>
<!-- additinal parameters box 2 End-->
</div>
</div>


<!-- Weather Icons per Day -->
<div class="flex items-center mx-32 py-5">
 <div class="mx-32 ">Histoirical Data
<div>
  <h1>Day</h1>
  <img src="" alt="Weather Icon">
<!-- <li v-bind="products" >{{products.name}}</li> -->
</div>

 </div>
<div class="mx-36"> Current Data</div>


</div>
</div>



</template>

<script>
// import Search from './components/Search.vue'
//  import { store } from './store/store'
//  require('./store/store.js')
export default {
  props:['temperature', 'precip','pressure','name','localtime','wind_speed'] ,
  name: "Data",
  // Data(){
  // return{
  components: {
    // Search
  },
};
</script>

<style></style>
