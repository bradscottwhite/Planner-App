/**
 * Service functions to interact with tasks in db
 * @author Brad White
 * @date 10-1
 */

import { API } from 'aws-amplify'
import { listTasks } from './../graphql/queries'
import { createTask, updateTask, deleteTask } from './../graphql/mutations'

/**
 * Fetches data from rest api and puts it into the `tasks` state
 * @async
 * @param {function} setTasks - set `tasks` state
 * @returns {void}
 */
export const getTasks = async setTasks => {
	try {
		const taskData = await API.graphql({
			query: listTasks,
			authMode: 'AMAZON_COGNITO_USER_POOLS'
		})
		setTasks(taskData.data.listTasks.items)
	} catch (err) {
		console.log('error fetching tasks:', err)
	}
}

/**
 * Adds task to db
 * @async
 * @param {string} text - text of new task
 * @param {string} card - card of new task
 * @returns {number} - id of new task
 */
export const addTask = async task => {
	try {
		await API.graphql({
			query: createTask,
			variables: { input: task },
			authMode: 'AMAZON_COGNITO_USER_POOLS'
		})
	} catch (err) {
		console.log('error creating task:', err)
	}
}

/**
 * Updates task in db
 * @async
 * @param {json} newTask - task to replace existing task
 * @returns {void}
 */
export const editTask = async newTask => {
	try {
		await API.graphql({
			query: updateTask,
			variables: { input: newTask },
			authMode: 'AMAZON_COGNITO_USER_POOLS'
		})
	} catch (err) {
		console.log('error updating task', err)
	}
}

/**
 * Delete task in db
 * @async
 * @param {int} id - id of task to delete
 * @returns {void}
 */
export const delTask = async id => {
	try {
		await API.graphql({
			query: deleteTask,
			variables: { input: { id } },
			authMode: 'AMAZON_COGNITO_USER_POOLS'
		})
	} catch (err) {
		console.log('error updating task', err)
	}
};
