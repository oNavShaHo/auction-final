const Productroute = require('express').Router();
const Product = require('../Model/ProductSchema');
const multer = require("multer");

const fs = require('fs'); 
//  Use to to image in multer
const imgconfig = multer.diskStorage({
  destination:(req,file,callback)=>{
     callback(null,'../Image');
  },
  filename:(req,file,callback)=>{
      callback(null,`imgae-${Date.now()}-${file.originalname}`)
  }
})

const isImage = (req,file,callback)=>{
  if(file.mimetype.startsWith("image")){
      callback(null,true)
  }else{
      callback(new Error("only images is allowd"))
  }
}
const upload = multer({
  storage:imgconfig,
  fileFilter:isImage
});
// add new Product
Productroute.post('/post', async (req, res)=>{
    try {
        console.log(req.body);
        const newProduct = new Product({
                ProductName: req.body.ProductName,
                Img:req.body.Img,
                ProductDes:req.body.Des
            })    
          
        await newProduct.save()
        res.status(200).json(newProduct);
        console.log(newProduct);
    
    } catch (error) {
        console.log(error); 
    }

})


// find all documents with Productname 
// Productroute.get('/get', async (req, res)=>{
        
//     try{
//         const AllProduct = await Product.find({ProductName : req.body.ProductName});
//         res.status(200).json(AllProduct)
//     } catch (error) {
//         res.json(error)
        
//     }
// })


// // find Product with id 
// Productroute.get('/get/:id', async (req, res)=>{
//     console.log(req.params.id);
//     try{
//         const AllProduct = await Product.find({_id:req.params.id});
//         res.status(200).json(AllProduct)
//     } catch (error) {
//         res.json(error)
        
//     }
// })


// // Update Product
// Productroute.put('/put', async (req, res)=>{
        
//     try {
//         const Product = await Product.findByIdAndUpdate(req.params.id, {$set: req.body});
//         res.status(200).json("Update_successfully");
//     } catch (error) {
//         res.json(error)
//     }
// })


// // delete Product
// Productroute.delete('/delete/:id', async (req,res)=>{
//     console.log(req.params.id);
  
//     try {
//         const deleteItem = await Product.deleteOne({_id:req.params.id});
//         res.status(200).json('Product_deleted');
//     } catch (error) {
//         res.json(error)
//     }
// })


module.exports =Productroute;