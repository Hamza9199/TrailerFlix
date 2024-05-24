import KorisnikReducer from './KorisnikReducer.js';
import { createContext, useReducer } from 'react';


const INITIAL_STATE = {
    korisnici: [],
    isFetching: false,
    error: false,
}


export const KorisnikContext = createContext(INITIAL_STATE);

export const KorisnikContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(KorisnikReducer, INITIAL_STATE);

    return (
        <KorisnikContext.Provider
            value={{
                korisnici: state.korisnici,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </KorisnikContext.Provider>
    );
}