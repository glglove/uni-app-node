var express = require('express');
var router = express.Router();
const db = require('../db/db');
const path = require('path');
const querystring = require("querystring")
const findApi = require('../api/find')
var request = require('request')
// 引入user 的模型
const Users = require("../model/user");
const UsersApi = require("../api/userApi");

/* GET users listing. */

/**
 *  
 * */ 
router.post('/getlistData', function(req, res, next) {
    const resData = ''
    console.log("------->",req.url)
    console.log("------->",req.method)
    if(req.url === '/getlistData' && req.method === 'POST'){
        console.log(2344535)
        // node js 作为中间件 调用 java后台的接口
        findApi.getRankDayData().then(data => {
            console.log("nodejs，调用java后台的getRankDayData接口后返回的数据--------》", data)
            // 将从java 后台获取的数据返给前台页面
            res.send(data)
        })
      
        // res.send(data)
        req.on("data", function (chunk) {
            console.log("进入到on11111111111")
            resData += data
        })
        req.on("end", function(){
            //（1）.对url进行解码（url会对中文进行编码）
            console.log("进入到end222222222")
            resData = decodeURI(resData);
            console.log(resData);

            /**post请求参数不能使用url模块解析，因为他不是一个url，而是一个请求体对象 */

            //（2）.使用querystring对url进行反序列化（解析url将&和=拆分成键值对），得到一个对象
            //querystring是nodejs内置的一个专用于处理url的模块，API只有四个，详情见nodejs官方文档
            var dataObject = querystring.parse(resData);
            console.log(dataObject);       
        })
    }
});

module.exports = router;
