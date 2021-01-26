const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI || config.get("mongoURI"), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log("Mongo Connected");
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = connectDB;
