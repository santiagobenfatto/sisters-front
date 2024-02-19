import React from 'react'
import { Typography, Divider, Box} from '@mui/material'
import { v4 as uuid } from 'uuid'



const Regions = ({name, content}) => {
    return (
        <>
        <Typography variant="h3" gutterBottom sx={{
        color: 'black',
        fontSize: '2.4rem',
        fontFamily: 'DM Serif Text',
        letterSpacing: '2px',
        textTransform: 'capitalize'
        }}>
            {name}
        </Typography>
        <Divider sx={{
            width: '80%',
            marginBottom: '1rem',
            borderColor: 'rgba(0, 0, 0, 0.37)'
        }}/>
        <Box sx={{
            display: 'flex',
            flexDirection:'column',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            overflow: 'hidden',
            overflowY: 'auto',
            paddingBottom:'0.5rem'
        }}>
        {Array.isArray(content) && content.length > 0 ? (
            content.map( item => (
                <React.Fragment key={uuid()}>
                <Typography gutterBottom variant="body2" sx={{
                color: 'black',
                fontFamily: 'DM Serif Text',
                fontSize: '1.250rem',
                fontWeight: '500',
                letterSpacing: '1px',
                textTransform: 'capitalize'
                }}>
                    {item.title}
                </Typography>
                <Typography variant="body2" sx={{
                    color: 'black',
                    paddingRight: '6.5rem',
                    fontFamily: 'Poppins',
                    fontSize: '0.850rem',
                    marginBottom: '1.4rem'
                }}> 
                {item.paragraph}
                </Typography>   
                </React.Fragment>
            ))) : null
        }
        </Box>
        </>
    )
}

export default Regions;
