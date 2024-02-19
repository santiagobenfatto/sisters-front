import React from 'react';
import { Box, Button } from '@mui/material'
import { Instagram, WhatsApp, Email } from '@mui/icons-material'

const SocialMedia = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'flex-end',
            width: '100%'
        }}>
        <Button href='https://www.instagram.com/sisterstur/' target='_blank' rel='noopener' sx={{
            minWidth: '24px',
            color: 'black',
            opacity: 0.7,
            ":hover": {
                opacity : 1
            }
        }}>
        <Instagram/>
        </Button>
        <Button href='https://wa.me/+5491155234158' target='_blank' rel='noopener' sx={{
            minWidth: '24px',
            color: 'black',
            opacity: 0.7,
            ":hover": {
                opacity : 1
            }
        }}>
        <WhatsApp />
        </Button>
        <Button sx={{
            minWidth: '24px',
            color: 'black',
            opacity: 0.7,
            ":hover": {
                opacity : 1
            }
        }}>
        <Email />
        </Button>
        </Box>
    );
}

export default SocialMedia;
