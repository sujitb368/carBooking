
const Joi = require('joi');

const schema = Joi.object({
    userId: Joi.string().required(),
    licenceType: Joi.string().valid('Type1', 'Type2', 'Type3').required(), // You can specify valid values here
    kycDocument: Joi.string().required(),
    documentId: Joi.string().required(),
});

const validateFields = (data) => {
    return schema.validate(data);
};

export default validateFields;

