
const bcrypt = require('bcrypt')

//Import the configuration file
const config = require('../config/config.json')

// Import error handling middleware
const errorHandlingMiddleware = require('./errorHandler.middleware')

//Import the saltrounds from config file
const saltRounds = config.bcryptSaltRounds;





const hashPassword = async (req, res, next) => {
    try {
        // check if password exists in requests body
        if (req.body.password) {

            // hash the password using bcrypt  with the salt rounds
            const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

            // update the request body with hashed password
            req.body.password = hashedPassword;
        }
        next();
    } catch (error) {

        return errorHandlingMiddleware('hashing failed', req, res, next);
    }
}

//Export the functions for use in other parts of the application
module.exports = { hashPassword }

