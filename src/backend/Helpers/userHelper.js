
const mongodb=require('mongodb')
let db=require('../config/connect')
const bcrypt=require('bcrypt')

module.exports={
userLogin:(userData)=>{

    return new Promise((resolve,reject)=>{
bcrypt.hash(userData.userpassword,10).then(response=>{
    db.get('getmytic').collection('user').insertOne({"userusername":userData.userusername,"userpassword":response})


})

    })

},
userSignin:(userData)=>{

    
    return new Promise(async(resolve,reject)=>{

        let user=await db.get('getmytic').collection('user').findOne({userusername:userData.userusername})  
        // console.log("hii");
        // resolve(user)

        if(user){
           
            // resolve(userLogg)
            bcrypt.compare(userData.userpassword,user.userpassword).then((status)=>{
                console.log("Status:"+status);
                if(status){
                    // console.log("login success");
                    let userLogg=true
                    
                    resolve(userLogg)
                    
                }else{
                    // console.log("login failed");
                    userLogg=false
                    resolve(userLogg)
                }
            })
        }
        else{
            // console.log("login faileddddd");
           userLogg=false
            resolve(userLogg)
        }
    })

     
       
   


},
getAllUsers:()=>{
    return new Promise(async(resolve,reject)=>{

        let users=await db.get('getmytic').collection('user').find().toArray()
        resolve(users)

    })
}


}