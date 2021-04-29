<template>
  <div>
    <!-- INPUT FORM -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="">
    <form    
     @submit.prevent="searchLocation"
      name="locationData"
      id="locationForm"
     class="border3 shadow w-1/2 m-auto  bg-white border-gray-400  rounded-full">
     
   <button id="search" ><i class="fa fa-search ml-0 p-3 object-left "></i></button>

      <input
        type="text"
        name="target_location"
        placeholder="Enter Location.."
        v-model.lazy="location"
        class="ml-1  "
      />

    </form>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "",
      placeholder: "",
    };
  },
  methods: {
    searchLocation() {
      let targetLocation = this.location;
      console.log("LOCATION: " + targetLocation);
      document.getElementsByName("target_location")[0].placeholder =
        "  Welcome to " + this.location.toString() + " . . .";
      this.location = "";
    },
  },
};
</script>

<style>
/* #search {
  background: none;
  color: inherit;
  border: none;
  padding: 10px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
} */
</style>
