const mongoose = require('mongoose');

//creating the schema 
const UserSchema=new mongoose.Schema({
    name:String,
    course:String,
    institution:String,
    age:String
});


//modelling the schema
const docName="students";

const UserModel=mongoose.model(docName,UserSchema);

//exporting the module to be used in otherv files
module.exports=UserModel;