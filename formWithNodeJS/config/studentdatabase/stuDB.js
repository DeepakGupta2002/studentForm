require("dotenv/config");
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.yupixxr.mongodb.net/`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});
mongoose.connect("mongodb://localhost:27017");

module.exports = { mongoose };

