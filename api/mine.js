
/**
 * node 作为中间层 对java 后台进行访问
 * find页面 中的api集合 
 */


const apiConfig = require('./config')
const baseUrl = apiConfig.baseUrl
const request = require('request')

/**
 * my 页面中的接口集合
 */

module.exports =  {

  /**
   * 
   * @param {*} param 查询 打卡记录信息，5.点击连续打卡icon，获取学习记录,如果学生报名了11个课程，每天都打卡，那么这里第一页获取10条，第二页获取1条
   * @param {*} loading 
   */
    getAchivementList ( param ,loading = false ) {
        const url = `${baseUrl}/certificateLogApp/page`;
        var data = {

        }
        param = Object.assign(data, param);

        console.log( "node中，mine.js中的 getAchivementList请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getAchivementList------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getAchivementList------------->",body)
                    resolve(body)
                }
            })
        })  
    },

  /**
   * 
   * @param {*} param 查询 已打卡天数 和总天数信息，5.点击连续打卡icon，获取获取总排名，打卡天数
   * @param {*} loading 
   */
    getLearnRecord ( param ,loading = false ) {
        const url = `${baseUrl}/clockInApp/pageByDate`;

        var data = {

        }
        param = Object.assign(data, param);

        console.log( "node中，mine.js中的 getLearnRecord请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getLearnRecord------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getLearnRecord------------->",body)
                    resolve(body)
                }
            })
        })  
    },  


  /**
   * 
   * @param {*} param 查询排行榜 总天数 和总排名情况，find首页点击 排行榜icon 
   * @param {*} loading 
   */
    getHelpData ( param ,loading = false ) {
        const url = `${baseUrl}/feedBackApp/page`;
        var data = {

        }
        param = Object.assign(data, param);

        console.log( "node中，mine.js中的 getLearnRecord请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getHelpData------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getHelpData------------->",body)
                    resolve(body)
                }
            })
        })  

    },  


  /**
   * 
   * @param {*} param 查询排行榜  list 排名信息 ，find首页点击 排行榜icon 获取排名 list 数据
   * @param {*} loading 
   */
    addQuestion ( param ,loading = false ) {
        const url = `${baseUrl}/feedBackApp/save`;
        var data = {

        }
        param = Object.assign(data, param);

        console.log( "node中，mine.js中的 addQuestion请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++addQuestion------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------addQuestion------------->",body)
                    resolve(body)
                }
            })
        })          
    }   

}
