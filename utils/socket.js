
var _ = require('underscore');
module.exports =  {
    socketUrl: '127.0.0.1:5000',
    hashName: new Array(),
    connect: function(server){
        // 引入 socket.io 
        var io = require('socket.io').listen(server)
  
        //监听客户端链接,回调函数会传递本次链接的socket
        io.on('connection', socket => {
            console.log("连接成功后node服务端打印连接成功后的socket.id-----",socket.id)
            // 储存上线的用户(客户端 连接成功后)
            // this.hashName[data.from_token] = data.from_token
            // 监听客户端发送的信息
            // socket.on("sentToServer", message => {
            //   // 给客户端返回信息
            //   io.emit("sendToClient", {message});
            // });

            // 连接成功后向客户端发送
            io.emit("connectionSuccess","这是node服务器发送过来的消息:socket连接成功！")

            // 监听 客户端发过来的 bindId 事件
            socket.on("bindId", (data) => {
                let userId = data.userId
                let token = data.token
                // 将socket.id 与 客户端的 userId 绑定
                this.hashName[userId] = socket.id
                console.log("服务端 接收客户端 发送来的 bindId 事件", JSON.stringify(data))
            })
            
            socket.on("testMsg", (data) => {
            // 监听客户端发送过来的 testMsg 事件
                console.log("客户端发送过来的testMsg事件-------", JSON.stringify(data))
                var to_Id = data.to_Id
                var msg = data.to_msg
                var to_Token = data.to_Token
                var from_Id = data.from_Id
                var from_Token = data.from_Token
                var to_url = data.to_url
                var to_url_type = data.to_url_type
                // this.hashName[data.from_Id] = socket.id
                console.log("----------------",this.hashName[data.from_Id])
                if(this.hashName[from_Id]){
                    // 该用户在线
                    // 通过_.findWhere() 方法来找到 指定的这个socket 对象
                    var fromSocketObj = _.findWhere(io.sockets.sockets, {id: this.hashName[data.from_Id]})
                    // 向指定的某一个客户端发送消息
                    fromSocketObj.emit("emitFixedCustomerInfo",{
                        from_id: from_Id,
                        from_msg: msg,
                        to_url: to_url,
                        to_url_type: to_url_type
                    })
                    // 向除了指定的客户端以外的用户发送消息
                    // fromSocketObj.broadcast.emit("emitFixed", {
                    //     from_id: from_Id
                    //     from_msg:msg
                    // })
                    //向所有客户端广播，等同于上面两个的和
                    // console.log(io.sockets.sockets)
                    // io.sockets.emit("emitFixed",{
                    //     from_msg: msg,
                    //     from_id: from_Id
                    // })
                }else {
                    // 该用户不在线， 需要请求后台接口将 需要发送的消息 存入数据库中，到时登陆成功后调用未读消息的接口来接收消息
                    console.log(`${to_Id}的用户未在线`)
                }

            })
            
            // 监听连接断开事件
            socket.on("disconnect", () => {
                console.log("连接已断开...");
            });
        });        
    }
}