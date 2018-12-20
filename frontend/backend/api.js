const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const sha1=require('sha1');
mongoose.connect("mongodb://localhost/onlynodebatch");
let loginModel=require('./database/login');
const bodyParser=require('body-parser');
const app=express();
app.use(cors());
app.use(bodyParser.json());
//api
app.post('/api/adminLogin',function(req,res)
{
    let email=req.body.email;
    let pass=sha1(req.body.password);
    //insert data
    // let ins=new loginModel({'email':email,'password':pass});
    // ins.save(function(err)
    //  {
    //      if(err)
    //      {
    //         res.json({'err':1,'msg':'Not Insert Successfully'});
    //      }
    //      res.json({'err':0,'msg':'Insert Successfully'});
    //  })
    loginModel.find({'email':email,'password':pass},function(err,data)
      {
         if(err){
            res.json({'err':1,'msg':'Some error occor'})
         }
         else if (data.length==0)
         {
             res.json({'err':1,'msg':'Email or pass is not correct'})
         }
         else
         {
             res.json({'err':0,'msg':'Login Successfully','ulogin':email})
         }
      })
    
})

app.listen(8899,function()
{
    console.log("Work on 8899");
})