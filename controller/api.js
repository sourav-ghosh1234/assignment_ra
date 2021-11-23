const  dbconnection=require('../connection');
const moment=require('moment')


module.exports={
    doctorAvailibility:(req,res)=>{
        var body=req.body;
        var start=new Date(body.start_time)
        var end=new Date(body.end_time)
        dbconnection.query(`insert into doctor_availabilities(doctor_id,start_time,end_time,no_of_patients)
        values(?,?,?,?)`,[body.doctor_id,start,end,body.no_of_patients],(error,results,fields)=>{
            if(!error) 
            {

                
                //
                // var start_date = moment(start, 'YYYY-MM-DD HH:mm:ss');
                // var end_date = moment(end, 'YYYY-MM-DD HH:mm:ss');
                // var duration = moment.duration(end_date.diff(start_date));
                // var days = duration.asDays();
                // console.log(days)       
                // return days;

                //
                var diff=Math.abs(end-start)
                diff=Math.floor((diff/1000)/60);
                console.log(diff)
                // const minutes = parseInt(Math.abs(end.getTime() - start.getTime()) / (1000 * 60) % 60);
                var addhours=Math.ceil(diff/body.no_of_patients)
                var loop=Math.ceil(diff/addhours)
                stime=start;
                // console.log(minutes)
            console.log("loop",loop)
                for(var i=0;i<loop;i++){
                    
                    etime=stime.setHours(stime.getHours() + addhours);
                    dbconnection.query(`insert into doctor_time_slots(doctor_id,doctor_availabiity_id,slot_start_time,slot_end_time)
        values(?,?,?,?)`,[body.doctor_id,results.insertId,stime,etime],(error,results,fields)=>{
            if(!err){
                return res.json("successfull")
            }else{
                console.log(error)
            }
        })
        stime=stime.setHours(stime.getHours() + addhours);
                }
                
            }else{
                console.log(error)
            }

        })
    }
}