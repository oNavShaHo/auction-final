const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")

const app =express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
// Route
const User = require('./Routes/Route');




  async function main() {
    await mongoose.connect('mongodb+srv://admin:user123@foodapp.3mlcdml.mongodb.net/?retryWrites=true&w=majority');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  main().catch(err => console.log(err));
//  Roter  user
 app.use("/user",User);
app.listen(8080,()=>{
console.log('serever started on port 8080');
})