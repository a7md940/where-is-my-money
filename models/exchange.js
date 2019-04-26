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
            },
            'exType': {
                type: String,
                required: false
            }
        },
        required: true,
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
            exType: joi.string()
        })
    }
    return joi.validate(bodyRequest, joiSchema);
}

module.exports.Exchange = Exchange;
module.exports.validateExchange = validateExchange;