import React from 'react'
import { ButtonGroup, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'


let regions = ['argentina', 'america', 'europa', 'otros']

const RegionNav = () => {
	return (
		<ButtonGroup variant='text' aria-label='text button group'
			sx={{
				alignSelf: 'center',
				'& .MuiButton-root': {
					backgroundColor: 'none',
					borderColor: 'black',
					borderWidth: '1px',
					marginBottom: '1rem',
					opacity: '0.7',
					':hover': {
						opacity: '1',
						color: 'rgb(0, 66, 186)'
					}
				},
			}}>
			{
				regions.map((region) => (
					<Button component={NavLink} to={`/destinos/${region}`} key={region}
						sx={{
							fontFamily: 'Lato',
							fontWeight: 700,
							fontSize: '1.125rem',
							color: 'black',
							textTransform: 'capitalize',
							textDecoration: 'none',
							letterSpacing: '0.04rem',
						}} className='no-shadow'>
						{region}
					</Button>
				))
			}
		</ButtonGroup>
	);
}

export default RegionNav;
