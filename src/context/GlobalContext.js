import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const startingState = {
    transactions: [
        { id: 1, title: 'WOW', amount:100},
        { id: 2, title: 'Nice', amount:10}
    ]
}

export const GlobalContext = createContext(startingState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, startingState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
      }}>
        {children}
      </GlobalContext.Provider>);

}