
const { table } = require("../../model/studentSchema");
const rn = require('random-number');

const options = {
    min: -1000,
    max: 1000,
    integer: true
};

const postcontroller = async (req, res) => {
    const { studentName, studentEmail, studentPhone, studentDOB, studentGender, studentAddress } = req.body;


    try {

        const user = await table({ studentName, studentEmail, studentPhone, studentDOB, studentGender, studentAddress });

        await user.save();
        res.status(201).json({
            message: "<h1>student added successfully<h1>",

        })




    } catch (err) {
        res.status(501).json({
            msg: "it server error",
            error: err
        });
    }


}

module.exports = { postcontroller };
