import React, {useState, useEffect, useContext } from 'react'
import { context } from '../Context/ContextProvider.jsx'
import { Box } from '@mui/material'
import AboutUs from './AboutUs.jsx'


const AboutUsContainer = () => {

    const { fetchAboutUs } = useContext(context)
    const [ items, setItems ] = useState ([])
    
    useEffect(() => {
        const fetchData = async () => {
            const newsData = await fetchAboutUs()
            setItems(newsData)
        }
        fetchData()
    }, [])
    
    return (
            <Box sx={{
                boxSizing: 'border-box',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(5px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '85%',
                height: '70vh',
                maxHeight: '70vh',
                borderRadius: '1rem',
                marginTop: '1rem',
                marginBottom: '2.2rem',
                paddingBottom: '1rem',
                paddingTop: '2.5rem',
                paddingRight: '1rem',
                paddingLeft: '3rem'
            }}>
                <AboutUs items={items}/>
        </Box>
    );
}

export default AboutUsContainer;
