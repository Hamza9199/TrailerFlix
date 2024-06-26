
const FilmReducer = (state, action) => {
    switch (action.type) {
        case "GET_FILMS_START":
            return {
                filmovi: [],
                isFetching: true,
                error: false,
            }
        case "GET_FILMS_SUCCESS":
            return {
                filmovi: action.payload,
                isFetching: false,
                error: false,
            }
        case "GET_FILMS_FAILURE":
            return {
                filmovi: [],
                isFetching: false,
                error: true,
            }
        case "DELETE_FILM_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "DELETE_FILM_SUCCESS":
            return {
                ...state,
                isFetching: false,
                error: false,
                filmovi: state.filmovi.filter((film) => film._id !== action.payload),
            }
        case "DELETE_FILM_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        case "CREATE_FILM_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "CREATE_FILM_SUCCESS":
            return {
                filmovi: [...state.filmovi, action.payload],
                isFetching: false,
                error: false,
            }
        case "CREATE_FILM_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        case "UPDATE_FILM_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "UPDATE_FILM_SUCCESS":
            return {
                filmovi: state.filmovi.map((film) => film._id === action.payload._id && action.payload),
                isFetching: false,
                error: false,
            }
        case "UPDATE_FILM_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        default:
            return {...state};
    }
}

export default FilmReducer;