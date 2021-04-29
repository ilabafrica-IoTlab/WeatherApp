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

>   Install See NodeJS. -> through package manager or the compressed traball. Its best to install the LTS version becasue of its fort support. OR npm -g @vue/cli
 >     To start a project create a folder or basically run on terminal mkdir VueProject && cd VueProject
 >     on terminal run : vue create vueProject -- you can call it whatever name you'd like
 >     still on terminal : npm run serve


# 2. Install Leaflet ( using npm )
>  npm install leaflet see[install leaflet]('https://www.npmjs.com/package/leaflet).  You will find a copy of the Leaflet release files in node_modules/leaflet/dist. install in your root project directory.

# 4. Install the tailwind css framework and add it to your system
> install the tailwindcss framework, 
 [Install using npm](https://tailwindcss.com/docs/guides/laravel#install-tailwind-via-npm)
> Once successful, if you open the package.json file you will see tailwind and PostCSS under the dependencies section.
![dependencies](https://user-images.githubusercontent.com/42699812/115982136-3ba90500-a588-11eb-9d93-b15879f89efe.png)

<!-- > The above process works only if your combine it with html alone, if we are intergrating it with vue we will have to take this see[approach]('https://medium.com/@clintonyeb/integrating-tailwind-css-with-vuejs-eb0ce73e0233) by -->

> generate a tailwind config file, tailwind.js by running this on terminal : *./node_modules/.bin/tailwind init tailwinds.js* 
> you will see a tailwind.js in your project root dir, if you open it wyyou will get a module.experts object as you can see mine below: 

![module](https://user-images.githubusercontent.com/42699812/116505295-06fbbd00-a8aa-11eb-99c9-dbe684f4c20d.png)

To be inside the themes.extends section is where you can add your custom designs. As i have done with the colors object.

> Now create a folder named styles or however you would like to name your css folders, and place it under the assets directory: assets/styles. Create a css file name it tailwind.css or whaterver u wish.  

> Run the script,from the package.json file, to create a style.css file in the pubic folder that will be later linked to the html files.

> in the src folder  create a tailwind.css file. (name the file whiecver way you would like.)
> in the tailwind.css file : copy [this](https://tailwindcss.com/docs/guides/laravel#include-tailwind-in-your-css) onto it. 
> This is what it will look like : 
>* ![adding cs to your src](https://user-images.githubusercontent.com/42699812/115982018-73637d00-a587-11eb-9abb-adcbe578895b.png)

#### NOTE : if you run the html file you will notice that Tailwind will have gotten rid off all default  CSS styles - *user-agent styleheet*.

Now lets *'create'* and processes it to a vanilla css file..  
> under the script object in pacakeg.json file add a script and name it whichever way you want, I named mine tailwind 
this is how your script will look like :   
>*   ![scripts](https://user-images.githubusercontent.com/42699812/116505732-3232dc00-a8ab-11eb-95d0-88c8a51179bc.png)

>*    Run the Script on terminal using  *npm run tailwind* or *npm run script-name*

#### NOTE : This script will trigger tailwind to process the tailwind.css file we created earlier in the src/assets/styles folder and create a processed vanilla output.css file in the public folder.

#### NOTE: Everytime you make a change on the css file or create custome styles you will have to re-run  *npm run tailwind* or *npm run script-name* script  ti iplement the new styles. 

This is how our package.json will now look :
![scripts](https://user-images.githubusercontent.com/42699812/116505732-3232dc00-a8ab-11eb-95d0-88c8a51179bc.png)

now thats done, Go to your app.vuew file and import or rather tell the app you will need to use the processed css files.
![require](https://user-images.githubusercontent.com/42699812/116506172-3e6b6900-a8ac-11eb-85f5-c2da46501acd.png)





# 5. Adding the Maps to your app
>  add this tag to your template section in the vue component    <div id="mapid" style="height: 400px;"></div>
>  under the logic section ( <script> ) import the leaflet dependencies : 
*  import "leaflet/dist/leaflet.css";
*  import L from "leaflet";
>  add the scripts to the logic section of your vue component : This is how mine looks
![logic](https://user-images.githubusercontent.com/42699812/116003254-c4f22300-a5ec-11eb-89c1-46c24c7d9249.png) --. 
here im using default data before i consume an api.

***********************************************************

# 6. Consuming The Weather Api


