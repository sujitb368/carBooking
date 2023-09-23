

//Import JSON web token module
const jwt = require('jsonwebtoken');

// Load environment variables
require("dotenv").config();

//Import configuartion file
const config = require('../config/config.json');

const errorHandlingMiddleware = require('./errorHandler.middleware');




exports.verifyToken = (req, res, next) => {

    // Get token from request header
    const token = req.headers['x-access-token'];

    if (!token) {

        // Check for existence of token 
        return errorHandlingMiddleware(new Error('No token'), req, res, next)

    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

        if (err) {

            // Check for token expiration 
            return errorHandlingMiddleware(new Error('Invalid token'), req, res, next)
        }

        req.userId = decoded.id;

        next();

    });

};




exports.generateToken = (userId) => {

    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {

        expiresIn: config.jwtTokenExpiresIn

    });
};




