//home.js将home界面所有的请求全部放到这里，以方法导出 
import { request } from './request'

export function getHomeMultiData() {
    return request({
        url: '/home/multidata'
    })
}