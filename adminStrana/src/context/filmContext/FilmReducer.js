
const FilmReducer = (state, action) => {
    switch (action.type) {
        case "GET_FILMS_START":
            return {
                films: [],
                isFetching: true,
                error: false,
            }
        case "GET_FILMS_SUCCESS":
            return {
                films: action.payload,
                isFetching: false,
                error: false,
            }
        case "GET_FILMS_FAILURE":
            return {
                films: null,
                isFetching: false,
                error: true,
            }
        default:
            return {...state};
    }
}

export default FilmReducer;