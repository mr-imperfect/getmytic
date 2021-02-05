const mongodb=require('mongodb')
let db=require('../config/connect')
const bcrypt=require('bcrypt')
var jwt=require("jsonwebtoken")
// var MongoClient = require('mongodb').MongoClient;
var objectId=require('mongodb').ObjectID;
module.exports={
doLogin:(userData)=>{

    
    return new Promise(async(resolve,reject)=>{

        let user=await db.get('getmytic').collection('admin').findOne({username:userData.username})
        // console.log("hii");

        if(user){
            bcrypt.compare(userData.password,user.password).then((status)=>{
                if(status){
                    // console.log("login success");
                    let logg=true
                    

                    return resolve({"logg":logg})
                    
                    // resolve(logg)
                    
                }else{
                    // console.log("login failed");
                    logg=false
                    return resolve({"logg":logg})
                }
            })
        }
        else{
            // console.log("login faileddddd");
            logg=false
            return resolve({"logg":logg})
        }
    })

     
       
   


},
    addMovie:(movieCredential)=>{

        return new Promise((resolve,reject)=>{
            db.get('getmytic').collection('addedmovie').insertOne(movieCredential)
            resolve(movieCredential)
        })

    },
    getMovieRedirect:()=>{
        return new Promise(async(resolve,reject)=>{
    
            let movies=await db.get('getmytic').collection('addedmovie').find().toArray()
            resolve(movies)
    
        })
    },
    deleteMovie:(movId)=>{
        return new Promise((resolve,reject)=>{
            db.get('getmytic').collection('addedmovie').removeOne({_id:objectId(movId)}).then((response)=>{
                // console.log(response);
                resolve({"status":true});
            })
        })

    }
}