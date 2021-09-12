const Joi = require('joi');

const schema = Joi.object({
    lastName: Joi.string().min(3).max(32).required(),
    firstName: Joi.string().min(3).max(32).required(),
    middleName: Joi.string().allow(null).allow('').optional().min(3).max(32),
    citizenship: Joi.string().min(3).max(32).required(),
    passportSeria: Joi.string().min(2).required(),
    passportNumber: Joi.number().min(7).integer().required(),
    arrivalDate: Joi.string().required(),
    dateOfDeparture: Joi.string().allow(null).allow('').optional(),
    categoryNumber: Joi.string().min(3).max(50).required(),
    numberOfType: Joi.string().min(3).max(50).required(),
    number: Joi.number().integer().required()
})

const validate = (req, res, next) => {
    let data = schema.validate(req.body)
    if(data.error) {
        res.status(400).json({
            status: 400, 
            message: data.error 
        })
    } else {
        next()
    } 
}

module.exports = { validate }