import {
	AppBar,
	Button,
	Toolbar,
	Typography
} from '@mui/material'

export const Header = () => {

	return (
		<AppBar
			color='inherit'
			position='sticky'
			sx={{ height: '70px', backgroundColor: '#ffffff' }}>
			<Toolbar
				sx={{
					width: "100%",
					maxWidth: 1000,
					justifyContent: 'space-between'
				}}>
					<Typography
						color='primary'>
						iTjuana
					</Typography>
					<Button
						variant='outline'
						onClick={ () => console.log('click') }>
						Blog
					</Button>
			</Toolbar>
		</AppBar>
	)
}
