import { request } from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

//定义一个商品类，一起拿到页面所需要的数据
export class Goods {
    constructor(columns, itemInfo, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

//定义一个商家信息类，拿到商家信息
export class Shop {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.cSells = shopInfo.cSells
        this.cGoods = shopInfo.cGoods
        this.score = shopInfo.score
        this.cFans = shopInfo.cFans;
    }
}



//定义一个商品参数类，拿到商品参数信息
export class GoodsParams {
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : '';
        this.paramsSet = info.set
        this.paramsTable = rule.tables
    }
}