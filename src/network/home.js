import { request } from "./request";
// 获取首页后台数据
export function getHomeAllData(){
        return request(
            {
                url:"/api/index"
            }
        )
}
// 获取首页商品信息
export function getHomeGoods(type="sales",page=1){
    return request(
        {
            url:"/api/index?"+ type + "=1&page=" + page
        }
    )
}