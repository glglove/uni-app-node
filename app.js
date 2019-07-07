var monngodb = require('./db/db')   // 引入mongodb 
var mysql = require('./pool/mysql')  // 引入 mysql 数据库
mysql().then(res => {
  if(res){
    console.log("app.js中：mysql数据库连接成功")
  }else {
    console.log("mysql数据库连接失败")
  }
})
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser= require('body-parser')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var findRouter = require('./routes/find');
var cors = require("cors")
var app = express();
app.use(cors())

// 自定义跨域中间件
const allowCors = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  // res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
  else next();
};

// 使用跨域中间件
app.use(allowCors)

// view engine setup (使用ejs 模板引擎)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// html engine setup （直接发送 html文件）
app.set('views', path.join(__dirname, '/pages'));
app.set('view engine', 'html')

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:false}));//解析 x-www-form-urlencoded
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/users/register', express.static(path.join(__dirname, 'pages')))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/find', findRouter);

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


module.exports = app;
