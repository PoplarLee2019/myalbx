// 引入users表的控制器模块
const pagesController = require('../controllers/pagesController.js')
// 封装路由模块
const express = require('express')
// Router()构造函数创建的路由对象可以当成一个中间件来使用
const router = express.Router()

// router.get('/',(req,res) => {
//     pagesController.getIndexPage(req,res)
// })

// 当监听到Get方式的/请求的时候，会调用函数进行处理，并且为传递传递两个参数：req,res
// 这两个参数是服务器传递的，不是你一开始就有的

// 前台页面
router.get('/',pagesController.getIndexPage)
      .get('/list',pagesController.getListPage)
      .get('/detail',pagesController.getDetailPage)
      .get('admin/password',pagesController.getDetailPage)

// 后台管理页面，统一添加admin做为前缀
      .get('/admin',pagesController.getAdminPage)

















// 暴露路由模块
module.exports = router