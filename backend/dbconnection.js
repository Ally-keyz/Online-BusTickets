const mongoose = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;
""

const uri ="mongodb+srv://alpe:alpe123@eticketproject.dyv7h1i.mongodb.net/?retryWrites=true&w=majority&appName=EticketProject";
    

 const connection= mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));



