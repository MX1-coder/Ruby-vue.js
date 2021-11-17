import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Products from '../components/pages/products/Products'
import ProductTemplate from '../components/pages/products/ProductTemplate'
import Cart from '../components/parts/Cart'
import Filter from '../components/pages/products/Filter'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path:'/', component: Home },
        {path:'/products', component: Products },
        {path:'/product/:slug', name:'ProductTemplate', component: ProductTemplate, props: true },
        {path:'/filter', component: Filter },
        {path:'/cart', component: Cart },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})