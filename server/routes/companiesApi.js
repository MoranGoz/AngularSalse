const express = require('express');
const router = express.Router();
const company = require('../DataAccess/companies');

router.get('/', (req, res) => { 
    company.getAll().then(data => {
    res.send(JSON.stringify(data));
    })
});

router.post('/add', (req, res) => {
  company.create(req.body).then(data => {
    res.send(JSON.stringify(data));
  })
});

 router.put('/update/:id',(req,res)=>{
    company.update(req.body,req.params.id).then(data => {
        res.send(JSON.stringify(data));
        })   
 });

router.delete('/delete/:id', (req, res) => {
    company.delete(req.params.id).then(data => {
    res.send(JSON.stringify(data));
    })
});

module.exports = router;