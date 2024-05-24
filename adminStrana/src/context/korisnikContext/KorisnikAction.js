
export const getKorisnikStart = () => ({
type: "GET_KORISNIK_START",
})

export const getKorisnikSuccess = (films) => ({
type: "GET_KORISNIK_SUCCESS",
payload: films,
})

export const getKorisnikFailure = () => ({
type: "GET_KORISNIK_FAILURE",
})

export const deleteKorisnikStart = () => ({
type: "DELETE_KORISNIK_START",
})

export const deleteKorisnikSuccess = (id) => ({
type: "DELETE_KORISNIK_SUCCESS",
payload: id,
})

export const deleteKorisnikFailure = () => ({
type: "DELETE_KORISNIK_FAILURE",
})

export const createKorisnikStart = () => ({
type: "CREATE_KORISNIK_START",
})

export const createKorisnikSuccess = (film) => ({
type: "CREATE_KORISNIK_SUCCESS",
payload: film,
})

export const createKorisnikFailure = () => ({
type: "CREATE_KORISNIK_FAILURE",
})

export const updateKorisnikStart = () => ({
type: "UPDATE_KORISNIK_START",
})


export const updateKorisnikSuccess = (film) => ({
type: "UPDATE_KORISNIK_SUCCESS",
payload: film,
})

export const updateKorisnikFailure = () => ({
type: "UPDATE_KORISNIK_FAILURE",
})



