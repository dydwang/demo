import axios from 'axios'
import { Message, Loading } from 'element-ui'
import {nodeUrl,phpUrl}  from './url'//服务器地址
let loadingInstance = null //这里是loading


//使用create方法创建axios实例

let C  //返回值
let Service = axios.create({
    timeout: 7000, // 请求超时时间
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

/** serve 连接那个服务器  node  php*/

export function util(data,url,callback,serve=phpUrl) {
        Service({
            url:serve==='node'?nodeUrl+url:phpUrl+url+'.php',
            method: 'post',
            data:serve==='node'?JSON.stringify(data):toFormData(data),  //  toFormData(cnt)
        })
            .then(()=>{callback(C)})
            .catch(()=>{callback(C)})
}
// 添加请求拦截器
Service.interceptors.request.use(config => {
    // loadingInstance = Loading.service({
    //     lock: true,
    //     text: 'loading...'
    // })
    return config
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
    //loadingInstance.close()
    C= response.data
}, error => {
    console.log('TCL: error', error)
    const msg = error.Message !== undefined ? error.Message : ''
    Message({
        message: '网络错误' + msg,
        type: 'error',
        duration: 3 * 1000
    })
    loadingInstance.close()
    C=error
})


//如果连接PHP 转化data
function toFormData(obj) {//数据处理
    let formData = new FormData();
    for(let key in obj) {
        formData.append(key, obj[key]);
    }
    return formData;
}