import CryptoJS from 'crypto-js'
import moment from 'moment'
import { marvelApi as config } from '../config/config'

export const RECEIVE_SUPERHEROES = 'RECEIVE_SUPERHEROES';
export const SET_SELECT_SUPERHERO = 'SET_SELECT_SUPERHERO';
export const RESET_STORE = 'RESET_STORE';

function getCharacters(origOptions = {}) {
    const defaultOptions = { page: 0, count: 100}
    const options = Object.assign(defaultOptions, origOptions)

    const URI = '/v1/public/characters?'
    const timeStamp = moment().unix()
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
      .toString(CryptoJS.enc.Hex)

    const currentOffset = options.page === 1 ? 0 : (options.count * (options.page - 1))

    let params = `apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}&limit=${options.count}&offset=${currentOffset}`

	//params Test API
	params = `apikey=${config.publicKeyTest}&ts=${config.timeStampTest}&hash=${config.hashTest}&limit=${options.count}&offset=${currentOffset}`
	
	const url = `${config.baseUrl}${URI}${params}`

    return fetch(url).then(response => response.json());
  }

function receiveSuperHeroes(json) {
	var superheroes = json.data.results;
	return {
		type:RECEIVE_SUPERHEROES,
		superheroes
	};
}

export function fetchSuperHeroesAPI(page, count) {
	return function(dispatch) {
		return getCharacters({
			page : page,
			count : count
		})
		.then(json => dispatch(receiveSuperHeroes(json)));
	};
}

export function setSelectSuperHero(superhero){
	const action = {
		type: SET_SELECT_SUPERHERO,
		superhero
	};
	return action;
}

export const resetStore = () => ({
    type: RESET_STORE
});