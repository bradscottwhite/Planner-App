/**
 * Service functions to interact with cards in db
 * @author Brad White
 * @date 10-1
 */

import { API } from 'aws-amplify'
import { listCards } from '../graphql/queries'

/**
 * Fetches data from aws api and puts it into the `cards` state
 * @async
 * @param {function} setCards - set `cards` state
 * @returns {void}
 */
export const getCards = async setCards => {
	try {
		const cardData = await API.graphql({
			query: listCards
		})
		const cards = cardData.data.listCards.items.sort((a, b) => a.order - b.order)
		setCards(cards.map(card => card.name))
	} catch (err) {
		console.log('error fetching cards:', err)
	}
};
