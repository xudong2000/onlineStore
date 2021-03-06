import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Message = () => import('../views/message/Message.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Login = () => import('../views/login/Login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/message',
    component: Message,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  let a = true
  if (to.path === '/profile' && a) return next('/login')
  // const token = sessionStorage.getItem('username')
  // if (false) return next('/profile')
  next()
})

export default router
