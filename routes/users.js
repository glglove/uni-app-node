var express = require('express');
var router = express.Router();
const db = require('../db/db');
const path = require('path');

// 引入user 的模型
const Users = require("../model/user");
const UsersApi = require("../api/userApi");

/* GET users listing. */
router.get('/register', function(req, res, next) {
  // res.send('respond with a resource');
  // const params = {
  //   name: "f4j",
  //   pwd: 123456
  // }

  // req.on('data',function(){})
  console.log("---------->", req)
  const params = {
    name: req.query.name,
    pwd: req.query.pwd
  }
  console.log(path.resolve(__dirname, '../pages'))
  UsersApi.register(params).then(data => {
    // console.log("服务器请求注册接口后返回来的数据----》",data)
    // res.sendfile(path.resolve(__dirname, '../pages') + '/registerSuccess.html');
    res.send(JSON.stringify(data))

  })
});

module.exports = router;