import axios from 'axios';

axios.interceptors.response.use(ret=>{
    return ret.data
})

axios.interceptors.request.use(config=>{
   
    let token = document.cookie.split('; ')
    let obj ={}
    token.forEach(v=>{
        let arr = v.split('=')
        obj[arr[0]] = arr[1]
    })
     if(obj.token){
        config.headers.Authorization = obj.token
    }
    return config    

})

export default axios;
