
const ListaReducer = (state, action) => {
    switch (action.type) {
        case "GET_LISTE_START":
            return {
                films: [],
                isFetching: true,
                error: false,
            }
        case "GET_LISTE_SUCCESS":
            return {
                films: action.payload,
                isFetching: false,
                error: false,
            }
        case "GET_LISTE_FAILURE":
            return {
                films: null,
                isFetching: false,
                error: true,
            }
        case "DELETE_LISTE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "DELETE_LISTE_SUCCESS":
            return {
                films: state.films.filter((film) => film._id !== action.payload),
                isFetching: false,
                error: false,
            }
        case "DELETE_LISTE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        case "CREATE_LISTE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "CREATE_LISTE_SUCCESS":
            return {
                films: [...state.films, action.payload],
                isFetching: false,
                error: false,
            }
        case "CREATE_LISTE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        case "UPDATE_LISTE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "UPDATE_LISTE_SUCCESS":
            return {
                films: state.films.map((film) => film._id === action.payload._id && action.payload),
                isFetching: false,
                error: false,
            }
        case "UPDATE_LISTE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        default:
            return {...state};
    }
}

export default ListaReducer;