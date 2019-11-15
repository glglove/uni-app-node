<<<<<<< HEAD
var express = require('express');
var router = express.Router();
const path = require('path');
const querystring = require("querystring")
const mineApi = require('../api/mine')
var request = require('request')
// 引入user 的模型
const Users = require("../model/user");
const UsersApi = require("../api/userApi");

/* GET users listing. */

/**
 *  
 * */ 
router.post('/certificateLogApp/page', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— find.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— find.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.route--------->】", req.route)    

    if(req.url === '/certificateLogApp/page' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— find.js 中打印 传给java后台 getAchivementList的参数：----->】",req.body)
        mineApi.getAchivementList(params).then(data => {
            console.info("nodejs，调用java后台的getAchivementList接口后返回的数据--------》", data)
            if(data){
                // 将从java 后台获取的数据返给前台页面
                res.send(data)
            }else {
                res.send({
                    code: 0,
                    msg: "数据获取失败"
                })
            }
        })
    }else {
        console.log("【-node-service 中接口getAchivementList】请求中打印的错误信息")
    }
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();
const path = require('path');
const querystring = require("querystring")
const mineApi = require('../api/mine')
var request = require('request')
// 引入user 的模型
const Users = require("../model/user");
const UsersApi = require("../api/userApi");

/* GET users listing. */

/**
 *  
 * */ 
router.post('/certificateLogApp/page', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— find.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— find.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— find.js中接口getRankDayData打印传入的req.route--------->】", req.route)    

    if(req.url === '/certificateLogApp/page' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— find.js 中打印 传给java后台 getAchivementList的参数：----->】",req.body)
        mineApi.getAchivementList(params).then(data => {
            console.info("nodejs，调用java后台的getAchivementList接口后返回的数据--------》", data)
            if(data){
                // 将从java 后台获取的数据返给前台页面
                res.send(data)
            }else {
                res.send({
                    code: 0,
                    msg: "数据获取失败"
                })
            }
        })
    }else {
        console.log("【-node-service 中接口getAchivementList】请求中打印的错误信息")
    }
});

module.exports = router;
>>>>>>> 08407b781d69c6e80cc19a1350d37860714011cc
