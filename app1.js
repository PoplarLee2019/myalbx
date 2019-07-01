// 引入express模块
const express = require('express')

// 引入路由模块
const router = require('.router/index.js')

// 引入ejs
const ejs = require('ejs')

// 创建应用
const app = express()

// 添加端口监听
app.listen(3000,()=> {
    console.log('http://127.0.0.1:3000')
})

// 设置模板引擎为ejs
app.set('view engine','ejs')
// 指定模板文件得目录。后期使用ejs时可以参照这个目录进行ejs文件的查询
app.set('views','views')

// 添加静态资源托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))

// 添加路由配置
app.use(router)