import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/auth/Login.vue'
import Logout from '../components/auth/Logout.vue'
import Signup from '../components/auth/Signup.vue'
import Movies from '../components/movie/Movies.vue'
import WantToWatch from '../components/movie/WantToWatch.vue'
import Watched from '../components/movie/Watched.vue'
import AddToWatched from '../components/movie/AddToWatched.vue'
import AddToWantToWatch from '../components/movie/AddToWantToWatch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/logout",
    component: Logout,
    name: "logout"
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/movies",
    name: "movies",
    component: Movies
  },
  {
    path: "/wantToWatch",
    name: "wantToWatch",
    component: WantToWatch,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/wantToWatch/add/:movieId",
    name: "addToWantToWatch",
    component: AddToWantToWatch,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/watched",
    name: "watched",
    component: Watched,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/watched/add/:movieId",
    name: "addToWatched",
    component: AddToWatched,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
