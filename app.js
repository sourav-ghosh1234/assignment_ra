const  express=require('express')
const bodyparser=require('body-parser')
 const connection=require('./connection')
 var morgan=require('morgan')

const app=express();

//adding comments
// var port=8000//
app.use(bodyparser.json())
app.use(morgan('dev'))
app.use("/api/docavailibility",require('./router/api'))




const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port,host, () => {
    console.log(`Server running on Port - ${port}`);
    
  });



