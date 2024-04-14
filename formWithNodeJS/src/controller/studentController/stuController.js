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
        let newStudent;
        let attempt = 0;
        const maxAttempts = 3; // Maximum number of attempts

        // Retry mechanism: try multiple times before giving up
        while (attempt < maxAttempts) {
            attempt++;
            try {
                newStudent = await table.create({
                    studentName,
                    studentEmail,
                    studentPhone,
                    studentDOB,
                    studentGender,
                    studentAddress,
                    key: rn(options)
                });
                // If insertion successful, break out of loop
                break;
            } catch (error) {
                // Log error and continue retrying
                console.error(`Attempt ${attempt} failed:`, error);
            }
        }

        // Check if newStudent is defined (insertion successful)
        if (newStudent) {
            res.status(200).json({
                message: 'Student form submitted successfully',
                data: newStudent
            });
        } else {
            // If all attempts failed, send error response
            res.status(500).json({
                message: 'Failed to submit student form after multiple attempts'
            });
        }
    } catch (error) {
        console.error('Data insert karne mei error:', error);
        res.status(500).json({
            message: 'Data insert karne mei error aaya hai',
            error: error.message
        });
    }
};

module.exports = { postcontroller };
