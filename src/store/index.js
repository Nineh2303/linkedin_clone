import {defineStore} from "pinia";
import {signInWithPopup} from "firebase/auth"
import {firebaseAuth, provider} from "@/configs/firebaseConfig.js";

export const useStore = defineStore('store', {
    state: () => ({
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): null
    }),
    actions: {
        signInAPI() {
            signInWithPopup(firebaseAuth, provider)
                .then((payload) => {
                    this.user = payload.user;
                    localStorage.setItem("user", JSON.stringify(payload.user))
                }).catch(err => {
                console.log(err)
            })
        },

        getAuth(){
            firebaseAuth.onAuthStateChanged((user)=>{
                if(user){
                    this.user =user
                }
                })
            },
        signOutAPI(){
            firebaseAuth.signOut().then(()=>{
                this.user= null
                localStorage.removeItem("user")
            }).catch(err=>{
                console.log(err.message)
            })
        }
    }
})