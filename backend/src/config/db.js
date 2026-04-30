const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (err) {
    console.log(`Error connecting to DB ${err}`);
  }
};

module.exports = connectToDB;
