var express = require('express');
var router = express.Router();
const db = require('../db/db');
const path = require('path');

// 引入user 的模型
const Users = require("../model/user");
const UsersApi = require("../api/userApi");

/* GET users listing. */
router.post('/getlistData', function(req, res, next) {
  // res.send('respond with a resource');
  // const params = {
  //   name: "f4j",
  //   pwd: 123456
  // }
    const resData = ''
    if(req.url === '/find/getlistData' && req.method === 'post'){
        req.on("data", function (chunk) {
            resData += data
        })
        req.on("end", function(){
            //（1）.对url进行解码（url会对中文进行编码）
            resData = decodeURI(resData);
            console.log(resData);

            /**post请求参数不能使用url模块解析，因为他不是一个url，而是一个请求体对象 */

            //（2）.使用querystring对url进行反序列化（解析url将&和=拆分成键值对），得到一个对象
            //querystring是nodejs内置的一个专用于处理url的模块，API只有四个，详情见nodejs官方文档
            var dataObject = querystring.parse(resData);
            console.log(dataObject);      
            const data1 = [
                {
                    title: '快陪练',
                    extra: '教育科技公司',
                    note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                    thumbnail: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=axios&step_word=&hs=0&pn=11&spn=0&di=550&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2681479020%2C1970756404&os=2554333095%2C897064831&simid=4246749362%2C492017625&adpicid=0&lpn=0&ln=432&fr=&fmq=1562510931063_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.sanfo.com%2Fhwyp%2Fimages%2Fthumb%2Fp_201107091525027847100.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bfwgu5_z%26e3Bv54AzdH3FwfrAzdH3Fv4fAzdH3F88aAzdH3Fcc0c_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined',
                    isFull: true		
                },
                {
                    title: '快陪练',
                    extra: '教育科技公司',
                    note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                    thumbnail: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=axios&step_word=&hs=0&pn=11&spn=0&di=550&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2681479020%2C1970756404&os=2554333095%2C897064831&simid=4246749362%2C492017625&adpicid=0&lpn=0&ln=432&fr=&fmq=1562510931063_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.sanfo.com%2Fhwyp%2Fimages%2Fthumb%2Fp_201107091525027847100.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bfwgu5_z%26e3Bv54AzdH3FwfrAzdH3Fv4fAzdH3F88aAzdH3Fcc0c_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined',
                    isFull: true	            
                },
                {
                    title: '快陪练',
                    extra: '教育科技公司',
                    note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                    thumbnail: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=axios&step_word=&hs=0&pn=11&spn=0&di=550&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2681479020%2C1970756404&os=2554333095%2C897064831&simid=4246749362%2C492017625&adpicid=0&lpn=0&ln=432&fr=&fmq=1562510931063_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.sanfo.com%2Fhwyp%2Fimages%2Fthumb%2Fp_201107091525027847100.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bfwgu5_z%26e3Bv54AzdH3FwfrAzdH3Fv4fAzdH3F88aAzdH3Fcc0c_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined',
                    isFull: true	            
                },
                {
                    title: '快陪练',
                    extra: '教育科技公司',
                    note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                    thumbnail: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=axios&step_word=&hs=0&pn=11&spn=0&di=550&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2681479020%2C1970756404&os=2554333095%2C897064831&simid=4246749362%2C492017625&adpicid=0&lpn=0&ln=432&fr=&fmq=1562510931063_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.sanfo.com%2Fhwyp%2Fimages%2Fthumb%2Fp_201107091525027847100.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bfwgu5_z%26e3Bv54AzdH3FwfrAzdH3Fv4fAzdH3F88aAzdH3Fcc0c_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined',
                    isFull: true	            
                },
                {
                    title: '快陪练',
                    extra: '教育科技公司',
                    note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                    thumbnail: require('../../static/logo.png'),
                    isFull: true	            
                },
                {
                    title: '快陪练',
                    extra: '教育科技公司',
                    note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                    thumbnail: require('../../static/logo.png'),
                    isFull: true	            
                },
                {
                    title: '快陪练',
                    extra: '教育科技公司',
                    note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                    thumbnail: require('../../static/logo.png'),
                    isFull: true	            
                },
                {
                    title: '快陪练',
                    extra: '教育科技公司',
                    note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                    thumbnail: require('../../static/logo.png'),
                    isFull: true	            
                },
                {
                    title: '快陪练',
                    extra: '教育科技公司',
                    note: '拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务拓展钢琴陪练业务',
                    thumbnail: require('../../static/logo.png'),
                    isFull: true	            
                },                                                        
            ]
            res.send(JSON.stringify(data1))              
        })
    }
});

module.exports = router;
