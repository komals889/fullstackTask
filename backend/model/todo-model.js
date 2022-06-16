const mongoose=require("mongoose")

const blogSchema=mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:"user"
    },
    title:{
        type:String,
        required:true
    },
    shortDesc:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    publish:{
        type:Boolean,
        default:false

    }
},{timestamps:true})

module.exports=mongoose.model("blog",blogSchema)

