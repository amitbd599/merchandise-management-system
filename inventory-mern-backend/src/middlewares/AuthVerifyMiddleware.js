var jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    let token = req.headers['token'];

    if (!token) {
        token = req.cookies["token"];
    }
    jwt.verify(token, "SecretKey123456789", function (err, decoded) {
        if (err) {

            res.status(401).json({ status: "unauthorized" })
        }
        else {
            let email = decoded['data'];
            req.headers.email = email
            next();
        }
    })
}
