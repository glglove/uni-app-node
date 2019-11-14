// 引入 users 模型
const Users = require('../model/user')
// const httpPost = require('../request/users')
// 引入 bcrypt
const apiConfig = require('./config')
const baseUrl = apiConfig.baseUrl
const token = apiConfig.miniproConfings.token
const request = require('request')

const userApi= {
  // 用户注册
  register: function (params) {
    console.log("【node中，userApi 里面打印的注册时传给node 服务器的params----", params)
    return new Promise((resolve, reject) => {
      return Users.findOne({name: params.name}).then((data) => {
        // console.log(data)
        if (data) {
          let userObj = {
            name: params.name,
            pwd: params.pwd,
            token: token            
          }
          resolve({
            code: 1,
            msg: "用户名已存在",
            user: userObj
          })
        } else {
          let myUser = {
            name: params.name,
            pwd: params.pwd,
            token: token
          }

          // 密码进行加密后返回
          // const saltRounds = 10;
          // const salt = bcrypt.genSaltSync(saltRounds);
          // const hash = bcrypt.hashSync(myUser.pwd, salt);
          // myUser.pwd = hash;
          // 实例化 myUser
          let newUser = new Users(myUser)
          console.log(newUser)
          // 存储到mongodb中
          newUser.save().then(user => {
            if(user){
              resolve({
                code: 1,
                msg: '用户信息存储成功',
                user
              })
            }else {
              reject("存入mongodb失败！")
            }
          }).catch(err => {
            console.log(err)
            reject(err)
          })
        }
      }).catch(err => {
        reject({
          code: 0,
          msg: '数据库查询userName出错'
        })
        console.log(err)
      })
    })
  }
 }
module.exports = userApi