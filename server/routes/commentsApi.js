const express = require('express');
const router = express.Router();
const comments = require('../DataAccess/comments');

router.get('/', (req, res) => { 
    console.log('inside get') 
    comments.getAll().then(data => {
        console.log(data);
    res.send(JSON.stringify(data));
    })
});


module.exports = router;