const mongoose = require("mongoose");

const DBURL =
  "mongodb+srv://desicravings:mysecondapp@cluster0.ovlvi4x.mongodb.net/DesiCravings?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log("Connected");

    let fetchData = mongoose.connection.db.collection("food_items");

    let data = await fetchData.find({}).toArray();
    // console.log(data);
    let Category = mongoose.connection.db.collection("food_category");
    let data2 = await Category.find({}).toArray();
    // console.log(data2);

    global.food_items = data;
    global.food_category = data2;
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

module.exports = mongoDB;
