const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const connectDB = require('./dbconnections/db');
const indexRouter = require('./routes/index');
const projectsRouter = require('./routes/projects');
const testimonialsRouter = require('./routes/testimonials');
const faqsRouter = require('./routes/faqs');
const usersRouter = require('./routes/users');
const testAPIRouter = require('./routes/testApi');
  // Ensure this route file exists
  // Ensure this route file exists
const createError = require('http-errors');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/testimonials', testimonialsRouter);
app.use('/faqs', faqsRouter);
app.use('/users', usersRouter);
app.use('/testApi', testAPIRouter);


app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
