


const router=require('express').Router()

const {doctorAvailibility}=require('../controller/api')


router.post('/add', doctorAvailibility);



module.exports=router;



