module.exports = {
    devServer:{
        open:true,
        port:3000,
        overlay:false,
        proxy:{
            '/api':{
                target:'http://127.0.0.1:8080',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}