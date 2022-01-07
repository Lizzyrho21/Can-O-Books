var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var seedRouter = require(`./routes/seed`);
var BookRouter = require('./routes/book');

var app = express();
let mongoose = require('mongoose');
const cors = require("cors"); // relax the security applied to our APIs



//pull in a ref to mongodb
let mongoDb = 'mongodb+srv://Lizzyboo22:Lizzyboo22@node-rest-shop.eaxp9.mongodb.net/Code401?retryWrites=true&w=majority';
mongoose.connect(mongoDb, {});
//set a connection property in the mongoose instance!
mongoose.connection.on(`error`, console.error.bind(console, `Mongo error`));



// const { auth } = require('express-oauth2-jwt-bearer');

app.use(cors());

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/seed', seedRouter);
app.use('/book', BookRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3004, () => {
  console.log(`This app is listening at http://localhost:3004`)
})

module.exports = app;
