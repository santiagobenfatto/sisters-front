import React from 'react'
import { Container } from '@mui/material'
import LoginForm from './LoginForm.jsx'

const LoginFormContainer = () => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <LoginForm />
        </Container>
    )
}

export default LoginFormContainer
