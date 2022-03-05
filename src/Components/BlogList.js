import { List, ListItem } from "@mui/material";
import { BlogCard } from "./BlogCard";

export const BlogList = ({ posts }) => {

	return (
		<List sx={{ padding: '16px' }}>
			{
				posts?.map((p, id) => (
					<ListItem key={ id }>
						<BlogCard post={ p }/>
					</ListItem>
				))
			}
		</List>
	)
}