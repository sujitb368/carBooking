

function responseFormat(response, success, status) {

    const returnValue = {
        error: response,
        success: success,
        status: status
    }
    return returnValue;
}

async function errorHandlingMiddleware(err, req, res, next) {
    let status = 500;

    let message = 'Internal server error'

    // Check if the error has a response property (possibly an axios error)
    if (err.response) {

        status = err.response.status;

        // Use response message if available, else use a default message
        message = err.response.message || getStatusMessage(status)

    } else if (err.message === 'ValidationError') {

        status = 400;

        // Custom message for validation errors
        message = 'The inputs are in invalid format or missing';

    } else if (err.message === 'No token') {

        status = 401;

        // Custom message for missing token
        message = 'Unauthorized: No token provided';

    } else if (err.message === 'Invalid token') {

        status = 403;

        // Custom message for invalid token
        message = 'Forbidden: Token expired';
    } else {

        // Default message for unknown errors
        message = 'Unknown error'
    }

    // Send an HTTP response with the determined status and error message
    res.status(status).json(responseFormat(message, false, status));
}

// Function to get the appropriate status message based on the HTTP status code
function getStatusMessage(status) {

    switch (status) {
        case 400:
            return 'Bad request';
        case 401:
            return 'Unauthorized';
        case 404:
            return 'Not found';
        case 500:
            return 'Internal server error';
    }
}

//Export the functions for use in other parts of the application
module.exports = errorHandlingMiddleware;