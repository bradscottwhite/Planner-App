import { useState } from 'react'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import { editTask } from './../servs/taskService'

const variants = {
	closed: { opacity: 0 },
	open: { opacity: 1 }
}

/**
 * Displays task with edit button
 * @param {json} tasks
 * @param {int} index
 * @returns {jsx}
 */
export const Task = ({ task: { id, text, card, complete, priority }, index }) => {
	const [ completeVal, setCompleteVal ] = useState(complete)

	/**
	 * Toggles a task's complete value when a checkbox is switched
	 */
	const handleToggle = () => {
		editTask({
			id, text, card,
			complete: !completeVal
		})
		setCompleteVal(!completeVal)
		console.log(`Toggling task ${id}`)
	}

	return (
		<motion.div
			variants={variants}
			exit='closed'
			className={'shadow-md rounded-md p-4 flow-root text-independence ' + (priority === 1 ? 'bg-independence text-timberwolf' : (priority === 2 ? 'bg-dark-sea-green' : 'bg-laurel-green'))}
		>
			<div className='row-span-1 flex float-left'>
				<input
					type='checkbox'
					checked={completeVal}
					onChange={handleToggle}
					className={'form-check-input appearance-none h-4 w-4 border mt-1.5 border-gray-400 rounded-sm bg-gray-200 checked:bg-independence checked:border-independence focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain cursor-pointer' + (priority === 1 ? ' checked:bg-dark-sea-green' : '')}
				/>
				<p className={(completeVal ? 'line-through ' : '') + `mx-4 text-md`}>{text}</p>
			</div>

			<Link
				className={'float-right ' + (priority === 1 ? 'hover:text-laurel-green' : 'hover:text-battleship-grey')}
				to={`/edit/${id}`}
			>
				<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
			</Link>
		</motion.div>
	)
};
