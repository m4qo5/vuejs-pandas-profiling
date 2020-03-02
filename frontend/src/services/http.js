import axios from 'axios'
import router from '@/router'
import store from '../store/store'
import getters from '../store/store'
import { jwt } from '@/services/jwt'
import { PURGE_TOKEN } from '@/store/mutation.types.js'
import { API_URL } from '../constants'

export const client = axios.create({
    baseURL: API_URL
})

client.interceptors.request.use(request => {
    const token = jwt.getToken()
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`
    }
    return request
})
client.interceptors.response.use(
    response => response.data,
    responseError => {
      switch (responseError.response.status) {
        case 401:
          store.commit(PURGE_TOKEN)
          router.push({ name: 'signin' })
          break
        case 404:
          router.push({ name: '404' })
          break
      }
      return Promise.reject(responseError.response)
    }
)

const steps = {
    all () {
        return client.get('steps/')
    }
}

const auth = {
    createUser(payload) {
        return client.post('auth/users/', {
            name: payload.name,
            last_name: payload.last_name,
            email: payload.email,
            password: payload.password
        })
    },
    createToken(payload) {
        return client.post('auth/token/', {
            email: payload.email,
            password: payload.password
        })
    },  
}

const users = {
    me () {
        return client.get('auth/users/me')
    },
    all () {
        return client.get('auth/users/')
    }
}

const projects = {
    all () {
        return client.get('projects/')
    },
    single (payload) {
        return client.get(`projects/${payload}`)
    },
    allFiles () {
        return client.get('project-files/')
    },
    create (payload) {
        return client.post('projects/', payload)
    },
    createProjectFile (payload) {
        return client.post('project-files/', payload)
    },
    fileReport (payload) {
        return client.get(`file-report/${payload}`)
    }
}

export const http = {
    steps,
    auth,
    users,
    projects,
}