const router = require('express').Router();
const {User, validateUser} = require('../models/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');

router.post('/', async (req, res)=>{
const body = _.pick(req.body, ['username','email','password','isAdmin']);
try{
    // Joi Validation
    const {error} = validateUser(body);
    if(error) return res.status(400).send(`${error.details[0].message} error`);

    // if user email exist return msg: user is already exist..
    let userEmail = await User.findOne({email: body.email});
    if(userEmail) return res.status(401).send({sucess: false, msg: `this user is already exist`});

    // if username exist return msg: user is already exist...
    let username = await User.findOne({username: body.username});
    if(username) return res.status(401).send({sucess: false, msg: `this user is already exist`});
    

    // Hashing password..
    const salt = await bcrypt.genSalt(10);
    let hashedPass = await bcrypt.hash(body.password, salt);
    body.password = hashedPass;

    let user = new User({...body});
    await user.save();

    // Create JWT
    const token = user.makeJWT();
    res.send({success: true, token: token, data: _.pick(user,['username', 'email', '_id', 'userImage'])});
}catch(ex){
    return res.send({exception: ex.errmsg || ex});
}
});

module.exports = router;