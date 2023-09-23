


// import user schema  for the validation requirements
const categorySchema = require('./joiCategorySchema.middleware')

// import error handling middleware
const errorHandlingMiddleware = require('./errorHandler.middleware');



async function validateUserDataMiddleware(req, res, next) {

    try {
        const categoryData = req.body;

        // import error handling middleware
        const { error } = categorySchema.validate(categoryData);

        if (error) {

            return errorHandlingMiddleware(new Error('ValidationError'), req, res, next)
        }
        next();
    } catch (error) {

        return errorHandlingMiddleware(error, req, res, next)
    }
}

//Export the functions for use in other parts of the application
module.exports = validateUserDataMiddleware;