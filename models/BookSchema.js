//pull in a refernce to mongoose to help wirte our Schema
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//inside of here, we create a new Schema(or model) of 
let Book = new Schema (
    {
        title:String,
        description:String,
        email:String,
        status:Boolean,
    }
);

//exporting a book model we can use to craft a book for the user 
module.exports = mongoose.model('books', Book);
