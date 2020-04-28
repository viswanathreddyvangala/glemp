const mongoose = require('mongoose');
const URI = "mongodb+srv://viswareddy:viswareddy@cluster0-yeyph.gcp.mongodb.net/glempdata?retryWrites=true&w=majority";

const connectDB = async() =>{
    await mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true  },(err,db)=>{
       if(err){
           console.log("error",err)
       }
       else{
           console.log("connected to mongoDB")
       }
    });
}
module.exports = connectDB;