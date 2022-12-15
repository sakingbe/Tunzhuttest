import { Component, createContext } from 'react'

const AuthContext = createContext ({
    user: null, 
    login: () => {},
    logout: () => {},
    authReady: false
})

export const AuthContextProvider = () => {
    return ( 
        
    <AuthContext.Provider></AuthContext.Provider>

  )  
}