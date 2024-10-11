const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        default:"Enter your name "
    },
    price:{
        type: Number,
        required:true,
    },
    quantity:{
        type: Number,
        required:true,
    },
    image:{
        type:String,
        required:false
    }
    
},{
    timestamps:true
})


const Product=mongoose.model("Product",productSchema)

module.exports=Product