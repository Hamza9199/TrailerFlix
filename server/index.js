const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const autentifikacijaRuter = require('./rute/autentifikacija');


dotenv.config();


mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => console.error(err));


app.use(express.json());
app.use('/server/autentifikacija', autentifikacijaRuter);

app.listen(8888, () => {
    console.log('Server is running on port 8888');
});


