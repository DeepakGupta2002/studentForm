const { table } = require("../../model/studentSchema");
var rn = require('random-number');
var options = {
    min: -1000
    , max: 1000
    , integer: true
}
let postcontroller = async (req, res) => {
    console.log(req.body);
    let { studentName, studentEmail, studentPhone, studentDOB, studentGender, studentAddress } = req.body;

    console.log(req.body);

    try {
        await table.create({
            studentName: studentName,
            studentEmail: studentEmail,
            studentPhone: studentPhone,
            studentDOB: studentDOB,
            studentGender: studentGender,
            studentAddress: studentAddress,
            key: rn(options)

        });

        res.status(200).json({
            message: 'Student form submitted successfully',
            data: req.body
        });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({
            message: 'Error occurred while inserting data',
            error: error
        });
    }
}

module.exports = { postcontroller };
