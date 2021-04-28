<template>
  <div>
    <h1>Data</h1>
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

<div class="p-5">
    <h1>Strathmore university</h1>
    <h2>Weather Forcats</h2>
    <h3>Monday, 3rd April 2021</h3>
</div>
<div class="">
    <!-- Temperature Box 1 Start-->
    <div  class="w-64 h-auto bg-white inline-block mr-10">
      <h2 >Temperature</h2>
      <div >
        <!-- payload boxes -->
        <div class="inline-block">
          <!-- Maximum-->
          <span >25</span>
 <span class="text-xs text-black" >°C</span>
        <h2 class="pl-3.5 pr-3.5">  maximum </h2>
        </div>

        <div class="inline-block">
          <!-- Minimum -->
           <span>25</span>
           <span class="text-xs text-black">°C</span>
          <h2 class="pl-3.5 pr-3.5"> minimum</h2>
        </div>

      </div>
    </div>
 <!-- Temperature Box 1 End-->

<!-- additinal parameters box 2 Start-->
  <div class="w-64 h-auto bg-red-400 inline-block ml-10">
  <div >
      <h2>Additional Parameters</h2>
      <!-- Wind -->
      <div> <h2 class="inline"> Wind </h2> { 24 }</div>
         <!-- Pressure -->
      <div> <h2 class="inline"> Pressure </h2> { 20 }</div>
         <!-- Precipitation -->
      <div> <h2 class="inline"> Precipitation </h2> { 0.42 }</div>
  </div>
  </div>
<!-- additinal parameters box 2 End-->

</div>

  </div>
</template>

<script>
// import Search from './components/Search.vue'

export default {
  name: "Data",
  // Data(){
  // return{
  components: {
    // Search
  },
};
</script>

<style></style>
