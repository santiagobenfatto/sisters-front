import React from 'react'
import { Typography, Divider} from '@mui/material'



const RegionsIntro = () => {
   
    return (
        <>
        <Typography variant="h3" sx={{
               color: 'black',
               fontSize: '2.4rem',
               fontFamily: 'DM Serif Text',
               letterSpacing: '2px',
               textTransform: 'capitalize',
               marginBottom: '0.3rem'
           }}>
               Bienvenido! &#128075;
           </Typography>
           <Divider sx={{
               width: '80%',
               marginBottom: '1rem',
               borderColor: 'rgba(0, 0, 0, 0.37)'
           }}/>                  
            <Typography variant="body1" sx={{
                color: 'black',
                overflowY: 'auto',
                paddingRight: '6.5rem',
                fontFamily: 'Poppins',
                fontSize: '0.9rem'
            }}>
                Te invitamos a explorar los rincones más fascinantes y exquisitos de la tierra en nuestra emocionante travesía por el mundo,. Desde paisajes majestuosos hasta culturas vibrantes, sumérgete en la diversidad que nuestros destinos tienen para ofrecer. Cada lugar es una puerta abierta a nuevas experiencias y aventuras inolvidables.
                <br /><br />
                Imagina pasear por las pintorescas calles de ciudades encantadoras, sumergirte en la rica historia de antiguos monumentos y disfrutar de la exquisita gastronomía local que deleitará tu paladar. Con destinos que van desde playas paradisíacas hasta montañas imponentes, estamos seguros de que encontrarás el destino perfecto para satisfacer tu espíritu viajero.
                <br /><br />
                Nuestro equipo se ha esforzado por reunir una cuidada selección de destinos, cada uno único en su esencia y listo para ser descubierto. Este es tu portal para soñar, planificar y emprender el viaje de tus sueños. ¿Estás listo para comenzar tu próxima aventura?
                <br /><br />
                &#128153; ¡Explora, descubre y déjate cautivar por la maravilla de nuestros destinos cuidadosamente seleccionados! &#128153;
            </Typography>
        </>
    );
}

export default RegionsIntro
