
// Import the Express module to create a server
const express = require('express');

// Import the path module to handle and manipulate file paths
const path = require('path');

// Initialize an Express application
const app = express();

// Set view engine to EJS for rendering .ejs templates
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import and use routes defined in the 'index' router file
const indexRouter = require('./routes/index');
app.use('/', indexRouter);  // Route all requests starting with '/' to indexRouter

// Define the port to start the server, using environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port, logging the URL in the console
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
