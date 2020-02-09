import axios from 'axios'
import localStore from 'utils/localStore'

const _instance = axios.create({
    baseURL: 'http://api.dahengzhang.show'
})

_instance.interceptors.request.use(config => {
    localStore.getItem('token') && (config.headers['Authorization'] = 'Bearer ' + localStore.getItem('token'))
    return config
}, error => {
    return Promise.reject(error)
})

_instance.interceptors.response.use(({ data }) => {
    return data
}, error => {
    return Promise.reject(error)
})

export default _instance
