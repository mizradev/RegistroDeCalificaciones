require('dotenv').config();
const mysql = require('mysql');
const { promisify } = require('util');

const mysqlConnection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    //port: process.env.MYSQL_PORT
});

mysqlConnection.getConnection((error, connection) => {
    if(error){
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has to many connections');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused');
        }
    }

    if (connection) connection.release();
    console.log('DB is connected  😎');
    return;
});

// callback  a promesas
mysqlConnection.query = promisify(mysqlConnection.query);

module.exports = mysqlConnection;