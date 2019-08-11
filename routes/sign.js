var express = require('express');
var router = express.Router();
const db = require('../db/db');
const path = require('path');
const querystring = require("querystring")
const signApi = require('../api/sign')
var request = require('request')
// 引入user 的模型
const Users = require("../model/user");
const UsersApi = require("../api/userApi");

/**
 * 接口 getLessonList查询 所有课程列表信息
 * */ 
router.post('/classesApp/myPage', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— sign.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— sign.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— sign.js中接口getLessonList打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— sign.js中接口getLessonList打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— sign.js中接口getLessonList打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— sign.js中接口getLessonList打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— sign.js中接口getLessonList打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— sign.js中接口getLessonList打印传入的req.route--------->】", req.route)    

    if(req.url === '/classesApp/myPage' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— sign.js 中打印 传给java后台 getLessonList的参数：----->】",req.body)
        signApi.getLessonList(params).then(data => {
            console.info("nodejs，调用java后台的getLessonList接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口getLessonList】请求中打印的错误信息")
    }
});

/**
 * 接口 getTodayTestData查询 所有课程列表信息
 * */ 
router.post('/questionsApp/get', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— sign.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— sign.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— sign.js中接口getTodayTestData打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— sign.js中接口getTodayTestData打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— sign.js中接口getTodayTestData打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— sign.js中接口getTodayTestData打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— sign.js中接口getTodayTestData打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— sign.js中接口getTodayTestData打印传入的req.route--------->】", req.route)    

    if(req.url === '/classesApp/myPage' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— sign.js 中打印 传给java后台 getTodayTestData的参数：----->】",req.body)
        signApi.getTodayTestData(params).then(data => {
            console.info("nodejs，调用java后台的getTodayTestData接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口getTodayTestData】请求中打印的错误信息")
    }
});



/**
 * 接口 param 查询排行榜  打卡天数、总天数数据
 * */ 
router.post('/customerApp/myRank', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— sign.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— sign.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— sign.js中接口getRankDayData打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— sign.js中接口getRankDayData打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— sign.js中接口getRankDayData打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— sign.js中接口getRankDayData打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— sign.js中接口getRankDayData打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— sign.js中接口getRankDayData打印传入的req.route--------->】", req.route)    

    if(req.url === '/customerApp/myRank' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— sign.js 中打印 传给java后台 getRankDayData的参数：----->】",req.body)
        signApi.getRankDayData(params).then(data => {
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
 * 接口 param  getRankListData查询排行榜  排行list数据
 * */ 
router.post('/customerApp/rank', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— sign.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— sign.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— sign.js中接口getRankListData打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— sign.js中接口getRankListData打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— sign.js中接口getRankListData打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— sign.js中接口getRankListData打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— sign.js中接口getRankListData打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— sign.js中接口getRankListData打印传入的req.route--------->】", req.route)    

    if(req.url === '/customerApp/rank' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— sign.js 中打印 传给java后台 getRankListData的参数：----->】",req.body)
        signApi.getRankListData(params).then(data => {
            console.info("nodejs，调用java后台的getRankListData接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口getRankListData】请求中打印的错误信息")
    }
});

/**
 * 接口 getLearnData  param 查询 学习日历 
 * */ 
router.post('/clockInApp/pageByClass', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— sign.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— sign.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— sign.js中接口getLearnData打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— sign.js中接口getLearnData打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— sign.js中接口getLearnData打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— sign.js中接口getLearnData打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— sign.js中接口getLearnData打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— sign.js中接口getLearnData打印传入的req.route--------->】", req.route)    

    if(req.url === '/clockInApp/pageByClass' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— sign.js 中打印 传给java后台 getLearnData的参数：----->】",req.body)
        signApi.getLearnData(params).then(data => {
            console.info("nodejs，调用java后台的getLearnData接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口getLearnData】请求中打印的错误信息")
    }
});

/**
 * 接口 getContinuitySignUpData param 查询报名课程信息  list 信息 ，find首页点击 立即报名 btn获取课程list 数据
 * */ 
router.post('/classesApp/page', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— sign.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— sign.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— sign.js中接口getContinuitySignUpData打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— sign.js中接口getContinuitySignUpData打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— sign.js中接口getContinuitySignUpData打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— sign.js中接口getContinuitySignUpData打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— sign.js中接口getContinuitySignUpData打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— sign.js中接口getContinuitySignUpData打印传入的req.route--------->】", req.route)    

    if(req.url === '/classesApp/page' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— sign.js 中打印 传给java后台 getContinuitySignUpData的参数：----->】",req.body)
        signApi.getContinuitySignUpData(params).then(data => {
            console.info("nodejs，调用java后台的getContinuitySignUpData接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口getContinuitySignUpData】请求中打印的错误信息")
    }
});

/**
 * 接口 loadImgAndContent 提交作业 按钮  提交 打卡内容和图片
 * */ 
router.post('/clockInApp/save', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— sign.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— sign.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— sign.js中接口loadImgAndContent打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— sign.js中接口loadImgAndContent打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— sign.js中接口loadImgAndContent打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— sign.js中接口loadImgAndContent打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— sign.js中接口loadImgAndContent打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— sign.js中接口loadImgAndContent打印传入的req.route--------->】", req.route)    

    if(req.url === '/clockInApp/save' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— sign.js 中打印 传给java后台 loadImgAndContent的参数：----->】",req.body)
        signApi.loadImgAndContent(params).then(data => {
            console.info("nodejs，调用java后台的loadImgAndContent接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口loadImgAndContent】请求中打印的错误信息")
    }
});

/**
 * 接口 getAllSignData 获取 单个课程的 所有人的打卡记录
 * */ 
router.post('/clockInApp/allPage', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— sign.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— sign.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— sign.js中接口getAllSignData打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— sign.js中接口getAllSignData打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— sign.js中接口getAllSignData打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— sign.js中接口getAllSignData打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— sign.js中接口getAllSignData打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— sign.js中接口getAllSignData打印传入的req.route--------->】", req.route)    

    if(req.url === '/clockInApp/allPage' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— sign.js 中打印 传给java后台 getAllSignData的参数：----->】",req.body)
        signApi.getAllSignData(params).then(data => {
            console.info("nodejs，调用java后台的getAllSignData接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口getAllSignData】请求中打印的错误信息")
    }
});

/**
 * 接口 addComment 获取 单个课程的 所有人的打卡记录
 * */ 
router.post('/customerApp/addComment', function(req, res, next) {
    // 前端传过来的 参数
    const params = req.body

    console.log("【--node中，routes —— sign.js 中打印 req.body----->】",req.body)

    // console.log("【--node中，routes —— sign.js 中打印 req.method----->】",req.method)

    // console.log("【-node-service routes —— sign.js中接口addComment打印传入的req.headers--------->】", req.headers)
  
    // console.log("【-node-service routes —— sign.js中接口addComment打印传入的req._parsedUrl--------->】", req._parsedUrl)
  
    // console.log("【-node-service routes —— sign.js中接口addComment打印传入的req.url--------->】", req.url)
  
    // console.log("【-node-service routes —— sign.js中接口addComment打印传入的req.params--------->】", req.params)
    // console.log("【-node-service routes —— sign.js中接口addComment打印传入的req.query--------->】", req.query)
    // console.log("【-node-service routes —— sign.js中接口addComment打印传入的req.route--------->】", req.route)    

    if(req.url === '/customerApp/addComment' && req.method === 'POST'){
        // node js 作为中间件 调用 java后台的接口
        console.log("【--node中，routes —— sign.js 中打印 传给java后台 addComment的参数：----->】",req.body)
        signApi.addComment(params).then(data => {
            console.info("nodejs，调用java后台的addComment接口后返回的数据--------》", data)
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
        console.log("【-node-service 中接口addComment】请求中打印的错误信息")
    }
});
module.exports = router;
