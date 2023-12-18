const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://desicravings:mysecondapp@cluster0.ovlvi4x.mongodb.net/?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(mongoURI).then()(console.log("DB Connected"));
};
