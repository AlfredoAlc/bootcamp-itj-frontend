import { createTheme as createMuiTheme } from "@mui/material";

const azure = 'rgb(0, 123, 195)'
const tangerine = 'rgb(242, 102, 73)'

export const createTheme = () => createMuiTheme({
	palette:{
		primary: {
			main: azure,
		},
		secondary: {
			main: tangerine,
		}
	}
})