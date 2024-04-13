
const { table } = require("../../model/studentSchema");

let postcontroller = async (req, res) => {
    console.log(req.body);
    let { studentName, studentEmail, studentPhone, studentDOB, studentGender, studentAddress } = req.body;

    console.log(req.body);


    let student_data = new table({
        studentName: studentName,
        studentEmail: studentEmail,
        studentPhone: studentPhone,
        studentDOB: studentDOB,
        studentGender: studentGender,
        studentAddress: studentAddress,
    })

    student_data.save()
        .then(result => {
            res.status(200).json({
                message: 'Student form submitted successfully',
                data: req.body
            });
        })
        .catch(error => {
            console.error('Error inserting data:', error);
        });
}
module.exports = { postcontroller };