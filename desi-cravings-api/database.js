const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://desicravings:mysecondapp@cluster0.ovlvi4x.mongodb.net/";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("connected");
      }
    }
  );
};

module.exports = mongoDB();
