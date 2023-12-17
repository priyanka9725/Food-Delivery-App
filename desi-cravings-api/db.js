const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://desicravings:mysecondapp@cluster0.ovlvi4x.mongodb.net/";
const mongoDB = async () => {
  await mongoose.connect(mongoURI, (err) => {
    if (!err) console.log("DB Connected");
    const fetchData = async () => {
      await mongoose.connection.db.collection("food_items");
      fetchData.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        else console.log(data);
      });
    };
  });
};
