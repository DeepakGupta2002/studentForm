
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
        res.status(201).send("data successfully inserted to database");
        
    } catch (err) {
        res.status(501).send("error hai ", err);
    }


}

module.exports = { postcontroller };
