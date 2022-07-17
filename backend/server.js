require('dotenv').config();

const express = require('express');

//express app
const app = express();

//middleware
app.use((req,res,next)=> {
    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res) => {
    res.json({message:'Welcome'})
});

//listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on port :', process.env.PORT );
})