// import the model
const Todo = require('../models/todo')


exports.deleteTodo = async (req, res) => { 
    try {
        const {id} = req.params
        await Todo.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "deleted successfully",
        })

    }
    catch (error) {
       console.error(error)
        res.status(500)
        .json({
            success:false,
            data:"Something went wrong",
            message:error.message,
        })
    }
    //send a response back to the client with the created todo item
}