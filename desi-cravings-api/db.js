const mongoose = require("mongoose");

const DBURL =
  "mongodb+srv://desicravings:mysecondapp@cluster0.ovlvi4x.mongodb.net/DesiCravings?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose
    .connect(DBURL)
    .then(async (req, res) => {
      console.log("connected successfully");
      const fetchData = await mongoose.connection.db.collection("food_items");
      fetchData.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        else {
          global.food_items = data;
        }
      });
    })
    .catch((err) => {
      console.log("not connected");
    });
};

module.exports = mongoDB;
