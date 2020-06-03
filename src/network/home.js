//home.js将home界面所有的请求全部放到这里，以方法导出 
import { request } from './request'

//多个数据异步请求
export function getHomeMultiData() {
    return request({
        url: '/home/multidata'
    })
}

<<<<<<< HEAD


//请求商品数据

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
=======
//请求商品数据
export function getHomeGoods(type,page){
return request({
    url:'/home/data',
    params:{
        type,
        page
    }
})
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa
}