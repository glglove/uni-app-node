// var monngodb = require('./db/db')   // 引入mongodb 

// var mysql = require('./pool/mysql')  // 引入 mysql 数据库

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser= require('body-parser')
var request = require('request')



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var findRouter = require('./routes/find');
var signRouter = require('./routes/sign');
var myRouter = require('./routes/mine');
var appRouter = require('./routes/app')

var cors = require("cors")
var app = express();



app.use(cors())

// 自定义跨域中间件
const allowCors = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
  else next();
};

// 使用跨域中间件
app.use(allowCors)

// 设置引擎方式为 ejs
// view engine setup (使用ejs 模板引擎)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// 设置引擎方式为 html
// html engine setup （直接发送 html文件）
app.set('views', path.join(__dirname, '/pages'));
app.set('view engine', 'html')

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:false}));//解析 x-www-form-urlencoded（form表单提交的数据 到时可以通过 req.body 来解析）
app.use(bodyParser.json())  // 解析 非表单提交的json数据 （node服务端通过 req.body 得到 参数信息）
// bodyParser.urlencoded({extended: true})
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/users/register', express.static(path.join(__dirname, 'pages')))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/find', findRouter);
app.use('/sign', signRouter);
app.use('/my', myRouter);
app.use('/app', appRouter);




// 开启一个定时器
var timing = require('./utils/TimingProcessing')
timing.timingProcessing()

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



//监听客户端链接,回调函数会传递本次链接的socket
io.on('connection', socket => {
  // 监听客户端发送的信息
  socket.on("sentToServer", message => {
      // 给客户端返回信息
      io.emit("sendToClient", {message});
  });
});

// 监听连接断开事件
socket.on("disconnect", () => {
  console.log("连接已断开...");
});

module.exports = app;
