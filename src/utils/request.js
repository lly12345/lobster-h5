import axios from 'axios'
import { message } from 'antd'
import { stringify } from 'qs'
import config from '../../config'
import { options } from 'less'

const MODE = import.meta.env.MODE

const getRequest = (method) => {
    return (url, data, option = {}) => {
        let base = config[MODE]
        return axios({
            baseURL: base.apiBaseUrl,
            method,
            url,
            ...(method === 'POST' ? { data: options.string ? stringify(data) : data } : {}),
            params: methods === 'GET' ? data : options.params,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': options.string
                    ? 'application/x-www-form-urlencoded'
                    : 'application/json',
                ...options.headers,

            },
            withCredentials:true, // 设为true,服务器才能拿到cookie
        }).then(res=>{
            if(typeof res.data !== 'object'){
                console.error('数据格式响应错误：', res.data)
                message.error('前方拥挤，请刷新再试')
                return Promise.reject(res)
            }
            return res.data
        }) .catch((err) => {
            message.error('系统错误', 2)
            return Promise.reject(err)
          })
    }
}

export const get = getRequest('GET')

export const post = getRequest('POST')