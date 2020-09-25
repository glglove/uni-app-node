var express = require('express');
var router = express.Router();
const path = require('path');
// 引入mysql 数据库对象
// const mysqlConnection = require("../pool/mysql")
var bodyParser= require('body-parser')


// 引入user 的模型
// const Users = require("../model/user");
const UsersApi = require("../api/userApi");

router.get('/register', function(req, res, next) {
  debugger
  // res.send('respond with a resource');
  // const params = {
  //   name: "f4j",
  //   pwd: 123456
  // }

  // get 的方式时 使用 req.query 来获取前端传过来的参数   post 方式时 使用 req.params来获取
  const params = req.query

  console.log("【-node-service 中register接口打印传入的req.body--------->】", req.body)

  console.log("【-node-service 中register接口打印传入的req.headers--------->】", req.headers)
  
  console.log("【-node-service 中register接口打印传入的req._parsedUrl--------->】", req._parsedUrl)

  console.log("【-node-service 中register接口打印传入的req.url--------->】", req.url)

  console.log("【-node-service 中register接口打印传入的req.params--------->】", req.params)
  console.log("【-node-service 中register接口打印传入的req.query--------->】", req.query)
  console.log("【-node-service 中register接口打印传入的req.route--------->】", req.route)

  debugger
  // const params = {
  //   name: req.query.name,
  //   pwd: req.query.pwd
  // }
  // console.log(path.resolve(__dirname, '../pages'))
  UsersApi.register(params).then(data => {
    // console.log("服务器请求注册接口后返回来的数据----》",data)
    // res.sendfile(path.resolve(__dirname, '../pages') + '/registerSuccess.html');
    if(data){
      console.log("node -router-users.js 中返回的数据data-----", data)
      res.send(JSON.stringify(data))
    }else {
      res.send({
        code: 0,
        msg: "注册失败,register接口,访问mongodb数据库错误"
      })
      reject('register接口,访问mongodb数据库错误!')
    }
  }).catch((error)=>{
    console.log('register接口,访问mongodb数据库错误')
    res.send({
      code: 0,
      msg: "注册失败,register接口,访问mongodb数据库错误"
    })
    reject('register接口,访问mongodb数据库错误!')
  })
});


// 获取 小纸条未读消息接口
router.post("/getMessage", function(req, res, next){
    let params = req.body
    let to_userId = params.to_userId || null
    let from_id = params.from_id || null 
    let from_name = params.from_name || null
    let msg_type = params.msg_type || null
    let from_msg = params.from_msg || null
    let from_phone = params.from_phone || null
    let from_headPic = params.from_headPic || null
    let from_time = params.from_time || null

    console.log("【-node-service 中getMessage接口打印传入的req.body--------->】", req.body)    
    // 查询数据库
    let getMessage_sql = `SELECT * FROM usermessage where userId = ${to_userId}`
    mysqlConnection.query(getMessage_sql, function(err, result){
        if(err){
          console.log('[query]-:'+err)
        }else {
          console.log(result)
          res.send(result)            
        }
    })
})

// 保存 小纸条未读消息接口
router.post("/saveMessage", function(req, res, next){
  let params = req.body
  let to_userId = params.to_userId || null
  let from_id = params.from_id || null 
  let from_name = params.from_name || null
  let msg_type = params.msg_type || null
  let from_msg = params.from_msg || null
  let from_phone = params.from_phone || null
  let from_headPic = params.from_headPic || null
  let from_time = params.from_time || null
  console.log("【-node-service 中saveMessage接口打印传入的req.body--------->】", req.body)    
  // 查询数据库
  let saveMessage_sql = `INSERT INTO usermessage(userId, from_id, from_name, msg_type, from_msg, from_phone, from_headPic, from_time) 
                          VALUES (${to_userId}, ${from_id}, '${from_name}', '${msg_type}', '${from_msg}', '${from_phone}', '${from_headPic}', '${from_time}')`
  mysqlConnection.query(saveMessage_sql, function(err, result){
      if(err){
        console.log('[query]-:'+err)
      }else {
        console.log(result)
        res.send(result)            
      }
  })
})

// 删除 小纸条未读消息接口
router.post("/deleteMessage", function(req, res, next){
  let params = req.body
  let to_userId = params.to_userId || null
  let from_id = params.from_id || null 
  let from_name = params.from_name || null
  let msg_type = params.msg_type || null
  let from_msg = params.from_msg || null
  let from_phone = params.from_phone || null
  let from_headPic = params.from_headPic || null
  let from_time = params.from_time || null
  console.log("【-node-service 中deleteMessage接口打印传入的req.body--------->】", req.body)    
  // 查询数据库
  let deleteMessage_sql = `delete from usermessage where userId = ${to_userId}`
  mysqlConnection.query(deleteMessage_sql, function(err, result){
      if(err){
          console.log('[query]-:'+err)
      }else {
          console.log(result)
          res.send(result)            
      }
  })
})

module.exports = router;
