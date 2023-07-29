const mongoose=require("mongoose");

const allComponantSchema=new mongoose.Schema({
    image: {type:String},
    name: {type:String},
    quantity: {type:String},
    price: {type:String},
},
{
versionKey:false,
timeStamps:true,
})
const AllComponantdata=mongoose.model("AllComponant",allComponantSchema);
module.exports=AllComponantdata;