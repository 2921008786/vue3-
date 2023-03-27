import { createRouter, createWebHistory } from "vue-router";

 
let routes= [
    {
        path: '/',
        name: 'home',
        meta:{
          title:"主页"  
        },
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        component: () => import('../views/home/Home.vue') 
    },
    {
        path: '/category',
        name: 'category',
        meta:{
            title:"分类"  
          },
        component: () => import('../views/category/Category.vue') 
    },
    {
        path: '/profile',
        name: 'crofile',
        meta:{
            title:"个人中心"  
          },
        component: () => import('../views/profile/Profile.vue') 
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        meta:{
            title:"购物车"  
          },
        component: () => import('../views/shopcart/Shopcart.vue') 
    },
    {
        path: '/detail',
        name: 'detail',
        meta:{
            title:"商品详情"  
          },
        component: () => import('../views/detail/Detail.vue') 
    },
    //{
        //配置404页面
        //path: '/:catchAll(.*)',
        //name: '404',
        //component: () => import(''),
    //}
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach(()=>{
//     //前置路由守卫
// })
// 导出
export default router 