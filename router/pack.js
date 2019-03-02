const router = require('express').Router();
const _ = require('lodash');
const {Pack, validatePack} = require('../models/pack');

router.post('/', async (req,res)=>{
   try{
        // set body.userId as the userId that come from JWt..
        const payload = req.header('payload');
        req.body.userId = payload.id;
        const body = _.pick(req.body, ['pack-large', 'date', 'userId']);
        body.startedAs = body['pack-large'];
        // Joi Validation..
        const packError = validatePack(body).error;
        if(packError) return res.status(400).send(packError.details[0].message);

        // make toDo and save it..
        let pack = await new Pack(body);
        delete pack['__v'];
        await pack.save();

        // send response..
        return res.status(200).send({
            success: true, 
            data: {
                userId: pack.userId,
                pack
            }
        });
   }catch(err){
       console.log(err.errmsg || err);
       return res.send({err : err.errmsg || err})
   }
});

module.exports = router;