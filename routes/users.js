var express = require('express');
var router = express.Router();
const db = require('../db/db');
const path = require('path');


// 引入user 的模型
const Users = require("../model/user");
const UsersApi = require("../api/userApi");

/* GET users listing. */
router.get('/register', function(req, res, next) {
  debugger
  // res.send('respond with a resource');
  // const params = {
  //   name: "f4j",
  //   pwd: 123456
  // }

  console.log("-node-service 中register接口打印传入的req--------->", req.url)
  console.log("-node-service 中register接口打印传入的req.data--------->", req.body)
  debugger
  const params = {
    name: req.query.name,
    pwd: req.query.pwd
  }
  console.log(path.resolve(__dirname, '../pages'))
  UsersApi.register(params).then(data => {
    // console.log("服务器请求注册接口后返回来的数据----》",data)
    // res.sendfile(path.resolve(__dirname, '../pages') + '/registerSuccess.html');
    if(data){
      console.log("node -router-users.js 中返回的数据data-----", data)
      res.send(JSON.stringify(data))
    }else {
      res.send({
        code: 0,
        msg: ""
      })
    }
  }).catch((error)=>{
    console.log('register接口,访问mongodb数据库错误')
    reject('register接口,访问mongodb数据库错误!')
  })
});

module.exports = router;
