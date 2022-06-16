const express=require("express")
const { createUser, deleteUser } = require("../controller/user-controller")

const router=express.Router()

router.route("/").post(createUser).delete(deleteUser)

module.exports=router