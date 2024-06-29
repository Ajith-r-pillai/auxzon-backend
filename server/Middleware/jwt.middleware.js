// jwt.middleware.js

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'supersecretkey123';

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Authorization token is not provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized access' });
        }
        console.log( decoded);
        next();
    });
};

module.exports = verifyToken;
