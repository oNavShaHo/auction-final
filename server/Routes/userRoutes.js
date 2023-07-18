const Userroute = require('express').Router();
const User = require('../Model/User');


// add new user
Userroute.post('/post', async (req, res)=>{

    try {
        console.log(req.body);
        const newUser = new User({
                userName: req.body.userName,
                date:req.body.date,
                email:req.body.email
            })    
          
        await newUser.save()
        res.status(200).json(newUser);
        console.log(newUser);
    
    } catch (error) {
        console.log(error); 
    }

})


// find all documents with username 
Userroute.get('/get', async (req, res)=>{
        
    try{
        const Alluser = await User.find({userName : req.body.userName});
        res.status(200).json(Alluser)
    } catch (error) {
        res.json(error)
        
    }
})


// find user with id 
Userroute.get('/get/:id', async (req, res)=>{
    console.log(req.params.id);
    try{
        const Alluser = await User.find({_id:req.params.id});
        res.status(200).json(Alluser)
    } catch (error) {
        res.json(error)
        
    }
})


// Update User
Userroute.put('/put', async (req, res)=>{
        
    try {
        const User = await User.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Update_successfully");
    } catch (error) {
        res.json(error)
    }
})


// delete user
Userroute.delete('/delete/:id', async (req,res)=>{
    console.log(req.params.id);
  
    try {
        const deleteItem = await User.deleteOne({_id:req.params.id});
        res.status(200).json('User_deleted');
    } catch (error) {
        res.json(error)
    }
})


module.exports = Userroute;