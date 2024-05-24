import FilmReducer from './FilmReducer';
import { createContext, useReducer } from 'react';


const INITIAL_STATE = {
    filmovi: [],
    isFetching: false,
    error: false,
}


export const FilmContext = createContext(INITIAL_STATE);

export const FilmContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FilmReducer, INITIAL_STATE);

    return (
        <FilmContext.Provider
            value={{
                filmovi: state.filmovi,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </FilmContext.Provider>
    );
}