var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var Groceries = require('../models/groceries');

mongoose.connect('mongodb://localhost/grocery_list');

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'))
})

router.get('/groceries', function(request, response){
  Groceries.find({}, function(err, groceries){
    if(err){
      console.log("error fetching data", err);
    }
    response.send(groceries);
  });
});


router.post('/add_grocery', function(request, response){
  console.log("adding this", request.body);
  var new_grocery = new Groceries({name: request.body.name, qty: request.body.qty});
  new_grocery.save(function(err){
    if(err){
      console.log("error saving to db", err);
    }
    response.send(new_grocery);
  })
});


router.post('/remove_grocery', function(request, response){
  console.log("removing this", request.body);
  Groceries.find({name: request.body.name}).remove(function(err){
    if(err){
      console.log('error deleting:', request.body.name);
    }
    response.sendStatus(200);
  })
});


router.post('/update_name', function(request, response){
  console.log("updating name of this:", request.body);
  Groceries.update({name: request.body.name}, {$set: {name: request.body.tempName}}, function(err){
    if(err){
      console.log('error updating name:', request.body.name, request.body.tempName);
    }
    response.sendStatus(200);
  });
});

router.post('/update_quantity', function(request, response){
  console.log("updating quantity of this:", request.body);
  Groceries.update({name: request.body.name}, {$set: {qty: request.body.tempQuantity}}, function(err){
    if(err){
      console.log('error updating name:', request.body.name, request.body.tempName);
    }
    response.sendStatus(200);
  });
});


module.exports = router;
