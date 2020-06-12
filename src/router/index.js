import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () =>
    import ('../views/home/Home')
const Fenlei = () =>
    import ('../views/fenlei/Fenlei')
const Price = () =>
    import ('../views/price/Price')
const Me = () =>
    import ('../views/me/Me')
const Detail = () =>
    import ('../views/detail/detail.vue')

Vue.use(VueRouter)


const routes = [{
        path: '',
        redirect: '/Home'
    },
    {
        path: '/Home',
        component: Home
    },
    {
        path: '/Price',
        component: Price
    },
    {
        path: '/Fenlei',
        component: Fenlei
    },
    {
        path: '/Me',
        component: Me
    },
    {
        path: '/Detail/:iid',
        component: Detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router