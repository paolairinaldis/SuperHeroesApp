import CryptoJS from 'crypto-js'
import moment from 'moment'
import { marvelApi as config } from '../config/config'


class MarvelAPI {

  static getCharacters(origOptions = {}) {
    const defaultOptions = { page: 0, count: 20}
    const options = Object.assign(defaultOptions, origOptions)

    const URI = '/v1/public/characters'
    const timeStamp = moment().unix()
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
      .toString(CryptoJS.enc.Hex)

    const currentOffset = options.page === 1 ? 0 : (options.count * (options.page - 1))

    let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}&limit=${options.count}&offset=${currentOffset}`

    const url = `${config.baseUrl}${URI}${params}`

    return fetch(url)
  }

}

export default MarvelAPI