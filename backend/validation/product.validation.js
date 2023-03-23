const joi = require("joi")

const schema = joi.object({

    product_name: joi.string().min(1).max(500).required(),
    product_description: joi.string().min(1).max(500).required(),
    product_price: joi.string().min(1).max(500).required(),
    product_category: joi.string().min(1).max(500).required(),
   
})

const product_validation = async (req, res, next) => {
    const value = await schema.validate(req.body)
    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next()
    }

}

module.exports = product_validation

