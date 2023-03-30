const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  conn.query("CREATE DATABASE mydb",function(arr,result){
    if (err) throw err;
    console.log("DataBase created");
  })
});