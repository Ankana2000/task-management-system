const jwt = require('jsonwebtoken');
const User = require('../models/user');

/*  USER AUTHORIZATION MIDDLEWARE CALLED AT NEARLY EVERY HTTP METHOD WITH JWT TOKENS    */
const auth = async (req, res, next) => {
    try {
        // Check for the presence of the Authorization header
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).send({ error: 'Authentication token is missing.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user with the token
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        if (!user) {
            return res.status(401).send({ error: 'Authentication failed. User not found.' });
        }

        // Attach token and user to the request object
        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        console.error('Authentication error:', e.message); // Log the error for debugging
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = auth;
