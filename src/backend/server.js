 const express=require('express')
 const app=express()
 const adminHelper=require('./Helpers/adminHelper')
 const userHelper=require('./Helpers/userHelper')
// const mongodb=require('mongodb')
const bcrypt=require('bcrypt')
const db=require('./config/connect')
var jwt=require("jsonwebtoken")
// const session=require('express-session')

// const cookieParser=require("cookie-parser");
// app.use(session({
//     secret:"prox",
//     cookie:{maxAge:6000}    
// }))

// app.use(cookieParser());
 app.use(express.json())
 app.use(express.urlencoded({extended:false}))
//  var MongoClient = require('mongodb').MongoClient;
// app.use(session({secret:"vishnu",cookie:{maxAge:600000}}))

// var url = "mongodb://localhost:27017/";

 const cors=require('cors')
const { json } = require('express')
// const { default: axios } = require('axios')
// const { response } = require('express')

 app.use(cors({ 
 }))
 app.post('/login',(req,res)=>{
 db.connect((err)=>{
     if(err){
         throw err
     }else{

        console.log("database connection created");
        bcrypt.hash(req.body.password,10).then((response)=>{
            // console.log(response);
        //  console.log(hashedPassword);
         db.get('getmytic').collection('admin').insertOne({"username":req.body.username,"password":response})

         
        })
     }
 })
})

 app.post('/adminlogin',(req,res)=>{
    db.connect((err)=>{
        if(err)
        {

            throw err;
        }
        else{
            
            console.log("database connected successfully...")
            
            adminHelper.doLogin(req.body).then((response)=>{
                let admin_token={
                    id:req.body._id,
                    username:req.body.username

                }
                if(response.logg){
                    let token=jwt.sign(admin_token,"getmytic",{expiresIn:86400})
                    res.json({token,"logged":true})

                
                    console.log("logged true");
                }else{
                    res.json({"logged":false})
                    console.log("logged false");


                }
            })
        
           
        } 
        
    }
    )
    
 })
 
 app.get('/adminverify',(req,res)=>{
     db.connect((err)=>{
         if(err){
             throw err
         }else{
console.log("database connected for admin verification");
            
    let authheader=req.headers.authorization;
    console.log(authheader);
    if(authheader==undefined){
        console.log("token is undefined");
        console.log("logged false");
       res.json({"logged":false})
        

    }

    else{
     let token=authheader.split(" ")[1]

     jwt.verify(token,"getmytic",(err,success)=>{
         if(err){
             throw err
         }else{
            console.log("logged true");
            
         res.json({"logged":true})
         }
     })

     
     
 }
             
         }
     })

 })

 app.post('/',(req,res)=>{
    db.connect((err)=>{
        if(err){
            console.log("database connection error :(");

            throw err
        }else{
            console.log("database connected successsfully :)");
            userHelper.userLogin(req.body).then((response)=>{   
                console.log(response);    
                if(response){
                    res.json({"usercreated":true})

                }
              
            })
        }
    })
 })

 app.post('/usersignin',(req,res)=>{
     db.connect((err)=>{
         if(err){
             throw err
         }else{
             console.log("database working");

             userHelper.userSignin(req.body).then(response=>{
                 console.log(response);
                 res.send({"userLogged":response})
                
             })
         }
     })
 })
app.get('/userlist',(req,res)=>{
db.connect((err)=>{
    if(err){
        throw err
    }else{
        userHelper.getAllUsers().then((users)=>{
            console.log(users);
            res.send(users)

    })
}
    
})
})

app.post('/addmovie',(req,res)=>{
    // console.log(req.body);
    db.connect((err)=>{
        if(err){
            throw err
        }else{
            console.log("db connected for add movie");

            adminHelper.addMovie(req.body).then((response)=>{
                res.json({response})
            })
        }
    })
})
app.get('/movieredirect',(req,res)=>{
    db.connect((err)=>{
        if(err){
            throw err
        }else{
            console.log("db connected for movie getting from movie redirect");
            adminHelper.getMovieRedirect().then((response)=>{
                // console.log(response);
                res.send(response)
            })
        }
    })
})




app.delete('/deletemovie/:id',(req,res)=>{
    db.connect((err)=>{
        if(err){
            throw err
        }else{
            var id=req.params.id;
            console.log("db connected for movie getting from movie deletion");
    console.log(id);

    adminHelper.deleteMovie(id).then((resp)=>{
        console.log(resp);
        res.json({resp})
    })
        }
    })
})

const port=3001
 app.listen( process.env.PORT || port,()=>{
     console.log(`server running in ${port} port`);  
 }) 




