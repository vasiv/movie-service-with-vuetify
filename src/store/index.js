import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://localhost:44327'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    currentUser: localStorage.getItem('current_user') || null,
    movies: [],
    recommendations: []
  },

  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    recommendations(state) {
      return state.recommendations
    },
    movies(state) {
      return state.movies
    },
    currentUser(state) {
      return state.currentUser
    },
    token(state) {
      return state.token
    }
  },

  mutations: {

    retrieveMovies(state, movies) {
      state.movies = movies
    },

    retrieveRecommendations(state, recommendations) {
      state.recommendations = recommendations
    },
    
    retrieveToken(state, token, username) {
      state.token = token
      state.currentUser = username
    },

    destroyToken(state) {
      state.token = null
      state.currentUser = null
    }
  },

  actions: {

    queryMovies(context, data) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.get('api/Film?name=' + data.movieTitle)
        .then(response => {
          context.commit('retrieveMovies', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    retrieveRecommendations(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.get('api/Film/Recomended')
        .then(response => {
          context.commit('retrieveRecommendations', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    retrieveMovies(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.get('/api/Film')
        .then(response => {
          context.commit('retrieveMovies', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    retrieveWantToWatchMovies(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.get('api/Film/MyFilmsNotWatched')
        .then(response => {
          context.commit('retrieveMovies', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    retrieveWatchedMovies(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.get('api/Film/MyFilmsWatched')
        .then(response => {
          context.commit('retrieveMovies', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    addToMyMovies(context, data) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.get('api/Film/AddToMyFilms?idFilm=' + data.movieId)
        .then(response => {
        })
        .catch(error => {
          console.log(error)
        })
    },

    setAsWatched(context, data) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.get('api/Film/SetWatched?idFilm=' + data.movieId)
        .then(response => {
          context.commit('setAsWatched', response.data)
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
          const currentUser = response.data.userName
          localStorage.setItem('access_token', token)
          localStorage.setItem('current_user', currentUser)
          context.commit('retrieveToken', token, currentUser)
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
            localStorage.removeItem('current_user')
            context.commit('destroyToken')
            resolve(response)
          })
          .catch(error => {
            localStorage.removeItem('access_token')
            localStorage.removeItem('current_user')
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
