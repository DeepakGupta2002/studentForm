const express = require('express');
const { postcontroller } = require('../../controller/studentController/stuController');
const studentForm = ('/submit-student', postcontroller);

module.exports = { studentForm };