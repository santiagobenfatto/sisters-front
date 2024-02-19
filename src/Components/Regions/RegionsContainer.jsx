import React, { useEffect, useState, useContext } from 'react'
import { context } from '../Context/ContextProvider.jsx'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import RegionsIntro from './RegionsIntro.jsx'
import Regions from './Regions.jsx'



const RegionsContainer = () => {

    let { region } = useParams()
    const [ items, setItems ] = useState([])
    const { fetchCountry, fetchCountriesByContinent } = useContext(context)
    
    function randomChoice(inputs) {
        var randomNum = Math.random();
        var index = Math.floor(randomNum * inputs.length);
        return inputs[index];
    }

    useEffect(()=>{
        const fetchData = async (region) => {
            if(region == 'america'){
                const choice = randomChoice(['america del sur', 'america del norte'])
                const america = await fetchCountriesByContinent(choice)
                setItems(america)
            } else if (region == 'argentina'){
                const countries = await fetchCountry(region)
                setItems(countries)
            } else if (region == 'europa'){
                const europa = await fetchCountriesByContinent(region)
                setItems(europa)
            } else {
                const choice = randomChoice(['asia', 'oceania'])
                const othersContinents = await fetchCountriesByContinent(choice)
                setItems(othersContinents)
            } 
        }
        fetchData(region)
    }, [region])
        
    return (
        <Box sx={{
            display: 'flex',
            flexDirection:'column',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            overflow: 'hidden',
            paddingBottom:'0.5rem'
            }}>
                {!region ? <RegionsIntro /> : <Regions {...items}/>}       
        </Box>
    );
}

export default RegionsContainer