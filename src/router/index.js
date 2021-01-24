import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/auth/Login.vue'
import Signup from '../components/auth/Signup.vue'
import Movies from '../components/movie/Movies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    component: Login,
    name: "login"
  },
  {
    path: "/signup",
    component: Signup,
    name: "signup"
  },
  {
    path: "/movies",
    component: Movies,
    name: "movies"
  }

]

const router = new VueRouter({
  routes
})

export default router
