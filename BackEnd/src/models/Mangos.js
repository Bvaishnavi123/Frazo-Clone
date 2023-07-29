const mongoose=require("mongoose");

const mangosSchema=new mongoose.Schema({
    image: {type:String},
    name: {type:String},
    quantity: {type:String},
    price: {type:String},
},
{
versionKey:false,
timeStamps:true,
})
const mangosdata=mongoose.model("mangos",mangosSchema);
module.exports=mangosdata;