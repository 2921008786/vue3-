import "vant/es/toast/style";
export function register(data){
        return request(
            {
                url:"/api/auth/register",
                method:"Post",
                data,
            }
        )
}
export function login(data){
    return request(
        {
            url:"/api/auth/login",
            method:"Post",
            data,
        }
    )
}
export function logout(){
    return request(
        {
            url:"/api/auth/logout",
            method:"Post",
            
        }
    )
}
export function getUser(){
    return request(
        {
            url:"/api/user",
        }
    )
}