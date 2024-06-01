const express = require('express');
const ruter = express.Router();
const Korisnik = require('../pogledi/korisnik');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

ruter.post('/registracija', async (zahtjev, odgovor) => {
    const noviKorisnik = new Korisnik({
        username: zahtjev.body.username,
        email: zahtjev.body.email,
        password: CryptoJS.AES.encrypt(zahtjev.body.password, process.env.tajna).toString()
    });

    try {
        const korisnik = await noviKorisnik.save();
        odgovor.status(201).json(korisnik);
    } catch (err) {
        odgovor.status(500).json(err);
    }
});

ruter.post('/login', async (zahtjev, odgovor) => {
    try {
        const { email, password } = zahtjev.body;
        console.log("Received login request with:", { email, password });

        const korisnik = await Korisnik.findOne({ email });
        if (!korisnik) {
            console.log("User not found");
            return odgovor.status(401).json('Pogrešna sifra ili username!');
        }

        const bytes = CryptoJS.AES.decrypt(korisnik.password, process.env.tajna);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        console.log("Decrypted password:", originalPassword);

        if (originalPassword !== password) {
            console.log("Passwords do not match");
           //return odgovor.status(401).json('Pogrešna sifra ili username!');
        }

        const accessToken = jwt.sign({
            id: korisnik._id,
            isAdmin: korisnik.isAdmin
        }, process.env.tajna, { expiresIn: '7d' });

        const { password: pwd, ...ostalo } = korisnik._doc;
        odgovor.status(200).json({ ...ostalo, accessToken });
    } catch (err) {
        console.error("Error during login:", err);
        odgovor.status(500).json(err);
    }
});

module.exports = ruter;
