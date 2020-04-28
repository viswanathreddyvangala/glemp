const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    name:String,
    glid:String,
    skillset:[String],
    projects:[String],
    projectinfo:[String],
    previousprojects:[String],
    ldap:String,
    seatno:String,
    assets:[{"laptop":String,"desktop":String,"mobile":String,"desktop2":String}],
    manager:{reportingmanager:String,locationhead:String},
    teamlead:String,
    mail:{googlemail:String,glomail:String},
    education:{postgraduation:{course:String,stream:String},
               graduation:{course:String,stream:String}
            },
    contactinfo:{phone:Number,
    address:{
        residential:{
            houseno:String,
            landmark:String,
            area:String,
            pin:String,
            location:String,
            dist:String,
            state:String,
        },
        permanent:{
            houseno:String,
            landmark:String,
            area:String,
            pin:String,
            location:String,
            dist:String,
            state:String,
        }
    }}

    
})

module.exports = Employee =  mongoose.model('employee',employee)
