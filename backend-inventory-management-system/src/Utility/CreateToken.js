const JWT = require("jsonwebtoken");
const createToken = async (data) => {
  let payload = {
    exp: Math.floor(Date.now() / 1000) + 720 * 60 * 60,
    data: data,
  };
  return await JWT.sign(payload, "Key123");
};

module.exports = createToken;
