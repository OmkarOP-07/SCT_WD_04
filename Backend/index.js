const express = require('express');   // server created 
const cors = require('cors');         // <-- Import CORS
const app = express();                // server instantiate  

// Load environment variables
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Connect to database
const dbConnect = require("./config/db");
dbConnect();

// Enable JSON parsing
app.use(express.json());

// ✅ Enable CORS
app.use(cors());  // <- This line fixes the CORS issue

// Import routes for TODO API 
const todoRoutes = require("./routes/todo");

// Mount TODO API routes 
app.use("/api/v1", todoRoutes);

// Default route
app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage baby</h1>`);
});

// Start the server 
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
