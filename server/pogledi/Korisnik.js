const mongoose = require('mongoose');

const KorisnikSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        unique:true
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6,
        unique:true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    profilePicture: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


module.exports = mongoose.models.Korisnik || mongoose.model('Korisnik', KorisnikSchema);