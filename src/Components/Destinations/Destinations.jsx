import { Box } from '@mui/material'
import RegionNav from '../RegionNav/RegionNav.jsx'
import RegionsContainer from '../Regions/RegionsContainer.jsx'

const Destinations = () => {
    
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
            paddingRight: '2rem',
            paddingLeft: '2rem'
        }} >
            <RegionNav />
            <RegionsContainer />
        </Box>
    )
}

export default Destinations
