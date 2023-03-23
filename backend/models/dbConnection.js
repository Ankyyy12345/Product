const mysql = require('mysql');

const mysqlCre = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'product'
}
const connection = mysql.createConnection(mysqlCre)

connection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected')
    }
})

module.exports = connection