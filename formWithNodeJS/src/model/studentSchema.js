const { mongoose } = require("../../config/studentdatabase/stuDB");


const tableSchema = mongoose.Schema({
    studentName: {
        type: String,

    },
    studentEmail: {
        type: String,
        unique: true
    },
    studentPhone: {
        type: Number,
        unique: true
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

const table = mongoose.model("student", tableSchema);
module.exports = { table };