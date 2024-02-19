import React from 'react'
import Presentation from './Presentation'
import { Box } from '@mui/material'



const PresentationContainer = () => {
    return (
        <Box sx={{ 
            display: 'flex',
            flexGrow: 1,
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center'}}>
                <Presentation />
        </Box>
    )
}

export default PresentationContainer
