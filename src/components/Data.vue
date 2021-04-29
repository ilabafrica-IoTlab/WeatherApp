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
<div class="flex items-start ">
<div class="px-5 ml-24 h-44 w-auto   ">
    <div class="border3  px-10 mx-1 py-10 " >
      <h1 class="text-3xl text-black font-bold">Strathmore university</h1>
    <h2 class="text-base text-black">Weather Forcast</h2>
    <h3 class="text-sm text-black" >Monday, 3rd April 2021</h3>
    </div>
</div>

<div class="border3 shadow-md w-auto mx-auto px-auto pb-4 pt-3 bg-white  rounded  ">
    <!-- Temperature Box 1 Start-->
    <div  class="w-auto h-auto inline-block mx-5">
      <h3 class="pt-2 mt-0 pb-6 text-sm">Temperature</h3>
      <div >
        <!-- payload boxes -->
        <div class="inline-block">
          <!-- Maximum-->
          <span class="text-3xl text-weatherMediumBlue">25</span>
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
    </div>
 <!-- Temperature Box 1 End-->

<div class="mr-32">
<!-- additinal parameters box 2 Start-->
  <div class=" h-44 w-72 border-3 shadow   pt-8   bg-green-200 rounded inline-block ">
  <div >
      <h3 class=" text-sm pb-4">Additional Parameters</h3>
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
