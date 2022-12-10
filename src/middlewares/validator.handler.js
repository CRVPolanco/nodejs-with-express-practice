const boom = require('@hapi/boom');

const validatorHandler = (schema, property) => (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);

    if(error) return next(boom.badRequest(error));

    next();
}

module.exports = { validatorHandler };
