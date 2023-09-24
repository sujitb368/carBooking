


const winston = require('winston');

//importing the logging format
const { combine, timestamp, json } = winston.format;

// configuring the winston modules 
const logger = winston.createLogger({

    level: 'info',

    format: combine(timestamp(), json()),

    transports: [

        new winston.transports.File({ filename: 'error.log', level: 'error' }),

        new winston.transports.File({ filename: 'combined.log' })
    ],


});

// to write morgan into winston logs 
logger.stream = {

    write: function (message) {

        logger.info(message.trim())

    }
}




// Function to store aplication logs


function requestLogger(req, res, next) {

    logger.info(`${req.method} ${req.url}`);

    next();
}

// Function to log the errors in application


function errorLogger(err, req, res, next) {

    logger.error(err.message, err);

    // next(err);
}


//Export the functions for use in other parts of the application
module.exports = { logger, requestLogger, errorLogger };
