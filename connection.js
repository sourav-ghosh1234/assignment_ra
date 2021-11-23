const mysql=require("mysql")
var dbconnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"doctor",
    multipleStatements:true
})
dbconnection.connect((err)=>{
    if(!err){
        console.log("Mysql db connected")
    }else{
        console.log("Error in connection")

    }

})

module.exports=dbconnection;