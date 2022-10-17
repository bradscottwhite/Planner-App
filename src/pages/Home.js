import { Cards } from '../comps/Cards'

/**
 * Displays home route
 * @returns {jsx}
 */
export const Home = ({ tasks, cards }) => (
	<Cards
		tasks={tasks}
		cards={cards}
	/>
);
