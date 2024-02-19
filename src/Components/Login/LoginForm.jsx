import React, { useState } from 'react'
import { Box, Typography, TextField, Stack, Button } from '@mui/material'

const LoginForm = () => {

    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ error, setError ] = useState({
        error: false,
        message: ''
    })

    const emailValidation = (email) => {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i
        return regex.test(email)
    }

    const handleSubmit = async (e) => {
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
            try {
                const response = await fetch('http://localhost:8080/api/users/login', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: pass
                    })
                })
                if(response.status === 200){
                    location.href = '/'
                }
                setEmail('')
                setPass('')
            }    
            catch (error) {
            console.log(error)   
            }
        }
    }

    return (
        <Box sx={{
            boxSizing: 'border-box',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            justifySelf: 'flex-start',
            width: '450px',
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
                Ingreso administrador  &#128273;
            </Typography> 

            <Stack spacing={2} width={1} component='form' useFlexGap direction="column" alignItems="center" onSubmit={handleSubmit} sx={{
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
                maxHeight: '385px',
                alignItems: 'center',
                justifyContent: 'flex-start'

            }} noValidate autoComplete='off'>
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
                    label='Password'
                    type='password'
                    required
                    value={pass} 
                    onChange={(e)=> setPass(e.target.value)}/>

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
    )
}

export default LoginForm
