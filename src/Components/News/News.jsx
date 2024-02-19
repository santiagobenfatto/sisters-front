import React from 'react'
import { Typography, Divider, Box } from '@mui/material'
import { v4 as uuid } from 'uuid'


const News = ({items}) => {
    return (
        <>
        <Typography variant="h3" gutterBottom sx={{
            color: 'black',
            fontSize: '2.4rem',
            fontFamily: 'DM Serif Text',
            letterSpacing: '2px',
            textTransform: 'capitalize'
            }}>
            Novedades &#128240;
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
            {Array.isArray(items) && items.length > 0 ?  items.map(e => (
                <React.Fragment key={uuid()}>
                <Typography  gutterBottom variant="body2"  sx={{
                    color: 'black',
                    fontFamily: 'DM Serif Text',
                    fontSize: '1.250rem',
                    fontWeight: '500',
                    textTransform: 'capitalize'
                    }}>
                        {e.title}
                </Typography> 
                <Typography variant="body2" sx={{
                    color: 'black',
                    paddingRight: '6.5rem',
                    fontFamily: 'Poppins',
                    fontSize: '0.850rem',
                    marginBottom: '1.4rem'
                }}> 
                    {e.paragraph}
                </Typography>
                </React.Fragment>
            )) : <Typography>Theres no any news</Typography>
            
        }
        </Box>
        </>
    );
}

export default News;
