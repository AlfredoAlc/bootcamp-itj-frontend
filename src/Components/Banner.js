import { Box, Button, Typography } from '@mui/material'


export const Banner = ({ post }) => {

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}>
			<Box sx={{ flex: 1 }}>
				<img
					style={{ height: '100%', width: '100%' }}
					alt={ post.title }
					src={ post.imageUrl } />
			</Box>
			<Box sx={{ flex: 1, padding: '16px' }}>
				<Typography
					variant='caption'
					align='left'
					paragraph
					children={ post.updatedAt }
				/>
				<Typography
					variant='h6'
					align='left'
					paragraph
					color='primary'
					children={ post.title }
				/>
				<Typography
					paragraph
					align='justify'
					children={ post.body }
				/>
				<Button
					sx={{ alignSelf: 'self-end'}}
					color='secondary'
					variant='contained'>
					READ MORE
				</Button>
			</Box>
			<Box sx={{ flex: .5 }}/>
		</Box>
	)
}