const apiConfig = require('./config')
const baseUrl = apiConfig.baseUrl
const request = require('request')

module.exports = {
  /**
   * 获取openId
   * 
   * 
   */
  getOpenId(param, loading = false) {
      const url = `${baseUrl}/customerApp/login`;
      console.log(`node中，comm.js中的 getOpenId的数据-------${apiConfig.baseURL}----------`)
      const url = `${baseUrl}/clockInApp/pageByDate`;
      
      var data = {
          token: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwicm9sZXMiOiJjdXN0b21lciIsImlhdCI6MTU0OTk2NTY3NH0.8R4zpdfGo_vao8yReVJG3j1U1jkWA5Re11j0QVUwhV0",
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
              // 将参数序列化
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
   * 上传资源到服务器
   */
  upLoad ( param, loading = true ) {

    console.log(`-----打印网路的基础入口地址-----："${baseUrl}`)

    let resUrlInfo = []; // 存放上传成功后返回来的图片信息集合

    var data = {
      url : `${baseUrl}/fileMappedApp/upload`,
      tempFilePath: "",
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
        let resData = await this.upload('file', paramsObj, loading);  
        // 返回结果放入 resUrlInfo 数组中
        console.log( JSON.parse( resData ) );
        resUrlInfo.push( JSON.parse( resData ).data.pathUrl );           
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
  }  
}


