import React, { useState } from 'react'
import { Box, Typography, TextField, Stack, Button } from '@mui/material'

const ContactForm = () => {

    const [ email, setEmail ] = useState('')
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ error, setError ] = useState({
        error: false,
        message: ''
    })

    const emailValidation = (email) => {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i
        return regex.test(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!emailValidation(email)){
            setError({
                error:true,
                message: 'Introduce un email válido'
            })
        }else {
            setError({
                error: false,
                message: ''
            })
            setEmail('')
            setName('')
            setPhone('')
        }
    }


    return (
        <Box sx={{
            boxSizing: 'border-box',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '450px',
            flexGrow: 1,
            height: '70vh',
            maxHeight: '70vh',
            borderRadius: '1rem',
            marginTop: '1rem',
            marginBottom: '2.2rem',
            paddingBottom: '1rem',
            paddingTop: '2.5rem',
            paddingRight: '2rem',
            paddingLeft: '2rem'
        }}>
            <Typography variant="h3" gutterBottom sx={{
                fontFamily: 'DM Serif Text',
                color: 'black',
                fontSize: '1.6rem',
                marginBottom: '24px'
            }}>
                Dejanos tu consulta &#128228;
            </Typography> 

            <Stack spacing={0} width={1} component='form' useFlexGap direction="column" alignItems="center" onSubmit={handleSubmit} sx={{
                '& .MuiTextField-root': { width: '100%'},
                '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '2px',
                    borderColor: 'rgba(0, 66, 186, 0.50)'
                },
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'rgba(0, 66, 186, 1)',
                    }
                },
                boxSizing: 'border-box',
                width: '90%',
                height: '385px',
                maxHeight: '385px',
                alignItems: 'center',
                justifyContent: 'space-between'

            }} noValidate autoComplete='off'>
                <TextField
                    size='small'
                    label='Nombre y apellido'
                    type='text'
                    required
                    value={name} 
                    onChange={(e)=> setName(e.target.value)}/>


                <TextField sx={{boxSizing: 'border-box'}}
                    size='small'
                    label='Correo electrónico'
                    type='email'
                    value={email}
                    error={error.error}
                    helperText={error.message}
                    required 
                    onChange={(e)=> setEmail(e.target.value)}/>

                <TextField 
                    size='small'
                    label='Celular'
                    type='tel'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    value={phone}
                    required 
                    onChange={(e)=> setPhone(e.target.value)}/>
                
                <TextField 
                size='small'
                label='Mensaje'
                type='text'
                value={message}
                multiline
                rows={5}
                required
                onChange={(e) => setMessage(e.target.value)}/>

                <Button
                    type='submit'
                    variant='contained'
                    sx={{
                        alignSelf: 'flex-end',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        width: '150px'
                    }}
                >
                    Enviar
                </Button>
            </Stack>
        </Box>
    );
}

export default ContactForm;
