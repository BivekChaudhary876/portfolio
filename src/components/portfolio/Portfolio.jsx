import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
	{
		id: 1,
		title: 'React App',
		img: 'https://images.pexels.com/photos/4112283/pexels-photo-4112283.jpeg?auto=compress&cs=tinysrgb&w=600',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione pariatur consequatur eius dolorem iure, vero delectus quis, quos obcaecati autem omnis. At, voluptatibus? Soluta maxime consequuntur ab tempore in?',
	},
	{
		id: 2,
		title: 'React Ecommerce Website',
		img: 'https://images.pexels.com/photos/6128818/pexels-photo-6128818.jpeg?auto=compress&cs=tinysrgb&w=600',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione pariatur consequatur eius dolorem iure, vero delectus quis, quos obcaecati autem omnis. At, voluptatibus? Soluta maxime consequuntur ab tempore in?',
	},
	{
		id: 3,
		title: 'React Personal Blog',
		img: 'https://images.pexels.com/photos/4112283/pexels-photo-4112283.jpeg?auto=compress&cs=tinysrgb&w=600',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione pariatur consequatur eius dolorem iure, vero delectus quis, quos obcaecati autem omnis. At, voluptatibus? Soluta maxime consequuntur ab tempore in?',
	},
	{
		id: 4,
		title: 'React Password Generator',
		img: 'https://images.pexels.com/photos/4112283/pexels-photo-4112283.jpeg?auto=compress&cs=tinysrgb&w=600',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione pariatur consequatur eius dolorem iure, vero delectus quis, quos obcaecati autem omnis. At, voluptatibus? Soluta maxime consequuntur ab tempore in?',
	},
	{
		id: 5,
		title: 'PHP Ecommerce Website',
		img: 'https://images.pexels.com/photos/4112283/pexels-photo-4112283.jpeg?auto=compress&cs=tinysrgb&w=600',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione pariatur consequatur eius dolorem iure, vero delectus quis, quos obcaecati autem omnis. At, voluptatibus? Soluta maxime consequuntur ab tempore in?',
	},
]

const Single = ({ item }) => {
	const ref = useRef()
	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ['end end', 'start start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], [-700, 300])
	return (
		<section>
			<div className='container'>
				<div className='wrapper'>
					<div className='imageContainer' ref={ref}>
						<img src={item.img} alt='' />
					</div>
					<motion.div className='textContainer' style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
						<button>See Demo</button>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

const Portfolio = () => {
	const ref = useRef()

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	})
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	})

	return (
		<div className='portfolio' ref={ref}>
			<div className='progress'>
				<h1>Featured Works</h1>
				<motion.div style={{ scaleX }} className='progressBar'></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	)
}

export default Portfolio
