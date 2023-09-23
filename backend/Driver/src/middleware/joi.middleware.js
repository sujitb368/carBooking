
const joi = require('joi');



// Define the user schema with preferred validation options
const categorySchema = {
    categoryGroup: joi.string().required(),
    categoryList: joi.array().required(),

}

//Export the functions for use in other parts of the application
module.exports = categorySchema;