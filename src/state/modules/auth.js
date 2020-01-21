import axios from 'axios'

export const state = {
  currentUser: getSavedState('auth.currentUser'),
}

export const mutations = {
  SET_CURRENT_USER(state, newValue) {
    console.dir('.' + newValue)
    console.dir(newValue)
    state.currentUser = newValue
    saveState('auth.currentUser', newValue)
    setDefaultAuthHeaders(state)
  },
}

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(state) {
    return !!state.currentUser
  },
}

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init({ state, dispatch }) {
    setDefaultAuthHeaders(state)
    dispatch('validate')
  },

  // Logs in the current user.
  logIn({ commit, dispatch, getters }, { username, password } = {}) {
    if (getters.loggedIn) return dispatch('validate')

    return (
      axios
        // .post('/api/session', { username, password })
        .post('http://localhost:3010/users/login', {
          user: { Nom_Usu: username, Pass_Usu: password },
        })
        .then((response) => {
          // const user = response.data.user
          const user = {
            id: response.data.user.id,
            // username: response.data.user.user,
            name: response.data.user.user,
            //  token: "response.data.user.token",
            // token: 'valid-token-for-admin',
            token: response.data.user.token,
            email: response.data.user.email,
          }
          console.log('Exito')
          console.dir(response.data)
          console.dir(user)
          commit('SET_CURRENT_USER', user)
          return user
        })
    )
  },

  // Logs out the current user.
  logOut({ commit }) {
    commit('SET_CURRENT_USER', null)
  },

  // register the user
  register({ commit, dispatch, getters }, { fullname, email, password } = {}) {
    if (getters.loggedIn) return dispatch('validate')

    return axios
      .post('/api/register', { fullname, email, password })
      .then((response) => {
        const user = response.data
        return user
      })
  },

  // register the user
  resetPassword({ commit, dispatch, getters }, { email } = {}) {
    if (getters.loggedIn) return dispatch('validate')

    return axios.post('/api/reset', { email }).then((response) => {
      const message = response.data
      return message
    })
  },

  // Validates the current user's token and refreshes it
  // with new data from the API.
  validate({ commit, state }) {
    if (!state.currentUser) return Promise.resolve(null)
    return (
      axios
        // .get('/api/session')
        .get('http://localhost:3010/users/session', {
          headers: { Authorization: 'Token ' + state.currentUser.token },
        })
        .then((response) => {
          const user = response.data
          // commit('SET_CURRENT_USER', user)
          return user
        })
        // *Todo Continuar aqui despues del login queda como current user OK eso no esta bien
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            commit('SET_CURRENT_USER', null)
          }
          return null
        })
    )
  },
}

// ===
// Private helpers
// ===

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
  // axios.defaults.headers.common.Authorization = state.currentUser
  //   ? state.currentUser.token
  //   : ''
  axios.defaults.headers.common.Authorization = state.currentUser
    ? state.currentUser.token
    : ''
}
