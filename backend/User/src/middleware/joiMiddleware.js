
// Define Joi validation schema
const userValidationSchema = Joi.object({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net", "in", "org"] },
        })
        .required()
        .trim(),
    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .trim(),
    phone: Joi.string().required().trim(),
    // role: Joi.number().optional(),
    profilePic: Joi.string(),
});
