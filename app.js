const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
dotenv.config({ path: './.env' });

const viewRouter = require('./router/viewRouter');

const app = express();
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.urlencoded({extended: true}))
  
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.log('DB Failed', err));

app.use('/',viewRouter);

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`Server Runnig on ${port}...`);
});

module.exports=app;