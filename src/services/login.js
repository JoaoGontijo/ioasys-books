import instance from './api'

const loginUser = (
    postData
) => {
    return instance.post('auth/sign-in', postData)
}

export default loginUser