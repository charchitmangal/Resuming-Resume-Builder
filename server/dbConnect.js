const mongoose = require('mongoose');
const URL = "mongodb+srv://mcharchit09:Klj42OLYq7bKp00n@cluster0.ouqo5mc.mongodb.net/ResumeBuilder"

mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});

const connection=mongoose.connection;

connection.on('connected', () => {
    console.log("MongoDb Connection Successfull!")
})

connection.on('error', (error)=>{
    console.log(error);
});





