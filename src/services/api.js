import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://books.ioasys.com.br/api/v1'
})

instance.defaults.headers.contentType = 'application/json'

export default instance