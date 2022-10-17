import { motion } from 'framer-motion'

import { Task } from './Task'

const isMobile = window.innerWidth <= 768

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

/**
 * Displays tasks fro assigned card
 * @param {json} tasks
 * @returns {jsx}
 */
export const Tasks = ({ tasks }) => {
	tasks.sort((a, b) => a.priority - b.priority)

	return (
		<motion.div
			initial='closed'
			animate='open'
			exit='closed'
			variants={variants}
			className='grid grid-row-flow gap-2 py-2'
		>
			{/* Displays each task that belongs in card: */}
			{tasks.map((task, index) => (
				<Task
					task={task}
					index={index}
				/>
			))}
		</motion.div>
	)
};
