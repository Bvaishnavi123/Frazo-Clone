const mongoose=require("mongoose");

const dryfruitSchema=new mongoose.Schema({
    image: {type:String},
    name: {type:String},
    quantity: {type:String},
    price: {type:String},
},
{
versionKey:false,
timeStamps:true,
})
const dryfruitdata=mongoose.model("dryfruit",dryfruitSchema);
module.exports=dryfruitdata;