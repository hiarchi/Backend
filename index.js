var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/collectionName", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
function CompletePayment(res) {
    res.send("Payment Done");
}
app.post('/', jsonParser, function (req, res) {
    console.log(req.body);
    CompletePayment(res);
    // res.send("Payment Done");
});
app.listen(5000);