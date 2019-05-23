const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi');

const exchangeSchema = new Schema({
    'exchanges':{
        type: {
            'amount': {
                type: Number,
                required: true
            },
            'date': {
                type: Date,
                default: Date.now()
            },
            'desc': {
                type: String,
                required: true
            }
        },
        required: true,
    },
    'exType': {
        type: Number,
        required: false,
        default: 0
    },
    'packId': {
        type: Schema.Types.ObjectId,
        ref: 'Packs',
    }
});

const Exchange = mongoose.model('exchanges', exchangeSchema);

function validateExchange(bodyRequest){
    const joiSchema = {
        'packId': joi.string().required(),
        userId: joi.string().required(),
        exchanges: joi.object({
            date: joi.date(),
            desc: joi.string().required(),
            amount: joi.number().required(),
            exType: joi.number()
        }),
        exType: joi.number()
    }
    return joi.validate(bodyRequest, joiSchema);
}

module.exports.Exchange = Exchange;
module.exports.validateExchange = validateExchange;