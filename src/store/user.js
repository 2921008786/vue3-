import { defineStore } from 'pinia'
import { createPinia } from 'pinia';
const pinia = createPinia()
export default pinia
export const useUserStore = defineStore("userstore",{
    state:()=>({
        isLogin:window.localStorage.getItem("token")?true:false
    }),
    actions:{
        setIsLogin(state){
            state.isLogin = !state.isLogin
        }
    }
})
