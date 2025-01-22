const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true,
        enum: ["Formal","casual","sports"],
        
    },

    price:{
        type:String,
        required:true,
    },

   },
    {timestamps: true},

)
const Product = mongoose.model('Product', ProductSchema );

module.exports = Product;