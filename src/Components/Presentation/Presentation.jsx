import React from 'react'
import { Box, Typography } from '@mui/material'

const Presentation = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            marginTop: '-3rem'
            }}>
            <Typography variant='body2' sx={{
                fontFamily: 'Poppins',
                fontSize:'0.9rem',
                color: 'black',
                marginLeft: '2rem',
                opacity: '0.7'
            }}>
                Sitio de viajes
            </Typography> 
            <Typography variant='h3' gutterBottom sx={{
                fontFamily: 'DM Serif Text',
                color: 'black',
                fontSize: '2.4rem',
                marginLeft:'2rem',
            }}>
                El mundo es para recorrerlo, nosotras te guiamos.
            </Typography>
            <Typography  variant='body2' sx={{
                fontFamily: 'Poppins',
                fontSize:'0.9rem',
                color: 'black',
                marginLeft: '2rem',
                opacity: '0.7'
            }}>
            Descubre destinos increíbles y aventuras únicas con nuestro equipo apasionado. Desde la planificación hasta el regreso, estamos aquí para hacer tus sueños de viaje realidad. Únete a la hermandad viajera y comencemos a explorar juntos.
            </Typography>
        </Box>
    )
}

export default Presentation
