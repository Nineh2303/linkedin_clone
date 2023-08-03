import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/index.js";
import {createPinia} from "pinia";
import { VueFire, VueFireAuth } from 'vuefire'

import  firebaseApp  from "./configs/firebaseConfig.js"

export const Pinia = createPinia();
createApp(App)
    .use(router)
    .use(Pinia)
    .use(
        VueFire, {
            firebaseApp,
            modules :[
                VueFireAuth()
            ]
        }
    )
    .mount('#app')
