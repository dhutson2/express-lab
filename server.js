const express = require('express')

const app = express();

app.listen(3000, () => {
    console.log('server listening for request on port 3000');
});

app.get('/greeting', (req, res) => {
    res.send('hola hombre')
})