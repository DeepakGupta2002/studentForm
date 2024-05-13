const { mongoose } = require("../../config/studentdatabase/stuDB");

const tableSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        unique: true,

        required: true
    },
    studentPhone: {
        type: String,
        unique: true,
        required: true
    },
    studentDOB: {
        type: String
    },
    studentGender: {
        type: String
    },
    studentAddress: {
        type: String
    }
});

const table = mongoose.model("student_makhanlal", tableSchema);

module.exports = { table };
