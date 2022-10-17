import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Select from 'react-select'

// Service rest api functions:
import { editTask, delTask } from './../servs/taskService'

/**
 * Displays form to edit task
 * @param {json} cards
 * @param {json} task
 * @param {json} tasks
 * @param {method} setTasks
 * @returns {jsx}
 */
export const Edit = ({ setRoute, cards, tasks, setTasks }) => {
	const { id } = useParams()
	const task = tasks.filter(task => task.id === id)[0]
	
	const priorities = [
		{ label: 'Primary', value: 1 },
		{ label: 'Secondary', value: 2 },
		{ label: 'Tertiary', value: 3 }
	]

	const [ text, setText ] = useState(task.text)
	const [ card, setCard ] = useState(task.card)
	const [ priority, setPriority ] = useState(task.priority)

	const cardNames = []
	for (var i in cards)
		cardNames[i] = { label: cards[i], value: i }

	const handleEdit = () => {
		editTask({
			id: task.id,
			text,
			card,
			complete: task.complete,
			priority
		})

		setTasks(
			tasks.map(i => i.id === task.id ?
				{
					id: task.id,
					text,
					card,
					complete: task.complete,
					priority
				} : i
			)
		)
	}

	const handleDel = () => {
		delTask(task.id)

		setTasks(
			tasks.filter(i => i.id !== task.id)
		)
	}

	return (
		<div className='grid place-items-center'>
			<div className='self-center bg-slate-300 shadow-lg rounded p-12 my-20'>
				<h2 className='text-md font-bold py-2 pl-2 '>Edit Task</h2>
				<input
					value={text}
					className='my-2 form-control block w-full px-3 py-1.5 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none'
					placeholder='Enter task...'
					onChange={e => setText(e.currentTarget.value)}
				/>
				<Select
					className='py-2'
					options={cardNames}
					defaultValue={cardNames[card]}
					onChange={e => setCard(e.value)}
				/>
				<Select
					className='py-2'
					options={priorities}
					defaultValue={priorities[priority - 1]}
					onChange={e => setPriority(e.value)}
				/>
				<div className='grid grid-cols-3 place-items-center py-6'>
					<Link
						to='/'
						onClick={handleEdit}
					>	
						<ion-icon name="create-outline"></ion-icon>
					</Link>
					<Link
						to='/'
						onClick={handleDel}
					>
						<ion-icon name="trash-outline"></ion-icon>
					</Link>
					<Link to='/'>
						<ion-icon name="close-outline"></ion-icon>
					</Link>
				</div>
			</div>
		</div>
	)
};
