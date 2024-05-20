const jwt = require('jsonwebtoken');

const verifikacija = (zahtjev, odgovor, sljedeci) => {
    const autHeder = zahtjev.headers.token;
    if (autHeder) {
        const token = autHeder.split(' ')[1];

        jwt.verify(token, process.env.tajna, (greska, korisnik) => {
            if (greska) {
                return odgovor.status(403).json("Token nije validan");
            }

            zahtjev.korisnik = korisnik;
            sljedeci();
        });
    } else {
        return odgovor.status(401).json("Niste autorizovani");
    }
};

module.exports = verifikacija;
