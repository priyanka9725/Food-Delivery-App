const express = require("express");
const router = express.Router();
const Order = require("../model/Orders");

router.post("/myorderData", async (req, res) => {
  try {
    let myData = await Order.findOne({ email: req.body.email });
    res.json({ orderData: myData });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error", error.message);
  }
});
module.exports = router;
