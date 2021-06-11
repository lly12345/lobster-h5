import axios from 'axios'

import { stringify } from 'qs'
import config from '../../config'

const MODE = import.meta.env.MODE

const sign = {
    platform: 'H5',
    device: '',
    version: '0.0.1',
    token: '',
}

const getRequest = (method) => {
    return (url, data, options = {}) => {
        let base = config[MODE]
        return axios({
            baseURL: base.apiBaseUrl,
            method,
            url,
            ...(method === 'POST' ? { data: options.string ? stringify(data) : data } : {}),
            params: method === 'GET' ? data : options.params,
            headers: {
                'activity-id': 2,
                "encrypt": 0,
                "sign":  window.localStorage.getItem('sign'),
                // 'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': options.string
                    ? 'application/x-www-form-urlencoded'
                    : 'application/json',
                ...options.headers,

            },
            // withCredentials:true, // 设为true,服务器才能拿到cookie
        }).then(res=>{
            if(typeof res.data !== 'object'){
                console.error('数据格式响应错误：', res.data)
                console.error('前方拥挤，请刷新再试')
                return Promise.reject(res)
            }
            return res.data
        }) .catch((err) => {
            console.error('系统错误', 2)
            return Promise.reject(err)
          })
    }
}

// 照片上传
export const upload = (option) => {
    let url = 'https://h5.fuzhouxiaoyu.com' + option.url
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            body: option.data || {},
            headers: {
                "encrypt": 0,
                "sign": window.localStorage.getItem('sign'),
            }
        }).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}


export const get = getRequest('GET')

export const post = getRequest('POST')