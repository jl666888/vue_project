module.exports = {
    devServer:{
        open:true,
        port:3333,
        overlay:false,
        proxy:{
            '/api':{
                target:'http://127.0.0.1:8080',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            },
            '/v1':{
                target:'http://127.0.0.1/BK_2003',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}