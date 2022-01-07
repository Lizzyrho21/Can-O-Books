let express = require('express');
let router = express.Router();
let bookModel = require(`../models/BookSchema`);



  router.get('/', (req,res) => {
      //set a variable 'books' with instances of new book models
    books = [
        new bookModel({
            title: "Five Nights at Freddys: Security Breach",
          description: "Lorem Ipsum Lorem Ipsum",
          email:"JohnDoe@Gmail.com",
          status:true,
       
          }),
         new bookModel({
           title: "Zelda: Breath Of The Wild",
          description: "Lorem Ipsum Lorem Ipsum",
          email:"JaneDoe@Gmail.com",
          status:false,
       
          }),
          new bookModel({
            title: "The Hunger Games",
           description: "Lorem Ipsum Lorem Ipsum",
           email:"JaneDoe@Gmail.com",
           status:false,
        
           })
        ];
        //this .create creates the bookmodel and sets the array of book objecs to send the results to the server and our DB.
         bookModel.create(books, (errors, results) => {
             errors ? res.send(error) : res.send(results);
             } )
       })


    module.exports = router;