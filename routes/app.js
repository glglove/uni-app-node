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
 * 登录
 * */ 
router.post('/customerApp/login', function(req, res, next) {
    const resData = ''
    console.log("【--node中，routes —— find.js 中打印 req.body----->】",req.body)

    console.log("【--node中，routes —— find.js 中打印 req.url----->】",req.url)
    console.log("【--node中，routes —— find.js 中打印 req.method----->】",req.method)

    console.log("【-node-service 中接口getRankDayData打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口getRankDayData打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service 中接口getRankDayData打印传入的req.url--------->】", req.url)
  
    console.log("【-node-service 中接口getRankDayData打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口getRankDayData打印传入的req.query--------->】", JSON.parse(req.query))
    console.log("【-node-service 中接口getRankDayData打印传入的req.route--------->】", req.route)    

    if(req.url === '/customerApp/login' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        commApi.getOpenId(param).then(data => {
            console.log("nodejs，调用java后台的getRankDayData接口后返回的数据--------》", data)
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
 *  全局中存放 推送码 formids 并提交给 后台保存
 * */ 
router.post('/wxApp/addFormId', function(req, res, next) {
    const resData = ''
    console.log("【--node中，routes —— app.js 中打印 req.body----->】",req.body)

    console.log("【--node中，routes —— app.js 中打印 req.url----->】",req.url)
    console.log("【--node中，routes —— app.js 中打印 req.method----->】",req.method)

    console.log("【-node-service 中接口saveFormIds打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口saveFormIds打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service 中接口saveFormIds打印传入的req.url--------->】", req.url)
  
    console.log("【-node-service 中接口saveFormIds打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口saveFormIds打印传入的req.query--------->】", JSON.parse(req.query))
    console.log("【-node-service 中接口saveFormIds打印传入的req.route--------->】", req.route)    

    if(req.url === '/wxApp/addFormId' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        commApi.saveFormIds(param).then(data => {
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
    const resData = ''
    console.log("【--node中，routes —— app.js 中打印 req.body----->】",req.body)

    console.log("【--node中，routes —— app.js 中打印 req.url----->】",req.url)
    console.log("【--node中，routes —— app.js 中打印 req.method----->】",req.method)

    console.log("【-node-service 中接口upLoad打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口upLoad打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service 中接口upLoad打印传入的req.url--------->】", req.url)
  
    console.log("【-node-service 中接口upLoad打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口upLoad打印传入的req.query--------->】", JSON.parse(req.query))
    console.log("【-node-service 中接口upLoad打印传入的req.route--------->】", req.route)    

    if(req.url === '/fileMappedApp/upload' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        commApi.upLoad(param).then(data => {
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
    const resData = ''
    console.log("【--node中，routes —— app.js 中打印 req.body----->】",req.body)

    console.log("【--node中，routes —— app.js 中打印 req.url----->】",req.url)
    console.log("【--node中，routes —— app.js 中打印 req.method----->】",req.method)

    console.log("【-node-service 中接口saveFormIds打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口saveFormIds打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service 中接口saveFormIds打印传入的req.url--------->】", req.url)
  
    console.log("【-node-service 中接口saveFormIds打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口saveFormIds打印传入的req.query--------->】", JSON.parse(req.query))
    console.log("【-node-service 中接口saveFormIds打印传入的req.route--------->】", req.route)    

    if(req.url === '/customerApp/shareImg' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        commApi.saveFormIds(param).then(data => {
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
