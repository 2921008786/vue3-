import router from "../router";
import { showSuccessToast } from "vant";
import "vant/es/toast/style";

import axios from "axios";
// 封装axios
export function request(config){
    const instance= axios.create({
        baseURL:"https://api.shop.eduwork.cn/",
        timeout:5000,
    })
    instance.interceptors.request.use(
        config=>{
            const token = window.localStorage.getItem("token")
            if(token){
                config.headers.Authorization = "Bearer" + token
            }
            return config
        },err=>{
        }
    )
    
    instance.interceptors.response.use(
        res=>{
            return res
        },err=>{
            if(err.response.status === "401"){
                showSuccessToast("请先登录");
                router.push({path:"/login"})
                
            }
            console.log("出错了");
        }
    )
    return instance(config)
}



