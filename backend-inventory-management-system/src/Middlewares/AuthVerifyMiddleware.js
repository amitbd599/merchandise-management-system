var JWT = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let Token = req.headers["token"];
  JWT.verify(Token, "Key123", (error, decoded) => {
    if (error) {
      console.log("Token:" + Token);
      res.status(401).json({ status: "Unauthorized" });
    } else {
      let email = decoded["data"];
      req.headers.email = email;
      next();
    }
  });
};
