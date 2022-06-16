const todo=require("../model/todo-model")
const jwt =require("jsonwebtoken")
exports.addTodo=async(req,res)=>{
    try {
        const { userId } = await jwt.verify(req.headers.authorization, process.env.JWT_SECRETE_KEY)
        req.body.userId=userId
        const result=await todo.create(req.body)
        res.json({
            count:result.length,
            success:true,
            message:"blog added",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}

exports.allTodo=async(req,res)=>{
    try {
        const result=await todo.find()
        res.json({
            count:result.length,
            success:true,
            message:"all blog ",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}
exports.singleTodo=async(req,res)=>{
    try {
        const result=await todo.findById(req.params.id)
        res.json({
            count:result.length,
            success:true,
            message:"single blog ",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}
exports.deleteTodo=async(req,res)=>{
    try {
        const result=await todo.findByIdAndDelete(req.params.id)
        res.json({
            count:result.length,
            success:true,
            message:"blog deleted",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}
exports.updateTodo=async(req,res)=>{
    try {
        const result=await todo.findByIdAndUpdate(req.params.id,(req.body))
        res.json({
            count:result.length,
            success:true,
            message:"blog updated",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}