const jwt = require('jsonwebtoken');
const SECRET = 'secret';

const generateAccessToken = (payload) => {
    return jwt.sign(payload, SECRET, { expiresIn: '90m' });
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // console.log(authHeader, 'authHeader');
    const token = authHeader && authHeader.split(' ')[1];
    //console.log(token, 'token');
    if (token == null)
        return res.status(401).json({ status: false, message: 'Unauthorized' });
    jwt.verify(token, SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

module.exports = {
    generateAccessToken,
    authenticateToken,
};
