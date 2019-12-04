
var _ = require('underscore');


module.exports =  {
    socketUrl: '127.0.0.1:5000',
    hashName: new Array(),
    connect: (io) => {
        //监听客户端链接,回调函数会传递本次链接的socket
        io.on('connection', socket => {
            console.log("连接成功后node服务端打印连接成功后的data.id-----",socket.id)
            // 储存上线的用户(客户端 连接成功后)
            // this.hashName[data.from_token] = data.from_token
            // 监听客户端发送的信息
            // socket.on("sentToServer", message => {
            //   // 给客户端返回信息
            //   io.emit("sendToClient", {message});
            // });

            // 连接成功后向客户端发送
            io.emit("connectionSuccess","这是node服务器发送过来的消息:socket连接成功！")

            
            // var toName = data.to_Name;
            // // 发送的目标客户的token
            // var toToken = data.to_Token;

            // if (toToken = this.hashName[toName]) {
            //     // nodejs的underscore扩展中的findWhere方法，可以在对象集合中，通过对象的属性值找到该对象并返回。
            //     var toSocket = _.findWhere(io.sockets.sockets, {id: toId});
        
            //     // socket.emit() ：向建立该连接的客户端广播
            //     // socket.broadcast.emit() ：向除去建立该连接的客户端的所有客户端广播
            //     // io.sockets.emit() ：向所有客户端广播，等同于上面两个的和
        
            //     // 通过该连接对象（toSocket）与链接到这个对象的客户端进行单独通信   
            // }       
        
            socket.on("testMsg", (data) => {
            // 监听客户端发送过来的 testMsg 事件
                console.log("客户端发送过来的testMsg事件-------", JSON.stringify(data))
                var to_Id = data.to_Id
                var to_Token = data.to_Token
                var from_Id = data.from_Id
                var from_Token = data.from_Token
                // this.hashName[data.from_Token] = data.from_Token
                // console.log(this.hashName[data.from_Token])

            })
            // 监听连接断开事件
            socket.on("disconnect", () => {
                console.log("连接已断开...");
            });
        });        
    }
}