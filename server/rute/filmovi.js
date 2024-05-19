const ruter = require('express').Router();
const Film = require('../pogledi/Film');
const verifikacija = require('../verifikacijaTokena');


ruter.post('/dodaj', verifikacija, async (zahtjev, odgovor) => {
    if (zahtjev.korisnik.isAdmin) {
        const noviFilm = new Film(zahtjev.body);
        try {
            const sacuvaniFilm = await noviFilm.save();
            odgovor.status(201).json(sacuvaniFilm);
        } catch (greska) {
            odgovor.status(400).json(greska);
        }
    }
    else {
        odgovor.status(403).json('Nemate pristup');
    }

})


ruter.put('/:id', verifikacija, async (zahtjev, odgovor) => {
    if (zahtjev.korisnik.isAdmin) {
        try {
            const azuriraniFilm = await Film.findByIdAndUpdate(zahtjev.params.id, {
                $set: zahtjev.body,
            }, { new: true });
            odgovor.status(200).json(azuriraniFilm);
        } catch (greska) {
            odgovor.status(500).json(greska);
        }
    }
    else {
        odgovor.status(403).json('Nemate pristup');
    }
})


ruter.delete('/:id', verifikacija, async (zahtjev, odgovor) => {
    if (zahtjev.korisnik.isAdmin) {
        try {
            await Film.findByIdAndDelete(zahtjev.params.id);
            odgovor.status(200).json('Film je obrisan');
        } catch (greska) {
            odgovor.status(500).json(greska);
        }
    }
    else {
        odgovor.status(403).json('Nemate pristup');
    }
})

ruter.get('/nadji/:id', async (zahtjev, odgovor) => {
    try {
        const film = await Film.findById(zahtjev.params.id);
        odgovor.status(200).json(film);
    } catch (greska) {
        odgovor.status(500).json(greska);
    }
})

ruter.get('/random', async (zahtjev, odgovor) => {
    const tip = zahtjev.query.type;
    let film;
    try {
        if (tip === 'serije') {
            film = await Film.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ]);
        }
        else if(tip === 'filmovi') {
            film = await Film.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ]);
        }
        odgovor.status(200).json(film);
    } catch (greska) {
        odgovor.status(500).json(greska);
    }
})

ruter.get('/', verifikacija, async (zahtjev, odgovor) => {
    if (zahtjev.korisnik.isAdmin) {
        try {
            const filmovi = await Film.find();
            odgovor.status(200).json(filmovi);
        } catch (greska) {
            odgovor.status(500).json(greska);
        }
    }
    else {
        odgovor.status(403).json('Nemate pristup');
    }
})


module.exports = ruter;
