import './app.scss'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Parallex from './components/parallex/Parallex'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import { Cursor } from './components/cursor/Cursor'

const App = () => {
	return (
		<>
			<Cursor />
			<section id='Homepage'>
				<Navbar />
				<Intro />
			</section>
			<section id='Services'>
				<Parallex type='services' />
			</section>
			<section>
				<Services />
			</section>
			<section id='Portfolio'>
				<Parallex type='portfolio' />
			</section>
			<Portfolio />
			<section id='Contact'>
				<Contact />
			</section>
		</>
	)
}

export default App
