import axios from 'axios';

axios.interceptors.response.use(ret=>{
    return ret.data
})

axios.interceptors.request.use(config=>{
    let token = window.localStorage.getItem('token');
    if(token){
        config.headers.Authorization = token
    }
    
    return config

})

export default axios;
