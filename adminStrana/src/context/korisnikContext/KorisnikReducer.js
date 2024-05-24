
const KorisnikReducer = (state, action) => {
    switch (action.type) {
        case "GET_KORISNIK_START":
            return {
                korisnici: [],
                isFetching: true,
                error: false,
            }
        case "GET_KORISNIK_SUCCESS":
            return {
                korisnici: action.payload,
                isFetching: false,
                error: false,
            }
        case "GET_KORISNIK_FAILURE":
            return {
                korisnici: [],
                isFetching: false,
                error: true,
            }
        case "DELETE_KORISNIK_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "DELETE_KORISNIK_SUCCESS":
            return {
                ...state,
                isFetching: false,
                error: false,
                korisnici: state.korisnici.filter((korisnik) => korisnik._id !== action.payload),
            }
        case "DELETE_KORISNIK_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        case "CREATE_KORISNIK_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "CREATE_KORISNIK_SUCCESS":
            return {
                korisnici: [...state.korisnici, action.payload],
                isFetching: false,
                error: false,
            }
        case "CREATE_KORISNIK_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        case "UPDATE_KORISNIK_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "UPDATE_KORISNIK_SUCCESS":
            return {
                korisnici: state.korisnici.map((korisnik) => korisnik._id === action.payload._id && action.payload),
                isFetching: false,
                error: false,
            }
        case "UPDATE_KORISNIK_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        default:
            return {...state};
    }
}

export default KorisnikReducer;