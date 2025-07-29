//import the todo model
const Todo = require('../models/todo');

exports.createTodo = async (req, res) => { 
    try {
        //extract the title and description from the request body
        const { title, description } = req.body;  
        // creare a new todo item and insert it into the database
        const response = await Todo.create({title, description})

        res.status(200).json(
            {
                success: true,
                data : response,
                message : "Entry Created Successfully"
            }
        )
    }
    catch (error) {
        //handle any errors that occur during the process
        console.error('Error creating todo:', error);
        res.status(500)
        .json({
            success: false ,
            datat: "internal server error",
            default: Date.now(),
            message:error.message
    })
    }
    //send a response back to the client with the created todo item
}
