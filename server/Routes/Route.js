const Userroute = require('express').Router();
const User = require('../Model/User');
Userroute.post('/post', async (req, res)=>{
          try {
            console.log(req.body);
          const newUer = new User({
                    userName: req.body.user,
                    date:req.body.date,
                    email:req.body.email
                    })    
                    // save
                 await newUer.save()
                    res.status(200).json(newUer);
                    console.log(newUer);
          } catch (error) {
          console.log(error); 
          }

})
Userroute.get('/get', async (req, res)=>{
        
    try{
        const Alluser = await User.find({});
        res.status(200).json(Alluser)
    } catch (error) {
        res.json(error)
        
    }
})
Userroute.get('/get/:id', async (req, res)=>{
        console.log(req.params.id);
    try{
        const Alluser = await User.find({_id:req.params.id});
        res.status(200).json(Alluser)
    } catch (error) {
        res.json(error)
        
    }
})
Userroute.get('/dept/:place',async(req,res)=>{

    const place = req.params.place
    console.log(place);
    try {
      let query =await Department.find({departmentArea: place})
      if (query === null) {
          res.json("Empty")
      } else {
          res.json(query)
      }
    } catch (error) {
      console.log(error);
    }
})

// Update User
Userroute.put('/api/reacherDepts/:id', async (req, res)=>{
        
    try {
        const updateDept = await User.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json("Update_successfully");
    } catch (error) {
        res.json(error)
    }
})
// User Deleted
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