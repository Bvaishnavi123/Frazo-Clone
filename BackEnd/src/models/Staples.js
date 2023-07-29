const mongoose=require("mongoose");

const staplesSchema=new mongoose.Schema({
    image: {type:String},
    name: {type:String},
    quantity: {type:String},
    price: {type:String},
},
{
versionKey:false,
timeStamps:true,
})
const staplesdata=mongoose.model("staples",staplesSchema);
module.exports=staplesdata;