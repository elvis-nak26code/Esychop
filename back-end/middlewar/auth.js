const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userid;
        req.auth = {
            userId: userId
        };
        console.log(token)
        console.log(decodedToken)
        console.log(req.auth.userId)
	next();
    } catch(error) {
        res.status(401).json({ error });
    }
};