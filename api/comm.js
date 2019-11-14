const apiConfig = require('./config')
const baseUrl = apiConfig.baseUrl
const request = require('request')

module.exports = {
    /**
     * 小程序登录获取token的接口
     * 
     * 
     */
    getOpenId(param, loading = false) {
        const url = `${baseUrl}/customerApp/login`;
        console.log(`node中，comm.js中的 getOpenId的数据-------${apiConfig.baseURL}----------`)
        
        var data = {
          
        }

        param = param || {}

        param = Object.assign(data, param);

        console.log( "node中，comm.js中的 getOpenId请求的参数对象-----", param );

        return new Promise((resolve, reject) => {
            request({
                url: url,
                method: "POST",
                json: true,
                headers: {
                    "content-type": "application/json",
                },
                body: param
            }, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getOpenId------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getOpenId------------->",body)
                    resolve(body)
                }
            })
        })
    },

    /**
     * app 端  注册/登录接口
     * 
     * 
     */
    loginAndRegister(param, loading = false) {
        const url = `${baseUrl}/customerApp/loginAndRegister`;
        console.log(`node中，comm.js中的 loginAndRegister的数据-------${apiConfig.baseURL}----------`)
        
        var data = {
          
        }

        param = param || {}

        param = Object.assign(data, param);

        console.log( "node中，comm.js中的 loginAndRegister请求的参数对象-----", param );

        return new Promise((resolve, reject) => {
            request({
                url: url,
                method: "POST",
                json: true,
                headers: {
                    "content-type": "application/json",
                },
                body: param
            }, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++loginAndRegister------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------loginAndRegister------------->",body)
                    resolve(body)
                }
            })
        })
    },    

    /**
     * 上传资源到服务器
     */
    upLoad ( param, loading = true ) {

      console.log(`-----打印网路的基础入口地址-----："${baseUrl}`)

      let resUrlInfo = []; // 存放上传成功后返回来的图片信息集合

      var data = {

      }
      param = Object.assign(data, param);
      
      console.log( param );

      if( param && param.tempFilePaths.length ) {
        for (let i = 0; i< param.tempFilePaths.length;i++){
          let paramsObj = {
            url: param.url,
            tempFilePath:  param.tempFilePaths[i],
            totaltempFilePaths: param.tempFilePaths.length,
          }
          console.log("上传图片的地址 和单个图片的临时地址url------------", paramsObj)

          return new Promise((resolve, reject) => {
            request({
                url: url,
                method: "POST",
                json: true,
                headers: {
                    "content-type": "application/json",
                },
                // 将参数序列化
                body: param
            }, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getContinuitySignUpData------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getContinuitySignUpData------------->",body)
                    resolve(body)
                }
            }); 
        })          
          // let resData = await this.upload('file', paramsObj, loading);  
          // 返回结果放入 resUrlInfo 数组中
          // console.log( JSON.parse( resData ) );
          // resUrlInfo.push( JSON.parse( resData ).data.pathUrl );           
        }  
        console.log( resUrlInfo )
        return resUrlInfo;
      }    
    },  

    /**
     * 分享
    */
    shairePic ( param, loading = true ) {

      const url = `${baseUrl}/customerApp/shareImg`;
      var data = {

      }
      param = Object.assign(data, param);

      console.log( "node中，comm.js中的 shairePic请求的参数对象-----", param );

      return new Promise((resolve, reject) => {
          request({
              url: url,
              method: "POST",
              json: true,
              headers: {
                  "content-type": "application/json",
              },
              // 将参数序列化
              body: param
          }, function(error, response, body) {
              if (!error && response.statusCode == 200) {
                  console.log("----node 中请求后台接口成功后返回的数据body----++++++++shairePic------------->",body) // 请求成功的处理逻辑
                  resolve(body)
              }else {
                  console.log("---------node 中请求后台接口失败后的数据body-------shairePic------------->",body)
                  resolve(body)
              }
          })
      })    
    },

    /**
     * 全局中存放 推送码 formids 并提交给后台保存
    */
    saveFormIds ( param, loading = true ) {

        const url = `${baseUrl}/wxApp/addFormId`;
        let data = {
        //   params: {
        //     formId: param.formId,
        //     deadTime: parseInt(new Date().getTime() / 1000)+604800, //计算7天后的过期时间时间戳
        //   },
        //   token: param.token,      
        }

        param = Object.assign(data, param);

        console.log( "node中，comm.js中的 shairePic请求的参数对象-----", param );

        return new Promise((resolve, reject) => {
            request({
                url: url,
                method: "POST",
                json: true,
                headers: {
                    "content-type": "application/json",
                },
                // 将参数序列化
                body: param
            }, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++shairePic------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------shairePic------------->",body)
                    resolve(body)
                }
            })
        })    
    },
    
    /**
     * 个推demo 
    */
    getuiPush (param, loading = false) {
        var GeTui = require('../GETUI_NodeJs_SDK/GT.push');
        var Target = require('../GETUI_NodeJs_SDK/getui/Target');
        var BaseTemplate = require('../GETUI_NodeJs_SDK/getui/template/BaseTemplate');
        var TransmissionTemplate = require('../GETUI_NodeJs_SDK/getui/template/TransmissionTemplate');
        var AppMessage = require('../GETUI_NodeJs_SDK/getui/message/AppMessage');
        
        // http的域名
        var HOST = 'http://sdk.open.api.igexin.com/apiex.htm';
        
        //https的域名
        //var HOST = 'https://api.getui.com/apiex.htm';
        
        // var HOST = `${baseUrl}`
        //定义常量, appId、appKey、masterSecret 采用本文档 "第二步 获取访问凭证 "中获得的应用配置
        var APPID = 'Yhe51OsyWm8XQ0ExISEEz';                
        var APPKEY = 'CsGZs1EOGy6VNc9eWqGGB4';            
        var MASTERSECRET = 'VH6rS1Alzh81pH54Ep77Z5';  

        return new Promise((resolve, reject) => {
            var gt = new GeTui(HOST, APPKEY, MASTERSECRET);
        
            pushMessageToApp();
            
            
            function pushMessageToApp() {
                // var taskGroupName = 'test';
                var taskGroupName = null;
                // 定义"点击链接打开通知模板"，并设置透传内容，透传形式
                var template = TransmissionTemplateDemo();
            
                //定义"AppMessage"类型消息对象，设置消息内容模板、发送的目标App列表、是否支持离线发送、以及离线消息有效期(单位毫秒)
                var message = new AppMessage({
                    isOffline: false,
                    offlineExpireTime: 3600 * 12 * 1000,
                    data: template,
                    appIdList: [APPID],
                    //        phoneTypeList: ['IOS'],
                    //        provinceList: ['浙江'],
                    //tagList: ['阿百川']
                    speed: 10000
                });
            
                gt.pushMessageToApp(message, taskGroupName, function (err, res) {
                    console.log(res);
                    if(err){
                        // reject({
                        //     code: 0,
                        //     message: '推送出错'
                        // })
                    }else {
                        resolve({
                            code: 1,
                            message: '推送成功,' + JSON.stringify(res)
                        })
                    }
                });
            }

            function TransmissionTemplateDemo() {
                var template =  new TransmissionTemplate({
                    appId: APPID,
                    appKey: APPKEY,
                    transmissionType: 1,
                    transmissionContent: '这是透传内容'
                });
                return template;
            }   
        })  
    }
}


