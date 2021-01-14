var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {

    let URL = 'http://localhost:4000/prices';

    axios.get(URL)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });

});



module.exports = router;



