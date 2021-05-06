<template>
  <div class="box-border h-auto w-auto p-auto">
    <!-- INPUT FORM -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="">
      <div class="m-4 p-auto">
        <form
          @submit.prevent="searchLocation"
          name="locationData"
          id="locationForm"
          class=" "
        >
          <div
            class="container rounded-full z-2 h-auto flex justify-auto items-center px-4 sm:px-6 lg:px-8"
          >
            <div
              class="bg-white relative p-2 m-1 rounded-3xl w-auto pr-8 ml-1 pl-5 z-auto shadow focus:shadow-weatherMediumBlue focus:outline-none"
            >
              <input
                type="text"
                class=" "
                name="target_location"
                placeholder="Enter Location.."
                v-model.lazy="location"
              />
              <button id="search" class="">
                <i
                  class="fa fa-search text-gray-400 z-20 hover:text-gray-500"
                ></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- Form test  -->
    </div>

    <Maps msg="Welcome to Maps " />
    <Data
      :temperature="temperature"
      :precip="precip"
      :pressure="pressure"
      :localtime="localtime"
      :wind_speed="wind_speed"
      :name="name"
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
      name: "",
    };
  },

  methods: {
    searchLocation() {
      let targetLocation = this.location;
      console.log("LOCATION: " + targetLocation);
      document.getElementsByName("target_location")[0].placeholder =
        "  Welcome to " + this.location.toString() + " . . .";
      this.consumeApi();
      this.location = "";
    },
    fetchData() {
      // let targetLocation = this.location;
    },
    async consumeApi() {
      try {
        // Temperary json file
        const payload = {
          request: {
            type: "City",
            query: "Nairobi, Kenya",
            language: "en",
            unit: "m",
          },
          location: {
            name: "Nairobi",
            country: "Kenya",
            region: "Nairobi Area",
            lat: "-1.283",
            lon: "36.817",
            timezone_id: "Africa/Nairobi",
            localtime: "2021-05-02 11:17",
            localtime_epoch: 1619954220,
            utc_offset: "3.0",
          },
          current: {
            observation_time: "08:17 AM",
            temperature: 23,
            weather_code: 116,
            weather_icons: [
              "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
            ],
            weather_descriptions: ["Partly cloudy"],
            wind_speed: 9,
            wind_degree: 130,
            wind_dir: "SE",
            pressure: 1022,
            precip: 0,
            humidity: 69,
            cloudcover: 75,
            feelslike: 25,
            uv_index: 5,
            visibility: 10,
            is_day: "yes",
          },
        };

        console.log("consuming API ..... ");

        const apiEndpoint = "http://api.weatherstack.com/current?access_key=";
        // "http://api.weatherstack.com/current?access_key=92967a9cf883df569d5cb7dfa9e4e84c&query=Nairobi";
        const apiKey = "7921cce7c4f3eedc80204968a12facdd";

        const weather_url =
          apiEndpoint + apiKey + "&query=" + this.location.toString();
        // const weather_url = apiEndpoint + "Nairobi";
        console.log("LOCATION-2: " + this.location);
        const response = await fetch(weather_url);
        console.log(weather_url);
        const data = await response.json();
        console.log("DATA PAyload-2: " + data);

        /*       // object destructuring -- ES6
      const {
          // current: { temperature, wind_speed, pressure, precip },
          location: { lat, lon },
          location: { name },
          current: { temperature },
          current: { pressure },
          current: { wind_speed },
          current: { precip },
        } = data; */
        const {
          location: { name },
          location: { lat, lon },
          current: { temperature },
          current: { weather_icons },
          current: { pressure },
          current: { wind_speed },
          current: { precip },
        } = payload;
        //         var date = new Date();
        // var day = date.getDate();
        // var month = date.getMonth();
        // var year = date.getFullYear();
        // var fullDate = day + "-" +(month + 1) + "-" + year;

        // ********** try destructering in groups
        // const {location,request, current }= my_data;
        // location.
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
            lon +"\nImage url : "+weather_icons
        );
        this.temperature = temperature;
        this.wind_speed = wind_speed;
        this.precip = precip;
        this.lat = lat;
        this.lon = lon;
        this.name = name;
        this.pressure = pressure;
        this.weather_icons = weather_icons;
        
      } catch (e) {
        console.log(e.message);
      }
    },
    // async PlotMap(){
    //   try{}
    //   catch(e){
    //     console.log(e.message);
    //   }
    // }
  },
  mounted() {
    this.consumeApiPlotMap();
  },
};
</script>

<style></style>
