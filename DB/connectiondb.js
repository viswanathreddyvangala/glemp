const mongoose = require('mongoose');
const URI = "mongodb+srv://glemp:glemp@cluster0-cre4j.mongodb.net/glempdata?retryWrites=true&w=majority";
const connectDB = async() =>{
    await mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true  });
    console.log(" DB connected ...")
}
module.exports = connectDB;