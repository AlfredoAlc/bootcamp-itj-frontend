import './App.css';
import { Banner } from './Components/Banner';
import { Header } from './Components/Header';
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from './utils/themeUtil';
import { BlogList } from './Components/BlogList';
import { Divider } from '@mui/material';
import { usePosts } from './hooks/usePosts';

const post = [
	{
		title: 'The Internet of Medical Things: The Healthcare Revolution',
		body: 'Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers.',
		imageUrl: 'https://itjuana.com/wp-content/uploads/2021/05/IoMT-The-Health-Revolution-image.png',
		updatedAt: 'may 13',
	},
	{
		title: 'The Internet of Medical Things: The Healthcare Revolution',
		body: 'Engineering is a remarkable and extraordinary profession that encompasses a wide range of disciplines, from the oldest, military and civil engineering feats, to mechanical, electrical, electronic, and chemical engineering, as well as more recently emerging fields like environmental engineering mechatronics (combining mechanical and electronics), biomedical, biochemical, and others yet to be named. At ITJ, we are proud to equip the bright engineers in our company with the right tools to successfully develop plans that will enable our customers to build centers of excellence in the Cali Baja region. From developing boot camps with the mission of offering mentorship and career development to young men and women to hosting Hackathons and Tech Talks. So many young IT professionals and students from different states of Mexico and Latin America have been attending these immersive events and benefited themselves.',
		summary: 'Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers.',
		imageUrl: 'https://itjuana.com/wp-content/uploads/2022/02/Steps-toward-hyper-automation.jpg',
		updatedAt: 'may 13',
	},
]

const theme = createTheme()

function App() {

	const posts = usePosts()

	return (
		<ThemeProvider theme={ theme }>
			<Header />
			<Banner post={ post[0] }/>
			<Divider sx={{ marginTop: 8, marginBottom: 4 }} variant='middle' />
			<BlogList posts={ posts } />
		</ThemeProvider>
	);
}

export default App;
