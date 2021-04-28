# simple-weather

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Now lets start
# 1.Install VueJS and start Leaflet App

>    Install See NodeJS. -> through package manager or the compressed traball. Its best to install the LTS version becasue of its fort support. OR npm -g @vue/cli
 >     To start a project create a folder or basically run on terminal mkdir VueProject && cd VueProject
 >     on terminal run : vue create vueProject -- you can call it whatever name you'd like
 >     still on terminal : npm run serve

# 2. Install Leaflet ( using npm )
>  npm install leaflet see[install leaflet]('https://www.npmjs.com/package/leaflet).  You will find a copy of the Leaflet release files in node_modules/leaflet/dist.

# 4. Install the tailwind css framework
> install the tailwindcss framework,  [Install using npm](https://tailwindcss.com/docs/guides/laravel#install-tailwind-via-npm)
> Once successful, if you open the package.json file you will see tailwind and PostCSS under the dependencies section.
![dependencies](https://user-images.githubusercontent.com/42699812/115982136-3ba90500-a588-11eb-9d93-b15879f89efe.png)

> The above process works only if your combine it with html alone, if we are intergrating it with vue we will have to take this see[approach]('https://medium.com/@clintonyeb/integrating-tailwind-css-with-vuejs-eb0ce73e0233)

Run the script,from the package.json file, to create a style.css file in the pubic folder that will be later linked to the html files.

> in the src folder  create a stle.css file.
> in the style.css file : copy [this](https://tailwindcss.com/docs/guides/laravel#include-tailwind-in-your-css) onto it. 
> This is what you will copy : 
>* ![adding cs to your src](https://user-images.githubusercontent.com/42699812/115982018-73637d00-a587-11eb-9abb-adcbe578895b.png)

NOTE : if you run the html file you will notice that Tailwind will have gotten rid off all default  CSS styles - *user-agent styleheet*.

Now lets *'create'* the processes vanilla css file..  
>under the script object erase the existing test-script and put in :  
>*    "build-css": "tailwindcss build src/style.css -o public/styles.css" --> u canname it whatever you'd doesn't have to be build-css
>*    Run the Script on terminal using  *npm run build-css* or *npm run script-name*

This will process the style.css file we created earlier in the src folder and create a style.css file in the public folder. (The css file in the src folder is  Processed into vanilla css file using tailwind ).
NOTE: Everytime you make a change on the css filelor create custome styles youb willhave to re-run the script you run earlier : npm run build-css

This is how our package.json will now look :
![Screenshot at 2021-04-25 08-42-17](https://user-images.githubusercontent.com/42699812/115982215-ef11f980-a588-11eb-89d6-69b06d7310d5.png)




# 5. Adding the Maps to your app
>  add this tag to your template section in the vue component    <div id="mapid" style="height: 400px;"></div>
>  under the logic section ( <script> ) import the leaflet dependencies : 
*  import "leaflet/dist/leaflet.css";
*  import L from "leaflet";
>  add the scripts to the logic section of your vue component : This is how mine looks
![logic](https://user-images.githubusercontent.com/42699812/116003254-c4f22300-a5ec-11eb-89c1-46c24c7d9249.png) --. 
here im using default data before i consume an api.

****************************************
