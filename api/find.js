const apiConfig = require('./config')
// import apiConfig from './config.js'
const baseUrl = apiConfig.baseURL
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

        // let params = {
        //     // token: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwicm9sZXMiOiJjdXN0b21lciIsImlhdCI6MTU0OTk2NTY3NH0.8R4zpdfGo_vao8yReVJG3j1U1jkWA5Re11j0QVUwhV0",
        //     token: token,
        // }        
        param = Object.assign(data, param);

        console.log( param );

        var requestData="需要传输的数据";
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(param)
        }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("--------++++++++------------->",body) // 请求成功的处理逻辑
            }else {
                console.log("-----------------2222222222------------>",body)
            }
        }); 
    },


    /**
     * 
     * @param {*} param 查询 已打卡天数 和总天数信息，5.点击连续打卡icon，获取获取总排名，打卡天数
     * @param {*} loading 
     */
    getRankDayData: ( param , loading = false ) => {
        const url = `${baseUrl}/customerApp/myRank`;

        var data = {
            token: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NSIsInJvbGVzIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTUzMDQyMzl9.Pznwe4fyBDXb0JIQOKZbMvca3P6a7REvHyYDbdnieSM",
        }
        
        param = Object.assign(data, param);

        console.log( "请求的参数对象-----", param );

        return new  Promise((resolve, reject) => {
            return request({
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
                    console.log("--------++++++++------------->",body) // 请求成功的处理逻辑
                    resolve(body) 
                }else {
                    console.log("-----------------2222222222------------>",body)
                }
            });             
        })
    }  
    
}