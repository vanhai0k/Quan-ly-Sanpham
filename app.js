var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter= require('./routes/products');
var userRouter= require('./routes/user');
var apiR = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("uploads"));
app.use(session({
  secret:'phunganhtuan221003sondongsontayhanoi',
  resave:true,
  saveUninitialized:true
 }));
 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product',productRouter);
app.use('/user',userRouter);
app.use('/api',apiR)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);  

   // tùy chỉnh render cho phù hợp với api
  // Vd link : Get /api/users


  if(req.originalUrl.indexOf('/api')==0){
    // link bat dau bang /api va truy cap vao trang api ==> thong bao loi kieu api
    res.json( {
      status: err ,
      msg: err.message
    })
  }
  else{

    
  res.render('error');

  }
  
  // render the error page

  
});

module.exports = app;
