const express = require('express');
const router = express.Router();
const company = require('../DataAccess/company');

/* GET api listing. */
router.get('/company', (req, res) => {
 res.send(JSON.stringify(DOGS));
});

router.get('/edit-company/:id', (req, res) => {
    var dogIndex = DOGS.findIndex((dog) => dog.id.toString() == req.params.id.toString());
   console.log("dfhdfhf");
   res.send(JSON.stringify(DOGS[dogIndex]));
   });

router.post('/add-company', (req, res) => {
   var dog = req.body.dog;
   dog.id = generateId();
   DOGS.push(dog);
   res.send(JSON.stringify(dog)); 
});

router.put('/edit-company/:id', (req, res) => {
    console.log("im on the server")
   var dogIndex = DOGS.findIndex((dog) => dog.id.toString() == req.params.id.toString());
   dogId = DOGS[dogIndex].id;
   DOGS[dogIndex] = req.body.dog;
   DOGS[dogIndex].id = dogId;
   res.send(JSON.stringify(DOGS));
});

router.delete('/delete-company/:id', (req, res) => {
   var dogIndex = DOGS.findIndex((dog) => dog.id.toString() == req.params.id.toString());
   DOGS.splice(dogIndex, 1);
   res.status(200).send(DOGS);
});


module.exports = router;