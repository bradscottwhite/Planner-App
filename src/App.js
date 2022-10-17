import { useState, useEffect } from 'react'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
//import '@aws-amplify/ui-react/styles.css'

// Service rest api functions:
import { getTasks } from './servs/taskService'
import { getCards } from './servs/cardService'

import { Home } from './pages/Home'
import { AddTask } from './pages/AddTask'
import { Edit } from './pages/Edit'

import { Header } from './comps/Header'

Amplify.configure(awsExports)

/**
 * Displays app with routes: home, addTask or edit
 * @returns {jsx}
 */
const App = () => {
	const [ tasks, setTasks ] = useState([])
	const [ cards, setCards ] = useState([])

	// This will run when component mounts (page loads) and populate us with initial tasks and cards:
	useEffect(() => {
		getTasks(setTasks)
		getCards(setCards)
	}, [])

	/* Colors: timberwolf, laural-green, dark-sea-green, battleship-grey, independence */
	return (
		<AnimatePresence>
			<Authenticator>
				{({ signOut, user }) => (
					<Router>
						<div className='font-sans h-screen w-screen'>
							<Header signOut={signOut}/>
							<div className='pt-20'>
								<Routes>
									<Route
										path='/'
										exact
										element={<Home
											tasks={tasks}
											cards={cards}
										/>}
									/>
									<Route
										path='/addTask/:key'
										element={<AddTask
											tasks={tasks}
											cards={cards}
											setTasks={setTasks}
										/>}
									/>
									<Route
										path='/edit/:id'
										element={<Edit
											cards={cards}
											tasks={tasks}
											setTasks={setTasks}
										/>}
									/>
								</Routes>
							</div>
						</div>
					</Router>
				)}
			</Authenticator>
		</AnimatePresence>
	)
}

export default App;
