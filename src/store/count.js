import { defineStore } from 'pinia'
export const useCountStore = defineStore("count",{
    state:()=>({
        shopcount:100,
        
    })
})