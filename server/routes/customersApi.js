const express = require('express');
const router = express.Router();
var customer = require('../DataAccess/customers');

router.get('/', (req, res) => { 
    console.log('inside get');
    customer.getAll().then(data => {
        console.log(data);
    res.send(JSON.stringify(data));
    })
});
router.post('/add', (req, res) => {
    customer.create(req.body).then(data => {
    console.log(data);
    res.send(JSON.stringify(data));
  })
});
router.put('/update/:id',(req,res)=>{
    console.log(req);
    customer.update(req.body,req.params.id).then(data => {
       console.log(data);
       res.send(JSON.stringify(data));
       })   
});
router.delete('/delete/:id', (req, res) => {
    customer.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    })
});

module.exports = router;