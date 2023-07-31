const mongoose =require('mongoose');	
const ProductSchema = new mongoose.Schema({	
          userName:String,
          Img:String,
          email:String

})	
module.exports =mongoose.model("productInfomation",ProductSchema);