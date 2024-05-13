const { mongoose } = require("../../config/studentdatabase/stuDB");

const tableSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required: true,
        unique: true,
    },
    studentPhone: {
        type: String,
        required: true,
        unique: true,
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
}, { timestamps: true });

const table = mongoose.model("student_makhanlal", tableSchema);

module.exports = { table };
