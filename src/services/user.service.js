// eslint-disable-next-line import/no-cycle
import axios from '@/utils/axios'

class UserService {
  getUsers(params) {
    return axios.get(`v1/internal-accounts/?page=${params.page}&limit${params.limit}`)
  }

  deleteUser(id) {
    return axios.delete(`/v1/accounts/${id}`)
  }

  postUser(payload) {
    if (payload.id) {
      return axios.patch(`/v1/internal-accounts/${payload.id}`, payload)
    }
    
    return axios.post('/v1/internal-accounts', payload)
  }

  resetPasswordEmail(email) {
    return axios.post('/v1/request-reset-password/', { email })
  }

  setStatus(data) {
    return axios.post(`v1/internal-accounts-action/${data.uuid}`, { status: data.status })
  }
}

export default new UserService()
