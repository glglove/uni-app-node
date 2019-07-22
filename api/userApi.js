// 引入 users 模型
const Users = require('../model/user')
// const httpPost = require('../request/users')
// 引入 bcrypt

const userApi= {
  // 用户注册
  register: function (params) {
    return new Promise((resolve, reject) => {
      return Users.findOne({name: params.name}).then((data) => {
        // console.log(data)
        if (data) {
          resolve({
            code: 1,
            msg: "用户名已存在",
          })
        } else {
          const myUser = {
            name: params.name,
            pwd: params.pwd
          }

          // 密码进行加密后返回
          // const saltRounds = 10;
          // const salt = bcrypt.genSaltSync(saltRounds);
          // const hash = bcrypt.hashSync(myUser.pwd, salt);
          // myUser.pwd = hash;
          // 实例化 myUser
          const newUser = new Users(myUser)
          console.log(newUser)
          // 存储到mongodb中
          newUser.save().then(user => {
            if(user){
              resolve({
                state: 1,
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
        console.log(err)
      })
    })
  }
 }


module.exports = userApi