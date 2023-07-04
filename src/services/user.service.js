import axios from '@/utils/axios'

class UserService {
  resetPasswordEmail(email) {
    return axios.post('/v1/request-reset-password/', { email })
  }
}

export default new UserService()
