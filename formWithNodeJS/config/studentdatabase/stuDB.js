require("dotenv/config");
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.yupixxr.mongodb.net/`).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

module.exports = { mongoose };