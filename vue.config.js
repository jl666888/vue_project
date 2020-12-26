module.exports = {
    devServer:{
        open:true,
        port:3000,
        overlay:false,
        proxy:{
            '/node':{
                target:'http://127.0.0.1:3000',
                changeOrigin:true,
                pathRewrite:{
                    '^/node':''
                }
            }
        }
    }
}