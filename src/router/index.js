import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/home/Home'
import Fenlei from '../views/fenlei/Fenlei'
import Price from '../views/price/Price'
import Me from '../views/me/Me'

Vue.use(VueRouter)


const routers = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/Home',
        component: Home

    },
    {
        path: '/Fenlei',
        component: Fenlei
    },
    {
        path: '/Price',
        component: Price
    },
    {
        path: '/Me',
        component: Me
    },
]

const router = new VueRouter({
    routers,
    mode: 'history'
})

export default router