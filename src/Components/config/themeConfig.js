import { createTheme } from '@mui/material'
import '@fontsource/dm-serif-text'
import '@fontsource/poppins'
import '@fontsource/lato'


const theme = createTheme({
    palette: {
        background: {
          default: '#fffff', // Color de fondo predeterminado
        }
    },
    typography: {
      fontFamily: [
        'Poppins',
        '"DM Serif Text"',
        'sans-serif',
        'Lato'
      ].join(','),
    }
})

export default theme