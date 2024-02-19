import { AppBar, Typography, Toolbar, Box, Link} from '@mui/material'
import { NavLink, Link as RouterLink } from 'react-router-dom'
import logoSisters from '../../assets/img/logo1.gif'
import SocialMedia from '../SocialMedia/SocialMedia'




let pages = ['destinos', 'novedades' , 'contacto', 'nosotras']


const NavBar = () => {



    return (
        <AppBar position='sticky' sx={{ boxSizing: 'border-box', backgroundColor: 'transparent', width:'100%', height:'80px', alignSelf:'flex-start', boxShadow:'none'}}>
            <Toolbar disableGutters sx={{boxSizing:'border-box', width: '100%',height:'100%', paddingLeft: '24px', paddingRight: '24px'}}>
                <Link to='/' component={RouterLink} sx={{
                    ':hover': {
                        cursor: 'pointer'
                    },
                    zIndex:1
                }}>
                    <img src={`${logoSisters}`} className='imgLogo'/>
                </Link>
                <Box sx={{
                    position:'absolute',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width: '100%'
                }} > 
                {
                pages.map((page) => (
                    <Typography component={NavLink} to={`/${page}/`} key={page}
                    sx={{
                        mx: 3,
                        fontFamily: 'Lato',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        color: 'black',
                        textTransform: 'capitalize',
                        textDecoration: 'none',
                        letterSpacing: '0.04rem',
                        opacity: '0.7',
                        ':hover': {
                            opacity: '1',
                            color: 'rgb(0, 66, 186)',
                            boxShadow: '0 1px 0 #0042BA'
                        }
                    }}>
                        {page}
                    </Typography>
                ))
                }
                </Box>
                <SocialMedia />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar

