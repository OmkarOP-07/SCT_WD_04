// import the model
const Todo = require('../models/todo')


exports.getTodo = async (req, res) => { 
    try {
       //fetch all todo items from database
       const todos = await Todo.find({})

       //response body
       res.status(200)
       .json({
            success : true,
            data : todos,
            message : "all data fetched"
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



exports.getTodoById = async (req, res) => { 
    try {
        //get todo by id 
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        if(!todo){
            return res.status(404)
            .json({
                success:false,
                message:"Invalid Id",

            })
        }

        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Got the Data by Id",
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
