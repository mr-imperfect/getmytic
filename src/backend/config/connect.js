const MongoClient=require('mongodb').MongoClient
const dotenv=require('dotenv')

const state={
    db:null
}

module.exports.connect=function(done){
    // let url=
// MongoClient.connect('mongodb+srv://vishnujayakumar:vishnu1830@cluster0.pc9fo.mongodb.net/span?retryWrites=true&w=majority')
     let dbName="getmytic"
    MongoClient.connect('mongodb+srv://vishnujayakumar:vishnu1830@cluster0.crkir.mongodb.net/getmytic?retryWrites=true&w=majority',(err,data)=>{
        if(err){
            return done(err)
        }else{

            state.db=data.db(dbName)
            done()



        }
    })

}

module.exports.get=function(){
    return state.db
}