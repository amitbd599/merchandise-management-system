const jwt = require("jsonwebtoken");
const CreateToken = async (data) => {
    let key = process.env.JWT_KEY;
    let expire = process.env.JWT_Expire_Time;
    let payload = { data: data };
    return jwt.sign(payload, key, { expiresIn: expire });
}
module.exports = CreateToken