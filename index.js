const express = require('express');
const app = express();

//REG API
app.get('/viewgrade', (req, res) => {
    res.send('INSIDE ADD GRADE API..');
});

app.get('/viewquestion', (req, res) => {
    res.send('INSIDE ADD Question API..');
});


// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5002, () =>
    console.log('EXPRESS Server Started at Port No: 5002'));


