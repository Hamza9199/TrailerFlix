const skipTokenVerifikacija= (zahtjev, odgovor, sljedeci) => {
    zahtjev.user = { id: "664b3933f2c50d459e6e47b6" };
    sljedeci();
};

module.exports = skipTokenVerifikacija;