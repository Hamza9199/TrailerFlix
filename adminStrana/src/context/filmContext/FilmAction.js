
export const getFilmsStart = () => ({
type: "GET_FILMS_START",
})

export const getFilmsSuccess = (films) => ({
type: "GET_FILMS_SUCCESS",
})

export const getFilmsFailure = () => ({
type: "GET_FILMS_FAILURE",
})
