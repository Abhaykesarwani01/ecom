const express = require('express');
const cors = require('cors');

const app = express(); 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('E-commerce API is running');
});

app.get("/auth/signup", (req, res) => {
  res.send("Signup API endpoint is working!");
});

const authRouters = require('./routes/auth.route');
app.use('/auth', authRouters);

const userRouters = require('./routes/user.route');
app.use('/users', userRouters);

module.exports = app;