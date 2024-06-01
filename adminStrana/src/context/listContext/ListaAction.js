export const getListsStart = () => ({
    type: "GET_LISTE_START",
});

export const getListsSuccess = (lists) => ({
    type: "GET_LISTE_SUCCESS",
    payload: lists,
});

export const getListsFailure = () => ({
    type: "GET_LISTE_FAILURE",
});

export const createListStart = () => ({
    type: "CREATE_LISTE_START",
});

export const createListSuccess = (list) => ({
    type: "CREATE_LISTE_SUCCESS",
    payload: list,
});

export const createListFailure = () => ({
    type: "CREATE_LISTE_FAILURE",
});

export const updateListStart = () => ({
    type: "UPDATE_LISTE_START",
});

export const updateListSuccess = (list) => ({
    type: "UPDATE_LISTE_SUCCESS",
    payload: list,
});

export const updateListFailure = () => ({
    type: "UPDATE_LISTE_FAILURE",
});

export const deleteListStart = () => ({
    type: "DELETE_LISTE_START",
});

export const deleteListSuccess = (id) => ({
    type: "DELETE_LISTE_SUCCESS",
    payload: id,
});

export const deleteListFailure = () => ({
    type: "DELETE_LISTE_FAILURE",
});
