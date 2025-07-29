// import model
const Todo = require('../models/todo')

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = { ...req.body };

    // Update the updatedAt field every time
    updateFields.updatedAt = Date.now();

    const todo = await Todo.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
