var jwt = require("jsonwebtoken");
const jwtSecret = "Thisismysecondapp";
const fetch = (req, res, next) => {
  // get the user from the jwt token and add id to req object
  const authToken = req.header("auth-token");
  if (!authToken) {
    res.status(401).send({ error: "Invalid Auth Token" });
  }
  try {
    const data = jwt.verify(authToken, jwtSecret);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Invalid Auth Token" });
  }
};
module.exports = fetch;
