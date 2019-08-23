// 引入 mysql 数据库连接依赖
const mysql = require("mysql");

// 创建 mysql 连接池并配置参数
const mysqlConnection = mysql.createConnection({
    // host: "localhost",    // 主机地址 
    host: "0.0.0.0",    // 主机地址
    // host: "127.0.0.1",    // 主机地址
    port: 3306,                 // 端口
    user: "root",               // 数据库访问账号
    password: "root",         // 数据库访问密码
    database: "test",           // 要访问的数据库
    charset: "UTF8_GENERAL_CI", // 字符编码 ( 必须大写 )
    typeCast: true,             // 是否把结果值转换为原生的 javascript 类型
    supportBigNumbers: true,    // 处理大数字 (bigint, decimal), 需要开启 ( 结合 bigNumberStrings 使用 )
    bigNumberStrings: true,     // 大数字 (bigint, decimal) 值转换为javascript字符对象串
    multipleStatements: false,  // 允许每个mysql语句有多条查询, 未防止sql注入不开启
    //connectTimeout: 5000,     // 数据库连接超时时间, 默认无超时
});
mysqlConnection.connectionLimit = 10;      // 连接池中可以存放的最大连接数量
mysqlConnection.waitForConnections = true; // 连接使用量超负荷是否等待, false 会报错
mysqlConnection.queueLimit = 0;            // 每个连接可操作的 列数 上限, 0 为没有上限

// 对外暴漏从连接池中获取数据库连接的方法
// mysqlConnection.connect((err) => {
//     if (err) {
//         console.log("【mysql数据库连接获取失败】");
//     } else {
//         console.log("【mysql数据库连接成功】")
//     }
// })
// module.exports = mysqlConnection

module.exports = function () {
    return new Promise((resolve, reject) => {
        mysqlConnection.connect((err, conn) => {
            if (err) {
                console.log("【mysql数据库连接获取失败】");
            } else {
                console.log("【mysql数据库连接成功】")
                resolve(conn);
            }
        });
    });
};