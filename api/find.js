
/**
 * node 作为中间层 对java 后台进行访问
 * find页面 中的api集合 
 */


const apiConfig = require('./config')
const baseUrl = apiConfig.baseUrl
const request = require('request')

 
module.exports = {
    /**
     * 
     * @param {*} param 查询 学习打卡记录信息，5.点击连续打卡icon，获取学习记录,如果学生报名了11个课程，每天都打卡，那么这里第一页获取10条，第二页获取1条
     * @param {*} loading 
     */
    getContinuitySignUpData: function( param ,loading = false ){
        console.log(`node中，find.js中的 getContinuitySignUpData的数据-------${apiConfig.baseURL}----------`)
        const url = `${baseUrl}/clockInApp/pageByDate`;
        
        var data = {
            token: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwicm9sZXMiOiJjdXN0b21lciIsImlhdCI6MTU0OTk2NTY3NH0.8R4zpdfGo_vao8yReVJG3j1U1jkWA5Re11j0QVUwhV0",
        }
   
        param = param || {}

        param = Object.assign(data, param);

        console.log( "node中，find.js中的 getContinuitySignUpData请求的参数对象-----", param );

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
    },


    /**
     * 
     * @param {*} param 查询 已打卡天数 和总天数信息，点击连续打卡icon，获取获取总排名，打卡天数
     * @param {*} loading 
     */
    getRankDayData: ( param ) => {
        console.log(`node中，find.js中的 getRankDayData的数据-------${apiConfig.baseURL}----------`)
        const url = `${baseUrl}/customerApp/myRank`;

        var data = {
            token: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NSIsInJvbGVzIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTUzMDQyMzl9.Pznwe4fyBDXb0JIQOKZbMvca3P6a7REvHyYDbdnieSM",
        }
        
        param = Object.assign(data, param);

        console.log( "node中，find.js中的 getRankDayData请求的参数对象-----", param );

        return new  Promise((resolve, reject) => {
            // node对 java 进行接口数据请求
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
                    debugger
                    console.log("--------++++++++getRankDayData------------->",body) // 请求成功的处理逻辑
                    resolve(body) 
                }else {
                    console.log("-----------------getRankDayData------------>",body)
                }
            });             
        })
    }, 
    
    /**
     * 
     * @param {*} param 查询排行榜  list 排名信息 ，find首页点击 排行榜icon 获取排名 list 数据
     * @param {*} loading 
     */
    getRankListData: ( param ) => {
        const url = `${baseUrl}/customerApp/rank`;
        var data = {

        }
        param = Object.assign(data, param);


        console.log( "node中，find.js中的 getRankListData请求的参数对象-----", param );

        return new  Promise((resolve, reject) => {
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
                    debugger
                    console.log("--------++++++++-getRankListData------------>",body) // 请求成功的处理逻辑
                    resolve(body) 
                }else {
                    console.log("-----------------getRankListData------------>",body)
                }
            });             
        })
    },
    
    
    /**
     * 
     * @param {*} param 查询报名课程信息  list 信息 ，find首页点击 立即报名 btn获取课程list 数据
     * @param {*} loading 
     */
    getLessonListData ( param ) {
        const url = `${baseUrl}/classesApp/page`;
        var data = {

        }
        param = Object.assign(data, param);


        console.log( "node中，find.js中的 getLessonListData请求的参数对象-----", param );

        return new  Promise((resove, reject) => {
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
                    debugger
                    console.log("--------++++++++-getLessonListData------------>",body) // 请求成功的处理逻辑
                    resolve(body) 
                }else {
                    console.log("-----------------getLessonListData------------>",body)
                }
            });               
        })
    },
    
    /**
     * 
     * @param {*} param 查询单个课程相信信息  ，点击 单个报名课程 获取单个课程详情信息
     * @param {*} loading 
     */
    getlessonListDetailData ( param ) {
        const url = `${baseUrl}/classesApp/get`;
        var data = {

        }
        param = Object.assign(data, param);

        console.log( "node中，find.js中的 getlessonListDetailData请求的参数对象-----", param );

        return new  Promise((resove, reject) => {
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
                    debugger
                    console.log("--------++++++++-getlessonListDetailData------------>",body) // 请求成功的处理逻辑
                    resolve(body) 
                }else {
                    console.log("-----------------getlessonListDetailData------------>",body)
                }
            });               
        })        
    },
    
    /**
     * 
     * @param {*} param 单个课程详情信息中点击 立即报名，返回报名卡图片URL
     * @param {*} loading 
     */    
    SignUpLesson ( param ) {
        const url = `${baseUrl}/classesApp/join`;
        var data = {

        }
        param = Object.assign(data, param);

        console.log( "node中，find.js中的 SignUpLesson请求的参数对象-----", param );

        return new  Promise((resove, reject) => {
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
                    debugger
                    console.log("--------++++++++-SignUpLesson------------>",body) // 请求成功的处理逻辑
                    resolve(body) 
                }else {
                    console.log("-----------------SignUpLesson------------>",body)
                }
            });               
        })        
    },   

    /**
     * 
     * @param {*} 点赞打卡的接口
     * @param {*} loading 
     */  
    addCollect ( param ) {
        const url = `${baseUrl}/customerApp/addCollect`;
        var data = {

        }
        param = Object.assign(data, param);

        console.log( "node中，find.js中的 addCollect请求的参数对象-----", param );

        return new  Promise((resove, reject) => {
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
                    debugger
                    console.log("--------++++++++-addCollect------------>",body) // 请求成功的处理逻辑
                    resolve(body) 
                }else {
                    console.log("-----------------addCollect------------>",body)
                }
            });               
        })        
    },       
}