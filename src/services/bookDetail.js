import instance from './api'

const getBookDetail = (
    bookId,
    authorization
) => {
    return instance.get(`books/${bookId}`, { headers: { Authorization: `Bearer ${authorization}`} })
}

export default getBookDetail