import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store(
    {
        state:{
            products:[
                {name:'Cow', price:9},
                {name:'Lamb', price:10},
                {name:'Sheep', price:11},
                {name:'Chicken', price:12},
                {name:'RAbbit', price:13},
            ]
        }
    }
)