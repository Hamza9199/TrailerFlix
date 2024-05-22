
export const getFilmsStart = () => ({
type: "GET_FILMS_START",
})

export const getFilmsSuccess = (films) => ({
type: "GET_FILMS_SUCCESS",
payload: films,
})

export const getFilmsFailure = () => ({
type: "GET_FILMS_FAILURE",
})

export const deleteFilmStart = () => ({
type: "DELETE_FILM_START",
})

export const deleteFilmSuccess = (id) => ({
type: "DELETE_FILM_SUCCESS",
payload: id,
})

export const deleteFilmFailure = () => ({
type: "DELETE_FILM_FAILURE",
})

export const createFilmStart = () => ({
type: "CREATE_FILM_START",
})

export const createFilmSuccess = (film) => ({
type: "CREATE_FILM_SUCCESS",
payload: film,
})

export const createFilmFailure = () => ({
type: "CREATE_FILM_FAILURE",
})

export const updateFilmStart = () => ({
type: "UPDATE_FILM_START",
})


export const updateFilmSuccess = (film) => ({
type: "UPDATE_FILM_SUCCESS",
payload: film,
})

export const updateFilmFailure = () => ({
type: "UPDATE_FILM_FAILURE",
})



