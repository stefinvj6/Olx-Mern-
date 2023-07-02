const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");

dotenv.config();

function authorizeUser(req,res,next) {
    const authorizationString = req.headers.authorization
    const stringToArray = authorizationString.split(" ")
    const token = stringToArray[1]

    if (token) {
        jwt.verify(token,process.env.TOKEN_SECRET,function (err,decoded) {
            if (err) {
                res.send("unauthorized user")
            }
            if (decoded) {
                req.user=decoded
                next()
            }
        })
      }
}

module.exports = authorizeUser