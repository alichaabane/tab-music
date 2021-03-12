
const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    //Joi framework used for validate email and password or any fields
    register(req,res,next){
        const schema = Joi.object( {
            email : Joi.string().email(),
            password: Joi.string().regex (
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })
        const {error, value} = Joi.validate(req.body, schema)
        if (error){
            switch(error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `You password provided failed to match the following rules : 
                        <br>
                         1. It must contain ONLY the following characters: lower or upper case or numbers
                         2. It must be at least 8 characters in length and not greater then 32 characters
                         `
                    })
                    break
                
                default : 
                res.status(400).send({
                    error: 'Invalid registration information'
                })
            }
        }  else{
            next()
            }
    }
}