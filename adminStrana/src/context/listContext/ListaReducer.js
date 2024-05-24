const ListReducer = (state, action) => {
    switch (action.type) {
        case "GET_LISTE_START":
            return {
                ...state,
                lists: [],
                isFetching: true,
                error: false,
            };
        case "GET_LISTE_SUCCESS":
            return {
                ...state,
                lists: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_LISTE_FAILURE":
            return {
                ...state,
                lists: [],
                isFetching: false,
                error: true,
            };
        case "CREATE_LISTE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "CREATE_LISTE_SUCCESS":
            return {
                ...state,
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_LISTE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "UPDATE_LISTE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPDATE_LISTE_SUCCESS":
            return {
                ...state,
                lists: state.lists.map((list) =>
                    list._id === action.payload._id ? action.payload : list
                ),
                isFetching: false,
                error: false,
            };
        case "UPDATE_LISTE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "DELETE_LISTE_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_LISTE_SUCCESS":
            return {
                ...state,
                lists: state.lists.filter((list) => list._id !== action.payload),
                isFetching: false,
                error: false,
            };
        case "DELETE_LISTE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        default:
            return state;
    }
};

export default ListReducer;