<template>
  <div>
    <div class="  w-4/5 m-5  mx-auto rounded-lg shadow ">
      <div
        id="mapid"
        style="height:24rem"
        class="border-1 w-auto  rounded-lg overflow-hidden  shadow"
      ></div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {

  props:['lat', 'lon',] ,
  data() {
    return {
      
   
    };
  },
//   watch: {
//       lat(val) {
//       if(val){
// this.consumeApiPlotMap();
//       }
//     } ,
     
//      },

    methods: {
    searchLocation() {
      let targetLocation = this.location;
      console.log("LOCATION: " + targetLocation);

      document.getElementsByName("target_location")[0].placeholder =
        "  Welcome to " + this.location.toString() + " . . .";
      this.location = "";
    },

    // note do not use =>(){} tyoe of function
    async consumeApiPlotMap() {
      // Wrap under try N catch ************
      try {
        /*      const apiEndpoint =
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
          current: { temperature },
        } = data;
        console.log(
          "\nTemp : " +
            temperature +
            "\nWindSpeed : " +
            "wind_speed" +
            "\nPressure: " +
            "pressure" +
            "\nPrecipitation : " +
            "precip" +
            "\nLatitude : " +
            lat +
            "\nLongitude : " +
            lon
        );
        console.log(data);*/
        let latitude = -1.283;
        let longitude = 36.817;

        // const mymap = L.map("mapid").setView([lat, lon], 13);
                const mymap = L.map("mapid").setView([latitude, longitude], 15);

        // const mymap = L.map("mapid").setView([this.lat, this.lon], 15);
        console.log("MAPZ : "+"\n latitude:"+this.lat +"\nlongitude:"+this.lon);

        L.tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1Ijoiam9zZXBocmlkZ2VvIiwiYSI6ImNrbnd4ZDhlZjBrc2UydnRneW94ZjBzd24ifQ.JAR_ElLK-t-AHnIpHTNBAA",
          }
        ).addTo(mymap);
      } catch (error) {
        console.log(error.message);
        // alert(error.message);
      }
    },

    // mapSetUp: () => {
    // },
  },
  mounted() {
    // this.mapSetUp();
    this.consumeApiPlotMap();
  },
};
</script>

<style></style>
