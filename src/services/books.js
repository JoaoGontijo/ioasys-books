import instance from './api'

const listBooks = (
    paginationIndex,
    authorization
) => {
    return instance.get(`books?page=${paginationIndex}&amount=12`, { headers: { Authorization: `Bearer ${authorization}`} })
}

export default listBooks