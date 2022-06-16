const express=require("express")
 
const { addTodo, allTodo, singleTodo, deleteTodo, updateTodo } = require("../controller/todo-controller")

const router=express.Router()

router.route("/").post( addTodo).get(allTodo)
router.route("/:id").get(singleTodo).delete(deleteTodo).put(updateTodo)

module.exports=router