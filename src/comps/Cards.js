import { motion } from 'framer-motion'

import { Card } from './Card'

const isMobile = window.innerWidth <= 768

/**
 * Sorts tasks to send and display in cards
 * @param {json} tasks
 * @param {json} cards
 * @returns {jsx}
 */
export const Cards = ({ tasks, cards }) => {
	const cardTasksList = []
	for (var i in cards) cardTasksList[i] = []

	// Sorts and populates card tasks array with tasks for each card:
	tasks.map(task => cardTasksList[task.card].push(task))

	const variants = {
		closed: {
			opacity: 0,
			[isMobile ? 'x' : 'y']: '-50vh',
			transition: {
				duration: 0.5,
				staggerChildren: 0.2,
				staggerDirection: -1
			}
		}, open: {
			opacity: 1,
			[isMobile ? 'x' : 'y']: 0,
			transition: {
				duration: 0.5,
				delayChildren: 0.2,
				staggerChildren: 0.2,
				staggerDirection: 1
			}
		}
	}

	/* Remove grid and make go off page: */
	return (
		<motion.div
			initial='closed'
			animate='open'
			exit='closed'
			variants={variants}
			className='grid grid-rows-* justify-center sm:justify-between sm:grid-rows-none sm:flex gap-8 sm:gap-0 pt-2 sm:pt-10 px-4'
		>
			{/* Loops thru card matrix array and displays individual cards: */}
			{cardTasksList.map((cardTasks, i) => (
				<Card
					tasks={cardTasks}
					cardName={cards[i]}
					cardKey={i}
				/>
			))}
			<div className='w-4 flex-none'></div>
		</motion.div>
	)
};
