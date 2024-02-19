import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import brasilImage from './assets/img/brasil1.jpg'
import PresentationContainer from './Components/Presentation/PresentationContainer.jsx'
import NewsContainer from './Components/News/NewsContainer.jsx'
import Destinations from './Components/Destinations/Destinations.jsx'
import Regions from './Components/Regions/Regions.jsx'
import AboutUsContainer from './Components/AboutUs/AboutUsContainer.jsx'
import ContactForm from './Components/ContactForm/ContactForm.jsx'
import LoginFormContainer from './Components/Login/LoginFormContainer.jsx'


const App = () => {

  return (
    <Container disableGutters maxWidth='false' sx={{
      boxSizing: 'border-box',
      backdropFilter: 'blur(10px)',
      color: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
      m: 0
    }}>
      <Container disableGutters sx={{
        boxSizing: 'border-box',
        backgroundImage: `url(${brasilImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: '110% 110%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        minHeight: '90vh',
        maxWidth: '80%',
        maxHeight: '90%',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.4)',
        m: 0
      }}>
        <NavBar />
    <Routes>

		<Route path='/' element={<PresentationContainer />} />

		<Route path='/novedades' element={<NewsContainer />} />

    <Route path='/contacto' element={<ContactForm />} />

    <Route path='/loginadmin' element={<LoginFormContainer />} />

    <Route path='/destinos' element={<Destinations />}>

      <Route path=':region' element={<Regions />} />

    </Route>
	
	<Route path='/nosotras' element={<AboutUsContainer />} />

    </Routes>
      
    </Container>
    </Container>
  )
}

export default App
