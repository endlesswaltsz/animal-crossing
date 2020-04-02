import axios from 'axios'
// import { Message } from 'element-ui'

const BACKEND_ENDPOINT = 'http://localhost/api/v1'

axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencode',
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    // error => {
    //     return Promise.reject(err);
    //   }

)

export const get = (endpoint, params = {}) => {
    let url = BACKEND_ENDPOINT + endpoint
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const post = (endpoint, data = {}) => {
    let url = BACKEND_ENDPOINT + endpoint
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const put = (endpoint, data = {}) => {
    let url = BACKEND_ENDPOINT + endpoint
    return new Promise((resolve, reject) => {
        axios.get(url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const patch = (endpoint, data = {}) => {
    let url = BACKEND_ENDPOINT + endpoint
    return new Promise((resolve, reject) => {
        axios.get(url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

// const once = (method) => {
//     if (method === 'get') return get
//     else if(method === 'post') return post
//     else if(method === 'put') return put
//     else if(method === 'patch') return patch
// }

// export default function(method, api, data) {
//     once(method)(api, data)
// }