const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { studentRotue } = require('./Routes/student/studentRoute');
const { studentForm } = require('./Routes/postRoute/Student_post');
const os = require('os');
// const { stringify } = require('querystring');
// console.log("available cpu", os.getAvailableParallelism);

// Create an express app

const app = express();
require("dotenv/config");

const PORT = process.env.PORT || 3000; // Port number
// app.use(express.json());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Static files middleware to serve HTML, CSS, JS, images, etc.
app.use(express.static(path.join(__dirname, '..', '../public')));

// Route to serve HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
// app.use(studentRotue);

// app.use(studentRotue);
app.use(studentForm);
// app.post('/submit-student', (req, res) => {
//     console.log(req.body);
//     res.json(req.body);
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
