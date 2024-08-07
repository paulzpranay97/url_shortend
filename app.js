const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); 

const urlRoutes = require('./routes/url');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());

app.use('/api/url', urlRoutes);
app.use('/api/auth', authRoutes);

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
