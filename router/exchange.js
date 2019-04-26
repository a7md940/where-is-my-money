const router = require('express').Router();
const _ = require('lodash');
const {Exchange, validateExchange} = require('../models/exchange');
const {Pack} = require('../models/pack');

router.post('/', async (req,res)=>{
   try{
        // set body.userId as the userId that come from JWt..
        const payload = req.header('payload');
        req.body.userId = payload.id;
        let body = _.pick(req.body, ['exchanges', 'packId', 'userId']);
        
        // Joi Validation..
        const packError = validateExchange(body).error;
        if(packError) return res.status(400).send(packError.details[0].message);
        
        let pack = await Pack.findById(body.packId);
        if(!pack) return res.status(404).send({error: 'sorry this pack is not found'});
        if(pack['pack-large'] < body['exchanges']['amount']) return res.status(400)
            .send({error: 'sorry this pack is finished.'});
        pack['pack-large'] -= body['exchanges']['amount'];

        // make exchange and save it..
        let exchange = await new Exchange(body);
        await exchange.save();

        pack.exchanges.push(exchange);
        pack.save();
        
        // send response..
        return res.status(200).send({
            success: true, 
            data: {
                userId: exchange.userId,
                exchangeId: exchange._id,
                'packId': body['packId'],
                desc: exchange['exchanges']['desc'],
                date: exchange['exchanges']['date'],
                amount: exchange['exchanges']['amount'],
                pack: pack || "there's no pack for this exchange."
            }
        });
   }catch(err){
       let error;
       if(err.errmsg)
          error = err.errmsg;
        else 
            error = err;

       console.log('err:: ', error);
       return res.send(error)
   }
});

router.get('/:packId', async(req, res)=>{
    // set body.userId as the userId that come from JWt..
    const payload = req.header('payload');
    req.body.userId = payload.id;
    let packId = req.params.packId;

    let exchanges = await Exchange.find({packId: packId}, 'exchanges _id');
    if(!exchanges) return res.status(404).send({error: 'this pack did not exchange from yet.'});

    res.status(200).send({success: true, exchanges})
})
module.exports = router;