const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(`mongodb://localhost:27017/wimm`)
    .then((res)=>{
        console.log(':: mongoDB Connected.');
    })
    .catch((err)=> console.log(`error:: `,err));
// ROUTES
const signUpRoute = require('./router/signup');
const signInRoute = require('./router/signin');
const packRoute = require('./router/pack');
const exchangeRoute = require('./router/exchange');
// Middlewares
const authMiddleWare = require('./middlewares/auth');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// START:: ================= >>> App ROUTES <<< ========================
app.use('/api/signup', signUpRoute);
app.use('/api/signin', signInRoute);
app.use('/api/pack', authMiddleWare, packRoute);
app.use('/api/exchange', authMiddleWare, exchangeRoute);
// END:: ================= >>> App ROUTES <<< ========================

app.listen(PORT, ()=>{console.log(`:: app listen to ${PORT}`)})