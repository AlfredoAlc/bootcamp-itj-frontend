import React, { useState } from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	Typography,
} from "@mui/material";


export const BlogCard = ({ post }) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<Card>
			<Box sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}>
				<CardMedia
					height={ 150 }
					component='img'
					image={ post.imageUrl }
				/>
				<CardContent>
				<CardHeader subheader={ post.updatedAt } />
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
						children={ post.summary }
					/>
					<Button
						onClick={ () => setExpanded(prev => !prev) }
						children='Read more'
					/>
				</CardContent>

			</Box>
			<Collapse in={ expanded }>
				<CardContent>
					<Typography
						children={ post.body }/>
				</CardContent>
			</Collapse>
		</Card>
	)
}