import './services.scss'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Services = () => {
	const ref = useRef()
	const isInView = useInView(ref, { margin: '-100px' })

	const variants = {
		initial: {
			x: -500,
			y: 100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},
	}
	return (
		<motion.div
			className='services'
			variants={variants}
			initial='initial'
			ref={ref}
			animate={'animate'}
		>
			<motion.div className='textContainer' variants={variants}>
				<p>
					I focus on guiding you in the Frontend
					<br />
					and Backend Developement
				</p>
				<hr />
			</motion.div>
			<motion.div className='titleContainer' variants={variants}>
				<div className='title'>
					<img src='/people.webp' alt='' />
					<h1>
						<motion.b whileHover={{ color: 'Orange' }}>Unique </motion.b>Ideas
					</h1>
				</div>
				<div className='title'>
					<h1>
						<motion.b whileHover={{ color: 'Orange' }}>For Your </motion.b>
						Query.
					</h1>
					<button>What We Do?</button>
				</div>
			</motion.div>
			<motion.div className='listContainer' variants={variants}>
				<motion.div
					className='box'
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>UI / UX</h2>
					<p>Dealing with the User Interface design and development skills</p>
					<button>Learn</button>
				</motion.div>
				<motion.div
					className='box'
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Frontend</h2>
					<p>Dealing with the frontend development stack</p>
					<button>Learn</button>
				</motion.div>
				<motion.div
					className='box'
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>Backend</h2>
					<p>Dealing with the backend development stac</p>
					<button>Learn</button>
				</motion.div>
				<motion.div
					className='box'
					whileHover={{ background: 'lightgray', color: 'black' }}
				>
					<h2>SEO</h2>
					<p>Search Engine Optimization</p>
					<button>Learn</button>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default Services
