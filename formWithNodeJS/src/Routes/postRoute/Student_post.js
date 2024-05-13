const express = require('express');
const { postcontroller } = require('../../controller/studentController/stuController');

const studentForm = express.Router();
studentForm.post('/submit_student', postcontroller);

module.exports = { studentForm };