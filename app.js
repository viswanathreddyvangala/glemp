const express  =  require('express');
const bodyParser  =  require('body-parser');
const exphbrs  =  require('express-handlebars');
const nodemailer = require('nodemailer')
const cors = require('cors');
const port  = process.env.port || 5000;
const connectDB = require("./DB/connectiondb")

var app = express();
 
app.use(cors());

app.engine('handlebars',exphbrs());
app.set('view engine','handlebars');


//body parser middle ware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/createEmployee', require('./Api/Employee'));
app.use('/api/getAllEmployees',require('./Api/Employee'));

app.post('/sendemail',(req,res)=>{
    console.log(req.body)
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'venkataviswanathreddy', // here use your real email
          pass: 'Viswa@111' // put your password correctly (not in this question please)
        },
      });

   var mailOptions = {
    from: '"GlobalLogic Interview scheduled" <viswanath.vangala@globallogic.com>', // sender address
    to: [req.body.candidateEmail,req.body.candidateEmail], // list of receivers
    subject: "Interview Schedule May 1st ✔", // Subject line
    text: "Hi you have been scheduled an interview with globalLogic ", // plain text body
    html: "<b>Hi , Please take interview for this attached resume on 1st may</b>" // html body
  };    

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    res.send("Interview succssfully scheduled for "+req.body.candidateEmail)

});

})

app.listen(5000, ()=>{
    console.log("server started")
}) 