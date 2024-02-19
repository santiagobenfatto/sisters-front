import React, { createContext } from 'react';

export const context = createContext()
const { Provider } = context


const ContextProvider = ({children}) => {
    
    const fetchCountriesByContinent = async (continent) => {
        const response = await fetch(`http://localhost:8080/api/continents/continent/${continent}`, {
            method: 'GET',
            credentials: 'include'
        })
        const data = await response.json()
        const result = await data.data
        return result
    }
    const fetchCountry = async (country) => {
        const response = await fetch(`http://localhost:8080/api/countries/country/${country}`, {
            method: 'GET',
            credentials: 'include'
        })
        const data = await response.json()
        const result = await data.data
        return result
    }

    const fetchNews = async () => {
        const response = await fetch(`http://localhost:8080/api/articles`, {
            method: 'GET',
            credentials: 'include'
        })
        const data = await response.json()
        const result = await data.data
        return result 
    }

    const fetchAboutUs = async () => {
        const response = await fetch(`http://localhost:8080/api/about`, {
            method: 'GET',
            credentials: 'include'
        })
        const data = await response.json()
        const result = await data.data
        return result 
    }

    const contextValue = {
        fetchCountry,
        fetchCountriesByContinent,
        fetchNews,
        fetchAboutUs
    }
  

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default ContextProvider
