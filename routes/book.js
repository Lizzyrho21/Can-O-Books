var express = require('express');
var router = express.Router();
const db = require('../app'); //connect to the database
let Books = require('../models/BookSchema'); //book schema 


//TODO: When the user sends a GET request to the /books route, 
// my backend express server should retireve all the books belonging to 
// the user from the books database (mongodb), and return them as JSON 
// in the response object.

//we send a router GET request which takes that ref to the shcema model and finds all the results 
//GETS all entries!!
router.get("/", function(req,res,next) {
    Books.find({}, function(err, result) {
        if(err) return handleError(err);
        console.log(result);
        res.send(result);//sends the results
    });
});

//Take a look at how we request information from the axios http req in older labs

// POST request
 router.post('/', (req,res) => {
     let bodyData = req.body;// body of server
     Books.create(bodyData, (errors, results) => {
         errors ? res.send(error) : res.send(results);
     })
 })

module.exports = router;