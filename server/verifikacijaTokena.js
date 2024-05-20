const jwt = require('jsonwebtoken');


const verifikacija =(zahtjev, odgovor, sljedeci) => {
    const autHeder = zahtjev.header.token;
    if (autHeder) {
        const token = autHeder.split(' ')[1];

        jwt.verify(token, process.env.tajna, (greska, korisnik) => {
            if (greska) {
                odgovor.status(403).json("Token nije validan");
            }

            else {
                zahtjev.korisnik = korisnik;
                sljedeci();
            }
        })
    }
    else {
        return odgovor.status(401).send("Niste autorizovani");
    }
}

module.exports = verifikacija;
