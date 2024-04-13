const express = require('express');
const path = require('path');
const studentRotue = express.Router();
const app = express();

// Serve static files from 'public' directory

// Static files middleware to serve HTML, CSS, JS, images, etc.

// Static files middleware to serve HTML, CSS, JS, images, etc.
app.use(express.static(path.join(__dirname, '/public')));

// Route to serve HTML page
studentRotue.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = { studentRotue };