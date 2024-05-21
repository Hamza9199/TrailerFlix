const ruter = require('express').Router();
const Lista = require('../pogledi/lista');
const verifikacija = require('../verifikacijaTokena');
const skipVerifikacija = require('../skipTokenVerifikacija');

ruter.post('/', verifikacija, async (zahtjev, odgovor) => {
    if(zahtjev.korisnik.isAdmin){
        const lista = new Lista(zahtjev.body)
        try{
            const sacuvanaLista = await lista.save();
            odgovor.json(sacuvanaLista);
        } catch(greska){
            odgovor.json({poruka: greska});
        }
    }
    else{
        odgovor.status(403).json({poruka: 'Nemate pristup ovom resursu'});
    }
})


ruter.delete('/:id', verifikacija, async (zahtjev, odgovor) => {
    if(zahtjev.korisnik.isAdmin){
        try{
            await Lista.findByIdAndDelete(zahtjev.params.id);
            odgovor.json({poruka: 'Lista uspješno obrisana'});
        } catch(greska){
            odgovor.json({poruka: greska});
        }
    }
    else{
        odgovor.status(403).json({poruka: 'Nemate pristup ovom resursu'});
    }
})

ruter.get('/', verifikacija, async (zahtjev, odgovor) => {
    const tipQuery = zahtjev.query.type;
    const genreQuery = zahtjev.query.genre;
    let lista = [];
    try{
        if(tipQuery){
            if(genreQuery){
                lista = await Lista.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: tipQuery, genre: genreQuery}}
                ])
            }
            else{
                lista = await Lista.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: tipQuery}}
                ])
            }
        }
        else{
            lista = await Lista.aggregate([
                {$sample: {size: 10}}
            ])
        }
        odgovor.json(lista);
    } catch(greska){
        odgovor.status(500).json(greska);
    }
})

module.exports = ruter;