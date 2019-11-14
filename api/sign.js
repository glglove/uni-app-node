

/**
 * node 作为中间层 对java 后台进行访问
 * find页面 中的api集合 
 */


const apiConfig = require('./config')
const baseUrl = apiConfig.baseUrl
const request = require('request')

/**
 * sign 页面中的 接口集合
 */

 /**------------------------------------------------------------------ */


 module.exports =  {
   /**
    * 
    * @param {*} param 查询 所有课程列表信息
    * @param {*} loading 
    */
    getLessonList ( param ,loading = false ) {
        const url = `${baseUrl}/classesApp/myPage`;
        var data = {
    
        }
        param = Object.assign(data, param);

        console.log( "node中，sign.js中的 getLessonList请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getLessonList------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getLessonList------------->",body)
                    resolve(body)
                }
            }); 
        })
    },
 
   /**
    * 
    * @param {*} param 查询指定课程的 今日试题,  点击 “去打卡” 按钮后，获取该课程的今日试题
    * @param {*} loading 
    */
    getTodayTestData ( param ,loading = false ) {
        const url = `${baseUrl}/questionsApp/get`;
    
        var data = {
    
        }
        param = Object.assign(data, param);
    

        console.log( "node中，sign.js中的 getTodayTestData请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getTodayTestData------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getTodayTestData------------->",body)
                    resolve(body)
                }
            }); 
        })
    },
 
 
   /**
    * 
    * @param {*} param 查询排行榜  打卡天数、总天数数据
    * @param {*} loading 
    */
    getRankDayData ( param ,loading = false ) {
        const url = `${baseUrl}/customerApp/myRank`;
        var data = {
    
        }
        param = Object.assign(data, param);
    
        console.log( "node中，sign.js中的 getRankDayData请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getRankDayData------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getRankDayData------------->",body)
                    resolve(body)
                }
            })
        })     
    },   
 

   /**
    * 
    * @param {*} param 查询排行榜  排行list数据
    * @param {*} loading 
    */
    getRankListData ( param ,loading = false ) {
        const url = `${baseUrl}/customerApp/rank`;
        var data = {
    
        }
        param = Object.assign(data, param);
    
        console.log( "node中，sign.js中的 getRankListData请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getRankListData------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getRankListData------------->",body)
                    resolve(body)
                }
            })
        })   
    },
 
 
 
 
   /**
    * 
    * @param {*} param 查询学习记录  
    * @param {*} loading 
    */
    getLearnData ( param ,loading = false ) {
        const url = `${baseUrl}/clockInApp/pageByClass`;
        var data = {
    
        }
        param = Object.assign(data, param);

        console.log( "node中，sign.js中的 getLearnData请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++getLearnData------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------getLearnData------------->",body)
                    resolve(body)
                }
            })
        })  
    },   
 
 
   /**
    * 
    * @param {*} param 查询报名课程信息  list 信息 ，find首页点击 立即报名 btn获取课程list 数据
    * @param {*} loading 
    */
    getContinuitySignUpData ( param ,loading = false ) {
        const url = `${baseUrl}/classesApp/page`;
        var data = {
    
        }
        param = Object.assign(data, param);

        console.log( "node中，sign.js中的 getContinuitySignUpData请求的参数对象-----", param );

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
            })
        })         
    },    
   
   
   /**
    * 
    * @param {*} param 提交作业 按钮  提交 打卡内容和图片
    * @param {*}  
    */
    loadImgAndContent( param ,loading = false ) {
        const url = `${baseUrl}/clockInApp/save`;
        var data = {
    
        }
        param = Object.assign(data, param);

        console.log( "node中，sign.js中的 loadImgAndContent请求的参数对象-----", param );

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
                    console.log("----node 中请求后台接口成功后返回的数据body----++++++++loadImgAndContent------------->",body) // 请求成功的处理逻辑
                    resolve(body)
                }else {
                    console.log("---------node 中请求后台接口失败后的数据body-------loadImgAndContent------------->",body)
                    resolve(body)
                }
            })
        })          
    },
 
    /**
    * 
    * @param {*} param 提交作业 按钮  提交 打卡内容和图片
    * @param {*}  
    */
   getAllSignData( param ,loading = false ) {
    const url = `${baseUrl}/clockInApp/allPage`;
    var data = {

    }
    param = Object.assign(data, param);

    console.log( "node中，sign.js中的 getAllSignData请求的参数对象-----", param );

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
                console.log("----node 中请求后台接口成功后返回的数据body----++++++++getAllSignData------------->",body) // 请求成功的处理逻辑
                resolve(body)
            }else {
                console.log("---------node 中请求后台接口失败后的数据body-------getAllSignData------------->",body)
                resolve(body)
            }
        })
    })          
   },

    /**
    * 
    * @param {*} param 提交作业 按钮  提交 打卡内容和图片
    * @param {*}  
    */
   addComment( param ,loading = false ) {
    const url = `${baseUrl}/customerApp/addComment`;
    var data = {

    }
    param = Object.assign(data, param);

    console.log( "node中，sign.js中的 addComment请求的参数对象-----", param );

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
                console.log("----node 中请求后台接口成功后返回的数据body----++++++++addComment------------->",body) // 请求成功的处理逻辑
                resolve(body)
            }else {
                console.log("---------node 中请求后台接口失败后的数据body-------addComment------------->",body)
                resolve(body)
            }
        })
    })          
   },   
    
 }
 
