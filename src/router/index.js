import { createRouter, createWebHistory } from "vue-router";
import HomeLoginView from '@/views/HomeLoginView/HomeLoginVue.vue';
import HomeView from "@/views/HomeView/HomeView.vue";
import {useStore} from "@/store/index.js";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path :"/",
            name : 'HomeLogin',
            component :  HomeLoginView
        },
        {
            path :"/home",
            name : 'Home',
            component :  HomeView
        },

    ]
}) ;
router.beforeEach((to,from,next)=>{
    const {user} = useStore()
    if(to.path !== "/" && !user){
        next({path: "/"})
    } else {
        next()
    }
})

export default  router