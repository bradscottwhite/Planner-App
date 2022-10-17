import { Link } from 'react-router-dom'

/**
 * Displays header and add button
 * @returns {jsx}
 */
export const Header = ({ signOut }) => (
	<div className='fixed bg-slate-500/20 backdrop-blur-2xl p-4 w-screen shadow-xl z-10'>
		<h1 className='text-lg sm:text-3xl font-extrabold drop-shadow-lg text-center text-laurel-green'>Productivity Planner App</h1>
		<Link
			to='/'
			onClick={signOut}
			className='header-logout-btn inset-y-0 top-5 sm:top-4 absolute left-0 sm:left-12 px-4 sm:px-0'
		>
			<ion-icon name="log-out-outline"></ion-icon>
		</Link>
		<Link
			to='/addTask/0'
			className='inset-y-0 right-0 sm:right-12 px-4 sm:px-0 absolute top-5 sm:top-4 header-add-btn'
		>
			<ion-icon name="add-outline"></ion-icon>
		</Link>
	</div>
);
