var express = require('express');
var router = express.Router();
const path = require('path');
const querystring = require("querystring")
const findApi = require('../api/find')
var request = require('request')
// 引入user 的模型
const Users = require("../model/user");
const UsersApi = require("../api/userApi");

/* GET users listing. */

/**
 * 接口 getRankDayData 
 * */ 
router.post('/customerApp/myRank', function(req, res, next) {
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

    if(req.url === '/customerApp/myRank' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— find.js 中打印 传给java后台 getRankDayData的参数：----->】",req.body)
        findApi.getRankDayData(params).then(data => {
            console.info("nodejs，调用java后台的getRankDayData接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口getRankDayData】请求中打印的错误信息")
    }
});

/**
 * 接口 getContinuitySignUpData
 * 
 */
router.post('/clockInApp/pageByDate', function(req, res, next) {
    const resData = ''
    // 前端传过来的 参数
    const params = req.body

    console.log("--node中，routes —— find.js 中打印 req.method----->",req.method)

    console.log("【-node-service routes —— find.js中接口[getContinuitySignUpData]打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service routes —— find.js中接口[getContinuitySignUpData]打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service routes —— find.js中接口[getContinuitySignUpData]打印传入的req.url--------->】", req.url)
  
    console.log("【-node-service routes —— find.js 中接口[getContinuitySignUpData]打印传入的req.params--------->】", req.params)
    console.log("【-node-service routes —— find.js中接口[getContinuitySignUpData]打印传入的req.query--------->】", req.query)
    console.log("【-node-service routes —— find.js中接口[getContinuitySignUpData]打印传入的req.route--------->】", req.route)    

    if(req.url === '/clockInApp/pageByDate' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        findApi.getContinuitySignUpData(params).then(data => {
            console.log("nodejs，调用java后台的[getContinuitySignUpData]接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口[getContinuitySignUpData]】请求中打印的错误信息")
    }
});

/***
 * 接口 getRankListData
 * 
 */
router.post('/customerApp/rank', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body    
    const resData = ''
    console.log("--node中，routes —— find.js 中打印 req.url----->",req.url)
    console.log("--node中，routes —— find.js 中打印 req.method----->",req.method)

    console.log("【-node-service 中接口[getRankListData]打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口[getRankListData]打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service 中接口[getRankListData]打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口[getRankListData]打印传入的req.query--------->】", req.query)
    console.log("【-node-service 中接口[getRankListData]打印传入的req.route--------->】", req.route)    

    if(req.url === '/customerApp/rank' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        findApi.getRankListData(params).then(data => {
            console.log("nodejs，调用java后台的[getRankListData]接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口[getRankListData]】请求中打印的错误信息")
    }
});

/*
 * 接口 getlessonListDetailData
 * 
 */
router.post('/classesApp/get', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body    
    const resData = ''
    console.log("--node中，routes —— find.js 中打印 req.url----->",req.url)
    console.log("--node中，routes —— find.js 中打印 req.method----->",req.method)

    console.log("【-node-service 中接口[getlessonListDetailData]打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口[getlessonListDetailData]打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service 中接口[getlessonListDetailData]打印传入的req.url--------->】", req.url)
  
    console.log("【-node-service 中接口[getlessonListDetailData]打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口[getlessonListDetailData]打印传入的req.query--------->】", req.query)
    console.log("【-node-service 中接口[getlessonListDetailData]打印传入的req.route--------->】", req.route)    

    if(req.url === '/classesApp/get' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        findApi.getlessonListDetailData(params).then(data => {
            console.log("nodejs，调用java后台的[getlessonListDetailData]接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口[getlessonListDetailData]】请求中打印的错误信息")
    }
});


/*
 * 接口 SignUpLesson
 * 
 */
router.post('/classesApp/join', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body    
    const resData = ''
    console.log("--node中，routes —— find.js 中打印 req.url----->",req.url)
    console.log("--node中，routes —— find.js 中打印 req.method----->",req.method)

    console.log("【-node-service 中接口[SignUpLesson]打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口[SignUpLesson]打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service 中接口[SignUpLesson]打印传入的req.url--------->】", req.url)
  
    console.log("【-node-service 中接口[SignUpLesson]打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口[SignUpLesson]打印传入的req.query--------->】", req.query)
    console.log("【-node-service 中接口[SignUpLesson]打印传入的req.route--------->】", req.route)    

    if(req.url === '/classesApp/join' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        findApi.SignUpLesson(params).then(data => {
            console.log("nodejs，调用java后台的[SignUpLesson]接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口[SignUpLesson]】请求中打印的错误信息")
    }
});


/*
 * 接口 addCollect
 * 
 */
router.post('/customerApp/addCollect', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body    
    const resData = ''
    console.log("--node中，routes —— find.js 中打印 req.url----->",req.url)
    console.log("--node中，routes —— find.js 中打印 req.method----->",req.method)

    console.log("【-node-service 中接口[addCollect]打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口[addCollect]打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service 中接口[addCollect]打印传入的req.url--------->】", req.url)
  
    console.log("【-node-service 中接口[addCollect]打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口[addCollect]打印传入的req.query--------->】", req.query)
    console.log("【-node-service 中接口[addCollect]打印传入的req.route--------->】", req.route)    

    if(req.url === '/customerApp/addCollect' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        findApi.addCollect().then(data => {
            console.log("nodejs，调用java后台的[addCollect]接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口[addCollect]】请求中打印的错误信息")
    }
});


/*
 * 接口 addCollect
 * 
 */
router.post('/customerApp/addCollect', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body    
    const resData = ''
    console.log("--node中，routes —— find.js 中打印 req.url----->",req.url)
    console.log("--node中，routes —— find.js 中打印 req.method----->",req.method)

    console.log("【-node-service 中接口[addCollect]打印传入的req.headers--------->】", req.headers)
  
    console.log("【-node-service 中接口[addCollect]打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    console.log("【-node-service 中接口[addCollect]打印传入的req.url--------->】", req.url)
  
    console.log("【-node-service 中接口[addCollect]打印传入的req.params--------->】", req.params)
    console.log("【-node-service 中接口[addCollect]打印传入的req.query--------->】", req.query)
    console.log("【-node-service 中接口[addCollect]打印传入的req.route--------->】", req.route)    

    if(req.url === '/customerApp/addCollect' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        findApi.addCollect(params).then(data => {
            console.log("nodejs，调用java后台的[addCollect]接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口[addCollect]】请求中打印的错误信息")
    }
});

module.exports = router;
