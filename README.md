# TrailerFlix 🎬

TrailerFlix je web aplikacija za pregled i organizaciju filmskih trejlera, razvijena u okviru kursa Web dizajna na Politehničkom fakultetu Univerziteta u Zenici. Ova aplikacija omogućava korisnicima pretragu i pregled trejlera filmova, uz opcije autentifikacije i personalizacije putem korisničkog dashboarda. Administratori imaju pristup admin panelu za upravljanje korisnicima i sadržajem.

## 🚀 Tehnologije

**Frontend:**
- [React](https://reactjs.org/) - JavaScript biblioteka za izradu korisničkih interfejsa

**Backend:**
- [Node.js](https://nodejs.org/) - Platforma za izradu server-side aplikacija
- [Express](https://expressjs.com/) - Minimalistički web framework za Node.js

**Baza podataka:**
- [MongoDB](https://www.mongodb.com/) - NoSQL baza podataka za pohranu podataka

**Sigurnost:**
- [JWT (JSON Web Token)](https://jwt.io/) - Za autentifikaciju korisnika
- [CryptoJS](https://cryptojs.gitbook.io/docs/) - Za hashovanje šifri

## ⚙️ Ključne Karakteristike

- **Pretraga i pregled trejlera:** Korisnici mogu pretraživati i gledati trejlere različitih filmova.
- **Autentifikacija:** Sistem registracije i prijave korisnika koristeći JWT.
- **Korisnički Dashboard:** Personalizirani prostor gdje korisnici mogu upravljati svojim preferencijama.
- **Admin Panel:** Omogućava administratorima upravljanje korisnicima i filmskim sadržajem.
- **Sigurnosne mjere:** Šifre korisnika se hashiraju pomoću CryptoJS, a pristup zaštićenim rutama osigurava JWT.


## 📂 Struktura Projekta

```
TrailerFlix/
├── client/                  # Frontend aplikacija (React)
│   ├── public/
│   └── src/
├── server/                  # Backend aplikacija (Node.js + Express)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── .env                     # Environment varijable
├── package.json             # Projektne zavisnosti za backend
└── README.md                # Dokumentacija projekta
```

## 🧑‍💻 Postavljanje Projekta

### 1. Kloniraj Repo

```bash
git clone https://github.com/Hamza9199/TrailerFlix
cd TrailerFlix
```

### 2. Instaliraj Zavisnosti

- **Backend:**

```bash
cd server
npm install
```

- **Frontend:**

```bash
cd client
npm install
```

### 3. Pokreni Aplikaciju

- **Backend:**

```bash
cd server
npm start
```

- **Frontend:**

```bash
cd client
npm start
```

### 4. Otvori u Pregledniku

Pokrenutu aplikaciju možeš pregledati na `http://localhost:3000`.

## 📝 Licenca

Ovaj projekt je licenciran pod MIT licencom.
