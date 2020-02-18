export const TOKEN_KEY = 'token-access'
export const CURRENT_USER_KEY = 'current-user'

export const jwt = {
    getToken () {
      return window.localStorage.getItem(TOKEN_KEY)
    },
    saveToken (token) {
      window.localStorage.setItem(TOKEN_KEY, token)
    },
    removeToken () {
      window.localStorage.removeItem(TOKEN_KEY)
    },
    getCurrentUser () {
      var user =  window.localStorage.getItem(CURRENT_USER_KEY)
      return user
    },
    saveCurrentUser (user) {
      window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
    },
    removeCurrentUser () {
      window.localStorage.removeItem(CURRENT_USER_KEY)
    },

    
}