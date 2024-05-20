const ruter = require('express').Router();
const Korisnik = require('../pogledi/Korisnik');
const CryptoJS = require('crypto-js');
const verifikacija = require('../verifikacijaTokena');
const skipVerifikacija = require('../skipTokenVerifikacija');


ruter.put("/:id", skipVerifikacija , async (zahtjev, odgovor) => {
    if(zahtjev.korisnik.id === zahtjev.params.id || zahtjev.korisnik.isAdmin){
        if(zahtjev.body.password){
            zahtjev.body.password = CryptoJS.AES.encrypt(
                zahtjev.body.password,
                process.env.tajna
            ).toString();
        }

        try{
            const azuriranKorisnik = await Korisnik.findByIdAndUpdate(zahtjev.params.id, {
                $set: zahtjev.body,
            }, {new: true});
            odgovor.status(200).json(azuriranKorisnik);
        } catch(greska){
            odgovor.status(500).json(greska);
        }
    }
    else{
        odgovor.status(403).json("Možete ažurirati samo svoj profil");
    }
})

ruter.delete("/:id", skipVerifikacija, async (zahtjev, odgovor) => {
    if(zahtjev.korisnik.id === zahtjev.params.id || zahtjev.korisnik.isAdmin){
        try{
            await Korisnik.findByIdAndDelete(zahtjev.params.id);
            odgovor.status(200).json("Korisnik je obrisan");
        } catch(greska){
            odgovor.status(500).json(greska);
        }
    }
    else{
        odgovor.status(403).json("Možete obrisati samo svoj profil");
    }
})


ruter.get("/nadji/:id", async (zahtjev, odgovor) => {
    try{
        const korisnik = await Korisnik.findById(zahtjev.params.id);
        const {password, ...ostalo} = korisnik._doc;
        odgovor.status(200).json(ostalo);
    } catch(greska){
        odgovor.status(500).json(greska);
    }
})


ruter.get("/", skipVerifikacija, async (zahtjev, odgovor) => {
    const query = zahtjev.query.new;
    if(zahtjev.korisnik.isAdmin){
        try{
            const korisnici = query ? await Korisnik.find().sort({_id: -1}).limit(5) : await Korisnik.find();
            odgovor.status(200).json(korisnici);
        } catch(greska){
            odgovor.status(500).json(greska);
        }
    }
    else{
        odgovor.status(403).json("Niste autorizovani");
    }
})

ruter.get("/statistika", async (zahtjev, odgovor) => {
    const danasnjiDatum = new Date();
    const proslaGodina = new Date(danasnjiDatum.setFullYear(danasnjiDatum.getFullYear() - 1));

    const mjeseci = [
        "Januar", "Februar", "Mart", "April", "Maj", "Jun",
        "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
    ];

    try{
        const podaci = await Korisnik.aggregate([
            {
                $project: {
                    mjesec: {$month: "$createdAt"}
                }
            },
            {
                $group: {
                    _id: "$mjesec",
                    broj: {$sum: 1}
                }
            }
        ]);

        odgovor.status(200).json(podaci);
    } catch(greska){
        odgovor.status(500).json(greska);
    }
})


module.exports = ruter;
