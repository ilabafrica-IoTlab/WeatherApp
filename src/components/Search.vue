<template>
  <div class="box-border h-auto w-auto p-4">
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
        class="border3 shadow w-1/2 m-auto bg-white border-gray-400 rounded-full"
      >
        <button id="search">
          <i class="fa fa-search ml-0 p-3 object-left"></i>
        </button>

        <input
          type="text"
          name="target_location"
          placeholder="Enter Location.."
          v-model.lazy="location"
          class="ml-1"
        />
      </form>
    </div>

    <Maps msg="Welcome to Maps " />
    <Data
      :temperature="temperature"
      :precip="precip"
      :pressure="pressure"
      :localtime="localtime"
      :wind_speed="wind_speed"
    />
    <!-- props:['temperature', 'precip','pressure','name','localtime','wind_speed'] , -->
    <!-- <Icons msg="Where are the icons " /> -->
  </div>
</template>

<script>
import Data from "@/components/Data.vue";
import Maps from "@/components/Maps.vue";
// import Icons from "@/components/Icons.vue";

export default {
  components: {
    // Search
    Maps,
    // Icons,
    Data,
  },
  data() {
    return {
      location: "",
      placeholder: "",
      lat: "",
      lon: "",
      precip: "",
      pressure: "",
      wind_speed: "",
      temperature: "",
      name:"",
    };
  },
  methods: {
    searchLocation() {
      let targetLocation = this.location;
      console.log("LOCATION: " + targetLocation);
      document.getElementsByName("target_location")[0].placeholder =
        "  Welcome to " + this.location.toString() + " . . .";
      this.location = "";
      this.consumeApiPlotMap();
    },
    fetchData() {
      // let targetLocation = this.location;
    },
    async consumeApiPlotMap() {
      try {
        console.log("consuming API ..... ");

        const apiEndpoint =
          "http://api.weatherstack.com/current?access_key=92967a9cf883df569d5cb7dfa9e4e84c&query=";
        // "http://api.weatherstack.com/current?access_key=92967a9cf883df569d5cb7dfa9e4e84c&query=Nairobi";

        // const weather_url = apiEndpoint + this.location.toString();
        const weather_url = apiEndpoint + "Nairobi";
        console.log("LOCATION-2: " + this.location);
        const response = await fetch(weather_url);
        console.log(weather_url);
        const data = await response.json();
        // object destructuring -- ES6
        const {
          // current: { temperature, wind_speed, pressure, precip },
          location: { lat, lon },
          location: { name },
          current: { temperature },
          current: { pressure },
          current: { wind_speed },
          current: { precip },
        } = data;
        console.log(
          "\nTemp : " +
            temperature +
            "\nWindSpeed : " +
            wind_speed +
            "\nPressure: " +
            pressure +
            "\nPrecipitation : " +
            precip +
            "\nLatitude : " +
            lat +
            "\nLongitude : " +
            lon
        );
        this.temperature = temperature;
        this.wind_speed = wind_speed;
        this.precip = precip;
        this.lat = lat;
        this.lon = lon;
        this.name = name;
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style></style>
