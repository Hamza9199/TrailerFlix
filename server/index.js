const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const autentifikacijaRuter = require('./rute/autentifikacija');
const korisniciRuter = require('./rute/korisnici');
const filmoviRuter = require('./rute/filmovi');
const listaRuter = require('./rute/liste');

dotenv.config();

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => console.error(err));

const corsOptions = {
    origin: ['http://localhost:9999', 'http://localhost:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/server/autentifikacija', autentifikacijaRuter);
app.use('/server/korisnici', korisniciRuter);
app.use('/server/filmovi', filmoviRuter);
app.use('/server/liste', listaRuter);

app.listen(8888, () => {
    console.log('Server is running on port 8888');
    console.log("Encryption secret:", process.env.tajna);
});
