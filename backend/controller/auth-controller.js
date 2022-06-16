const user=require('../model/user-model')
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userData=await user.findOne({email})

        if(!userData){
            return res.status(400).json({
                success:false,
                message:"email not found"
            })
        }
        const verify=await bcrypt.compare(password,userData.password)
        if(!verify){
            return res.status(400).json({
                success:false,
                message:"password does not match"
            })
        }

        const token=await jwt.sign({userId:userData._id},process.env.JWT_SECRETE_KEY)
            res.json({
                success:true,
                message:"user found",
                result:userData.name,
                id:userData._id,
                token:token,
                
            })
        
    } catch (error) {

        res.json({
            success:false,
            message:"Erroe"+error
        })
        
    }
}
