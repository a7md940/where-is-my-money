const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi');

const packSchema = new mongoose.Schema({
    'pack-large': {
        required: true,
        type: Number,
    },
    'date': {
        type: Date,
        default: Date.now()
    },
    'exchanges': [{
        type: Schema.Types.ObjectId,
        ref: 'Exchanges',
    }],
    'startedAs': {
        type: Number,
        required: true
    }
})
const Pack = mongoose.model('pack', packSchema);

function validatePack(bodyRequest){
    const joiSchema = {
        userId: joi.string().required(),
        'pack-large': joi.number().required().min(3),
        date: joi.date(),
        exchanges: joi.object(),
        startedAs: joi.number()
    }
    return joi.validate(bodyRequest, joiSchema);
}
module.exports.Pack = Pack;
module.exports.validatePack = validatePack;