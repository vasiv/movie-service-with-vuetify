import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://localhost:44327'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    movies: []
  },

  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    movies(state) {
      return state.movies
    }
  },

  mutations: {

    retrieveMovies(state, movies) {
      state.movies = movies
    },

    retrieveToken(state, token) {
      state.token = token
    },

    destroyToken(state) {
      state.token = null
    }
  },

  actions: {

    retrieveMovies(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.get('/api/Film')
        .then(response => {
          context.commit('retrieveMovies', response.data.$values)
        })
        .catch(error => {
          console.log(error)
        })
    },

    register(context, data) {
      return new Promise((resolve, reject) => {
        const payload = {
          email: data.email,
          password: data.password,
          confirmPassword: data.password,
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
        }}
        axios.post('api/Account/Register', qs.stringify(payload))
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    },

    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        const payload = {
          grant_type: "password",
          username: credentials.username,
          password: credentials.password,
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
        }}
        axios.post('/Token', qs.stringify(payload))
        .then(response => {
          const token = response.data.access_token
          localStorage.setItem('access_token', token)
          context.commit('retrieveToken', token)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },

    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      if(context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/api/Account/Logout')
          .then(response => {
            localStorage.removeItem('access_token')
            context.commit('destroyToken')
            resolve(response)
          })
          .catch(error => {
            localStorage.removeItem('access_token')
            context.commit('destroyToken')
            reject(error)
          })
        })
      }
    }
  },

  modules: {
  }
})
