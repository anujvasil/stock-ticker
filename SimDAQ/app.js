const express = require('express');
const app = express();
const prices = require('./data/prices.js')

function newPrice(){
    prices.forEach(element => (element.price = (element.price * (((Math.random()*10)+95)/100)).toFixed(2)));
}


app.get("/", (req, res) => {
    console.log("Responding")
    res.send("Hello")
})

app.get("/prices", (req, res) => {
    newPrice()
    res.json(prices)
    console.log("Responding")
})

app.get("/prices/:stock", (req, res) => {
    var temp = null;
    newPrice();
    prices.forEach(element => (
         temp = (element.stock === req.params.stock) ? element.price : temp
    ));

    temp === null ? res.send('null') : res.send(temp.toString())
})

app.listen(4000, () => {
    console.log("Listening")
});