var express = require('express');
var router = express.Router();
const db = require('../db/db');
const path = require('path');
const querystring = require("querystring")
const commApi = require('../api/comm')
var request = require('request')
// 引入user 的模型
const Users = require("../model/user");
const UsersApi = require("../api/userApi");


/**
 * 登录(小程序登录)
 * */ 
router.post('/customerApp/login', function(req, res, next) {
    // 前端传过来的 参数
    let params = req.body

    console.log("【--node中，routes —— app.js 中打印 req.body----->】",req.body)

    console.log("【--node中，routes —— app.js 中打印 req.url----->】",req.url)
    console.log("【--node中，routes —— app.js 中打印 req.method----->】",req.method)

    console.log("【-node-service,routes —— app.js 中接口getOpenId打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service ,routes —— app.js中接口getOpenId打印传入的req.params--------->】", req.params)

    if(req.url === '/customerApp/login' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        commApi.getOpenId(params).then(data => {
            console.log("nodejs，调用java后台的getOpenId接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口getOpenId】请求中打印的错误信息")
    }
});


/**
 * app端 注册/登录 
 * @params   loginAccount  用户名    password  密码
 * */ 
router.post('/customerApp/loginAndRegister', function(req, res, next) {
    // 前端传过来的 参数
    let params = req.body

    console.log("【--node中，routes —— app.js 中打印 req.body----->】",req.body)

    console.log("【--node中，routes —— app.js 中打印 req.url----->】",req.url)
    console.log("【--node中，routes —— app.js 中打印 req.method----->】",req.method)

    console.log("【-node-service,routes —— app.js 中接口getOpenId打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service ,routes —— app.js中接口getOpenId打印传入的req.params--------->】", req.params)

    if(req.url === '/customerApp/loginAndRegister' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        commApi.loginAndRegister(params).then(data => {
            console.log("nodejs，调用java后台的loginAndRegister接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口App 注册/登录 loginAndRegister】请求中打印的错误信息")
    }
});


/**
 *  全局中存放 推送码 formids 并提交给 后台保存
 * */ 
router.post('/wxApp/addFormId', function(req, res, next) {
    // 前端传过来的 参数
    let params = req.body

    console.log("【--node中，routes —— app.js 中打印 req.body----->】",req.body)

    console.log("【--node中，routes —— app.js 中打印 req.url----->】",req.url)
    console.log("【--node中，routes —— app.js 中打印 req.method----->】",req.method)

    console.log("【-node-service 中接口saveFormIds打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口saveFormIds打印传入的req.params--------->】", req.params)

    console.log("【-node-service 中接口saveFormIds打印传入的req.route--------->】", req.route)    

    if(req.url === '/wxApp/addFormId' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        commApi.saveFormIds(params).then(data => {
            console.log("nodejs，调用java后台的saveFormIds接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口saveFormIds】请求中打印的错误信息")
    }
});

/**
 *  上传资源到服务器
 * */ 
router.post('/fileMappedApp/upload', function(req, res, next) {
    // 前端传过来的 参数
    let params = req.body

    console.log("【--node中，routes —— app.js 中打印 req.body----->】",req.body)

    console.log("【--node中，routes —— app.js 中打印 req.url----->】",req.url)
    console.log("【--node中，routes —— app.js 中打印 req.method----->】",req.method)

    console.log("【-node-service 中接口upLoad打印传入的req.headers--------->】", req.headers)

  
    console.log("【-node-service 中接口upLoad打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口upLoad打印传入的req.route--------->】", req.route)    

    if(req.url === '/fileMappedApp/upload' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        commApi.upLoad(params).then(data => {
            console.log("nodejs，调用java后台的upLoad接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口upLoad】请求中打印的错误信息")
    }
});

/**
 *  分享
 * */ 
router.post('/customerApp/shareImg', function(req, res, next) {
    let params = req.body

    console.log("【--node中，routes —— app.js 中打印 req.body----->】",req.body)

    console.log("【--node中，routes —— app.js 中打印 req.url----->】",req.url)
    console.log("【--node中，routes —— app.js 中打印 req.method----->】",req.method)

    console.log("【-node-service 中接口saveFormIds打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口saveFormIds打印传入的req.params--------->】", req.params)

    console.log("【-node-service 中接口saveFormIds打印传入的req.route--------->】", req.route)    

    if(req.url === '/customerApp/shareImg' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        commApi.saveFormIds(params).then(data => {
            console.log("nodejs，调用java后台的saveFormIds接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口saveFormIds】请求中打印的错误信息")
    }
});



module.exports = router;
