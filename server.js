const express = require('express')

const app = express();

app.listen(3000, () => {
    console.log('server listening for request on port 3000');
});

app.get('/greeting', (req, res) => {
    res.send('hola')
})

app.get('/greeting/:name', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = (req.params['total']/req.params['tipPercentage'])
    console.log(tip)
    res.send(`${tip}`)
})