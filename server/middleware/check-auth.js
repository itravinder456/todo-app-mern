const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log("process.env.JWT_KEY", process.env.JWT_KEY)
        const decoded = jwt.verify(token, process.env.JWT_KEY || "secretsrc");
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(200).json({
            message: 'Auth failed'
        });
    }
};