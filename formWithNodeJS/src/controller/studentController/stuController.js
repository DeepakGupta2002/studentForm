const { table } = require("../../model/studentSchema");
const rn = require('random-number');

const options = {
    min: -1000,
    max: 1000,
    integer: true
};

const postcontroller = async (req, res) => {
    // console.log(req.body);
    const { studentName, studentEmail, studentPhone, studentDOB, studentGender, studentAddress } = req.body;

    try {
        const newStudent = await table.create({
            studentName,
            studentEmail,
            studentPhone,
            studentDOB,
            studentGender,
            studentAddress,
            key: rn(options)
        });

        res.status(200).json({
            message: 'Student form submitted successfully',
            data: newStudent
        });
    } catch (error) {
        console.error('Data insert karne mei error:', error);
        res.status(500).json({
            message: 'Data insert karne mei error aaya hai',
            error: error.message
        });
    }
};

module.exports = { postcontroller };
