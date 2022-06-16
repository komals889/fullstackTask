const user=require('../model/user-model')
const bcrypt=require("bcryptjs")
exports.createUser=async(req,res)=>{
    try {

        const salt=await bcrypt.genSalt(10)
        const pass=await bcrypt.hash(req.body.password,salt)

        const result=await user.create({
            name:req.body.name,
            email:req.body.email,
            password:pass
        })

        res.json({
            success:true,
            message:"user created",
            result:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:"Error"+error,
            result:null
        })
        
    }
}


exports.deleteUser=async(req,res)=>{
    try {

        const result=await user.deleteMany()

        res.json({
            success:true,
            message:"user deleted",
            result:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:"error"+error,
            result:null
        })
        
    }
}