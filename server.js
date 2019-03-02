const express = requrie('express');

const app = express();

app.use(express.json());

app.listen(6000, ()=>{console.log('app listen to 6000')})